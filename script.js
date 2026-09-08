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

document.getElementById('processBtn').addEventListener('click', () => {
  const txRaw = document.getElementById('txData').value;
  const givenRaw = document.getElementById('givenData').value;
  const warnBox = document.getElementById('warnBox');
  warnBox.innerHTML = '';

  const txRecords = parseRecords(txRaw).filter(r => r.status.toLowerCase() === 'confirmed');

  if (txRecords.length === 0) {
    warnBox.innerHTML = '<div class="warn-box">Data transaksi belum diisi, formatnya tidak terbaca, atau tidak ada baris berstatus Confirmed.</div>';
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('emptyCard').style.display = 'block';
    return;
  }

  const latestByUsername = dedupeLatest(txRecords);
  const givenUsernames = new Set(parseRecords(givenRaw).filter(isBonusDeposit).map(r => r.username));

  const pending = Array.from(latestByUsername.values())
    .filter(r => !givenUsernames.has(r.username));

  const pct = parseInt(document.getElementById('pctSelect').value, 10);
  const body = document.getElementById('resultBody');
  body.innerHTML = '';

  if (pending.length === 0) {
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('emptyCard').style.display = 'block';
    document.getElementById('emptyCard').querySelector('.empty-state').textContent = 'Semua username sudah dapat bonus. Tidak ada yang pending.';
    return;
  }

  document.getElementById('emptyCard').style.display = 'none';
  document.getElementById('resultCard').style.display = 'block';
  document.getElementById('countBadge').textContent = pending.length + ' member';

  const flags = loadFlags();

  pending
    .sort((a, b) => b.timestamp - a.timestamp)
    .forEach(r => {
      const rawBonus = Math.round(r.amount * pct / 100);
      const bonus = Math.min(rawBonus, getBonusCap(pct, r.code));
      const flag = findFlag(flags, r.username);
      const statusCell = flag
        ? `<span class="badge badge-${flag.category}" title="${flag.note || ''}">${FLAG_CATEGORY_LABELS[flag.category] || flag.category}${flag.note ? ' — ' + flag.note : ''}</span>`
        : '-';
      const tr = document.createElement('tr');
      if (flag) tr.classList.add('flagged-row');
      tr.innerHTML = `
        <td>${r.username}</td>
        <td class="amount">${formatRupiah(r.amount)}</td>
        <td class="cashback">${formatCopyableAmount(bonus)}</td>
        <td>${r.dateText || '-'}</td>
        <td class="status-cell">${statusCell}</td>
      `;
      body.appendChild(tr);
    });
});

document.getElementById('doubleBtn').addEventListener('click', () => {
  const givenRaw = document.getElementById('givenData').value;
  const doubleWarnBox = document.getElementById('doubleWarnBox');
  doubleWarnBox.innerHTML = '';

  const records = parseRecords(givenRaw).filter(isBonusDeposit);

  if (records.length === 0) {
    doubleWarnBox.innerHTML = '<div class="warn-box">History belum diisi, formatnya tidak terbaca, atau tidak ada baris berketerangan BONUS DEPOSIT.</div>';
    document.getElementById('doubleResultCard').style.display = 'none';
    return;
  }

  const duplicateGroups = findDuplicateGroups(records);
  const body = document.getElementById('doubleResultBody');
  body.innerHTML = '';

  if (duplicateGroups.length === 0) {
    doubleWarnBox.innerHTML = '<div class="warn-box" style="background:var(--success-bg);border-color:var(--success);color:var(--success);">Tidak ditemukan username yang dapat bonus dobel.</div>';
    document.getElementById('doubleResultCard').style.display = 'none';
    return;
  }

  document.getElementById('doubleResultCard').style.display = 'block';
  document.getElementById('doubleCountBadge').textContent = duplicateGroups.length + ' username dobel';

  duplicateGroups.forEach(group => {
    group
      .slice()
      .sort((a, b) => a.timestamp - b.timestamp)
      .forEach((r, i) => {
        const tr = document.createElement('tr');
        if (i === 0) tr.classList.add('group-start');
        tr.innerHTML = `
          <td>${r.username}</td>
          <td>${i === 0 ? group.length + 'x' : ''}</td>
          <td class="amount">${formatRupiah(r.amount)}</td>
          <td>${r.dateText || '-'}</td>
          <td>${r.admin || '-'}</td>
        `;
        body.appendChild(tr);
      });
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
