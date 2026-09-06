// Record baru dikenali dari baris yang kolom ke-2 (setelah nomor urut) mengandung
// username (selalu ada tanda "@"), misalnya "1\tBBC@ima888\tBCA". Baris lain yang
// juga punya tab tapi "@"-nya ada di kolom lain (mis. baris admin di akhir record)
// tidak dianggap awal record baru.
// Pakai lookbehind/lookahead (bukan \b) supaya nominal yang nempel langsung ke
// prefix mata uang tanpa spasi (mis. "Rp1.000.000") tetap terbaca penuh — \b gagal
// di sini karena huruf dan digit sama-sama dianggap "word character".
const AMOUNT_RE = /(?<![\d.])\d{1,3}(?:\.\d{3})+(?!\d)/;
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
      const amount = amountMatch ? parseInt(amountMatch[0].replace(/\./g, ''), 10) : 0;

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

// Batas maksimal bonus: 5% dibatasi 100rb, 10% dibatasi 200rb — kecuali kode "BFY"
// yang tetap dibatasi 100rb walau pilihan persennya 10%.
function getBonusCap(pct, code) {
  if (pct === 10 && (code || '').toUpperCase() !== 'BFY') return 200000;
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

// Daftar id member baru dipaste satu per baris, boleh pakai kode di depan "@" atau tidak.
function parseIdList(raw) {
  const ids = raw
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => (s.includes('@') ? s.slice(s.indexOf('@') + 1) : s));
  return Array.from(new Set(ids));
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

  pending
    .sort((a, b) => b.timestamp - a.timestamp)
    .forEach(r => {
      const rawBonus = Math.round(r.amount * pct / 100);
      const bonus = Math.min(rawBonus, getBonusCap(pct, r.code));
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${r.username}</td>
        <td class="amount">${formatRupiah(r.amount)}</td>
        <td class="cashback">${formatCopyableAmount(bonus)}</td>
        <td>${r.dateText || '-'}</td>
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

  const qrDeposits = parseRecords(txRaw)
    .filter(r => r.status.toLowerCase() === 'confirmed')
    .map(r => Object.assign({}, r, { source: 'QR Pay' }));
  const bonusDeposits = parseRecords(givenRaw)
    .filter(isBonusDeposit)
    .map(r => Object.assign({}, r, { source: 'Bonus Deposit' }));
  const allDeposits = qrDeposits.concat(bonusDeposits);

  const body = document.getElementById('newMemberResultBody');
  body.innerHTML = '';

  let matchedCount = 0;

  memberIds.forEach(id => {
    const matches = allDeposits
      .filter(d => d.username.toLowerCase() === id.toLowerCase())
      .sort((a, b) => a.timestamp - b.timestamp);

    if (matches.length === 0) return;
    matchedCount++;

    matches.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${d.username}</td>
        <td>${d.dateText || '-'}</td>
        <td class="amount">${formatRupiah(d.amount)}</td>
        <td>${d.source}</td>
      `;
      body.appendChild(tr);
    });

    const total = matches.reduce((sum, d) => sum + d.amount, 0);
    const totalTr = document.createElement('tr');
    totalTr.classList.add('total-row');
    totalTr.innerHTML = `
      <td colspan="2">Total ${matches[0].username}</td>
      <td class="amount">${formatRupiah(total)}</td>
      <td></td>
    `;
    body.appendChild(totalTr);
  });

  if (matchedCount === 0) {
    warnBox.innerHTML = '<div class="warn-box">Tidak ada id dari daftar yang ditemukan melakukan deposit di History QR Pay maupun History.</div>';
    document.getElementById('newMemberResultCard').style.display = 'none';
    return;
  }

  document.getElementById('newMemberResultCard').style.display = 'block';
  document.getElementById('newMemberCountBadge').textContent = matchedCount + ' dari ' + memberIds.length + ' id';
});
