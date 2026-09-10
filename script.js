// Record baru dikenali dari baris yang kolom ke-2 (setelah nomor urut) mengandung
// username (selalu ada tanda "@"), misalnya "1\tBBC@ima888\tBCA". Baris lain yang
// juga punya tab tapi "@"-nya ada di kolom lain (mis. baris admin di akhir record)
// tidak dianggap awal record baru.
// Pakai lookbehind/lookahead (bukan \b) supaya nominal yang nempel langsung ke
// prefix mata uang tanpa spasi (mis. "Rp1.000.000") tetap terbaca penuh — \b gagal
// di sini karena huruf dan digit sama-sama dianggap "word character".
// Pemisah ribuan kadang titik ("1.000.000"), kadang koma di grup pertama
// ("1,000.000") — jadi keduanya diterima dan sama-sama dibuang saat parseInt.
const AMOUNT_RE = /(?<![\d.,])\d{1,3}(?:[.,]\d{3})+(?!\d)/;
// Mendukung "DD/MM/YYYY hh:mm:ss AM/PM" maupun "DD/MM/YYYY HH:mm" (24 jam, tanpa detik).
const DATETIME_RE = /(\d{2})\/(\d{2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i;
const STATUS_RE = /\b(Confirmed|Pending|Failed|Rejected|Success|Cancelled)\b/i;
// Baris keterangan di history bisa "... BONUS DEPOSIT ..." atau "... AGENT DEPOSIT ...".
// Hanya yang berkeretangan BONUS DEPOSIT yang dihitung sebagai bonus.
const DEPOSIT_TYPE_RE = /\b(BONUS|AGENT)\s+DEPOSIT\b/i;

function splitIntoRecordBlocks(raw) {
  const lines = raw.split(/\r?\n/);
  const startIdxs = [];
  lines.forEach((line, i) => {
    const cols = line.split('\t').map(c => c.trim());
    if (cols.length >= 2 && cols[1].includes('@')) {
      startIdxs.push(i);
    }
  });
  return startIdxs.map((start, idx) => {
    const end = idx + 1 < startIdxs.length ? startIdxs[idx + 1] : lines.length;
    return lines.slice(start, end);
  });
}

function parseDateTime(match) {
  if (!match) return { timestamp: 0, text: '' };
  let [full, dd, mm, yyyy, hh, min, ss, ampm] = match;
  hh = parseInt(hh, 10);
  ss = ss ? parseInt(ss, 10) : 0;
  if (ampm) {
    if (/pm/i.test(ampm) && hh !== 12) hh += 12;
    if (/am/i.test(ampm) && hh === 12) hh = 0;
  }
  const timestamp = new Date(
    parseInt(yyyy, 10), parseInt(mm, 10) - 1, parseInt(dd, 10), hh, parseInt(min, 10), ss
  ).getTime();
  return { timestamp, text: full.trim() };
}

// Field admin/operator biasanya ada di baris terakhir record, mis. "...\tbbc@rehansya".
function extractAdmin(blockLines, username) {
  for (let i = blockLines.length - 1; i >= 1; i--) {
    const cols = blockLines[i].split('\t').map(c => c.trim());
    const found = cols.find(c => c.includes('@') && c !== username);
    if (found) return found;
  }
  return '';
}

function parseRecords(raw) {
  return splitIntoRecordBlocks(raw)
    .map(blockLines => {
      const block = blockLines.join('\n');
      const cols = blockLines[0].split('\t').map(c => c.trim());
      const rawUsername = cols.find(c => c.includes('@')) || '';
      // Kode di depan "@" (mis. "BBC", "BFY") bisa berubah-ubah, jadi id yang
      // ditampilkan murni bagian setelah "@" (berlaku juga untuk field admin).
      // Kodenya sendiri tetap disimpan (field "code") karena dipakai untuk aturan cap bonus.
      const stripCode = v => (v.includes('@') ? v.slice(v.indexOf('@') + 1) : v);
      const code = rawUsername.includes('@') ? rawUsername.slice(0, rawUsername.indexOf('@')) : '';
      const username = stripCode(rawUsername);
      const admin = stripCode(extractAdmin(blockLines, rawUsername));

      const amountMatch = block.match(AMOUNT_RE);
      const amount = amountMatch ? parseInt(amountMatch[0].replace(/[.,]/g, ''), 10) : 0;

      const { timestamp, text: dateText } = parseDateTime(block.match(DATETIME_RE));

      const statusMatch = block.match(STATUS_RE);
      const status = statusMatch ? statusMatch[1] : '';

      const depositTypeMatch = block.match(DEPOSIT_TYPE_RE);
      const depositType = depositTypeMatch ? depositTypeMatch[1].toLowerCase() : '';

      return { username, amount, timestamp, dateText, status, admin, depositType, code };
    })
    .filter(r => r.username);
}

function isBonusDeposit(record) {
  return record.depositType === 'bonus';
}

// Batas maksimal bonus: 5% selalu dibatasi 100rb. Untuk 10%, hanya kode "BGG"
// yang dibatasi 200rb — kode lainnya tetap dibatasi 100rb walau pilihan persennya 10%.
function getBonusCap(pct, code) {
  if (pct === 10 && (code || '').toUpperCase() === 'BGG') return 200000;
  return 100000;
}

function computeExpectedBonus(amount, pct, code) {
  const rawBonus = Math.round(amount * pct / 100);
  return Math.min(rawBonus, getBonusCap(pct, code));
}

// Bonus yang diberikan boleh dibulatkan ke bawah sampai ribuan terdekat dari nominal
// seharusnya (mis. seharusnya 12.500, diberikan 12.000 masih aman). Di luar rentang
// [pembulatan ke bawah, seharusnya] dianggap tidak sesuai: lebih besar = "excess"
// (kelebihan pemberian bonus), lebih kecil dari batas pembulatan = "shortage".
function evaluateBonusAmount(expected, given) {
  const roundedFloor = Math.floor(expected / 1000) * 1000;
  if (given > expected) return { status: 'excess', diff: given - expected };
  if (given < roundedFloor) return { status: 'shortage', diff: expected - given };
  return { status: 'ok', diff: 0 };
}

// Bonus di History tidak menyebutkan deposit mana yang jadi dasarnya, jadi dicari
// deposit confirmed milik username yang sama dengan waktu paling dekat sebelum
// (atau bertepatan dengan) waktu bonus diberikan. Kalau tidak ada deposit sebelum
// waktu bonus (data janggal/tidak lengkap), fallback ke deposit dengan selisih
// waktu paling kecil.
function findMatchingDeposit(deposits, username, bonusTimestamp) {
  const userDeposits = deposits.filter(d => d.username.toLowerCase() === username.toLowerCase());
  if (userDeposits.length === 0) return null;

  const before = userDeposits.filter(d => d.timestamp <= bonusTimestamp);
  if (before.length > 0) {
    return before.reduce((latest, d) => (d.timestamp > latest.timestamp ? d : latest));
  }
  return userDeposits.reduce((closest, d) =>
    Math.abs(d.timestamp - bonusTimestamp) < Math.abs(closest.timestamp - bonusTimestamp) ? d : closest
  );
}

function findDuplicateGroups(records) {
  const groups = new Map();
  records.forEach(r => {
    if (!groups.has(r.username)) groups.set(r.username, []);
    groups.get(r.username).push(r);
  });
  return Array.from(groups.values())
    .filter(list => list.length >= 2)
    .sort((a, b) => b.length - a.length);
}

function dedupeLatest(records) {
  const byUsername = new Map();
  records.forEach(r => {
    const existing = byUsername.get(r.username);
    if (!existing || r.timestamp >= existing.timestamp) {
      byUsername.set(r.username, r);
    }
  });
  return byUsername;
}

function formatRupiah(num) {
  return num.toLocaleString('id-ID');
}

// Format "M/D/YYYY HH:mm:ss" (bulan/tanggal tanpa nol di depan, jam 24 jam).
function formatCopyDate(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// Daftar id member baru boleh dipaste polos (satu id per baris) atau dalam format
// "nomor\ttanggal registrasi\tid\tRp0\tRp0" (sama seperti bentuk output tool ini).
// Tanggal registrasi (kalau ada) dipakai sebagai pengganti "0" waktu id ternyata
// belum pernah deposit sama sekali.
const REG_DATETIME_RE = /\d{1,2}\/\d{1,2}\/\d{4}\s+\d{1,2}:\d{2}:\d{2}/;

function parseIdList(raw) {
  const seen = new Set();
  const result = [];
  raw
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .forEach(line => {
      const cols = line.split('\t').map(c => c.trim());
      const idCol = cols.find(c => c.includes('@')) || cols[0];
      const id = idCol.includes('@') ? idCol.slice(idCol.indexOf('@') + 1) : idCol;
      const key = id.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      const dateMatch = line.match(REG_DATETIME_RE);
      result.push({ id, raw: idCol, regDate: dateMatch ? dateMatch[0] : '' });
    });
  return result;
}

// Tampilan pakai pemisah ribuan, tapi pemisahnya diberi user-select:none
// sehingga saat teks di-select dan di-copy, hasilnya angka polos tanpa titik.
function formatCopyableAmount(num) {
  const digits = String(num);
  const groups = [];
  let rest = digits;
  while (rest.length > 3) {
    groups.unshift(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  groups.unshift(rest);
  return groups
    .map((g, i) => (i === 0 ? g : '<span class="sep">.</span>' + g))
    .join('');
}

// --- Daftar ID Bermasalah (persisten via localStorage) ---
const FLAG_STORAGE_KEY = 'workingTools.flaggedIds';
const FLAG_CATEGORY_LABELS = { safety: 'Safety', 'no-bonus': 'Tidak Dapat Bonus', other: 'Lainnya' };

function loadFlags() {
  try {
    const raw = localStorage.getItem(FLAG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFlags(flags) {
  localStorage.setItem(FLAG_STORAGE_KEY, JSON.stringify(flags));
}

function stripIdCode(v) {
  return v.includes('@') ? v.slice(v.indexOf('@') + 1) : v;
}

function findFlag(flags, username) {
  const key = (username || '').toLowerCase();
  return flags.find(f => f.id.toLowerCase() === key);
}

function renderFlagTable() {
  const flags = loadFlags();
  const table = document.getElementById('flagTable');
  const emptyState = document.getElementById('flagEmptyState');
  const body = document.getElementById('flagTableBody');
  body.innerHTML = '';

  if (flags.length === 0) {
    table.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  table.style.display = 'table';
  emptyState.style.display = 'none';

  flags
    .slice()
    .sort((a, b) => b.addedAt - a.addedAt)
    .forEach(flag => {
      const tr = document.createElement('tr');
      const badgeClass = 'badge-' + flag.category;
      tr.innerHTML = `
        <td>${flag.id}</td>
        <td><span class="badge ${badgeClass}">${FLAG_CATEGORY_LABELS[flag.category] || flag.category}</span></td>
        <td>${flag.note || '-'}</td>
        <td>${new Date(flag.addedAt).toLocaleString('id-ID')}</td>
        <td><button class="flag-delete" data-id="${flag.id}">Hapus</button></td>
      `;
      body.appendChild(tr);
    });

  body.querySelectorAll('.flag-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (!confirm(`Yakin ingin menghapus id "${id}" dari daftar id bermasalah?`)) return;
      if (!confirm(`Konfirmasi sekali lagi: hapus "${id}" secara permanen dari daftar?`)) return;
      const remaining = loadFlags().filter(f => f.id !== id);
      saveFlags(remaining);
      renderFlagTable();
    });
  });
}

// --- Navigasi sidebar: satu halaman ("page") aktif ditampilkan, sisanya disembunyikan ---
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.page;
    navItems.forEach(b => b.classList.toggle('active', b === btn));
    pages.forEach(p => {
      p.style.display = p.dataset.page === target ? 'block' : 'none';
    });
  });
});

document.getElementById('toggleFlagListBtn').addEventListener('click', () => {
  const container = document.getElementById('flagListContainer');
  const btn = document.getElementById('toggleFlagListBtn');
  const isHidden = container.style.display === 'none';
  container.style.display = isHidden ? 'block' : 'none';
  btn.textContent = isHidden ? 'Sembunyikan Daftar ID Bermasalah' : 'Lihat Daftar ID Bermasalah';
});

document.getElementById('addFlagBtn').addEventListener('click', () => {
  const idInput = document.getElementById('flagIdInput');
  const categorySelect = document.getElementById('flagCategorySelect');
  const noteInput = document.getElementById('flagNoteInput');
  const warnBox = document.getElementById('flagWarnBox');
  warnBox.innerHTML = '';

  const rawId = idInput.value.trim();
  if (!rawId) {
    warnBox.innerHTML = '<div class="warn-box">Isi id/username dulu.</div>';
    return;
  }

  const id = stripIdCode(rawId);
  const category = categorySelect.value;
  const note = noteInput.value.trim();

  const flags = loadFlags().filter(f => f.id.toLowerCase() !== id.toLowerCase());
  flags.push({ id, category, note, addedAt: Date.now() });
  saveFlags(flags);
  renderFlagTable();

  idInput.value = '';
  noteInput.value = '';
});

renderFlagTable();

// --- Backup & restore daftar ID Bermasalah ---
// Data ini cuma ada di localStorage browser, jadi bisa hilang kalau ganti
// perangkat/browser atau cache dibersihkan. Export/import lewat file JSON
// supaya daftarnya bisa dipulihkan kapan saja, tidak bergantung ke satu browser saja.
function exportFlags() {
  const flags = loadFlags();
  const blob = new Blob([JSON.stringify(flags, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `id-bermasalah-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const FLAG_CATEGORY_KEYS = Object.keys(FLAG_CATEGORY_LABELS);

// Import digabung (upsert per id), bukan menimpa seluruh daftar — supaya import
// backup lama tidak menghapus id yang sudah ditambahkan lagi setelah backup itu dibuat.
function importFlagsFromJson(text, warnBox) {
  let incoming;
  try {
    incoming = JSON.parse(text);
  } catch {
    warnBox.innerHTML = '<div class="warn-box">File backup tidak valid (bukan JSON).</div>';
    return;
  }
  if (!Array.isArray(incoming)) {
    warnBox.innerHTML = '<div class="warn-box">File backup tidak valid (isinya harus berupa daftar).</div>';
    return;
  }

  const byId = new Map(loadFlags().map(f => [f.id.toLowerCase(), f]));
  let added = 0;
  let updated = 0;

  incoming.forEach(item => {
    if (!item || typeof item.id !== 'string' || !item.id.trim()) return;
    const key = item.id.toLowerCase();
    const entry = {
      id: item.id.trim(),
      category: FLAG_CATEGORY_KEYS.includes(item.category) ? item.category : 'other',
      note: typeof item.note === 'string' ? item.note : '',
      addedAt: typeof item.addedAt === 'number' ? item.addedAt : Date.now(),
    };
    if (byId.has(key)) updated++; else added++;
    byId.set(key, entry);
  });

  saveFlags(Array.from(byId.values()));
  renderFlagTable();
  warnBox.innerHTML = `<div class="warn-box" style="background:var(--success-bg);border-color:var(--success);color:var(--success);">Import selesai: ${added} id baru, ${updated} id diperbarui.</div>`;
}

document.getElementById('exportFlagsBtn').addEventListener('click', exportFlags);

document.getElementById('importFlagsBtn').addEventListener('click', () => {
  document.getElementById('importFlagsFile').click();
});

document.getElementById('importFlagsFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => importFlagsFromJson(String(reader.result), document.getElementById('flagWarnBox'));
  reader.readAsText(file);
});

// Label & badge class per jenis isu pada tabel Cek Bonus gabungan.
const BONUS_ISSUE_LABELS = { pending: 'Pending', excess: 'Tidak Sesuai', shortage: 'Tidak Sesuai', double: 'Dobel' };
const BONUS_ISSUE_BADGE_CLASS = { pending: 'badge-pending', excess: 'badge-excess', shortage: 'badge-shortage', double: 'badge-warn' };

// Menggabungkan tiga pengecekan (pending, kesesuaian nominal, dobel) jadi satu daftar
// baris hasil. Tiap "item" bisa berisi lebih dari satu baris tabel (grup dobel bonus
// tetap ditampilkan berurutan per kemunculan), tapi disortir sebagai satu kesatuan
// berdasarkan waktu kejadian paling baru.
function buildBonusReport(txRaw, givenRaw, pct) {
  const deposits = parseRecords(txRaw).filter(r => r.status.toLowerCase() === 'confirmed');
  const bonusRecords = parseRecords(givenRaw).filter(isBonusDeposit);

  const items = [];

  // Pending: sudah deposit confirmed tapi belum ada bonus sama sekali.
  const latestDepositByUsername = dedupeLatest(deposits);
  const bonusUsernames = new Set(bonusRecords.map(r => r.username));
  Array.from(latestDepositByUsername.values())
    .filter(r => !bonusUsernames.has(r.username))
    .forEach(r => {
      const expected = computeExpectedBonus(r.amount, pct, r.code);
      items.push({
        sortTs: r.timestamp,
        rows: [{
          username: r.username, jenis: 'pending', depositAmount: r.amount,
          expected, given: null, note: '-', waktu: r.dateText || '-', admin: '-',
        }],
      });
    });

  // Tidak Sesuai: bonus sudah diberikan tapi nominalnya beda dari seharusnya
  // (di luar toleransi pembulatan ke ribuan terdekat).
  let unmatchedCount = 0;
  bonusRecords.forEach(bonusRec => {
    const deposit = findMatchingDeposit(deposits, bonusRec.username, bonusRec.timestamp);
    if (!deposit) {
      unmatchedCount++;
      return;
    }
    const expected = computeExpectedBonus(deposit.amount, pct, deposit.code);
    const evaluation = evaluateBonusAmount(expected, bonusRec.amount);
    if (evaluation.status === 'ok') return;
    items.push({
      sortTs: bonusRec.timestamp,
      rows: [{
        username: bonusRec.username, jenis: evaluation.status, depositAmount: deposit.amount,
        expected, given: bonusRec.amount,
        note: (evaluation.status === 'excess' ? 'Kelebihan Rp' : 'Kekurangan Rp') + formatRupiah(evaluation.diff),
        waktu: bonusRec.dateText || '-', admin: bonusRec.admin ? '**@admin' : '-',
      }],
    });
  });

  // Dobel: username yang muncul lebih dari sekali di history bonus.
  findDuplicateGroups(bonusRecords).forEach(group => {
    const sorted = group.slice().sort((a, b) => a.timestamp - b.timestamp);
    const rows = sorted.map((r, i) => ({
      username: r.username, jenis: 'double', depositAmount: null, expected: null,
      given: r.amount, note: i === 0 ? sorted.length + 'x diberikan' : '-',
      waktu: r.dateText || '-', admin: r.admin ? '**@admin' : '-', groupStart: i === 0,
    }));
    items.push({ sortTs: sorted[sorted.length - 1].timestamp, rows });
  });

  items.sort((a, b) => b.sortTs - a.sortTs);

  return {
    rows: items.flatMap(it => it.rows),
    counts: {
      pending: items.filter(it => it.rows[0].jenis === 'pending').length,
      mismatch: items.filter(it => it.rows[0].jenis === 'excess' || it.rows[0].jenis === 'shortage').length,
      double: items.filter(it => it.rows[0].jenis === 'double').length,
    },
    unmatchedCount,
  };
}

document.getElementById('bonusProcessBtn').addEventListener('click', () => {
  const txRaw = document.getElementById('txData').value;
  const givenRaw = document.getElementById('givenData').value;
  const warnBox = document.getElementById('bonusWarnBox');
  warnBox.innerHTML = '';

  const hasAnyData = parseRecords(txRaw).length > 0 || parseRecords(givenRaw).length > 0;
  if (!hasAnyData) {
    warnBox.innerHTML = '<div class="warn-box">Data belum diisi atau formatnya tidak terbaca. Paste History QR Pay dan/atau History bonus dulu.</div>';
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    return;
  }

  const pct = parseInt(document.getElementById('pctSelect').value, 10);
  const report = buildBonusReport(txRaw, givenRaw, pct);
  const flags = loadFlags();

  const unmatchedNote = report.unmatchedCount > 0
    ? `<div class="warn-box">${report.unmatchedCount} bonus tidak punya deposit confirmed yang cocok di History QR Pay, jadi tidak bisa dicek kesesuaiannya.</div>`
    : '';

  const body = document.getElementById('bonusResultBody');
  body.innerHTML = '';

  if (report.rows.length === 0) {
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    document.getElementById('bonusEmptyCard').querySelector('.empty-state').textContent =
      'Aman: tidak ada yang pending, tidak sesuai, atau dobel.';
    warnBox.innerHTML = unmatchedNote;
    return;
  }

  document.getElementById('bonusEmptyCard').style.display = 'none';
  document.getElementById('bonusResultCard').style.display = 'block';
  warnBox.innerHTML = unmatchedNote;
  document.getElementById('bonusCountBadge').textContent =
    `${report.counts.pending} pending · ${report.counts.mismatch} tidak sesuai · ${report.counts.double} dobel`;

  report.rows.forEach(r => {
    const flag = findFlag(flags, r.username);
    const tr = document.createElement('tr');
    if (flag) tr.classList.add('flagged-row');
    if (r.groupStart) tr.classList.add('group-start');
    const jenisLabel = (r.jenis === 'double' && !r.groupStart)
      ? ''
      : `<span class="badge ${BONUS_ISSUE_BADGE_CLASS[r.jenis]}">${BONUS_ISSUE_LABELS[r.jenis]}</span>`;
    tr.innerHTML = `
      <td>${r.username}${flag ? `<br><span class="badge badge-${flag.category}">${FLAG_CATEGORY_LABELS[flag.category] || flag.category}</span>${flag.note ? ` <span class="flag-note">${flag.note}</span>` : ''}` : ''}</td>
      <td>${jenisLabel}</td>
      <td class="amount">${r.depositAmount != null ? formatRupiah(r.depositAmount) : '-'}</td>
      <td class="amount${r.expected != null ? ' cashback' : ''}">${r.expected != null ? formatCopyableAmount(r.expected) : '-'}</td>
      <td class="amount">${r.given != null ? formatRupiah(r.given) : '-'}</td>
      <td>${r.note}</td>
      <td>${r.waktu}</td>
      <td>${r.admin}</td>
    `;
    body.appendChild(tr);
  });
});

document.getElementById('newMemberBtn').addEventListener('click', () => {
  const idListRaw = document.getElementById('newMemberIds').value;
  const txRaw = document.getElementById('txData').value;
  const givenRaw = document.getElementById('givenData').value;
  const warnBox = document.getElementById('newMemberWarnBox');
  warnBox.innerHTML = '';

  const memberIds = parseIdList(idListRaw);

  if (memberIds.length === 0) {
    warnBox.innerHTML = '<div class="warn-box">Daftar id member baru belum diisi.</div>';
    document.getElementById('newMemberResultCard').style.display = 'none';
    return;
  }

  const qrDeposits = parseRecords(txRaw).filter(r => r.status.toLowerCase() === 'confirmed');
  const bonusDeposits = parseRecords(givenRaw).filter(isBonusDeposit);
  const allDeposits = qrDeposits.concat(bonusDeposits);

  let depositedCount = 0;

  const flags = loadFlags();
  const flaggedMatches = memberIds
    .map(({ id }) => findFlag(flags, id))
    .filter(Boolean);

  if (flaggedMatches.length > 0) {
    const items = flaggedMatches
      .map(f => `${f.id} (${FLAG_CATEGORY_LABELS[f.category] || f.category}${f.note ? ': ' + f.note : ''})`)
      .join(', ');
    warnBox.innerHTML = `<div class="warn-box">Ditemukan id bermasalah di daftar ini: ${items}</div>`;
  }

  // Urutan baris hasil ikut urutan id apa adanya waktu dipaste (tidak disusun ulang).
  const lines = memberIds.map(({ id, raw, regDate }, i) => {
    const matches = allDeposits.filter(d => d.username.toLowerCase() === id.toLowerCase());

    if (matches.length === 0) {
      // Belum pernah deposit: nominal 0, tanggalnya pakai tanggal registrasi kalau ada.
      return [i + 1, regDate || '0', raw, 'Rp0', 'Rp0'].join('\t');
    }

    depositedCount++;
    // Deposit pertama = timestamp paling awal di antara semua deposit member ini.
    const first = matches.reduce((earliest, d) => (d.timestamp < earliest.timestamp ? d : earliest));
    const idWithCode = first.code ? first.code + '@' + first.username : first.username;
    return [i + 1, formatCopyDate(first.timestamp), idWithCode, 'Rp' + formatRupiah(first.amount), 'Rp0'].join('\t');
  });

  document.getElementById('newMemberResultCard').style.display = 'block';
  document.getElementById('newMemberCountBadge').textContent = depositedCount + ' dari ' + memberIds.length + ' id sudah deposit';
  document.getElementById('newMemberResultText').value = lines.join('\n');
});
