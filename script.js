// --- Bahasa (Indonesia/English) ---
// Semua teks yang tampil ke pengguna lewat lookup di sini, supaya tombol bendera di
// topbar bisa mengganti bahasa seluruh halaman (termasuk teks yang di-generate lewat
// JS, bukan cuma teks statis di HTML). Preferensi bahasa disimpan per-browser
// (localStorage) karena ini cuma pengaturan tampilan, bukan data yang perlu sinkron.
const I18N = {
  id: {
    'nav.dashboard': 'Dashboard',
    'nav.group1': '1. Bonus',
    'nav.bonus': '1.1 Cek Bonus',
    'nav.flagged': '1.2 ID Bermasalah',
    'nav.group2': '2. Member',
    'nav.newmember': '2.1 New Member First Deposit',
    'nav.winlose': '2.2 Win/Lose All Game',

    'admin.loginBtn': 'Login Admin',
    'admin.logout': 'Logout',
    'admin.modalTitle': 'Login Admin',
    'admin.emailPlaceholder': 'Email admin',
    'admin.passwordPlaceholder': 'Password',
    'admin.loginSubmit': 'Login',
    'admin.loginError': 'Email atau password salah.',
    'admin.importAdminOnly': 'Hanya admin yang bisa import backup. Login admin dulu di bagian bawah sidebar.',
    'admin.editAdminOnly': 'Id "{id}" sudah ada di daftar. Hapus/ubah id yang sudah ada hanya bisa oleh admin — login admin dulu di bagian bawah sidebar.',
    'admin.deleteFailed': 'Gagal menghapus: {error}',

    'ticker.title': 'Member:',
    'ticker.empty': 'Belum ada id bermasalah',
    'common.clickToCopy': 'Klik untuk copy',

    'dataSumber.qr': 'History QR Pay',
    'dataSumber.history': 'History',

    'dashboard.title': 'Dashboard',
    'dashboard.statTotal': 'Total ID Bermasalah',
    'dashboard.statSafety': 'Kategori Safety',
    'dashboard.statNoBonus': 'Tidak Dapat Bonus',
    'dashboard.statLatest': 'Terakhir Ditambahkan',
    'dashboard.menuTitle': 'Menu',
    'dashboard.linkBonusTitle': 'Cek Bonus',
    'dashboard.linkBonusDesc': 'Deteksi bonus pending, tidak sesuai, dan dobel.',
    'dashboard.linkFlaggedTitle': 'ID Bermasalah',
    'dashboard.linkFlaggedDesc': 'Kelola daftar id yang perlu diwaspadai.',
    'dashboard.linkNewMemberTitle': 'New Member First Deposit',
    'dashboard.linkNewMemberDesc': 'Cari deposit pertama tiap id member baru.',
    'dashboard.linkWinloseTitle': 'Win/Lose Member All Game',
    'dashboard.linkWinloseDesc': 'Urutkan id berdasarkan menang/kalah.',

    'bonus.title': 'Bonus',
    'bonus.cekBonusTitle': 'Cek Bonus',
    'bonus.processBtn': 'Proses Bonus',
    'bonus.emptyState': 'Isi Data Sumber, lalu klik "Proses Bonus".',
    'bonus.resultTitle': 'Hasil cek bonus',
    'bonus.thUsername': 'Username',
    'bonus.thExpected': 'Seharusnya',
    'bonus.thGiven': 'Diberikan',
    'bonus.thNote': 'Keterangan',
    'bonus.thTime': 'Waktu',
    'bonus.noDataWarn': 'Data belum diisi atau formatnya tidak terbaca. Paste History QR Pay dan/atau History bonus dulu.',
    'bonus.safeEmpty': 'Aman: tidak ada yang pending, tidak sesuai, atau dobel.',
    'bonus.unmatchedNote': '{count} bonus tidak punya deposit confirmed yang cocok di History QR Pay, jadi tidak bisa dicek kesesuaiannya.',
    'bonus.countBadge': '{pending} pending · {mismatch} tidak sesuai · {double} dobel',
    'bonus.notePending': 'Belum dapat bonus',
    'bonus.noteExcess': 'Kelebihan Rp',
    'bonus.noteShortage': 'Kekurangan Rp',
    'bonus.noteDouble': '{count}x diberikan',

    'newmember.title': 'New Member First Deposit',
    'newmember.listTitle': 'Daftar ID Member Baru',
    'newmember.checkBtn': 'Cek New Member First Deposit',
    'newmember.resultTitle': 'First deposit ditemukan',
    'newmember.emptyIds': 'Daftar id member baru belum diisi.',
    'newmember.flaggedWarn': 'Ditemukan id bermasalah di daftar ini: {items}',
    'newmember.countBadge': '{deposited} dari {total} id sudah deposit',

    'flagged.title': 'ID Bermasalah',
    'flagged.listTitle': 'Daftar ID Bermasalah',
    'flagged.catSafety': 'Safety',
    'flagged.catNoBonus': 'Tidak Dapat Bonus',
    'flagged.catOther': 'Lainnya',
    'flagged.addBtn': 'Tambah',
    'flagged.toggleShow': 'Lihat Daftar ID Bermasalah',
    'flagged.toggleHide': 'Sembunyikan Daftar ID Bermasalah',
    'flagged.thId': 'ID',
    'flagged.thCategory': 'Kategori',
    'flagged.thNote': 'Keterangan',
    'flagged.thAdded': 'Ditambahkan',
    'flagged.emptyState': 'Belum ada id bermasalah yang ditambahkan.',
    'flagged.backupTitle': 'Backup & Restore',
    'flagged.exportBtn': 'Export Backup (.json)',
    'flagged.importBtn': 'Import Backup',
    'flagged.deleteBtn': 'Hapus',
    'flagged.fillIdFirst': 'Isi id/username dulu.',
    'flagged.confirmDelete1': 'Yakin ingin menghapus id "{id}" dari daftar id bermasalah?',
    'flagged.confirmDelete2': 'Konfirmasi sekali lagi: hapus "{id}" secara permanen dari daftar?',
    'flagged.invalidJson': 'File backup tidak valid (bukan JSON).',
    'flagged.invalidList': 'File backup tidak valid (isinya harus berupa daftar).',
    'flagged.importDone': 'Import selesai: {added} id baru, {updated} id diperbarui.',
    'flagged.importFailed': 'Import gagal: {error}',
    'flagged.saveFailed': 'Gagal menyimpan: {error}',

    'winlose.title': 'Win/Lose Member All Game',
    'winlose.dataTitle': 'Data Win/Lose',
    'winlose.sortTitle': 'Urutkan',
    'winlose.thresholdAll': 'Semua ID',
    'winlose.threshold1': 'Min 1jt',
    'winlose.threshold2': 'Min 2jt',
    'winlose.threshold3': 'Min 3jt',
    'winlose.threshold4': 'Min 4jt',
    'winlose.threshold5': 'Min 5jt',
    'winlose.processBtn': 'Proses',
    'winlose.resultTitle': 'Hasil urut win/lose',
    'winlose.copyBtn': 'Copy Hasil',
    'winlose.copyBtnDone': 'Tersalin!',
    'winlose.thId': 'ID Member',
    'winlose.thGame': 'Game',
    'winlose.thWinLose': 'Win/Lose',
    'winlose.emptyState': 'Isi Data Win/Lose, lalu klik "Proses".',
    'winlose.emptyNoData': 'Data belum diisi atau formatnya tidak terbaca.',
    'winlose.emptyNoMatch': 'Tidak ada id yang lolos ambang batas ini.',
    'winlose.countBadge': '{lose} kalah · {win} menang',
  },
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.group1': '1. Bonus',
    'nav.bonus': '1.1 Check Bonus',
    'nav.flagged': '1.2 Flagged IDs',
    'nav.group2': '2. Member',
    'nav.newmember': '2.1 New Member First Deposit',
    'nav.winlose': '2.2 Win/Lose All Game',

    'admin.loginBtn': 'Admin Login',
    'admin.logout': 'Logout',
    'admin.modalTitle': 'Admin Login',
    'admin.emailPlaceholder': 'Admin email',
    'admin.passwordPlaceholder': 'Password',
    'admin.loginSubmit': 'Login',
    'admin.loginError': 'Wrong email or password.',
    'admin.importAdminOnly': 'Only admin can import a backup. Please log in as admin first.',
    'admin.editAdminOnly': 'Id "{id}" already exists in the list. Only admin can edit/delete existing ids — log in as admin first.',
    'admin.deleteFailed': 'Failed to delete: {error}',

    'ticker.title': 'Members:',
    'ticker.empty': 'No flagged ids yet',
    'common.clickToCopy': 'Click to copy',

    'dataSumber.qr': 'History QR Pay',
    'dataSumber.history': 'History',

    'dashboard.title': 'Dashboard',
    'dashboard.statTotal': 'Total Flagged IDs',
    'dashboard.statSafety': 'Safety Category',
    'dashboard.statNoBonus': 'No Bonus',
    'dashboard.statLatest': 'Last Added',
    'dashboard.menuTitle': 'Menu',
    'dashboard.linkBonusTitle': 'Check Bonus',
    'dashboard.linkBonusDesc': 'Detect pending, mismatched, and duplicate bonuses.',
    'dashboard.linkFlaggedTitle': 'Flagged IDs',
    'dashboard.linkFlaggedDesc': 'Manage the list of ids to watch out for.',
    'dashboard.linkNewMemberTitle': 'New Member First Deposit',
    'dashboard.linkNewMemberDesc': "Find each new member id's first deposit.",
    'dashboard.linkWinloseTitle': 'Win/Lose Member All Game',
    'dashboard.linkWinloseDesc': 'Rank ids by win/loss amount.',

    'bonus.title': 'Bonus',
    'bonus.cekBonusTitle': 'Check Bonus',
    'bonus.processBtn': 'Process Bonus',
    'bonus.emptyState': 'Fill in the Data Source, then click "Process Bonus".',
    'bonus.resultTitle': 'Bonus check result',
    'bonus.thUsername': 'Username',
    'bonus.thExpected': 'Expected',
    'bonus.thGiven': 'Given',
    'bonus.thNote': 'Note',
    'bonus.thTime': 'Time',
    'bonus.noDataWarn': "No data entered yet, or the format isn't recognized. Paste the QR Pay History and/or bonus History first.",
    'bonus.safeEmpty': 'All clear: nothing pending, mismatched, or duplicated.',
    'bonus.unmatchedNote': "{count} bonus(es) have no matching confirmed deposit in the QR Pay History, so they couldn't be checked.",
    'bonus.countBadge': '{pending} pending · {mismatch} mismatched · {double} duplicate',
    'bonus.notePending': 'No bonus yet',
    'bonus.noteExcess': 'Excess Rp',
    'bonus.noteShortage': 'Shortfall Rp',
    'bonus.noteDouble': 'given {count}x',

    'newmember.title': 'New Member First Deposit',
    'newmember.listTitle': 'New Member ID List',
    'newmember.checkBtn': 'Check New Member First Deposit',
    'newmember.resultTitle': 'First deposits found',
    'newmember.emptyIds': 'The new member id list is empty.',
    'newmember.flaggedWarn': 'Found flagged ids in this list: {items}',
    'newmember.countBadge': '{deposited} of {total} ids have deposited',

    'flagged.title': 'Flagged IDs',
    'flagged.listTitle': 'Flagged ID List',
    'flagged.catSafety': 'Safety',
    'flagged.catNoBonus': 'No Bonus',
    'flagged.catOther': 'Other',
    'flagged.addBtn': 'Add',
    'flagged.toggleShow': 'Show Flagged ID List',
    'flagged.toggleHide': 'Hide Flagged ID List',
    'flagged.thId': 'ID',
    'flagged.thCategory': 'Category',
    'flagged.thNote': 'Note',
    'flagged.thAdded': 'Added',
    'flagged.emptyState': 'No flagged ids added yet.',
    'flagged.backupTitle': 'Backup & Restore',
    'flagged.exportBtn': 'Export Backup (.json)',
    'flagged.importBtn': 'Import Backup',
    'flagged.deleteBtn': 'Delete',
    'flagged.fillIdFirst': 'Fill in the id/username first.',
    'flagged.confirmDelete1': 'Delete id "{id}" from the flagged id list?',
    'flagged.confirmDelete2': 'Confirm once more: permanently delete "{id}" from the list?',
    'flagged.invalidJson': 'Invalid backup file (not JSON).',
    'flagged.invalidList': 'Invalid backup file (content must be a list).',
    'flagged.importDone': 'Import finished: {added} new id(s), {updated} updated.',
    'flagged.importFailed': 'Import failed: {error}',
    'flagged.saveFailed': 'Failed to save: {error}',

    'winlose.title': 'Win/Lose Member All Game',
    'winlose.dataTitle': 'Win/Lose Data',
    'winlose.sortTitle': 'Sort',
    'winlose.thresholdAll': 'All IDs',
    'winlose.threshold1': 'Min 1M',
    'winlose.threshold2': 'Min 2M',
    'winlose.threshold3': 'Min 3M',
    'winlose.threshold4': 'Min 4M',
    'winlose.threshold5': 'Min 5M',
    'winlose.processBtn': 'Process',
    'winlose.resultTitle': 'Win/loss ranking result',
    'winlose.copyBtn': 'Copy Result',
    'winlose.copyBtnDone': 'Copied!',
    'winlose.thId': 'Member ID',
    'winlose.thGame': 'Game',
    'winlose.thWinLose': 'Win/Loss',
    'winlose.emptyState': 'Fill in the Win/Lose Data, then click "Process".',
    'winlose.emptyNoData': "No data entered yet, or the format isn't recognized.",
    'winlose.emptyNoMatch': 'No ids pass this threshold.',
    'winlose.countBadge': '{lose} losing · {win} winning',
  },
};

// Bendera digambar sebagai SVG inline (bukan emoji 🇮🇩/🇬🇧) karena emoji bendera
// regional tidak selalu punya font pendukung di semua browser/OS — beberapa malah
// menampilkan kode hurufnya ("ID"/"GB") apa adanya alih-alih gambar bendera.
const FLAG_SVG = {
  id: '<svg viewBox="0 0 24 16" width="20" height="14"><rect width="24" height="8" fill="#dc2626"/><rect y="8" width="24" height="8" fill="#ffffff"/></svg>',
  en: '<svg viewBox="0 0 24 16" width="20" height="14"><rect width="24" height="16" fill="#1a3f8f"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" stroke-width="3"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#dc2626" stroke-width="1.4"/><path d="M12,0 V16 M0,8 H24" stroke="#ffffff" stroke-width="4.5"/><path d="M12,0 V16 M0,8 H24" stroke="#dc2626" stroke-width="2.4"/></svg>',
};

let currentLang = localStorage.getItem('workingTools.lang') || 'id';

function t(key, params) {
  const dict = I18N[currentLang] || I18N.id;
  let str = dict[key] !== undefined ? dict[key] : (I18N.id[key] !== undefined ? I18N.id[key] : key);
  if (params) {
    Object.keys(params).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
    });
  }
  return str;
}

function localeCode() {
  return currentLang === 'en' ? 'en-US' : 'id-ID';
}

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

// Dipanggil begitu isi halaman ganti bahasa: teks statis (data-i18n) diperbarui, lalu
// bagian-bagian yang isinya digenerate lewat JS (tabel, ticker, dashboard) di-render
// ulang supaya teks di dalamnya ikut berganti bahasa juga.
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('workingTools.lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langFlag').innerHTML = lang === 'id' ? FLAG_SVG.id : FLAG_SVG.en;
  applyStaticI18n();
  if (typeof renderFlagTable === 'function') renderFlagTable();
  if (typeof renderDashboard === 'function') renderDashboard();
  if (typeof renderSidebarTicker === 'function') renderSidebarTicker();
  // Tombol ini teksnya tergantung status buka/tutup, jadi tidak dipakaikan
  // data-i18n statis — disinkronkan manual di sini tiap ganti bahasa.
  const flagListContainer = document.getElementById('flagListContainer');
  const toggleBtn = document.getElementById('toggleFlagListBtn');
  if (flagListContainer && toggleBtn) {
    toggleBtn.textContent = flagListContainer.style.display === 'none' ? t('flagged.toggleShow') : t('flagged.toggleHide');
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'id' ? 'en' : 'id');
});

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

function parseRecords(raw) {
  return splitIntoRecordBlocks(raw)
    .map(blockLines => {
      const block = blockLines.join('\n');
      const cols = blockLines[0].split('\t').map(c => c.trim());
      const rawUsername = cols.find(c => c.includes('@')) || '';
      // Kode di depan "@" (mis. "BBC", "BFY") bisa berubah-ubah, jadi id yang
      // ditampilkan murni bagian setelah "@". Kodenya sendiri tetap disimpan
      // (field "code") karena dipakai untuk aturan cap bonus.
      const stripCode = v => (v.includes('@') ? v.slice(v.indexOf('@') + 1) : v);
      const code = rawUsername.includes('@') ? rawUsername.slice(0, rawUsername.indexOf('@')) : '';
      const username = stripCode(rawUsername);

      const amountMatch = block.match(AMOUNT_RE);
      const amount = amountMatch ? parseInt(amountMatch[0].replace(/[.,]/g, ''), 10) : 0;

      const { timestamp, text: dateText } = parseDateTime(block.match(DATETIME_RE));

      const statusMatch = block.match(STATUS_RE);
      const status = statusMatch ? statusMatch[1] : '';

      const depositTypeMatch = block.match(DEPOSIT_TYPE_RE);
      const depositType = depositTypeMatch ? depositTypeMatch[1].toLowerCase() : '';

      return { username, amount, timestamp, dateText, status, depositType, code };
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

// Bonus di History tidak menyebutkan deposit mana yang jadi dasarnya, jadi tiap
// bonus dipasangkan ke deposit confirmed milik username yang sama secara berurutan
// (bonus paling lama ke deposit belum terpakai paling lama), dan satu deposit hanya
// bisa dipakai untuk satu bonus. Ini penting supaya deposit baru yang dibuat SETELAH
// sebuah bonus diberikan tidak ikut kepakai ulang untuk mengevaluasi bonus lama itu
// (yang sebelumnya menyebabkan bonus lama salah terbaca "kekurangan"/"tidak sesuai").
// Deposit yang tersisa (belum dapat bonus) untuk tiap username, yang paling baru,
// dianggap sebagai deposit yang masih pending.
function matchDepositsAndBonuses(deposits, bonusRecords) {
  const byUser = new Map();
  const ensure = username => {
    const key = username.toLowerCase();
    if (!byUser.has(key)) byUser.set(key, { deposits: [], bonuses: [] });
    return byUser.get(key);
  };
  deposits.forEach(d => ensure(d.username).deposits.push(d));
  bonusRecords.forEach(b => ensure(b.username).bonuses.push(b));

  const pairs = [];
  const pendingDeposits = [];
  let unmatchedCount = 0;

  byUser.forEach(data => {
    const ds = data.deposits.slice().sort((a, b) => a.timestamp - b.timestamp);
    const bs = data.bonuses.slice().sort((a, b) => a.timestamp - b.timestamp);
    const consumed = new Array(ds.length).fill(false);

    bs.forEach(bonus => {
      let idx = ds.findIndex((d, i) => !consumed[i] && d.timestamp <= bonus.timestamp);
      if (idx === -1) {
        // Tidak ada deposit belum terpakai sebelum waktu bonus (data janggal/tidak
        // lengkap) — fallback ke deposit belum terpakai dengan selisih waktu terkecil.
        ds.forEach((d, i) => {
          if (consumed[i]) return;
          if (idx === -1 || Math.abs(d.timestamp - bonus.timestamp) < Math.abs(ds[idx].timestamp - bonus.timestamp)) idx = i;
        });
      }
      if (idx === -1) {
        unmatchedCount++;
      } else {
        consumed[idx] = true;
        pairs.push({ deposit: ds[idx], bonus });
      }
    });

    for (let i = ds.length - 1; i >= 0; i--) {
      if (!consumed[i]) { pendingDeposits.push(ds[i]); break; }
    }
  });

  return { pairs, pendingDeposits, unmatchedCount };
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

// --- Daftar ID Bermasalah (tersimpan terpusat di Firestore, sinkron di semua browser) ---
// Siapa pun boleh menambahkan id baru (allow create kalau dokumennya belum ada); hapus
// atau ubah id yang sudah ada dibatasi khusus akun admin. Ini ditegakkan di DUA lapis:
// disembunyikan di UI (di bawah) DAN dipaksa lewat Firestore Security Rules, supaya
// tidak bisa diakali orang yang otak-atik lewat console browser.
const firebaseConfig = {
  apiKey: "AIzaSyDdAYyCjoxt2xcU2IblQroAS0zpZZvOfmU",
  authDomain: "working-tools-1354f.firebaseapp.com",
  projectId: "working-tools-1354f",
  storageBucket: "working-tools-1354f.firebasestorage.app",
  messagingSenderId: "660179896468",
  appId: "1:660179896468:web:faa676d46b851639740c81",
  measurementId: "G-F4ZYF9XV2F",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const ADMIN_EMAIL = 'adminrey@workingtools.com';
const FLAGS_COLLECTION = 'flags';
// Kunci kategori tetap sama di semua bahasa (dipakai sebagai nilai data) — hanya
// labelnya (lewat categoryLabel()) yang ikut berganti bahasa.
const FLAG_CATEGORY_KEYS = ['safety', 'no-bonus', 'other'];
const FLAG_CATEGORY_I18N_KEY = { safety: 'flagged.catSafety', 'no-bonus': 'flagged.catNoBonus', other: 'flagged.catOther' };
function categoryLabel(category) {
  return t(FLAG_CATEGORY_I18N_KEY[category] || 'flagged.catOther');
}

// Id dipakai sebagai document id (huruf kecil, supaya "Sama" dan "sama" dianggap id
// yang sama) — "/" disingkirkan karena tidak boleh ada di satu path segment Firestore.
function flagDocId(id) {
  return id.toLowerCase().replace(/\//g, '_');
}

let flagsCache = [];
let currentUser = null;

function loadFlags() {
  return flagsCache;
}

function isAdminUser() {
  return !!(currentUser && currentUser.email === ADMIN_EMAIL);
}

db.collection(FLAGS_COLLECTION).onSnapshot(snapshot => {
  flagsCache = snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));
  renderFlagTable();
  renderDashboard();
  renderSidebarTicker();
}, err => {
  console.error('Gagal memuat daftar ID Bermasalah dari Firestore:', err);
});

// Ticker id bermasalah terbaru di bawah sidebar: daftarnya digandakan dua kali lalu
// digeser ke atas separuh tingginya sendiri (translateY -50%) — begitu sampai di
// ujung, posisinya identik dengan awal, jadi terlihat scroll tanpa putus/patah.
function renderSidebarTicker() {
  const track = document.getElementById('tickerTrack');
  const recent = loadFlags().slice().sort((a, b) => b.addedAt - a.addedAt).slice(0, 15);

  if (recent.length === 0) {
    track.style.animation = 'none';
    track.innerHTML = `<div class="ticker-item ticker-empty">${t('ticker.empty')}</div>`;
    return;
  }

  const itemsHtml = recent.map((f, i) => `<div class="ticker-item">${i + 1}. ${f.id}</div>`).join('');
  track.innerHTML = itemsHtml + itemsHtml;
  const duration = Math.max(recent.length * 1.4, 6);
  track.style.animation = `ticker-scroll ${duration}s linear infinite`;
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
  const admin = isAdminUser();

  flags
    .slice()
    .sort((a, b) => b.addedAt - a.addedAt)
    .forEach(flag => {
      const tr = document.createElement('tr');
      const badgeClass = 'badge-' + flag.category;
      tr.innerHTML = `
        <td>${flag.id}</td>
        <td><span class="badge ${badgeClass}">${categoryLabel(flag.category)}</span></td>
        <td>${flag.note || '-'}</td>
        <td>${new Date(flag.addedAt).toLocaleString(localeCode())}</td>
        <td>${admin ? `<button class="flag-delete" data-doc-id="${flag.docId}" data-id="${flag.id}">${t('flagged.deleteBtn')}</button>` : ''}</td>
      `;
      body.appendChild(tr);
    });

  body.querySelectorAll('.flag-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const docId = btn.getAttribute('data-doc-id');
      if (!confirm(t('flagged.confirmDelete1', { id }))) return;
      if (!confirm(t('flagged.confirmDelete2', { id }))) return;
      db.collection(FLAGS_COLLECTION).doc(docId).delete().catch(err => {
        alert(t('admin.deleteFailed', { error: err.message }));
      });
    });
  });
}

// --- Login admin (Firebase Auth) ---
function updateAdminUI() {
  const admin = isAdminUser();
  document.getElementById('adminLoggedOut').style.display = admin ? 'none' : 'block';
  document.getElementById('adminLoggedIn').style.display = admin ? 'flex' : 'none';
  if (admin) document.getElementById('adminEmailLabel').textContent = currentUser.email;
  document.getElementById('importFlagsBtn').disabled = !admin;
}

auth.onAuthStateChanged(user => {
  currentUser = user;
  updateAdminUI();
  renderFlagTable();
});

function openAdminModal() {
  document.getElementById('adminLoginModal').style.display = 'flex';
  document.getElementById('adminEmailInput').focus();
}

function closeAdminModal() {
  document.getElementById('adminLoginModal').style.display = 'none';
  document.getElementById('adminLoginError').textContent = '';
  document.getElementById('adminEmailInput').value = '';
  document.getElementById('adminPasswordInput').value = '';
}

document.getElementById('adminLoginToggle').addEventListener('click', openAdminModal);
document.getElementById('adminLoginClose').addEventListener('click', closeAdminModal);

// Klik area gelap di luar kotak modal juga menutup modalnya.
document.getElementById('adminLoginModal').addEventListener('click', (e) => {
  if (e.target.id === 'adminLoginModal') closeAdminModal();
});

function submitAdminLogin() {
  const email = document.getElementById('adminEmailInput').value.trim();
  const password = document.getElementById('adminPasswordInput').value;
  const errBox = document.getElementById('adminLoginError');
  errBox.textContent = '';
  auth.signInWithEmailAndPassword(email, password)
    .then(() => closeAdminModal())
    .catch(() => {
      errBox.textContent = t('admin.loginError');
    });
}

document.getElementById('adminLoginBtn').addEventListener('click', submitAdminLogin);

['adminEmailInput', 'adminPasswordInput'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitAdminLogin();
  });
});

document.getElementById('adminLogoutBtn').addEventListener('click', () => auth.signOut());

// --- Navigasi sidebar: satu halaman ("page") aktif ditampilkan, sisanya disembunyikan ---
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const dataSumber = document.querySelector('.data-sumber');
// Data Sumber (History QR Pay & History) cuma dipakai oleh Bonus/New Member/ID
// Bermasalah — Dashboard & Win/Lose punya sumber datanya sendiri (atau tidak butuh sama sekali).
const PAGES_WITHOUT_DATA_SUMBER = new Set(['dashboard', 'winlose']);

function activatePage(target) {
  navItems.forEach(b => b.classList.toggle('active', b.dataset.page === target));
  pages.forEach(p => {
    p.style.display = p.dataset.page === target ? 'block' : 'none';
  });
  dataSumber.style.display = PAGES_WITHOUT_DATA_SUMBER.has(target) ? 'none' : 'block';

  // Buka grup accordion yang memuat halaman ini, supaya item aktifnya kelihatan.
  const activeBtn = Array.from(navItems).find(b => b.dataset.page === target);
  const group = activeBtn && activeBtn.closest('.nav-group');
  if (group) group.classList.add('open');

  if (target === 'dashboard') renderDashboard();
}

navItems.forEach(btn => {
  btn.addEventListener('click', () => activatePage(btn.dataset.page));
});

// --- Grup menu sidebar bisa dibuka/tutup (accordion) ---
document.querySelectorAll('.nav-group-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.nav-group').classList.toggle('open');
  });
});

document.querySelectorAll('.dash-link').forEach(btn => {
  btn.addEventListener('click', () => activatePage(btn.dataset.goto));
});

// --- Toggle panah: buka/tutup sidebar (geser lebar 0 <-> 240px, lihat CSS) ---
const appShell = document.querySelector('.app-shell');
const SIDEBAR_AUTO_COLLAPSE_WIDTH = 760;

function setSidebarCollapsed(collapsed) {
  appShell.classList.toggle('sidebar-collapsed', collapsed);
}

setSidebarCollapsed(window.innerWidth < SIDEBAR_AUTO_COLLAPSE_WIDTH);

document.getElementById('sidebarToggle').addEventListener('click', () => {
  appShell.classList.toggle('sidebar-collapsed');
});

// Klik area gelap di belakang sidebar (muncul di layar sempit saat sidebar terbuka)
// ikut menutup sidebarnya.
document.getElementById('sidebarBackdrop').addEventListener('click', () => setSidebarCollapsed(true));

// Di layar sempit, pilih halaman lalu sidebar-nya otomatis tertutup lagi supaya
// konten yang baru dibuka langsung kelihatan penuh.
navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    if (window.innerWidth < SIDEBAR_AUTO_COLLAPSE_WIDTH) setSidebarCollapsed(true);
  });
});

// --- Dashboard: ringkasan daftar ID Bermasalah (satu-satunya data yang persisten). ---
function renderDashboard() {
  const flags = loadFlags();
  document.getElementById('dashFlagTotal').textContent = flags.length;
  document.getElementById('dashFlagSafety').textContent = flags.filter(f => f.category === 'safety').length;
  document.getElementById('dashFlagNoBonus').textContent = flags.filter(f => f.category === 'no-bonus').length;
  const latest = flags.slice().sort((a, b) => b.addedAt - a.addedAt)[0];
  document.getElementById('dashFlagLatest').textContent = latest ? new Date(latest.addedAt).toLocaleDateString(localeCode()) : '-';
}

// Dashboard adalah halaman default saat pertama dibuka — activatePage juga yang
// mengurus sembunyikan Data Sumber (bukan cuma render statistiknya).
activatePage('dashboard');

document.getElementById('toggleFlagListBtn').addEventListener('click', () => {
  const container = document.getElementById('flagListContainer');
  const btn = document.getElementById('toggleFlagListBtn');
  const isHidden = container.style.display === 'none';
  container.style.display = isHidden ? 'block' : 'none';
  btn.textContent = isHidden ? t('flagged.toggleHide') : t('flagged.toggleShow');
});

document.getElementById('addFlagBtn').addEventListener('click', () => {
  const idInput = document.getElementById('flagIdInput');
  const categorySelect = document.getElementById('flagCategorySelect');
  const noteInput = document.getElementById('flagNoteInput');
  const warnBox = document.getElementById('flagWarnBox');
  warnBox.innerHTML = '';

  const rawId = idInput.value.trim();
  if (!rawId) {
    warnBox.innerHTML = `<div class="warn-box">${t('flagged.fillIdFirst')}</div>`;
    return;
  }

  const id = stripIdCode(rawId);
  const category = categorySelect.value;
  const note = noteInput.value.trim();

  // create ditolak Firestore Rules kalau id ini sudah ada dan yang menambahkan
  // bukan admin — itu memang disengaja (lihat komentar di bagian atas file).
  db.collection(FLAGS_COLLECTION).doc(flagDocId(id)).set({ id, category, note, addedAt: Date.now() })
    .then(() => {
      idInput.value = '';
      noteInput.value = '';
    })
    .catch(err => {
      warnBox.innerHTML = err.code === 'permission-denied'
        ? `<div class="warn-box">${t('admin.editAdminOnly', { id })}</div>`
        : `<div class="warn-box">${t('flagged.saveFailed', { error: err.message })}</div>`;
    });
});

// --- Backup & restore daftar ID Bermasalah ---
// Export tetap terbuka untuk siapa saja (cuma baca/unduh). Import bisa menimpa entri
// yang sudah ada dalam jumlah banyak sekaligus, jadi dibatasi khusus admin — sama
// seperti hapus/ubah satuan.
function exportFlags() {
  const flags = loadFlags().map(({ docId, ...rest }) => rest);
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

// Import digabung (upsert per id) lewat satu batch write, bukan menimpa seluruh
// koleksi — supaya import backup lama tidak menghapus id yang sudah ditambahkan lagi
// setelah backup itu dibuat.
function importFlagsFromJson(text, warnBox) {
  if (!isAdminUser()) {
    warnBox.innerHTML = `<div class="warn-box">${t('admin.importAdminOnly')}</div>`;
    return;
  }

  let incoming;
  try {
    incoming = JSON.parse(text);
  } catch {
    warnBox.innerHTML = `<div class="warn-box">${t('flagged.invalidJson')}</div>`;
    return;
  }
  if (!Array.isArray(incoming)) {
    warnBox.innerHTML = `<div class="warn-box">${t('flagged.invalidList')}</div>`;
    return;
  }

  const existingDocIds = new Set(loadFlags().map(f => f.docId));
  const batch = db.batch();
  let added = 0;
  let updated = 0;

  incoming.forEach(item => {
    if (!item || typeof item.id !== 'string' || !item.id.trim()) return;
    const id = item.id.trim();
    const docId = flagDocId(id);
    const entry = {
      id,
      category: FLAG_CATEGORY_KEYS.includes(item.category) ? item.category : 'other',
      note: typeof item.note === 'string' ? item.note : '',
      addedAt: typeof item.addedAt === 'number' ? item.addedAt : Date.now(),
    };
    if (existingDocIds.has(docId)) updated++; else added++;
    batch.set(db.collection(FLAGS_COLLECTION).doc(docId), entry);
  });

  batch.commit()
    .then(() => {
      warnBox.innerHTML = `<div class="warn-box" style="background:var(--success-bg);border-color:var(--success);color:var(--success);">${t('flagged.importDone', { added, updated })}</div>`;
    })
    .catch(err => {
      warnBox.innerHTML = `<div class="warn-box">${t('flagged.importFailed', { error: err.message })}</div>`;
    });
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

// Menggabungkan tiga pengecekan (pending, kesesuaian nominal, dobel) jadi satu daftar
// baris hasil. Tiap "item" bisa berisi lebih dari satu baris tabel (grup dobel bonus
// tetap ditampilkan berurutan per kemunculan), tapi disortir sebagai satu kesatuan
// berdasarkan waktu kejadian paling baru.
function buildBonusReport(txRaw, givenRaw, pct) {
  const deposits = parseRecords(txRaw).filter(r => r.status.toLowerCase() === 'confirmed');
  const bonusRecords = parseRecords(givenRaw).filter(isBonusDeposit);

  const { pairs, pendingDeposits, unmatchedCount } = matchDepositsAndBonuses(deposits, bonusRecords);

  const items = [];

  // Pending: deposit confirmed yang belum kebagian bonus (deposit yang sudah
  // dipasangkan ke bonus lain tidak dihitung lagi di sini).
  pendingDeposits.forEach(r => {
    const expected = computeExpectedBonus(r.amount, pct, r.code);
    items.push({
      sortTs: r.timestamp,
      rows: [{ kind: 'pending', username: r.username, expected, given: null, note: t('bonus.notePending'), waktu: r.dateText || '-' }],
    });
  });

  // Tidak Sesuai: bonus sudah diberikan tapi nominalnya beda dari seharusnya
  // (di luar toleransi pembulatan ke ribuan terdekat).
  pairs.forEach(({ deposit, bonus }) => {
    const expected = computeExpectedBonus(deposit.amount, pct, deposit.code);
    const evaluation = evaluateBonusAmount(expected, bonus.amount);
    if (evaluation.status === 'ok') return;
    items.push({
      sortTs: bonus.timestamp,
      rows: [{
        kind: 'mismatch', username: bonus.username, expected, given: bonus.amount,
        note: t(evaluation.status === 'excess' ? 'bonus.noteExcess' : 'bonus.noteShortage') + formatRupiah(evaluation.diff),
        waktu: bonus.dateText || '-',
      }],
    });
  });

  // Dobel: username yang muncul lebih dari sekali di history bonus.
  findDuplicateGroups(bonusRecords).forEach(group => {
    const sorted = group.slice().sort((a, b) => a.timestamp - b.timestamp);
    const rows = sorted.map((r, i) => ({
      kind: 'double', username: r.username, expected: null,
      given: r.amount, note: i === 0 ? t('bonus.noteDouble', { count: sorted.length }) : '-',
      waktu: r.dateText || '-', groupStart: i === 0,
    }));
    items.push({ sortTs: sorted[sorted.length - 1].timestamp, rows });
  });

  items.sort((a, b) => b.sortTs - a.sortTs);

  return {
    rows: items.flatMap(it => it.rows),
    counts: {
      pending: items.filter(it => it.rows[0].kind === 'pending').length,
      mismatch: items.filter(it => it.rows[0].kind === 'mismatch').length,
      double: items.filter(it => it.rows[0].kind === 'double').length,
    },
    unmatchedCount,
  };
}

// Klik nilai berformat (id atau nominal) untuk copy versi polosnya ke clipboard.
function makeCopyable(el, plainText) {
  el.classList.add('copyable');
  el.title = t('common.clickToCopy');
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(plainText).then(() => {
      el.classList.add('copied');
      setTimeout(() => el.classList.remove('copied'), 500);
    });
  });
}

document.getElementById('bonusProcessBtn').addEventListener('click', () => {
  const txRaw = document.getElementById('txData').value;
  const givenRaw = document.getElementById('givenData').value;
  const warnBox = document.getElementById('bonusWarnBox');
  warnBox.innerHTML = '';

  const hasAnyData = parseRecords(txRaw).length > 0 || parseRecords(givenRaw).length > 0;
  if (!hasAnyData) {
    warnBox.innerHTML = `<div class="warn-box">${t('bonus.noDataWarn')}</div>`;
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    return;
  }

  const pct = parseInt(document.getElementById('pctSelect').value, 10);
  const report = buildBonusReport(txRaw, givenRaw, pct);
  const flags = loadFlags();

  const unmatchedNote = report.unmatchedCount > 0
    ? `<div class="warn-box">${t('bonus.unmatchedNote', { count: report.unmatchedCount })}</div>`
    : '';

  const body = document.getElementById('bonusResultBody');
  body.innerHTML = '';

  if (report.rows.length === 0) {
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    document.getElementById('bonusEmptyCard').querySelector('.empty-state').textContent = t('bonus.safeEmpty');
    warnBox.innerHTML = unmatchedNote;
    return;
  }

  document.getElementById('bonusEmptyCard').style.display = 'none';
  document.getElementById('bonusResultCard').style.display = 'block';
  warnBox.innerHTML = unmatchedNote;
  document.getElementById('bonusCountBadge').textContent =
    t('bonus.countBadge', { pending: report.counts.pending, mismatch: report.counts.mismatch, double: report.counts.double });

  report.rows.forEach(r => {
    const flag = findFlag(flags, r.username);
    const tr = document.createElement('tr');
    tr.classList.add('kind-' + r.kind);
    if (flag) tr.classList.add('flagged-row');
    if (r.groupStart) tr.classList.add('group-start');
    tr.innerHTML = `
      <td class="idcell">${r.username}${flag ? `<br><span class="badge badge-${flag.category}">${categoryLabel(flag.category)}</span>${flag.note ? ` <span class="flag-note">${flag.note}</span>` : ''}` : ''}</td>
      <td class="amount">${r.expected != null ? formatCopyableAmount(r.expected) : '-'}</td>
      <td class="amount">${r.given != null ? formatCopyableAmount(r.given) : '-'}</td>
      <td>${r.note}</td>
      <td>${r.waktu}</td>
    `;
    body.appendChild(tr);

    makeCopyable(tr.querySelector('.idcell'), r.username);
    if (r.expected != null) makeCopyable(tr.children[1], String(r.expected));
    if (r.given != null) makeCopyable(tr.children[2], String(r.given));
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
    warnBox.innerHTML = `<div class="warn-box">${t('newmember.emptyIds')}</div>`;
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
      .map(f => `${f.id} (${categoryLabel(f.category)}${f.note ? ': ' + f.note : ''})`)
      .join(', ');
    warnBox.innerHTML = `<div class="warn-box">${t('newmember.flaggedWarn', { items })}</div>`;
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
  document.getElementById('newMemberCountBadge').textContent = t('newmember.countBadge', { deposited: depositedCount, total: memberIds.length });
  document.getElementById('newMemberResultText').value = lines.join('\n');
});

// --- Win/Lose Member All Game ---
// Game TIDAK ditebak otomatis dari isi paste (sempat salah baca tanggal/teks lain
// sebagai nama game) — dipilih manual dari dropdown, lalu dipasang ke semua id hasil
// paste itu sekaligus. Kode di depan id (mis. "BBC@") juga TIDAK dipotong di fitur ini
// karena dibutuhkan utuh.
// Mendukung dua bentuk laporan sekaligus dalam satu paste:
// 1) "No" (angka) + "Account" per baris, tab-separated (atau satu nilai per baris —
//    direkonstruksi dulu lewat reconstructSplitFieldLines()): 12 kolom angka sesudah
//    kode mata uang (mis. "IDR") berurutan Amount, Valid Amount, Gross Com, lalu
//    3x(W/L, Com, W/L + Com) untuk Members, Agent Profit, Company. Acuan win/lose
//    dipakai Members > W/L + Com (kolom ke-6 dari kolom mata uang).
// 2) Laporan ala "SSC": Account langsung di kolom pertama (tanpa "No"), lalu Count,
//    BetAmt, WinLoseAmt, ... Acuan win/lose dipakai WinLoseAmt (kolom ke-4).
const CUR_CODE_RE = /^[A-Z]{3,4}$/;
const WINLOSE_NUMBER_RE = /^-?[\d,]+(?:\.\d+)?$/;

function parseAmountNum(str) {
  const n = parseFloat((str || '').replace(/,/g, ''));
  return isNaN(n) ? 0 : n;
}

// Menyatukan kembali record yang field-nya terpisah satu per baris (bukan per tab)
// jadi satu baris ber-tab, supaya bisa diproses sama seperti format yang sudah rapi.
// Pola record dikenali dari: baris nomor urut polos, lalu baris berisi "@", lalu baris
// kode mata uang — sisanya (angka) ikut disatukan sampai polanya berhenti.
function reconstructSplitFieldLines(lines) {
  const isInt = s => /^\d+$/.test(s);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const a = (lines[i] || '').trim();
    const b = (lines[i + 1] || '').trim();
    const c = (lines[i + 2] || '').trim();
    if (isInt(a) && b.includes('@') && CUR_CODE_RE.test(c)) {
      // Selalu tepat 12 kolom angka sesudah kode mata uang — dibatasi hitungannya
      // (bukan "selama masih berupa angka") supaya nomor urut record BERIKUTNYA
      // (yang juga cuma digit polos) tidak ikut tertelan sebagai angka ke-13.
      const fields = [a, b, c];
      let j = i + 3;
      let collected = 0;
      while (j < lines.length && collected < 12 && WINLOSE_NUMBER_RE.test((lines[j] || '').trim())) {
        fields.push(lines[j].trim());
        j++;
        collected++;
      }
      out.push(fields.join('\t'));
      i = j;
    } else {
      out.push(lines[i]);
      i++;
    }
  }
  return out;
}

function parseWinLoseRecords(raw) {
  const lines = reconstructSplitFieldLines(raw.split(/\r?\n/));
  const records = [];

  lines.forEach(line => {
    const cols = line.split('\t').map(c => c.trim());

    // Format "No" + Account (tab-separated, sudah ada aslinya atau hasil rekonstruksi).
    if (cols.length >= 3 && /^\d+$/.test(cols[0]) && cols[1] && cols[1].includes('@')) {
      const curIdx = cols.findIndex((c, i) => i >= 2 && CUR_CODE_RE.test(c));
      if (curIdx === -1) return;
      const nums = cols.slice(curIdx + 1).map(parseAmountNum);
      if (nums.length < 6) return;
      records.push({ id: cols[1], value: nums[5] });
      return;
    }

    // Format "SSC": Account langsung di kolom pertama, lalu Count, BetAmt, WinLoseAmt.
    if (cols.length >= 4 && cols[0] && cols[0].includes('@')) {
      records.push({ id: cols[0], value: parseAmountNum(cols[3]) });
    }
  });

  return records;
}

// Angka ditampilkan & di-copy persis format sumbernya (titik desimal, koma ribuan),
// bukan dikonversi ke rupiah — sesuai satuan pada laporan yang dipaste.
function formatSourceStyleAmount(num) {
  const sign = num < 0 ? '-' : '';
  const [intPart, decPart] = Math.abs(num).toFixed(2).split('.');
  return sign + intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + decPart;
}

// Threshold berlaku dua arah dengan nominal yang sama: kekalahan minimal X, maupun
// kemenangan minimal X. Diurutkan dari kekalahan (angka negatif) terbesar di atas ke
// kemenangan terbesar di bawah. Satu game yang dipilih dipasang ke semua id sekaligus.
function buildWinLoseReport(raw, threshold, game) {
  return parseWinLoseRecords(raw)
    .filter(r => Math.abs(r.value) >= threshold)
    .map(r => ({ ...r, game }))
    .sort((a, b) => a.value - b.value);
}

let lastWinLoseRecords = [];

document.getElementById('winloseProcessBtn').addEventListener('click', () => {
  const raw = document.getElementById('winloseData').value;
  const threshold = parseInt(document.getElementById('winloseThresholdSelect').value, 10) || 0;
  const game = document.getElementById('winloseGameSelect').value;
  const warnBox = document.getElementById('winloseWarnBox');
  warnBox.innerHTML = '';

  const records = buildWinLoseReport(raw, threshold, game);
  lastWinLoseRecords = records;
  const body = document.getElementById('winloseResultBody');
  body.innerHTML = '';

  if (records.length === 0) {
    document.getElementById('winloseResultCard').style.display = 'none';
    document.getElementById('winloseEmptyCard').style.display = 'block';
    document.getElementById('winloseEmptyCard').querySelector('.empty-state').textContent =
      parseWinLoseRecords(raw).length === 0
        ? t('winlose.emptyNoData')
        : t('winlose.emptyNoMatch');
    return;
  }

  document.getElementById('winloseEmptyCard').style.display = 'none';
  document.getElementById('winloseResultCard').style.display = 'block';
  const loseCount = records.filter(r => r.value < 0).length;
  const winCount = records.filter(r => r.value > 0).length;
  document.getElementById('winloseCountBadge').textContent = t('winlose.countBadge', { lose: loseCount, win: winCount });

  records.forEach(r => {
    const tr = document.createElement('tr');
    tr.classList.add(r.value < 0 ? 'row-lose' : 'row-win');
    tr.innerHTML = `
      <td class="idcell">${r.id}</td>
      <td><span class="badge badge-game">${r.game}</span></td>
      <td class="amount ${r.value < 0 ? 'lose' : 'win'}">${formatSourceStyleAmount(r.value)}</td>
    `;
    body.appendChild(tr);
    makeCopyable(tr.querySelector('.idcell'), r.id);
    makeCopyable(tr.querySelector('.amount'), formatSourceStyleAmount(r.value));
  });
});

document.getElementById('winloseCopyBtn').addEventListener('click', () => {
  const text = lastWinLoseRecords.map(r => `${r.id}\t${r.game}\t${formatSourceStyleAmount(r.value)}`).join('\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('winloseCopyBtn');
    const original = btn.textContent;
    btn.textContent = t('winlose.copyBtnDone');
    setTimeout(() => { btn.textContent = original; }, 1000);
  });
});

// Terapkan bahasa tersimpan (atau default Indonesia) — ditaruh paling akhir supaya
// semua fungsi render (renderFlagTable, renderDashboard, dst) dan variabel yang
// dipakainya sudah pasti terdefinisi lebih dulu.
setLanguage(currentLang);
