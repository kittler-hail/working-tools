// --- Bahasa (Indonesia/English) ---
// Semua teks yang tampil ke pengguna lewat lookup di sini, supaya tombol bendera di
// topbar bisa mengganti bahasa seluruh halaman (termasuk teks yang di-generate lewat
// JS, bukan cuma teks statis di HTML). Preferensi bahasa disimpan per-browser
// (localStorage) karena ini cuma pengaturan tampilan, bukan data yang perlu sinkron.
const I18N = {
  id: {
    'nav.dashboard': 'Dashboard',
    'nav.accountrequests': 'Permintaan Akun',
    'nav.group1': '1. Bonus',
    'nav.bonus': '1.1 Cek Bonus',
    'nav.inputbonus': '1.2 Input Bonus',
    'nav.group2': '2. Member',
    'nav.flagged': '2.1 Member Safety',
    'nav.newmember': '2.2 New Member First Deposit',
    'nav.group3': '3. Win/Lose',
    'nav.group4': '4. Withdraw',
    'nav.winlose': '3.1 Win/Lose All Game',
    'nav.withdrawreport': '4.1 Laporan Withdraw',

    'admin.logout': 'Logout',
    'admin.emailPlaceholder': 'Email',
    'admin.passwordPlaceholder': 'Password',
    'admin.loginSubmit': 'Login',
    'admin.loginError': 'Email atau password salah.',
    'admin.importAdminOnly': 'Hanya admin yang bisa import backup. Login admin dulu.',
    'admin.editAdminOnly': 'Id "{id}" sudah ada di daftar. Hapus/ubah id yang sudah ada hanya bisa oleh admin — login admin dulu.',
    'admin.deleteFailed': 'Gagal menghapus: {error}',

    'gate.tabLogin': 'Login',
    'gate.tabRequest': 'Ajukan Akun',
    'gate.loginDesc': 'Masuk untuk mengakses semua fitur Working Tools.',
    'gate.requestDesc': 'Belum punya akun? Kirim permintaan, admin akan meninjau & menyetujuinya.',
    'gate.namePlaceholder': 'Nama',
    'gate.emailPlaceholder': 'Email',
    'gate.notePlaceholder': 'Catatan (opsional)',
    'gate.requestSubmit': 'Kirim Permintaan',
    'gate.requestFillRequired': 'Isi nama dan email dulu.',
    'gate.requestSent': 'Permintaan terkirim. Tunggu persetujuan admin — kamu akan bisa login begitu akun disetujui dan email set password diterima.',
    'gate.requestFailed': 'Gagal mengirim permintaan: {error}',

    'accreq.title': 'Permintaan Akun',
    'accreq.pendingTitle': 'Menunggu Persetujuan',
    'accreq.pendingEmpty': 'Tidak ada permintaan yang menunggu.',
    'accreq.historyTitle': 'Riwayat',
    'accreq.historyEmpty': 'Belum ada riwayat.',
    'accreq.thName': 'Nama',
    'accreq.thEmail': 'Email',
    'accreq.thNote': 'Catatan',
    'accreq.thRequested': 'Diajukan',
    'accreq.thStatus': 'Status',
    'accreq.thReviewed': 'Ditinjau',
    'accreq.thAction': 'Aksi',
    'accreq.approveBtn': 'Setujui',
    'accreq.approving': 'Memproses...',
    'accreq.rejectBtn': 'Tolak',
    'accreq.resendBtn': 'Kirim Ulang Email',
    'accreq.statusApproved': 'Disetujui',
    'accreq.statusRejected': 'Ditolak',
    'accreq.confirmReject': 'Tolak permintaan akun dari "{name}"?',
    'accreq.approveFailed': 'Gagal menyetujui: {error}',
    'accreq.rejectFailed': 'Gagal menolak: {error}',
    'accreq.resendDone': 'Email set password terkirim ulang.',
    'accreq.resendFailed': 'Gagal mengirim ulang: {error}',

    'activity.title': 'Aktivitas Pengguna',
    'activity.empty': 'Belum ada aktivitas.',
    'activity.login': '{email} login',
    'activity.logout': '{email} logout',
    'activity.passwordChange': '{email} mengganti password',
    'activity.flagAdd': '{email} menambahkan id "{id}" ke Member Safety ({category})',
    'activity.flagDelete': '{email} menghapus id "{id}" dari Member Safety',
    'activity.requestSubmitted': '{name} mengajukan permintaan akun',
    'activity.requestApproved': '{email} menyetujui permintaan akun dari {target}',
    'activity.requestRejected': '{email} menolak permintaan akun dari {target}',

    'nav.usermonitor': 'Pantau Pengguna',
    'um.title': 'Pantau Pengguna',
    'um.pageDesc': 'Lihat siapa yang sedang online dan telusuri log aktivitas semua pengguna.',
    'um.tabUsers': 'Pengguna',
    'um.tabLog': 'Log Aktivitas',
    'um.usersTitle': 'Daftar Pengguna',
    'um.onlineBadge': '{online} online · {total} pengguna',
    'um.thUser': 'Pengguna',
    'um.thStatus': 'Status',
    'um.thLastLogin': 'Terakhir Login',
    'um.thLastActive': 'Terakhir Aktif',
    'um.thPage': 'Sedang di',
    'um.thDevice': 'Perangkat',
    'um.usersEmpty': 'Belum ada data pengguna.',
    'um.usersNote': 'Online = aktif dalam 5 menit terakhir. Pengguna baru muncul setelah login sejak fitur ini aktif.',
    'um.statusOnline': 'Online',
    'um.statusOffline': 'Offline',
    'um.statusNever': 'Belum pernah login',
    'um.exportBtn': 'Export CSV',
    'um.filterAllTypes': 'Semua aksi',
    'um.filterLogin': 'Login & Akun',
    'um.filterSafety': 'Member Safety',
    'um.filterAccounts': 'Permintaan Akun',
    'um.filterAllUsers': 'Semua pengguna',
    'um.filterFrom': 'Dari tanggal',
    'um.filterTo': 'Sampai tanggal',
    'um.searchPlaceholder': 'Cari...',
    'um.resetBtn': 'Reset',
    'um.logInfo': 'Menampilkan {shown} dari {loaded} entri yang dimuat.',
    'um.thTime': 'Waktu',
    'um.thAction': 'Aksi',
    'um.thDetail': 'Detail',
    'um.logEmpty': 'Tidak ada aktivitas yang cocok.',
    'um.loadMore': 'Muat lebih banyak',
    'um.type.login': 'Login',
    'um.type.logout': 'Logout',
    'um.type.password_change': 'Ganti password',
    'um.type.flag_add': 'Tambah Member Safety',
    'um.type.flag_delete': 'Hapus Member Safety',
    'um.type.account_request_submitted': 'Ajukan akun',
    'um.type.account_request_approved': 'Setujui akun',
    'um.type.account_request_rejected': 'Tolak akun',

    'profile.title': 'Profil Saya',
    'profile.pageDesc': 'Kelola akun, ganti password, dan atur preferensi tampilanmu.',
    'profile.accountTitle': 'Akun',
    'profile.name': 'Nama',
    'profile.email': 'Email',
    'profile.role': 'Peran',
    'profile.roleAdmin': 'Admin',
    'profile.roleUser': 'Pengguna',
    'profile.created': 'Akun dibuat',
    'profile.lastSignIn': 'Login terakhir',
    'profile.passwordTitle': 'Ganti Password',
    'profile.oldPw': 'Password saat ini',
    'profile.newPw': 'Password baru (min. 8 karakter)',
    'profile.confirmPw': 'Ulangi password baru',
    'profile.pwBtn': 'Ganti Password',
    'profile.pwFillAll': 'Isi semua kolom password dulu.',
    'profile.pwTooShort': 'Password baru minimal {min} karakter.',
    'profile.pwMismatch': 'Konfirmasi password tidak sama.',
    'profile.pwSame': 'Password baru harus berbeda dari yang lama.',
    'profile.pwWrong': 'Password saat ini salah.',
    'profile.pwWeak': 'Password baru terlalu lemah.',
    'profile.pwTooMany': 'Terlalu banyak percobaan. Coba lagi beberapa saat lagi.',
    'profile.pwFailed': 'Gagal mengganti password: {error}',
    'profile.pwDone': 'Password berhasil diganti.',
    'profile.flagsTitle': 'Member Safety yang Saya Tambahkan',
    'profile.flagsEmpty': 'Belum ada id yang kamu tambahkan.',
    'profile.flagsNote': 'Hanya id yang ditambahkan lewat akunmu sejak fitur ini aktif yang tercatat di sini.',
    'profile.prefsTitle': 'Preferensi',
    'profile.language': 'Bahasa',
    'profile.hiddenInfo': '{count} id disembunyikan di Cek Bonus (hanya di browser ini)',
    'profile.hiddenReset': 'Tampilkan lagi semua',
    'profile.howtoLabel': 'Kartu Cara Penggunaan',
    'profile.howtoOpenAll': 'Buka semua',
    'profile.howtoCloseAll': 'Tutup semua',

    'ticker.title': 'Member Safety Baru:',
    'ticker.empty': 'Belum ada Member Safety',
    'common.clickToCopy': 'Klik untuk copy',
    'devtools.blockedMessage': 'Akses developer tools dinonaktifkan di halaman ini.',

    'howto.title': 'Cara Penggunaan',
    'howto.editBtn': 'Edit',
    'howto.saveBtn': 'Simpan',
    'howto.cancelBtn': 'Batal',
    'howto.placeholder': 'Belum ada penjelasan cara pakai fitur ini.',
    'howto.textareaPlaceholder': 'Tulis penjelasan cara pakai fitur ini...',
    'howto.saveFailed': 'Gagal menyimpan: {error}',

    'dataSumber.qr': 'History QR Pay',
    'dataSumber.history': 'History',

    'dashboard.title': 'Dashboard',
    'dashboard.statTotal': 'Total Member Safety',
    'dashboard.statSafety': 'Kategori Safety',
    'dashboard.statNoBonus': 'Tidak Dapat Bonus',
    'dashboard.statLatest': 'Terakhir Ditambahkan',
    'dashboard.menuTitle': 'Menu',
    'dashboard.linkBonusTitle': 'Cek Bonus',
    'dashboard.linkBonusDesc': 'Deteksi bonus pending, tidak sesuai, dan dobel.',
    'dashboard.linkFlaggedTitle': 'Member Safety',
    'dashboard.linkFlaggedDesc': 'Kelola daftar id yang perlu diwaspadai.',
    'dashboard.linkNewMemberTitle': 'New Member First Deposit',
    'dashboard.linkNewMemberDesc': 'Cari deposit pertama tiap id member baru.',
    'dashboard.linkWinloseTitle': 'Win/Lose Member All Game',
    'dashboard.linkWinloseDesc': 'Urutkan id berdasarkan menang/kalah.',
    'dashboard.linkWithdrawTitle': 'Laporan Withdraw',
    'dashboard.linkWithdrawDesc': 'Ringkasan deposit & withdraw satu id member.',
    'dashboard.subtitle': 'Pilih menu di bawah untuk mulai bekerja.',
    'dashboard.linkInputBonusTitle': 'Input Bonus',
    'dashboard.linkInputBonusDesc': 'Urutkan bonus yang sudah diberikan dan tandai id dobel.',
    'dashboard.linkWinloseMemberTitle': 'Win/Lose Member',
    'dashboard.linkWinloseMemberDesc': 'Rekap bulanan deposit, withdraw, dan bonus satu id member.',
    'dashboard.linkWdBalanceTitle': 'Withdraw Balance',
    'dashboard.linkWdBalanceDesc': 'Cocokkan withdraw di panel dengan Doc Spreadsheets.',

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
    'bonus.thAction': 'Aksi',
    'bonus.noDataWarn': 'Data belum diisi atau formatnya tidak terbaca. Paste History QR Pay dan/atau History bonus dulu.',
    'bonus.safeEmpty': 'Aman: tidak ada yang pending, tidak sesuai, atau dobel.',
    'bonus.allHiddenEmpty': 'Semua isu yang ditemukan sedang disembunyikan ({count} id). Klik "Tampilkan" di atas untuk melihatnya lagi.',
    'bonus.hideIdBtn': 'Sembunyikan',
    'bonus.hideIdTitle': 'Sembunyikan id ini dari hasil Cek Bonus (tersimpan di browser ini saja)',
    'bonus.hiddenCount': '{count} id disembunyikan',
    'bonus.hiddenShow': 'Tampilkan',
    'bonus.hiddenHideList': 'Sembunyikan daftar',
    'bonus.unhideBtn': 'Tampilkan lagi',
    'bonus.unmatchedNote': '{count} bonus tidak punya deposit confirmed yang cocok di History QR Pay, jadi tidak bisa dicek kesesuaiannya.',
    'bonus.countBadge': '{pending} pending · {mismatch} tidak sesuai · {double} dobel',
    'bonus.notePending': 'Belum dapat bonus',
    'bonus.noteExcess': 'Kelebihan Rp',
    'bonus.noteShortage': 'Kekurangan Rp',
    'bonus.noteDouble': '{count}x diberikan',
    'bonus.noteMultiRowSuffix': '({count} baris digabung)',

    'inputBonus.title': 'Input Bonus',
    'inputBonus.dataTitle': 'Data Input Bonus',
    'inputBonus.sortTitle': 'Urutkan',
    'inputBonus.sortDesc': 'Nominal Terbesar',
    'inputBonus.sortAsc': 'Nominal Terkecil',
    'inputBonus.processBtn': 'Proses',
    'inputBonus.resultTitle': 'Hasil Input Bonus',
    'inputBonus.copyBtn': 'Copy Hasil',
    'inputBonus.copyBtnDone': 'Tersalin!',
    'inputBonus.thId': 'ID',
    'inputBonus.thAmount': 'Nominal Bonus',
    'inputBonus.emptyState': 'Isi Data Input Bonus, lalu klik "Proses".',
    'inputBonus.noData': 'Data belum diisi atau formatnya tidak terbaca.',
    'inputBonus.noDouble': 'Tidak ada dobel',
    'inputBonus.doubleBadge': '{count} id dobel',

    'newmember.title': 'New Member First Deposit',
    'newmember.listTitle': 'Daftar ID Member Baru',
    'newmember.checkBtn': 'Cek New Member First Deposit',
    'newmember.resultTitle': 'First deposit ditemukan',
    'newmember.emptyIds': 'Daftar id member baru belum diisi.',
    'newmember.flaggedWarn': 'Ditemukan Member Safety di daftar ini: {items}',
    'newmember.countBadge': '{deposited} dari {total} id sudah deposit',

    'flagged.title': 'Member Safety',
    'flagged.listTitle': 'Daftar Member Safety',
    'flagged.catSafety': 'Safety',
    'flagged.catNoBonus': 'Tidak Dapat Bonus',
    'flagged.catOther': 'Lainnya',
    'flagged.addBtn': 'Tambah',
    'flagged.toggleShow': 'Lihat Daftar Member Safety',
    'flagged.toggleHide': 'Sembunyikan Daftar Member Safety',
    'flagged.viewAdminOnly': 'Login admin untuk melihat daftar Member Safety.',
    'flagged.backupAdminOnly': 'Login admin untuk mengakses backup & restore.',
    'flagged.thId': 'ID',
    'flagged.thCategory': 'Kategori',
    'flagged.thNote': 'Keterangan',
    'flagged.thAdded': 'Ditambahkan',
    'flagged.emptyState': 'Belum ada Member Safety yang ditambahkan.',
    'flagged.backupTitle': 'Backup & Restore',
    'flagged.exportBtn': 'Export Backup (.json)',
    'flagged.importBtn': 'Import Backup',
    'flagged.deleteBtn': 'Hapus',
    'flagged.fillIdFirst': 'Isi id/username dulu.',
    'flagged.confirmDelete1': 'Yakin ingin menghapus id "{id}" dari daftar Member Safety?',
    'flagged.confirmDelete2': 'Konfirmasi sekali lagi: hapus "{id}" secara permanen dari daftar?',
    'flagged.invalidJson': 'File backup tidak valid (bukan JSON).',
    'flagged.invalidList': 'File backup tidak valid (isinya harus berupa daftar).',
    'flagged.importDone': 'Import selesai: {added} id baru, {updated} id diperbarui.',
    'flagged.importFailed': 'Import gagal: {error}',
    'flagged.saveFailed': 'Gagal menyimpan: {error}',

    'winlose.title': 'Win/Lose Member All Game',
    'winlose.dataTitle': 'Data Win/Lose',
    'winlose.uploadTitle': 'Upload file Excel',
    'winlose.uploadHint': 'Seret & lepas di sini, atau klik untuk pilih file (.xlsx, .xls, .csv)',
    'winlose.uploadOr': 'atau paste manual',
    'winlose.uploadRemove': 'Hapus file',
    'winlose.uploadReadError': 'Gagal membaca file: {error}',
    'winlose.uploadEmpty': 'File tidak berisi data yang bisa dibaca.',
    'winlose.sortTitle': 'Urutkan',
    'winlose.thresholdAll': 'Semua ID',
    'winlose.threshold200rb': 'Min 200rb',
    'winlose.threshold250rb': 'Min 250rb',
    'winlose.threshold300rb': 'Min 300rb',
    'winlose.threshold400rb': 'Min 400rb',
    'winlose.threshold500rb': 'Min 500rb',
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

    'wd.title': 'Laporan Withdraw',
    'wd.pageDesc': 'Cek ringkasan deposit & withdraw satu id member, berdasarkan data History yang di-paste.',
    'wd.detailTitle': 'Detail Member',
    'wd.websitePlaceholder': 'Nama Website',
    'wd.idPlaceholder': 'ID Member',
    'wd.registerPlaceholder': 'Waktu Register (opsional)',
    'wd.rangeInfo': 'Rentang data (3 bulan terakhir, klik untuk copy): <strong>{range}</strong>',
    'wd.depositDataTitle': 'Data Deposit (3 Bulan Terakhir)',
    'wd.withdrawDataTitle': 'Data Withdraw (3 Bulan Terakhir)',
    'wd.processTitle': 'Proses',
    'wd.gameLabel': 'Jenis Game:',
    'wd.betTypeLabel': 'Jenis Taruhan:',
    'wd.betSingle': 'Single Bet',
    'wd.betParlay': 'Parlay',
    'wd.betOu': 'O/U',
    'wd.processBtn': 'Proses',
    'wd.resultTitle': 'Hasil Laporan',
    'wd.copyBtn': 'Copy Hasil',
    'wd.copyBtnDone': 'Tersalin!',
    'wd.emptyState': 'Isi ID member & data Deposit/Withdraw, lalu klik "Proses".',
    'wd.noIdWarn': 'Isi ID member dulu.',
    'wd.noDataWarn': 'Tidak ada data deposit maupun withdraw untuk id ini di data yang di-paste.',

    'nav.winlosemember': '3.2 Win/Lose Member',
    'wlm.title': 'Win/Lose Member',
    'wlm.pageDesc': 'Rekap bulanan total deposit, withdraw, bonus harian & bonus cashback satu id member, tersusun per bulan lengkap dengan status win/lose-nya.',
    'wlm.idTitle': 'ID Member',
    'wlm.depositDataTitle': 'Data Deposit Request History',
    'wlm.withdrawDataTitle': 'Data Withdraw History',
    'wlm.processTitle': 'Proses',
    'wlm.processBtn': 'Proses',
    'wlm.resultTitle': 'Rekap per Bulan',
    'wlm.thDeposit': 'Total Deposit',
    'wlm.thWithdraw': 'Total Withdraw',
    'wlm.thHarian': 'Bonus Harian',
    'wlm.thCashback': 'Bonus Cashback',
    'wlm.thStatus': 'Status (Win/Lose)',
    'wlm.totalRowLabel': 'TOTAL',
    'wlm.statusWin': 'WIN',
    'wlm.statusLose': 'LOSE',
    'wlm.statusImpas': 'IMPAS',
    'wlm.emptyState': 'Isi ID member & data Deposit Request History/Withdraw History, lalu klik "Proses".',
    'wlm.noIdWarn': 'Isi ID member dulu.',
    'wlm.noDataWarn': 'Tidak ada data deposit maupun withdraw untuk id ini di data yang di-paste.',

    'nav.wdbalance': '4.2 Withdraw Balance',
    'wb.title': 'Withdraw Balance',
    'wb.pageDesc': 'Cek apakah ID & nominal di Doc Spreadsheets sama dengan Withdraw History.',
    'wb.panelDataTitle': 'Data Withdraw History',
    'wb.sheetDataTitle': 'Data Doc Spreadsheets',
    'wb.optShowOk': 'Tampilkan yang cocok',
    'wb.processTitle': 'Proses',
    'wb.processBtn': 'Proses',
    'wb.resultTitle': 'Hasil Pengecekan',
    'wb.copyBtn': 'Copy Temuan',
    'wb.copyBtnDone': 'Tersalin!',
    'wb.thStatus': 'Status',
    'wb.thUser': 'User Name',
    'wb.thPanel': 'Withdraw History',
    'wb.thSheet': 'Sheet',
    'wb.thDiff': 'Selisih',
    'wb.thNote': 'Keterangan',
    'wb.type.wrongAmount': 'Nominal beda',
    'wb.type.missingInSheet': 'Belum ada di sheet',
    'wb.type.notInPanel': 'Tidak ada di Withdraw History',
    'wb.type.ok': 'Cocok',
    'wb.type.refund': 'Refund (manual)',
    'wb.noteRemark': 'Remark: {remark}',
    'wb.noteRefund': 'Diproses manual, dicatat REFUND di sheet',
    'wb.summary': 'Withdraw History (ABD): {panelCount} baris (Rp {panelTotal}) · Sheet: {sheetCount} baris (Rp {sheetTotal}) · Manual/TM tanpa (ABD) dilewati: {manual} baris · Cocok: {ok} · Refund manual: {refund}',
    'wb.issueCount': '{n} temuan',
    'wb.allGood': 'Semua cocok',
    'wb.noRows': 'Tidak ada temuan.',
    'wb.emptyState': 'Paste data Withdraw History & data Doc Spreadsheets, lalu klik "Proses".',
    'wb.noPanelWarn': 'Isi data Withdraw History dulu.',
    'wb.noSheetWarn': 'Isi data Doc Spreadsheets dulu.',
    'wb.noDataWarn': 'Tidak ada baris withdraw yang bisa dibaca dari data yang di-paste.',
  },
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.accountrequests': 'Account Requests',
    'nav.group1': '1. Bonus',
    'nav.bonus': '1.1 Check Bonus',
    'nav.inputbonus': '1.2 Input Bonus',
    'nav.group2': '2. Member',
    'nav.flagged': '2.1 Member Safety',
    'nav.newmember': '2.2 New Member First Deposit',
    'nav.group3': '3. Win/Lose',
    'nav.group4': '4. Withdraw',
    'nav.winlose': '3.1 Win/Lose All Game',
    'nav.withdrawreport': '4.1 Laporan Withdraw',

    'admin.logout': 'Logout',
    'admin.emailPlaceholder': 'Email',
    'admin.passwordPlaceholder': 'Password',
    'admin.loginSubmit': 'Login',
    'admin.loginError': 'Wrong email or password.',
    'admin.importAdminOnly': 'Only admin can import a backup. Please log in as admin first.',
    'admin.editAdminOnly': 'Id "{id}" already exists in the list. Only admin can edit/delete existing ids — log in as admin first.',
    'admin.deleteFailed': 'Failed to delete: {error}',

    'gate.tabLogin': 'Login',
    'gate.tabRequest': 'Request Account',
    'gate.loginDesc': 'Sign in to access all Working Tools features.',
    'gate.requestDesc': "Don't have an account? Send a request and an admin will review it.",
    'gate.namePlaceholder': 'Name',
    'gate.emailPlaceholder': 'Email',
    'gate.notePlaceholder': 'Note (optional)',
    'gate.requestSubmit': 'Send Request',
    'gate.requestFillRequired': 'Fill in name and email first.',
    'gate.requestSent': "Request sent. Wait for admin approval — you'll be able to log in once approved and you receive the set-password email.",
    'gate.requestFailed': 'Failed to send request: {error}',

    'accreq.title': 'Account Requests',
    'accreq.pendingTitle': 'Awaiting Approval',
    'accreq.pendingEmpty': 'No pending requests.',
    'accreq.historyTitle': 'History',
    'accreq.historyEmpty': 'No history yet.',
    'accreq.thName': 'Name',
    'accreq.thEmail': 'Email',
    'accreq.thNote': 'Note',
    'accreq.thRequested': 'Requested',
    'accreq.thStatus': 'Status',
    'accreq.thReviewed': 'Reviewed',
    'accreq.thAction': 'Action',
    'accreq.approveBtn': 'Approve',
    'accreq.approving': 'Processing...',
    'accreq.rejectBtn': 'Reject',
    'accreq.resendBtn': 'Resend Email',
    'accreq.statusApproved': 'Approved',
    'accreq.statusRejected': 'Rejected',
    'accreq.confirmReject': 'Reject the account request from "{name}"?',
    'accreq.approveFailed': 'Failed to approve: {error}',
    'accreq.rejectFailed': 'Failed to reject: {error}',
    'accreq.resendDone': 'Set-password email resent.',
    'accreq.resendFailed': 'Failed to resend: {error}',

    'activity.title': 'User Activity',
    'activity.empty': 'No activity yet.',
    'activity.login': '{email} logged in',
    'activity.logout': '{email} logged out',
    'activity.passwordChange': '{email} changed their password',
    'activity.flagAdd': '{email} added id "{id}" to Member Safety ({category})',
    'activity.flagDelete': '{email} removed id "{id}" from Member Safety',
    'activity.requestSubmitted': '{name} requested an account',
    'activity.requestApproved': '{email} approved the account request from {target}',
    'activity.requestRejected': '{email} rejected the account request from {target}',

    'nav.usermonitor': 'Monitor Users',
    'um.title': 'Monitor Users',
    'um.pageDesc': 'See who is online and browse the activity log of all users.',
    'um.tabUsers': 'Users',
    'um.tabLog': 'Activity Log',
    'um.usersTitle': 'User List',
    'um.onlineBadge': '{online} online · {total} users',
    'um.thUser': 'User',
    'um.thStatus': 'Status',
    'um.thLastLogin': 'Last Login',
    'um.thLastActive': 'Last Active',
    'um.thPage': 'Currently on',
    'um.thDevice': 'Device',
    'um.usersEmpty': 'No user data yet.',
    'um.usersNote': 'Online = active within the last 5 minutes. Users appear after they log in once this feature is live.',
    'um.statusOnline': 'Online',
    'um.statusOffline': 'Offline',
    'um.statusNever': 'Never logged in',
    'um.exportBtn': 'Export CSV',
    'um.filterAllTypes': 'All actions',
    'um.filterLogin': 'Login & Account',
    'um.filterSafety': 'Member Safety',
    'um.filterAccounts': 'Account Requests',
    'um.filterAllUsers': 'All users',
    'um.filterFrom': 'From date',
    'um.filterTo': 'To date',
    'um.searchPlaceholder': 'Search...',
    'um.resetBtn': 'Reset',
    'um.logInfo': 'Showing {shown} of {loaded} loaded entries.',
    'um.thTime': 'Time',
    'um.thAction': 'Action',
    'um.thDetail': 'Detail',
    'um.logEmpty': 'No matching activity.',
    'um.loadMore': 'Load more',
    'um.type.login': 'Login',
    'um.type.logout': 'Logout',
    'um.type.password_change': 'Changed password',
    'um.type.flag_add': 'Added Member Safety',
    'um.type.flag_delete': 'Removed Member Safety',
    'um.type.account_request_submitted': 'Requested account',
    'um.type.account_request_approved': 'Approved account',
    'um.type.account_request_rejected': 'Rejected account',

    'profile.title': 'My Profile',
    'profile.pageDesc': 'Manage your account, change your password, and set your display preferences.',
    'profile.accountTitle': 'Account',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.role': 'Role',
    'profile.roleAdmin': 'Admin',
    'profile.roleUser': 'User',
    'profile.created': 'Account created',
    'profile.lastSignIn': 'Last sign-in',
    'profile.passwordTitle': 'Change Password',
    'profile.oldPw': 'Current password',
    'profile.newPw': 'New password (min. 8 characters)',
    'profile.confirmPw': 'Repeat new password',
    'profile.pwBtn': 'Change Password',
    'profile.pwFillAll': 'Fill in all password fields first.',
    'profile.pwTooShort': 'The new password must be at least {min} characters.',
    'profile.pwMismatch': 'The password confirmation does not match.',
    'profile.pwSame': 'The new password must be different from the old one.',
    'profile.pwWrong': 'The current password is incorrect.',
    'profile.pwWeak': 'The new password is too weak.',
    'profile.pwTooMany': 'Too many attempts. Please try again in a moment.',
    'profile.pwFailed': 'Failed to change password: {error}',
    'profile.pwDone': 'Password changed successfully.',
    'profile.flagsTitle': 'Member Safety I Added',
    'profile.flagsEmpty': "You haven't added any ids yet.",
    'profile.flagsNote': 'Only ids added through your account since this feature went live are listed here.',
    'profile.prefsTitle': 'Preferences',
    'profile.language': 'Language',
    'profile.hiddenInfo': '{count} ids hidden in Check Bonus (this browser only)',
    'profile.hiddenReset': 'Show all again',
    'profile.howtoLabel': 'Usage instruction cards',
    'profile.howtoOpenAll': 'Open all',
    'profile.howtoCloseAll': 'Close all',

    'ticker.title': 'New Member Safety:',
    'ticker.empty': 'No Member Safety yet',
    'common.clickToCopy': 'Click to copy',
    'devtools.blockedMessage': 'Developer tools access is disabled on this page.',

    'howto.title': 'How to Use',
    'howto.editBtn': 'Edit',
    'howto.saveBtn': 'Save',
    'howto.cancelBtn': 'Cancel',
    'howto.placeholder': 'No usage instructions yet for this feature.',
    'howto.textareaPlaceholder': 'Write usage instructions for this feature...',
    'howto.saveFailed': 'Failed to save: {error}',

    'dataSumber.qr': 'History QR Pay',
    'dataSumber.history': 'History',

    'dashboard.title': 'Dashboard',
    'dashboard.statTotal': 'Total Member Safety',
    'dashboard.statSafety': 'Safety Category',
    'dashboard.statNoBonus': 'No Bonus',
    'dashboard.statLatest': 'Last Added',
    'dashboard.menuTitle': 'Menu',
    'dashboard.linkBonusTitle': 'Check Bonus',
    'dashboard.linkBonusDesc': 'Detect pending, mismatched, and duplicate bonuses.',
    'dashboard.linkFlaggedTitle': 'Member Safety',
    'dashboard.linkFlaggedDesc': 'Manage the list of ids to watch out for.',
    'dashboard.linkNewMemberTitle': 'New Member First Deposit',
    'dashboard.linkNewMemberDesc': "Find each new member id's first deposit.",
    'dashboard.linkWinloseTitle': 'Win/Lose Member All Game',
    'dashboard.linkWinloseDesc': 'Rank ids by win/loss amount.',
    'dashboard.linkWithdrawTitle': 'Withdraw Report',
    'dashboard.linkWithdrawDesc': "One member's deposit & withdraw summary.",
    'dashboard.subtitle': 'Pick a menu below to get started.',
    'dashboard.linkInputBonusTitle': 'Input Bonus',
    'dashboard.linkInputBonusDesc': 'Sort the bonuses already given and flag duplicate ids.',
    'dashboard.linkWinloseMemberTitle': 'Win/Lose Member',
    'dashboard.linkWinloseMemberDesc': "Monthly recap of one member's deposit, withdraw, and bonus.",
    'dashboard.linkWdBalanceTitle': 'Withdraw Balance',
    'dashboard.linkWdBalanceDesc': 'Match panel withdraws against the Doc Spreadsheets.',

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
    'bonus.thAction': 'Action',
    'bonus.noDataWarn': "No data entered yet, or the format isn't recognized. Paste the QR Pay History and/or bonus History first.",
    'bonus.safeEmpty': 'All clear: nothing pending, mismatched, or duplicated.',
    'bonus.allHiddenEmpty': 'All issues found are currently hidden ({count} id(s)). Click "Show" above to see them again.',
    'bonus.hideIdBtn': 'Hide',
    'bonus.hideIdTitle': 'Hide this id from Check Bonus results (saved in this browser only)',
    'bonus.hiddenCount': '{count} id(s) hidden',
    'bonus.hiddenShow': 'Show',
    'bonus.hiddenHideList': 'Hide list',
    'bonus.unhideBtn': 'Unhide',
    'bonus.unmatchedNote': "{count} bonus(es) have no matching confirmed deposit in the QR Pay History, so they couldn't be checked.",
    'bonus.countBadge': '{pending} pending · {mismatch} mismatched · {double} duplicate',
    'bonus.notePending': 'No bonus yet',
    'bonus.noteExcess': 'Excess Rp',
    'bonus.noteShortage': 'Shortfall Rp',
    'bonus.noteDouble': 'given {count}x',
    'bonus.noteMultiRowSuffix': '({count} rows combined)',

    'inputBonus.title': 'Input Bonus',
    'inputBonus.dataTitle': 'Input Bonus Data',
    'inputBonus.sortTitle': 'Sort',
    'inputBonus.sortDesc': 'Highest Amount',
    'inputBonus.sortAsc': 'Lowest Amount',
    'inputBonus.processBtn': 'Process',
    'inputBonus.resultTitle': 'Input Bonus Result',
    'inputBonus.copyBtn': 'Copy Result',
    'inputBonus.copyBtnDone': 'Copied!',
    'inputBonus.thId': 'ID',
    'inputBonus.thAmount': 'Bonus Amount',
    'inputBonus.emptyState': 'Fill in the Input Bonus Data, then click "Process".',
    'inputBonus.noData': "No data entered yet, or the format isn't recognized.",
    'inputBonus.noDouble': 'No duplicates',
    'inputBonus.doubleBadge': '{count} duplicate id(s)',

    'newmember.title': 'New Member First Deposit',
    'newmember.listTitle': 'New Member ID List',
    'newmember.checkBtn': 'Check New Member First Deposit',
    'newmember.resultTitle': 'First deposits found',
    'newmember.emptyIds': 'The new member id list is empty.',
    'newmember.flaggedWarn': 'Found Member Safety entries in this list: {items}',
    'newmember.countBadge': '{deposited} of {total} ids have deposited',

    'flagged.title': 'Member Safety',
    'flagged.listTitle': 'Member Safety List',
    'flagged.catSafety': 'Safety',
    'flagged.catNoBonus': 'No Bonus',
    'flagged.catOther': 'Other',
    'flagged.addBtn': 'Add',
    'flagged.toggleShow': 'Show Member Safety List',
    'flagged.toggleHide': 'Hide Member Safety List',
    'flagged.viewAdminOnly': 'Log in as admin to view the Member Safety list.',
    'flagged.backupAdminOnly': 'Log in as admin to access backup & restore.',
    'flagged.thId': 'ID',
    'flagged.thCategory': 'Category',
    'flagged.thNote': 'Note',
    'flagged.thAdded': 'Added',
    'flagged.emptyState': 'No Member Safety added yet.',
    'flagged.backupTitle': 'Backup & Restore',
    'flagged.exportBtn': 'Export Backup (.json)',
    'flagged.importBtn': 'Import Backup',
    'flagged.deleteBtn': 'Delete',
    'flagged.fillIdFirst': 'Fill in the id/username first.',
    'flagged.confirmDelete1': 'Delete id "{id}" from the Member Safety list?',
    'flagged.confirmDelete2': 'Confirm once more: permanently delete "{id}" from the list?',
    'flagged.invalidJson': 'Invalid backup file (not JSON).',
    'flagged.invalidList': 'Invalid backup file (content must be a list).',
    'flagged.importDone': 'Import finished: {added} new id(s), {updated} updated.',
    'flagged.importFailed': 'Import failed: {error}',
    'flagged.saveFailed': 'Failed to save: {error}',

    'winlose.title': 'Win/Lose Member All Game',
    'winlose.dataTitle': 'Win/Lose Data',
    'winlose.uploadTitle': 'Upload Excel file',
    'winlose.uploadHint': 'Drag & drop here, or click to choose a file (.xlsx, .xls, .csv)',
    'winlose.uploadOr': 'or paste manually',
    'winlose.uploadRemove': 'Remove file',
    'winlose.uploadReadError': 'Failed to read file: {error}',
    'winlose.uploadEmpty': "The file doesn't contain any readable data.",
    'winlose.sortTitle': 'Sort',
    'winlose.thresholdAll': 'All IDs',
    'winlose.threshold200rb': 'Min 200K',
    'winlose.threshold250rb': 'Min 250K',
    'winlose.threshold300rb': 'Min 300K',
    'winlose.threshold400rb': 'Min 400K',
    'winlose.threshold500rb': 'Min 500K',
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

    'wd.title': 'Withdraw Report',
    'wd.pageDesc': "Check one member's deposit & withdraw summary from the pasted History data.",
    'wd.detailTitle': 'Member Detail',
    'wd.websitePlaceholder': 'Website Name',
    'wd.idPlaceholder': 'Member ID',
    'wd.registerPlaceholder': 'Registration Time (optional)',
    'wd.rangeInfo': 'Data range (last 3 months, click to copy): <strong>{range}</strong>',
    'wd.depositDataTitle': 'Deposit Data (Last 3 Months)',
    'wd.withdrawDataTitle': 'Withdraw Data (Last 3 Months)',
    'wd.processTitle': 'Process',
    'wd.gameLabel': 'Game Type:',
    'wd.betTypeLabel': 'Bet Type:',
    'wd.betSingle': 'Single Bet',
    'wd.betParlay': 'Parlay',
    'wd.betOu': 'O/U',
    'wd.processBtn': 'Process',
    'wd.resultTitle': 'Report Result',
    'wd.copyBtn': 'Copy Result',
    'wd.copyBtnDone': 'Copied!',
    'wd.emptyState': 'Fill in the member ID & Deposit/Withdraw data, then click "Process".',
    'wd.noIdWarn': 'Fill in the member ID first.',
    'wd.noDataWarn': 'No deposit or withdraw data found for this id in the pasted data.',

    'nav.winlosemember': '3.2 Win/Lose Member',
    'wlm.title': 'Win/Lose Member',
    'wlm.pageDesc': "Monthly recap of one member's total deposit, withdraw, daily bonus & cashback bonus, broken down by month with a win/lose status.",
    'wlm.idTitle': 'Member ID',
    'wlm.depositDataTitle': 'Deposit Request History Data',
    'wlm.withdrawDataTitle': 'Withdraw History Data',
    'wlm.processTitle': 'Process',
    'wlm.processBtn': 'Process',
    'wlm.resultTitle': 'Monthly Recap',
    'wlm.thDeposit': 'Total Deposit',
    'wlm.thWithdraw': 'Total Withdraw',
    'wlm.thHarian': 'Daily Bonus',
    'wlm.thCashback': 'Cashback Bonus',
    'wlm.thStatus': 'Status (Win/Lose)',
    'wlm.totalRowLabel': 'TOTAL',
    'wlm.statusWin': 'WIN',
    'wlm.statusLose': 'LOSE',
    'wlm.statusImpas': 'EVEN',
    'wlm.emptyState': 'Fill in the member ID & Deposit Request History/Withdraw History data, then click "Process".',
    'wlm.noIdWarn': 'Fill in the member ID first.',
    'wlm.noDataWarn': 'No deposit or withdraw data found for this id in the pasted data.',

    'nav.wdbalance': '4.2 Withdraw Balance',
    'wb.title': 'Withdraw Balance',
    'wb.pageDesc': 'Check whether the IDs & amounts in the Doc Spreadsheets match the Withdraw History.',
    'wb.panelDataTitle': 'Withdraw History Data',
    'wb.sheetDataTitle': 'Data Doc Spreadsheets',
    'wb.optShowOk': 'Show matches',
    'wb.processTitle': 'Process',
    'wb.processBtn': 'Process',
    'wb.resultTitle': 'Check Result',
    'wb.copyBtn': 'Copy Findings',
    'wb.copyBtnDone': 'Copied!',
    'wb.thStatus': 'Status',
    'wb.thUser': 'User Name',
    'wb.thPanel': 'Withdraw History',
    'wb.thSheet': 'Sheet',
    'wb.thDiff': 'Difference',
    'wb.thNote': 'Note',
    'wb.type.wrongAmount': 'Amount mismatch',
    'wb.type.missingInSheet': 'Not in sheet yet',
    'wb.type.notInPanel': 'Not in Withdraw History',
    'wb.type.ok': 'Match',
    'wb.type.refund': 'Refund (manual)',
    'wb.noteRemark': 'Remark: {remark}',
    'wb.noteRefund': 'Processed manually, marked REFUND in the sheet',
    'wb.summary': 'Withdraw History (ABD): {panelCount} rows (Rp {panelTotal}) · Sheet: {sheetCount} rows (Rp {sheetTotal}) · Manual/TM without (ABD) skipped: {manual} rows · Matched: {ok} · Manual refunds: {refund}',
    'wb.issueCount': '{n} findings',
    'wb.allGood': 'All matched',
    'wb.noRows': 'No findings.',
    'wb.emptyState': 'Paste the Withdraw History & the Doc Spreadsheets data, then click "Process".',
    'wb.noPanelWarn': 'Fill in the Withdraw History data first.',
    'wb.noSheetWarn': 'Fill in the Doc Spreadsheets data first.',
    'wb.noDataWarn': 'No withdraw rows could be read from the pasted data.',
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
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
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
  if (typeof renderHowtoBoxes === 'function') renderHowtoBoxes();
  if (typeof renderMonitor === 'function') renderMonitor();
  if (typeof renderProfile === 'function') renderProfile();
  if (typeof renderWbResult === 'function') renderWbResult();
  if (typeof updateWdDateRange === 'function') updateWdDateRange();
  if (typeof updateWdGameSummary === 'function') updateWdGameSummary();
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

// --- Deteksi DevTools terbuka (deteren tampilan, BUKAN proteksi keamanan asli — data
// tetap diamankan lewat Firestore Rules, bukan lewat ini). Dua sinyal digabung karena
// masing-masing cuma nangkep satu skenario:
//  1) Selisih ukuran outer/inner window — kena kalau DevTools nempel (docked) di
//     sisi/bawah browser.
//  2) "Umpan" console.log — properti getter di objek yang di-log cuma kepanggil
//     kalau panel Console beneran aktif me-render tampilannya, jadi kena juga
//     kalau DevTools dibuka sebagai jendela terpisah (undocked).
// Sengaja dibikin REVERSIBEL (overlay hilang otomatis begitu sinyalnya negatif) dan
// butuh 2x deteksi berturut-turut sebelum muncul, supaya resize/zoom sesaat yang wajar
// tidak keliru dianggap DevTools kebuka.
(function () {
  const SIZE_GAP_THRESHOLD = 160;
  const CHECK_INTERVAL_MS = 1000;
  let consecutiveHits = 0;
  let overlayShown = false;

  function checkSizeGap() {
    return (window.outerWidth - window.innerWidth) > SIZE_GAP_THRESHOLD
      || (window.outerHeight - window.innerHeight) > SIZE_GAP_THRESHOLD;
  }

  function checkConsoleBait() {
    let hit = false;
    const bait = new Image();
    Object.defineProperty(bait, 'id', { get() { hit = true; return ''; } });
    console.log(bait);
    console.clear();
    return hit;
  }

  function showOverlay() {
    if (overlayShown) return;
    overlayShown = true;
    const el = document.createElement('div');
    el.id = 'devtoolsOverlay';
    el.innerHTML = `
      <img src="logo.png" alt="Working Tools">
      <p>${t('devtools.blockedMessage')}</p>
    `;
    document.body.appendChild(el);
  }

  function hideOverlay() {
    overlayShown = false;
    const el = document.getElementById('devtoolsOverlay');
    if (el) el.remove();
  }

  setInterval(() => {
    const detected = checkSizeGap() || checkConsoleBait();
    consecutiveHits = detected ? consecutiveHits + 1 : 0;
    if (consecutiveHits >= 2) showOverlay();
    else if (!detected) hideOverlay();
  }, CHECK_INTERVAL_MS);
})();

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
// Baris keterangan di history bisa macam-macam remark. Yang dihitung sebagai bonus
// beneran cuma: "BONUS DEPOSIT"/"BONUS DP" (bonus awal), atau "KEKURANGAN BONUS..."
// (bonus SUSULAN karena pemberian sebelumnya kurang — sah, bukan dobel/error).
// Remark lain yang mirip tapi BUKAN bonus (mis. "TM BONUS", "TM", "BATAL WD",
// "SALDO DIKEMBALIKAN") otomatis tidak ikut cocok karena pola di bawah memang
// spesifik mensyaratkan "BONUS" diikuti "DEPOSIT"/"DP", atau didahului "KEKURANGAN".
const BONUS_DEPOSIT_RE = /\bBONUS\s+(?:DEPOSIT|DP)\b|\bKEKURANGAN\s+BONUS(?:\s+(?:DEPOSIT|DP))?\b/i;
const AGENT_DEPOSIT_RE = /\bAGENT\s+DEPOSIT\b/i;
const BONUS_TOPUP_RE = /\bKEKURANGAN\s+BONUS\b/i;
// Khusus dipakai Win/Lose Member untuk memisah Bonus Harian & Bonus Cashback jadi
// kolom sendiri-sendiri (lihat classifyWlmDeposit()) — SENGAJA regex baru, bukan
// menumpangi BONUS_DEPOSIT_RE/depositType yang sudah ada, supaya Cek Bonus & Laporan
// Withdraw (yang sudah menganggap remark "...BONUS DEPOSIT HARIAN" sebagai bonus
// deposit biasa) tidak ikut berubah perilakunya.
const BONUS_HARIAN_RE = /\bHARIAN\b/i;
const BONUS_CASHBACK_RE = /\bCASHBACK\b/i;

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

      let depositType = '';
      if (BONUS_DEPOSIT_RE.test(block)) depositType = 'bonus';
      else if (AGENT_DEPOSIT_RE.test(block)) depositType = 'agent';
      const isBonusTopup = depositType === 'bonus' && BONUS_TOPUP_RE.test(block);

      return { username, amount, timestamp, dateText, status, depositType, code, isBonusTopup, block };
    })
    .filter(r => r.username);
}

function isBonusDeposit(record) {
  return record.depositType === 'bonus';
}

// Batas maksimal bonus: 5% selalu dibatasi 100rb. Untuk 10%, hanya kode "BGG"
// yang dibatasi 200rb — kode lainnya tetap dibatasi 100rb walau pilihan persennya 10%.
function getBonusCap(code) {
  return (code || '').toUpperCase() === 'BGG' ? 200000 : 100000;
}

function computeExpectedBonus(amount, pct, code) {
  const rawBonus = Math.round(amount * pct / 100);
  return Math.min(rawBonus, getBonusCap(code));
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

// Bonus itu SEKALI PER ID — begitu sebuah id pernah dapat bonus (untuk deposit
// manapun, kapan pun), id itu tidak pernah dianggap "pending" lagi, walau dia
// deposit lagi setelahnya. "Pending" (belum dapat bonus) HANYA untuk id yang belum
// pernah punya baris BONUS DEPOSIT sama sekali di History — dan hanya dihitung dari
// deposit confirmed (parameter `deposits` di sini memang sudah difilter status
// confirmed dari pemanggilnya).
//
// Bonus di History tidak menyebutkan deposit mana yang jadi dasarnya. Sesuai cara
// admin menghitungnya di dunia nyata: tiap bonus dicocokkan ke deposit confirmed
// PALING BARU milik username yang sama PADA SAAT bonus itu diberikan (waktu deposit
// <= waktu bonus) — bukan deposit pertama/paling lama. Karena pencariannya berbasis
// waktu per bonus, deposit yang terjadi SETELAH sebuah bonus otomatis tidak pernah
// ikut kepakai untuk bonus itu, jadi bonus lama tidak salah terbaca "tidak sesuai"
// gara-gara deposit baru.
//
// PENTING: kalau tidak ada satu pun deposit dengan waktu <= waktu bonus (mis. History
// QR Pay yang di-paste tidak mencakup deposit lama yang jadi dasar bonus itu), bonus
// itu ditandai "tidak bisa diverifikasi" (unmatchedCount) — TIDAK "menebak" pakai
// deposit lain yang tersedia (termasuk deposit yang lebih baru).
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
  const unmatchedEvents = [];

  byUser.forEach(data => {
    const ds = data.deposits.slice().sort((a, b) => a.timestamp - b.timestamp);
    const bs = data.bonuses.slice().sort((a, b) => a.timestamp - b.timestamp);

    bs.forEach(bonus => {
      // ds terurut naik — cari dari belakang supaya yang pertama ketemu adalah
      // deposit paling baru yang waktunya <= waktu bonus. Tidak ada fallback ke
      // deposit yang lebih baru — kalau tidak ketemu, biarkan unmatched.
      let matched = null;
      for (let i = ds.length - 1; i >= 0; i--) {
        if (ds[i].timestamp <= bonus.timestamp) { matched = ds[i]; break; }
      }
      if (!matched) {
        unmatchedEvents.push(bonus);
      } else {
        pairs.push({ deposit: matched, bonus });
      }
    });

    // Id ini belum pernah dapat bonus sama sekali -> deposit confirmed TERBARUnya
    // yang ditampilkan sebagai pending (menunjukkan nominal bonus yang seharusnya).
    if (ds.length > 0 && bs.length === 0) {
      pendingDeposits.push(ds[ds.length - 1]);
    }
  });

  return { pairs, pendingDeposits, unmatchedEvents };
}

// Beberapa bonus event bisa kepasang ke deposit YANG SAMA (mis. bonus awal dikasih
// kurang, lalu ditutup dengan susulan beberapa saat kemudian) — lihat komentar di
// atas matchDepositsAndBonuses(). Di real data, admin biasanya TIDAK menandai baris
// susulan itu dengan kata kunci apa pun di History (kolom Remark kosong), jadi tidak
// bisa diandalkan cuma dari teksnya (lihat groupBonusEvents() yang menangani kasus
// KALAU memang ada kata kuncinya). Makanya di sini bonus-bonus yang kepasang ke
// deposit yang sama digabung lagi jadi satu grup SEBELUM dievaluasi kesesuaiannya:
// dibandingkan JUMLAH semuanya vs seharusnya — bukan satu-satu — supaya pembayaran
// yang sengaja dicicil (mis. 20rb lalu susulan 10rb untuk deposit yang seharusnya
// dapat 30rb) tidak salah terbaca "kekurangan" pada kedua baris sekaligus maupun
// "dobel" padahal totalnya sudah pas.
function groupPairsByDeposit(pairs) {
  const map = new Map();
  pairs.forEach(({ deposit, bonus }) => {
    if (!map.has(deposit)) map.set(deposit, { deposit, bonusEvents: [] });
    map.get(deposit).bonusEvents.push(bonus);
  });
  return Array.from(map.values());
}

// Satu "bonus" yang sah bisa terdiri dari lebih dari satu baris History: bonus awal,
// lalu nol atau lebih baris susulan kekurangan ("KEKURANGAN BONUS...") yang menutupi
// selisihnya. Baris-baris ini digabung jadi satu "event" (nominalnya dijumlah) SEBELUM
// dicocokkan ke deposit atau dicek dobel — supaya bonus awal yang sengaja kurang lalu
// ditutup dengan susulan tidak salah terbaca "kekurangan" (dievaluasi sendiri-sendiri)
// maupun "dobel" (dianggap 2 bonus terpisah, padahal cuma 1 bonus yang dicicil).
function groupBonusEvents(bonusRecords) {
  const byUser = new Map();
  bonusRecords.forEach(r => {
    const key = r.username.toLowerCase();
    if (!byUser.has(key)) byUser.set(key, []);
    byUser.get(key).push(r);
  });

  const events = [];
  byUser.forEach(records => {
    const sorted = records.slice().sort((a, b) => a.timestamp - b.timestamp);
    const userEvents = [];
    sorted.forEach(r => {
      const lastEvent = userEvents[userEvents.length - 1];
      if (r.isBonusTopup && lastEvent) {
        lastEvent.records.push(r);
      } else {
        userEvents.push({ records: [r] });
      }
    });
    userEvents.forEach(ev => {
      const first = ev.records[0];
      const last = ev.records[ev.records.length - 1];
      events.push({
        username: first.username,
        code: first.code,
        amount: ev.records.reduce((sum, r) => sum + r.amount, 0),
        timestamp: first.timestamp, // dasar cocokkan ke deposit = waktu bonus AWAL
        dateText: last.dateText || first.dateText, // ditampilkan waktu selesai dicicil
        recordCount: ev.records.length,
      });
    });
  });
  return events;
}

function findDuplicateGroups(records) {
  const groups = new Map();
  records.forEach(r => {
    const key = r.username.toLowerCase();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
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

// --- Daftar Member Safety (tersimpan terpusat di Firestore, sinkron di semua browser) ---
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

// App Firebase kedua, khusus dipakai admin untuk membuat akun baru saat menyetujui
// permintaan akun (lihat approveAccountRequest()). createUserWithEmailAndPassword()
// otomatis login sebagai akun yang baru dibuat pada instance auth yang dipakai —
// kalau dijalankan di 'auth' utama, sesi login admin sendiri akan tergantikan.
// Instance kedua ini terpisah total dari 'auth', jadi admin tetap login normal.
const accountCreatorApp = firebase.initializeApp(firebaseConfig, 'accountCreator');
const accountCreatorAuth = accountCreatorApp.auth();

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

function isSignedIn() {
  return !!currentUser;
}

// Listener flags/pageNotes cuma dipasang SETELAH ada akun yang login (lihat
// startAuthedListeners()/stopAuthedListeners(), dipanggil dari auth.onAuthStateChanged
// di bawah) — bukan langsung saat script dimuat seperti sebelumnya. Firestore Rules
// sekarang mewajibkan login untuk membaca kedua koleksi ini (akses semua fitur harus
// pakai akun), jadi memasangnya lebih awal cuma akan gagal permission-denied dan tidak
// otomatis pulih begitu user login (onSnapshot berhenti total setelah error).
let unsubFlags = null;
let unsubPageNotes = null;

function startAuthedListeners() {
  if (!unsubFlags) {
    unsubFlags = db.collection(FLAGS_COLLECTION).onSnapshot(snapshot => {
      flagsCache = snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));
      renderFlagTable();
      renderDashboard();
      renderSidebarTicker();
      renderProfile();
    }, err => {
      console.error('Gagal memuat daftar Member Safety dari Firestore:', err);
    });
  }
  if (!unsubPageNotes) {
    unsubPageNotes = db.collection(PAGE_NOTES_COLLECTION).onSnapshot(snapshot => {
      pageNotesCache = {};
      snapshot.docs.forEach(doc => { pageNotesCache[doc.id] = doc.data().text || ''; });
      renderHowtoBoxes();
    }, err => {
      console.error('Gagal memuat Cara Penggunaan dari Firestore:', err);
    });
  }
}

function stopAuthedListeners() {
  if (unsubFlags) { unsubFlags(); unsubFlags = null; }
  if (unsubPageNotes) { unsubPageNotes(); unsubPageNotes = null; }
  flagsCache = [];
  pageNotesCache = {};
  renderFlagTable();
  renderSidebarTicker();
  renderHowtoBoxes();
}

// --- Cara Penggunaan per fitur (tersimpan terpusat di Firestore, sinkron di semua
// browser, sama seperti Member Safety) ---
// Siapa pun boleh membacanya, tapi cuma admin yang boleh mengubahnya — tombol Edit
// disembunyikan di UI untuk non-admin DAN isAdminUser() dicek ulang sebelum menulis,
// tapi penegakan yang sebenarnya tetap harus lewat Firestore Security Rules (sama
// prinsipnya dengan koleksi "flags" di atas) supaya tidak bisa diakali lewat console.
const PAGE_NOTES_COLLECTION = 'pageNotes';
let pageNotesCache = {};

// Penjelasan bawaan yang tampil selama admin belum menyimpan teksnya sendiri di
// Firestore (lihat renderHowtoBoxes). Begitu admin menyimpan teks, teks itu yang
// dipakai untuk semua bahasa; kosongkan lalu simpan untuk kembali ke teks bawaan.
// Ditulis per baris (array) supaya rapi dan tidak tergantung jenis baris baru file.
const HOWTO_DEFAULTS = {
  id: {
    bonus: [
      '1. Paste data History QR Pay dan History di kotak bagian atas halaman.',
      '2. Pilih persen bonus (5% atau 10%), lalu klik "Proses Bonus".',
      '',
      'Hasilnya hanya menampilkan id yang bermasalah:',
      '- Belum dapat bonus (pending)',
      '- Bonus kelebihan / kekurangan',
      '- Bonus dobel',
      'Klik id atau nominal untuk copy. Klik "Sembunyikan" kalau id itu tidak perlu ditampilkan lagi (hanya tersimpan di browser ini).',
    ],
    inputbonus: [
      '1. Paste data bonus yang sudah diberikan ke kotak "Data Input Bonus".',
      '2. Pilih urutan: Nominal Terbesar atau Terkecil.',
      '3. Klik "Proses".',
      '',
      'Hasilnya daftar id beserta nominal bonusnya. Id yang muncul 2x atau lebih ditandai "2x+" (dobel). Klik "Copy Hasil" untuk menyalin.',
    ],
    newmember: [
      '1. Paste data History QR Pay dan History di kotak bagian atas halaman.',
      '2. Isi daftar id member baru di kotak di bawah (satu id per baris).',
      '3. Klik "Cek New Member First Deposit".',
      '',
      'Hasilnya tanggal dan nominal deposit pertama tiap id, urut sesuai daftar. Id yang belum pernah deposit tampil Rp0. Kalau ada id Member Safety di daftar, muncul peringatan.',
    ],
    flagged: [
      'Daftar id yang perlu diwaspadai. Id di sini otomatis diberi tanda di Cek Bonus dan New Member First Deposit.',
      '',
      '1. Isi id, pilih kategori (Safety / Tidak Dapat Bonus / Lainnya), tambahkan keterangan kalau perlu.',
      '2. Klik "Tambah".',
      '3. Klik "Lihat Daftar Member Safety" untuk melihat atau menghapus id (perlu login admin).',
      '',
      'Backup & Restore (admin): "Export" untuk menyimpan cadangan, "Import" untuk memulihkannya.',
    ],
    winlose: [
      '1. Upload file Excel win/lose (atau paste manual) di kotak Data Win/Lose.',
      '2. Pilih game dan batas minimal nominal ("Semua ID" untuk tanpa batas).',
      '3. Klik "Proses".',
      '',
      'Hasilnya daftar id member yang sudah diurutkan, lengkap dengan jumlah yang kalah dan menang. Klik "Copy Hasil" untuk menyalin.',
    ],
    withdrawreport: [
      '1. Isi Nama Website dan ID Member. Waktu Register boleh dikosongkan.',
      '2. Paste data Deposit 3 bulan terakhir ke kotak "Data Deposit".',
      '3. Paste data Withdraw 3 bulan terakhir ke kotak "Data Withdraw". (Rentang tanggalnya ada di kotak biru, klik untuk copy.)',
      '4. Buka "Jenis Game" lalu centang game-nya (boleh lebih dari satu). Kalau game sport, pilih juga jenis taruhannya.',
      '5. Klik "Proses", lalu "Copy Hasil".',
    ],
    winlosemember: [
      '1. Isi ID Member.',
      '2. Paste data Deposit Request History ke kotak kiri dan data Withdraw History ke kotak kanan.',
      '3. Klik "Proses".',
      '',
      'Hasilnya tabel per bulan: total deposit, withdraw, bonus harian, dan cashback.',
      '- WIN = kita untung (deposit lebih besar dari withdraw + bonus).',
      '- LOSE = kita rugi.',
      '- IMPAS = sama.',
      'Angka merah dalam kurung adalah uang yang keluar.',
    ],
    wdbalance: [
      'Untuk mengecek apakah withdraw di panel sama dengan yang tercatat di Doc Spreadsheets.',
      '',
      '1. Paste data Withdraw History dari panel ke kotak kiri (atau upload file Excel-nya).',
      '2. Paste data dari Doc Spreadsheets ke kotak kanan.',
      '3. Klik "Proses".',
      '',
      'Yang tampil hanya yang perlu dicek:',
      '- Nominal beda: id sama tapi nominal berbeda.',
      '- Belum ada di sheet: ada di panel, belum dicatat di sheet.',
      '- Tidak ada di Withdraw History: ada di sheet, tidak ada di panel.',
      '- Refund (manual): ditandai REFUND di sheet, diproses manual, nominalnya tidak dihitung.',
      '',
      'Centang "Tampilkan yang cocok" untuk melihat yang sudah cocok. "Copy Temuan" menyalin daftar yang bermasalah.',
      'Catatan: hanya withdraw bertanda (ABD) di panel yang dicek.',
    ],
  },
  en: {
    bonus: [
      '1. Paste the History QR Pay and History data into the boxes at the top of the page.',
      '2. Pick the bonus percent (5% or 10%), then click "Process Bonus".',
      '',
      'Only ids with a problem are shown:',
      '- Bonus not given yet (pending)',
      '- Bonus excess / shortage',
      '- Bonus given twice',
      'Click an id or amount to copy it. Click "Hide" to stop showing an id (saved in this browser only).',
    ],
    inputbonus: [
      '1. Paste the bonus data that was already given into the "Input Bonus Data" box.',
      '2. Choose the order: Largest or Smallest Amount.',
      '3. Click "Process".',
      '',
      'The result is a list of ids with their bonus amounts. Ids that appear 2 or more times are marked "2x+" (duplicate). Click "Copy Result" to copy.',
    ],
    newmember: [
      '1. Paste the History QR Pay and History data into the boxes at the top of the page.',
      '2. Fill in the new member ids in the box below (one id per line).',
      '3. Click "Check New Member First Deposit".',
      '',
      'The result is the date and amount of each id\'s first deposit, in the same order as the list. Ids that never deposited show Rp0. A warning appears if a Member Safety id is in the list.',
    ],
    flagged: [
      'A list of ids to watch out for. Ids here are automatically marked in Check Bonus and New Member First Deposit.',
      '',
      '1. Fill in the id, pick a category (Safety / No Bonus / Other), add a note if needed.',
      '2. Click "Add".',
      '3. Click "Show Member Safety List" to see or delete ids (admin login required).',
      '',
      'Backup & Restore (admin): "Export" saves a backup, "Import" restores it.',
    ],
    winlose: [
      '1. Upload the win/lose Excel file (or paste it manually) in the Win/Lose Data box.',
      '2. Pick a game and a minimum amount ("All IDs" for no limit).',
      '3. Click "Process".',
      '',
      'The result is the sorted list of member ids, with the number of losing and winning ids. Click "Copy Result" to copy.',
    ],
    withdrawreport: [
      '1. Fill in the Website Name and Member ID. Registration Time is optional.',
      '2. Paste the last 3 months of Deposit data into the "Deposit Data" box.',
      '3. Paste the last 3 months of Withdraw data into the "Withdraw Data" box. (The date range is in the blue box, click to copy.)',
      '4. Open "Game Type" and tick the game(s) (more than one is fine). For sport games, also pick the bet type.',
      '5. Click "Process", then "Copy Result".',
    ],
    winlosemember: [
      '1. Fill in the Member ID.',
      '2. Paste the Deposit Request History into the left box and the Withdraw History into the right box.',
      '3. Click "Process".',
      '',
      'The result is a monthly table: total deposit, withdraw, daily bonus, and cashback.',
      '- WIN = we profit (deposit is higher than withdraw + bonus).',
      '- LOSE = we lose.',
      '- IMPAS = even.',
      'Red amounts in brackets are money going out.',
    ],
    wdbalance: [
      'Checks whether the withdraws in the panel match what is recorded in the Doc Spreadsheets.',
      '',
      '1. Paste the Withdraw History from the panel into the left box (or upload its Excel file).',
      '2. Paste the data from the Doc Spreadsheets into the right box.',
      '3. Click "Process".',
      '',
      'Only what needs checking is shown:',
      '- Amount mismatch: same id but a different amount.',
      '- Not in sheet yet: in the panel, not recorded in the sheet.',
      '- Not in Withdraw History: in the sheet, not in the panel.',
      '- Refund (manual): marked REFUND in the sheet, processed manually, amount not counted.',
      '',
      'Tick "Show matches" to see the ones that match. "Copy Findings" copies the problem list.',
      'Note: only panel withdraws marked (ABD) are checked.',
    ],
  },
};

function howtoDefaultText(page) {
  const lines = (HOWTO_DEFAULTS[currentLang] || HOWTO_DEFAULTS.id)[page] || HOWTO_DEFAULTS.id[page];
  return lines ? lines.join('\n') : '';
}

// Kartu Cara Penggunaan bisa dibuka/tutup (default tertutup supaya tidak memakan
// tempat). Status buka/tutup per halaman cuma preferensi tampilan di browser ini,
// jadi disimpan di localStorage — dibungkus try/catch karena bisa diblokir browser.
const HOWTO_OPEN_KEY_PREFIX = 'workingTools.howtoOpen.';

function isHowtoOpen(page) {
  try { return localStorage.getItem(HOWTO_OPEN_KEY_PREFIX + page) === '1'; } catch (e) { return false; }
}

function setHowtoOpen(card, page, open) {
  card.classList.toggle('is-open', open);
  const toggle = card.querySelector('.howto-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  try { localStorage.setItem(HOWTO_OPEN_KEY_PREFIX + page, open ? '1' : '0'); } catch (e) { /* abaikan */ }
}

function renderHowtoBoxes() {
  const admin = isAdminUser();
  document.querySelectorAll('.howto-card').forEach(card => {
    const page = card.getAttribute('data-howto-page');
    const text = (pageNotesCache[page] || '').trim() || howtoDefaultText(page);
    const viewEl = card.querySelector('.howto-text');
    const editBtn = card.querySelector('.howto-edit-btn');
    const formEl = card.querySelector('.howto-edit-form');

    if (text) {
      viewEl.textContent = text;
      viewEl.classList.remove('is-placeholder');
    } else {
      viewEl.textContent = t('howto.placeholder');
      viewEl.classList.add('is-placeholder');
    }

    editBtn.style.display = admin ? 'inline-block' : 'none';
    if (!admin) formEl.style.display = 'none';
  });
}

document.querySelectorAll('.howto-card').forEach(card => {
  const page = card.getAttribute('data-howto-page');
  const editBtn = card.querySelector('.howto-edit-btn');
  const saveBtn = card.querySelector('.howto-save-btn');
  const cancelBtn = card.querySelector('.howto-cancel-btn');
  const formEl = card.querySelector('.howto-edit-form');
  const textarea = card.querySelector('.howto-textarea');

  // Judul kartu jadi tombol buka/tutup penjelasan.
  const toggle = card.querySelector('.card-header h3');
  toggle.classList.add('howto-toggle');
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  setHowtoOpen(card, page, isHowtoOpen(page));
  const flip = () => setHowtoOpen(card, page, !card.classList.contains('is-open'));
  toggle.addEventListener('click', flip);
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
  });

  editBtn.addEventListener('click', () => {
    if (!isAdminUser()) return;
    // Kalau belum pernah disimpan, mulai edit dari teks bawaan yang sedang tampil.
    textarea.value = pageNotesCache[page] || howtoDefaultText(page);
    setHowtoOpen(card, page, true);
    formEl.style.display = 'block';
    textarea.focus();
  });
  cancelBtn.addEventListener('click', () => {
    formEl.style.display = 'none';
  });
  saveBtn.addEventListener('click', () => {
    if (!isAdminUser()) return;
    const text = textarea.value.trim();
    db.collection(PAGE_NOTES_COLLECTION).doc(page).set({ text, updatedAt: Date.now() })
      .then(() => { formEl.style.display = 'none'; })
      .catch(err => alert(t('howto.saveFailed', { error: err.message })));
  });
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
      db.collection(FLAGS_COLLECTION).doc(docId).delete()
        .then(() => logActivity({ type: 'flag_delete', actorEmail: currentUser.email, targetId: id }))
        .catch(err => {
          alert(t('admin.deleteFailed', { error: err.message }));
        });
    });
  });
}

// --- Permintaan pembuatan akun (Firestore, cuma dibaca admin) ---
// Siapa pun yang belum punya akun mengisi form di auth gate (nama + email + catatan,
// TANPA password — lihat komentar di accountCreatorAuth di atas soal alasannya).
// Admin meninjau di halaman "Permintaan Akun" dan approve/reject dari sana.
const ACCOUNT_REQUESTS_COLLECTION = 'accountRequests';
const USERS_COLLECTION = 'users';
let accountRequestsCache = [];
let unsubAccountRequests = null;

// Log aktivitas ringan (login/logout, ubah Member Safety, permintaan akun) — cuma
// buat notifikasi lonceng admin, bukan data sensitif. Siapa pun boleh MENAMBAH satu
// entri tentang aksinya sendiri (lihat firestore.rules), tapi cuma admin yang bisa
// membaca daftarnya — makanya listener-nya jalan bareng startAdminListeners().
const ACTIVITY_LOG_COLLECTION = 'activityLog';
const ACTIVITY_LOG_LIMIT = 50;
const NOTIF_LAST_SEEN_KEY = 'workingTools.lastSeenActivityAt';
let activityLogCache = [];
let unsubActivityLog = null;

// --- Status pengguna (presence) & halaman Pantau Pengguna (khusus admin) ---
// Tiap akun yang login menulis satu dokumen "presence/{uid}" miliknya sendiri: kapan
// terakhir login, kapan terakhir aktif (denyut tiap ~90 detik selama tab terlihat),
// sedang di menu apa, dan perangkatnya. "Online" = status 'online' DAN terakhir aktif
// kurang dari 5 menit lalu, jadi tab yang ditutup tanpa logout otomatis jadi offline.
// Cuma admin yang boleh membacanya (lihat firestore.rules). Yang dicatat murni metadata —
// isi data yang di-paste ke fitur mana pun tidak pernah dikirim ke sini.
const PRESENCE_COLLECTION = 'presence';
const PRESENCE_HEARTBEAT_MS = 90 * 1000;
const PRESENCE_MIN_GAP_MS = 15 * 1000;
const PRESENCE_ONLINE_WINDOW_MS = 5 * 60 * 1000;
const MONITOR_LOG_PAGE = 200;
const MONITOR_TYPE_GROUPS = {
  login: ['login', 'logout', 'password_change'],
  safety: ['flag_add', 'flag_delete'],
  accounts: ['account_request_submitted', 'account_request_approved', 'account_request_rejected'],
};
let currentPageId = 'dashboard';
let presenceTimer = null;
let lastPresenceWriteAt = 0;

function describeDevice() {
  const ua = navigator.userAgent || '';
  const os = /Windows/i.test(ua) ? 'Windows' : /Android/i.test(ua) ? 'Android' : /iPhone|iPad|iPod/i.test(ua) ? 'iOS'
    : /Mac OS X/i.test(ua) ? 'macOS' : /Linux/i.test(ua) ? 'Linux' : '?';
  const browser = /Edg\//i.test(ua) ? 'Edge' : /OPR\/|Opera/i.test(ua) ? 'Opera' : /Firefox\//i.test(ua) ? 'Firefox'
    : /Chrome\//i.test(ua) ? 'Chrome' : /Safari\//i.test(ua) ? 'Safari' : '?';
  return `${browser} · ${os}`;
}

// throttled=true: lewati kalau baru menulis <15 detik lalu (dipakai saat pindah menu/
// tab kembali terlihat, supaya klik menu beruntun tidak membanjiri Firestore).
function writePresence(extra, throttled) {
  if (!currentUser) return Promise.resolve();
  const now = Date.now();
  if (throttled && now - lastPresenceWriteAt < PRESENCE_MIN_GAP_MS) return Promise.resolve();
  lastPresenceWriteAt = now;
  return db.collection(PRESENCE_COLLECTION).doc(currentUser.uid).set({
    email: currentUser.email,
    status: 'online',
    lastActiveAt: serverNow(),
    lastPage: currentPageId,
    device: describeDevice(),
    ...extra,
  }, { merge: true }).catch(err => console.error('Gagal memperbarui status pengguna:', err));
}

function startPresence() {
  writePresence({});
  if (!presenceTimer) {
    presenceTimer = setInterval(() => {
      if (document.visibilityState === 'visible') writePresence({});
    }, PRESENCE_HEARTBEAT_MS);
  }
}

function stopPresence() {
  if (presenceTimer) { clearInterval(presenceTimer); presenceTimer = null; }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') writePresence({}, true);
});

let unsubPresence = null;
let unsubMonitorUsers = null;
let unsubMonitorLog = null;
let monitorTimer = null;
let presenceCache = [];
let monitorUsersCache = [];
let monitorLogCache = [];
let monitorLogLimit = MONITOR_LOG_PAGE;

function subscribeMonitorLog() {
  if (unsubMonitorLog) unsubMonitorLog();
  unsubMonitorLog = db.collection(ACTIVITY_LOG_COLLECTION).orderBy('createdAt', 'desc').limit(monitorLogLimit)
    .onSnapshot(snapshot => {
      monitorLogCache = snapshot.docs.map(docWithId);
      renderMonitor();
    }, err => console.error('Gagal memuat log aktivitas dari Firestore:', err));
}

// Dijalankan pas halaman Pantau Pengguna pertama kali dibuka (bukan tiap admin login),
// supaya ratusan dokumen log tidak dibaca kalau halamannya tidak pernah dibuka.
function startMonitorListeners() {
  if (!isAdminUser()) return;
  if (!unsubPresence) {
    unsubPresence = db.collection(PRESENCE_COLLECTION).onSnapshot(snapshot => {
      presenceCache = snapshot.docs.map(docWithId);
      renderMonitor();
    }, err => console.error('Gagal memuat status pengguna dari Firestore:', err));
  }
  if (!unsubMonitorUsers) {
    unsubMonitorUsers = db.collection(USERS_COLLECTION).onSnapshot(snapshot => {
      monitorUsersCache = snapshot.docs.map(docWithId);
      renderMonitor();
    }, err => console.error('Gagal memuat daftar akun dari Firestore:', err));
  }
  if (!unsubMonitorLog) subscribeMonitorLog();
  // Status "online" bergeser seiring waktu tanpa ada dokumen yang berubah — render ulang berkala.
  if (!monitorTimer) monitorTimer = setInterval(() => { if (currentPageId === 'usermonitor') renderMonitor(); }, 30 * 1000);
}

function stopMonitorListeners() {
  if (unsubPresence) { unsubPresence(); unsubPresence = null; }
  if (unsubMonitorUsers) { unsubMonitorUsers(); unsubMonitorUsers = null; }
  if (unsubMonitorLog) { unsubMonitorLog(); unsubMonitorLog = null; }
  if (monitorTimer) { clearInterval(monitorTimer); monitorTimer = null; }
  presenceCache = [];
  monitorUsersCache = [];
  monitorLogCache = [];
  monitorLogLimit = MONITOR_LOG_PAGE;
  if (typeof renderMonitor === 'function') renderMonitor();
}

// Gagal mencatat aktivitas TIDAK boleh menggagalkan aksi utamanya (login, hapus id,
// dst) — makanya cuma di-log ke console kalau errornya, tidak ada .catch() yang
// mengganggu alur pemanggilnya.
// Waktu entri diisi SERVER (serverTimestamp) dan firestore.rules mewajibkan
// createdAt == request.time, jadi jam browser yang salah/diakali tidak mengubah log.
// Mengembalikan promise supaya pemanggil yang perlu menunggu (logout) bisa menunggu.
function serverNow() {
  return firebase.firestore.FieldValue.serverTimestamp();
}

// Entri lama menyimpan createdAt sebagai angka (ms), entri baru sebagai Timestamp
// Firestore — ini menyeragamkan keduanya jadi ms.
function tsMillis(v) {
  if (v && typeof v.toMillis === 'function') return v.toMillis();
  return typeof v === 'number' ? v : 0;
}

// 'estimate': tulisan lokal yang belum dikonfirmasi server tetap punya waktu perkiraan
// (bukan null), jadi entri baru langsung muncul di daftar.
function docWithId(doc) {
  return { id: doc.id, ...doc.data({ serverTimestamps: 'estimate' }) };
}

function logActivity(fields) {
  return db.collection(ACTIVITY_LOG_COLLECTION).add({ ...fields, createdAt: serverNow() })
    .catch(err => console.error('Gagal mencatat aktivitas:', err));
}

function startAdminListeners() {
  if (!unsubAccountRequests) {
    unsubAccountRequests = db.collection(ACCOUNT_REQUESTS_COLLECTION).onSnapshot(snapshot => {
      accountRequestsCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderAccountRequests();
    }, err => {
      console.error('Gagal memuat permintaan akun dari Firestore:', err);
    });
  }
  if (!unsubActivityLog) {
    unsubActivityLog = db.collection(ACTIVITY_LOG_COLLECTION).orderBy('createdAt', 'desc').limit(ACTIVITY_LOG_LIMIT)
      .onSnapshot(snapshot => {
        activityLogCache = snapshot.docs.map(docWithId);
        renderActivityLog();
      }, err => {
        console.error('Gagal memuat aktivitas dari Firestore:', err);
      });
  }
}

function stopAdminListeners() {
  if (unsubAccountRequests) { unsubAccountRequests(); unsubAccountRequests = null; }
  if (unsubActivityLog) { unsubActivityLog(); unsubActivityLog = null; }
  stopMonitorListeners();
  accountRequestsCache = [];
  activityLogCache = [];
  renderAccountRequests();
  renderActivityLog();
}

// Judul notifikasi dibangun dari field terstruktur (bukan string siap-pakai) supaya
// ikut berganti bahasa waktu toggle bendera di-klik — sama prinsipnya dengan seluruh
// teks lain di app ini yang lewat t().
// Email tidak pernah ditampilkan utuh — cuma nama depannya (bagian sebelum "@",
// dipotong di pemisah pertama seperti "." / "_" / "-"). Untuk nama yang diketik
// bebas (requesterName) diambil kata pertamanya.
function firstNameFromEmail(email) {
  return String(email || '').split('@')[0].split(/[._\-+]/)[0];
}
function firstNameFromName(name, fallbackEmail) {
  return String(name || '').trim().split(/\s+/)[0] || firstNameFromEmail(fallbackEmail);
}

function activityText(entry) {
  switch (entry.type) {
    case 'login': return t('activity.login', { email: firstNameFromEmail(entry.actorEmail) });
    case 'logout': return t('activity.logout', { email: firstNameFromEmail(entry.actorEmail) });
    case 'password_change': return t('activity.passwordChange', { email: firstNameFromEmail(entry.actorEmail) });
    case 'flag_add': return t('activity.flagAdd', { email: firstNameFromEmail(entry.actorEmail), id: entry.targetId, category: categoryLabel(entry.category) });
    case 'flag_delete': return t('activity.flagDelete', { email: firstNameFromEmail(entry.actorEmail), id: entry.targetId });
    case 'account_request_submitted': return t('activity.requestSubmitted', { name: firstNameFromName(entry.requesterName, entry.requesterEmail) });
    case 'account_request_approved': return t('activity.requestApproved', { email: firstNameFromEmail(entry.actorEmail), target: firstNameFromEmail(entry.targetEmail) });
    case 'account_request_rejected': return t('activity.requestRejected', { email: firstNameFromEmail(entry.actorEmail), target: firstNameFromEmail(entry.targetEmail) });
    default: return entry.type;
  }
}

function renderActivityLog() {
  const lastSeenAt = parseInt(localStorage.getItem(NOTIF_LAST_SEEN_KEY) || '0', 10);
  const unreadCount = activityLogCache.filter(e => tsMillis(e.createdAt) > lastSeenAt).length;

  const badge = document.getElementById('notifBadge');
  badge.textContent = unreadCount > 99 ? '99+' : String(unreadCount);
  badge.style.display = unreadCount > 0 ? 'inline-block' : 'none';

  const list = document.getElementById('notifList');
  const empty = document.getElementById('notifEmpty');
  list.innerHTML = '';

  if (activityLogCache.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  activityLogCache.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'notif-item';
    div.innerHTML = `
      <div class="notif-item-text">${activityText(entry)}</div>
      <div class="notif-item-time">${new Date(tsMillis(entry.createdAt)).toLocaleString(localeCode())}</div>
    `;
    list.appendChild(div);
  });
}

document.getElementById('notifBellBtn').addEventListener('click', () => {
  const dropdown = document.getElementById('notifDropdown');
  const isOpen = dropdown.style.display !== 'none';
  dropdown.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    // Buka dropdown = tandai semua sudah dibaca (per browser, sama seperti hidden
    // bonus ids — bukan data yang perlu sinkron).
    localStorage.setItem(NOTIF_LAST_SEEN_KEY, String(Date.now()));
    renderActivityLog();
  }
});

// Klik di luar lonceng/dropdown menutupnya lagi.
document.addEventListener('click', (e) => {
  const notif = document.getElementById('topbarNotif');
  if (!notif.contains(e.target)) {
    document.getElementById('notifDropdown').style.display = 'none';
  }
});

// --- Halaman Pantau Pengguna: tab Pengguna & tab Log Aktivitas ---
function entryActor(entry) {
  return entry.actorEmail || entry.requesterEmail || '';
}

function activityTypeLabel(type) {
  const key = 'um.type.' + type;
  const label = t(key);
  return label === key ? type : label;
}

// Ringkasan aksi tanpa nama pelakunya (nama sudah punya kolom sendiri di tabel log).
function activityDetail(entry) {
  switch (entry.type) {
    case 'flag_add': return `${entry.targetId} (${categoryLabel(entry.category)})`;
    case 'flag_delete': return entry.targetId || '-';
    case 'account_request_submitted': return firstNameFromName(entry.requesterName, entry.requesterEmail);
    case 'account_request_approved':
    case 'account_request_rejected': return firstNameFromEmail(entry.targetEmail);
    default: return '-';
  }
}

// Nama menu tanpa nomor di depannya ("1.1 Cek Bonus" -> "Cek Bonus").
function pageLabel(page) {
  const key = 'nav.' + page;
  const label = t(key);
  return label === key ? page : label.replace(/^\d+(?:\.\d+)?\s+/, '');
}

function monitorTime(ms) {
  return ms ? new Date(ms).toLocaleString(localeCode()) : '-';
}

// Gabungan akun yang dibuat lewat persetujuan (koleksi users) dan dokumen presence, dicocokkan
// lewat uid. Akun tanpa dokumen presence = belum pernah login sejak fitur ini aktif.
function monitorUserRows() {
  const byUid = new Map();
  monitorUsersCache.forEach(u => byUid.set(u.id, { uid: u.id, email: u.email, name: u.name }));
  presenceCache.forEach(p => {
    const base = byUid.get(p.id) || { uid: p.id };
    byUid.set(p.id, { ...base, email: p.email || base.email, presence: p });
  });
  const now = Date.now();
  return Array.from(byUid.values()).map(r => {
    const p = r.presence;
    const lastActive = p ? tsMillis(p.lastActiveAt) : 0;
    const online = !!p && p.status === 'online' && now - lastActive < PRESENCE_ONLINE_WINDOW_MS;
    return {
      name: firstNameFromName(r.name, r.email),
      hasPresence: !!p,
      online,
      lastActive,
      lastLogin: p ? tsMillis(p.lastLoginAt) : 0,
      page: online && p.lastPage ? pageLabel(p.lastPage) : '-',
      device: (p && p.device) || '-',
    };
  }).sort((a, b) => (b.online - a.online) || (b.lastActive - a.lastActive) || a.name.localeCompare(b.name));
}

function renderMonitorUsers() {
  const rows = monitorUserRows();
  const online = rows.filter(r => r.online).length;
  document.getElementById('umOnlineBadge').textContent = t('um.onlineBadge', { online, total: rows.length });

  const body = document.getElementById('umUsersBody');
  body.innerHTML = '';
  document.getElementById('umUsersTable').style.display = rows.length ? 'table' : 'none';
  document.getElementById('umUsersEmpty').style.display = rows.length ? 'none' : 'block';

  rows.forEach(r => {
    const status = r.online
      ? `<span class="badge badge-online">${t('um.statusOnline')}</span>`
      : (r.hasPresence ? `<span class="badge badge-other">${t('um.statusOffline')}</span>` : `<span class="badge badge-other">${t('um.statusNever')}</span>`);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${wbEscape(r.name)}</td>
      <td>${status}</td>
      <td>${monitorTime(r.lastLogin)}</td>
      <td>${monitorTime(r.lastActive)}</td>
      <td>${wbEscape(r.page)}</td>
      <td>${wbEscape(r.device)}</td>
    `;
    body.appendChild(tr);
  });
}

function monitorLogFiltered() {
  const type = document.getElementById('umLogType').value;
  const user = document.getElementById('umLogUser').value;
  const from = document.getElementById('umLogFrom').value;
  const to = document.getElementById('umLogTo').value;
  const q = document.getElementById('umLogSearch').value.trim().toLowerCase();
  const fromMs = from ? new Date(from + 'T00:00:00').getTime() : 0;
  const toMs = to ? new Date(to + 'T23:59:59.999').getTime() : Infinity;

  return monitorLogCache.filter(e => {
    if (type !== 'all' && !MONITOR_TYPE_GROUPS[type].includes(e.type)) return false;
    const actor = entryActor(e);
    if (user !== 'all' && actor !== user) return false;
    const ms = tsMillis(e.createdAt);
    if (ms < fromMs || ms > toMs) return false;
    if (q) {
      const hay = `${firstNameFromEmail(actor)} ${activityTypeLabel(e.type)} ${activityDetail(e)}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderMonitorLog() {
  // Isi pilihan pengguna dari log yang sudah dimuat, pilihan yang sedang aktif dipertahankan.
  const userSelect = document.getElementById('umLogUser');
  const selected = userSelect.value;
  const actors = Array.from(new Set(monitorLogCache.map(entryActor).filter(Boolean)))
    .sort((a, b) => firstNameFromEmail(a).localeCompare(firstNameFromEmail(b)));
  userSelect.innerHTML = `<option value="all">${t('um.filterAllUsers')}</option>` +
    actors.map(a => `<option value="${wbEscape(a)}">${wbEscape(firstNameFromEmail(a))}</option>`).join('');
  userSelect.value = actors.includes(selected) ? selected : 'all';

  const rows = monitorLogFiltered();
  const body = document.getElementById('umLogBody');
  body.innerHTML = '';
  rows.forEach(e => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${monitorTime(tsMillis(e.createdAt))}</td>
      <td>${wbEscape(firstNameFromEmail(entryActor(e)) || '-')}</td>
      <td><span class="badge badge-other">${wbEscape(activityTypeLabel(e.type))}</span></td>
      <td>${wbEscape(activityDetail(e))}</td>
    `;
    body.appendChild(tr);
  });

  document.getElementById('umLogTable').style.display = rows.length ? 'table' : 'none';
  document.getElementById('umLogEmpty').style.display = rows.length ? 'none' : 'block';
  document.getElementById('umLogInfo').textContent = t('um.logInfo', { shown: rows.length, loaded: monitorLogCache.length });
  // Kalau jumlah yang dimuat sudah mencapai batas, kemungkinan masih ada entri yang lebih lama.
  document.getElementById('umLoadMoreBtn').style.display = monitorLogCache.length >= monitorLogLimit ? 'inline-block' : 'none';
}

// "var" (bukan let) sengaja, sama seperti wbState: setLanguage() bisa memanggil
// renderMonitor() saat load, sebelum deklarasi let/const di atas dieksekusi (TDZ).
// Flag ini baru true di akhir bagian ini, jadi pemanggilan sedini itu dilewati.
var monitorInitialized = false;

function renderMonitor() {
  if (!monitorInitialized) return;
  renderMonitorUsers();
  renderMonitorLog();
}

function setMonitorTab(tab) {
  document.querySelectorAll('[data-um-tab]').forEach(b => b.classList.toggle('active', b.dataset.umTab === tab));
  document.getElementById('umPanelUsers').style.display = tab === 'users' ? 'block' : 'none';
  document.getElementById('umPanelLog').style.display = tab === 'log' ? 'block' : 'none';
}

document.querySelectorAll('[data-um-tab]').forEach(b => b.addEventListener('click', () => setMonitorTab(b.dataset.umTab)));
['umLogType', 'umLogUser', 'umLogFrom', 'umLogTo'].forEach(id => document.getElementById(id).addEventListener('change', renderMonitorLog));
document.getElementById('umLogSearch').addEventListener('input', renderMonitorLog);
document.getElementById('umLogReset').addEventListener('click', () => {
  document.getElementById('umLogType').value = 'all';
  document.getElementById('umLogFrom').value = '';
  document.getElementById('umLogTo').value = '';
  document.getElementById('umLogSearch').value = '';
  document.getElementById('umLogUser').value = 'all';
  renderMonitorLog();
});
document.getElementById('umLoadMoreBtn').addEventListener('click', () => {
  monitorLogLimit += MONITOR_LOG_PAGE;
  subscribeMonitorLog();
});

function csvCell(v) {
  const s = String(v == null ? '' : v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function csvDateTime(ms) {
  const d = new Date(ms);
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

// Export mengikuti filter yang sedang aktif. BOM di depan supaya Excel membaca UTF-8 dengan benar.
document.getElementById('umExportBtn').addEventListener('click', () => {
  const rows = monitorLogFiltered();
  if (rows.length === 0) return;
  const lines = [[t('um.thTime'), t('um.thUser'), t('um.thAction'), t('um.thDetail')].map(csvCell).join(',')]
    .concat(rows.map(e => [
      csvDateTime(tsMillis(e.createdAt)),
      firstNameFromEmail(entryActor(e)),
      activityTypeLabel(e.type),
      activityDetail(e),
    ].map(csvCell).join(',')));
  const blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `log-aktivitas-${csvDateTime(Date.now()).slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

monitorInitialized = true;

// Password acak sekali pakai, cuma dipakai sebentar untuk createUserWithEmailAndPassword
// (Firebase Auth mewajibkan sebuah password saat bikin akun) lalu langsung dibuang dari
// memori — TIDAK pernah disimpan ke Firestore maupun ditunjukkan ke siapa pun, termasuk
// admin. User yang baru disetujui mengatur password sendiri lewat email "set password"
// yang dikirim otomatis setelah akunnya dibuat.
function generateTempPassword() {
  const bytes = new Uint8Array(18);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(36).padStart(2, '0')).join('') + 'Aa1!';
}

function renderAccountRequests() {
  const pending = accountRequestsCache.filter(r => r.status === 'pending').sort((a, b) => a.requestedAt - b.requestedAt);
  const history = accountRequestsCache.filter(r => r.status !== 'pending').sort((a, b) => (b.reviewedAt || 0) - (a.reviewedAt || 0));

  document.getElementById('accreqPendingBadge').textContent = pending.length;
  const navBadge = document.getElementById('navAccountRequestsBadge');
  navBadge.textContent = pending.length;
  navBadge.style.display = pending.length > 0 ? 'inline-block' : 'none';

  const pendingTable = document.getElementById('accreqPendingTable');
  const pendingEmpty = document.getElementById('accreqPendingEmpty');
  const pendingBody = document.getElementById('accreqPendingBody');
  pendingBody.innerHTML = '';
  pendingTable.style.display = pending.length ? 'table' : 'none';
  pendingEmpty.style.display = pending.length ? 'none' : 'block';

  pending.forEach(req => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${req.name}</td>
      <td>${req.email}</td>
      <td>${req.note || '-'}</td>
      <td>${new Date(req.requestedAt).toLocaleString(localeCode())}</td>
      <td class="action-cell">
        <button type="button" class="primary accreq-approve-btn">${t('accreq.approveBtn')}</button>
        <button type="button" class="ghost accreq-reject-btn">${t('accreq.rejectBtn')}</button>
      </td>
    `;
    pendingBody.appendChild(tr);
    tr.querySelector('.accreq-approve-btn').addEventListener('click', (e) => approveAccountRequest(req, e.target));
    tr.querySelector('.accreq-reject-btn').addEventListener('click', () => rejectAccountRequest(req));
  });

  const historyTable = document.getElementById('accreqHistoryTable');
  const historyEmpty = document.getElementById('accreqHistoryEmpty');
  const historyBody = document.getElementById('accreqHistoryBody');
  historyBody.innerHTML = '';
  historyTable.style.display = history.length ? 'table' : 'none';
  historyEmpty.style.display = history.length ? 'none' : 'block';

  history.forEach(req => {
    const tr = document.createElement('tr');
    const statusBadge = req.status === 'approved'
      ? `<span class="badge">${t('accreq.statusApproved')}</span>`
      : `<span class="badge badge-warn">${t('accreq.statusRejected')}</span>`;
    tr.innerHTML = `
      <td>${req.name}</td>
      <td>${req.email}</td>
      <td>${statusBadge}</td>
      <td>${req.reviewedAt ? new Date(req.reviewedAt).toLocaleString(localeCode()) : '-'}</td>
      <td class="action-cell">${req.status === 'approved' ? `<button type="button" class="ghost accreq-resend-btn">${t('accreq.resendBtn')}</button>` : ''}</td>
    `;
    historyBody.appendChild(tr);
    const resendBtn = tr.querySelector('.accreq-resend-btn');
    if (resendBtn) resendBtn.addEventListener('click', () => resendSetPasswordEmail(req.email, resendBtn));
  });
}

function approveAccountRequest(req, btn) {
  btn.disabled = true;
  btn.textContent = t('accreq.approving');
  const tempPassword = generateTempPassword();

  accountCreatorAuth.createUserWithEmailAndPassword(req.email, tempPassword)
    .then(cred => db.collection(USERS_COLLECTION).doc(cred.user.uid).set({
      name: req.name,
      email: req.email,
      createdAt: Date.now(),
      createdBy: currentUser.email,
    }))
    .then(() => accountCreatorAuth.signOut())
    .then(() => auth.sendPasswordResetEmail(req.email))
    .then(() => db.collection(ACCOUNT_REQUESTS_COLLECTION).doc(req.id).update({
      status: 'approved',
      reviewedAt: Date.now(),
      reviewedBy: currentUser.email,
    }))
    .then(() => logActivity({ type: 'account_request_approved', actorEmail: currentUser.email, targetEmail: req.email }))
    .catch(err => {
      alert(t('accreq.approveFailed', { error: err.message }));
      btn.disabled = false;
      btn.textContent = t('accreq.approveBtn');
    });
}

function rejectAccountRequest(req) {
  if (!confirm(t('accreq.confirmReject', { name: req.name || req.email }))) return;
  db.collection(ACCOUNT_REQUESTS_COLLECTION).doc(req.id).update({
    status: 'rejected',
    reviewedAt: Date.now(),
    reviewedBy: currentUser.email,
  })
    .then(() => logActivity({ type: 'account_request_rejected', actorEmail: currentUser.email, targetEmail: req.email }))
    .catch(err => alert(t('accreq.rejectFailed', { error: err.message })));
}

function resendSetPasswordEmail(email, btn) {
  btn.disabled = true;
  auth.sendPasswordResetEmail(email)
    .then(() => alert(t('accreq.resendDone')))
    .catch(err => alert(t('accreq.resendFailed', { error: err.message })))
    .finally(() => { btn.disabled = false; });
}

// --- Login (siapa pun yang sudah punya akun — admin atau user biasa) ---
function updateAdminUI() {
  const admin = isAdminUser();
  // Sidebar berubah warna jadi hijau kalau lagi login admin, supaya kelihatan jelas
  // dari jauh sedang login admin atau bukan — lihat aturan warnanya di style.css.
  // User biasa yang login TIDAK ikut kena tema ini, tampilannya tetap biru seperti
  // biasa — cuma bedanya sekarang wajib login dulu untuk melihatnya (lihat authGate).
  document.body.classList.toggle('admin-active', admin);
  document.getElementById('sidebarLogo').style.display = admin ? 'none' : 'block';
  document.getElementById('sidebarHello').style.display = admin ? 'flex' : 'none';
  if (currentUser) {
    // Email tidak ditampilkan utuh, baik admin maupun user biasa — cuma nama depannya
    // di pojok kanan atas (dan di sapaan sidebar untuk admin).
    document.getElementById('adminEmailLabel').textContent = firstNameFromEmail(currentUser.email);
    if (admin) document.getElementById('sidebarHelloName').textContent = firstNameFromEmail(currentUser.email);
  }
  document.getElementById('importFlagsBtn').disabled = !admin;

  // Lihat daftar Member Safety & Backup/Restore: khusus admin. Menambah id baru
  // (form "Tambah" di atas) tetap terbuka untuk semua akun, tidak ikut dibatasi di sini.
  document.getElementById('toggleFlagListBtn').style.display = admin ? 'inline-block' : 'none';
  document.getElementById('flagListAdminNote').style.display = admin ? 'none' : 'block';
  document.getElementById('flagBackupActions').style.display = admin ? 'flex' : 'none';
  document.getElementById('flagBackupAdminNote').style.display = admin ? 'none' : 'block';

  // Statistik Member Safety di Dashboard juga khusus admin.
  document.getElementById('dashAdminStats').style.display = admin ? 'flex' : 'none';

  // Halaman Permintaan Akun: khusus admin, disembunyikan total dari sidebar untuk
  // akun biasa (sama prinsipnya dengan proteksi Member Safety — lihat komentar di
  // firebaseConfig di atas).
  document.getElementById('navAccountRequests').style.display = admin ? 'flex' : 'none';
  document.getElementById('navUserMonitor').style.display = admin ? 'flex' : 'none';
  // Kalau akun non-admin masuk saat halaman admin-only masih terbuka (mis. admin logout
  // lalu akun biasa login), kembalikan ke Dashboard.
  if (!admin && currentPageId !== 'dashboard' && ADMIN_ONLY_PAGES.has(currentPageId)) activatePage('dashboard');

  // Lonceng notifikasi Aktivitas Pengguna: khusus admin juga.
  document.getElementById('topbarNotif').style.display = admin ? 'block' : 'none';
  if (!admin) document.getElementById('notifDropdown').style.display = 'none';

  if (!admin) {
    // Kalau admin logout saat daftarnya lagi kebuka, tutup lagi & reset teks tombolnya.
    document.getElementById('flagListContainer').style.display = 'none';
    document.getElementById('toggleFlagListBtn').textContent = t('flagged.toggleShow');
  }

  renderHowtoBoxes();
  renderProfile();
}

// --- Profil pengguna (ikon orang di topbar) ---
// Terbuka untuk semua akun yang login: info akun, ganti password, id Member Safety yang
// ditambahkan akun ini sendiri (dari field addedBy), dan preferensi tampilan.
// "var" (bukan let) sengaja, sama seperti monitorInitialized: setLanguage() memanggil
// renderProfile() saat load, sebelum deklarasi let/const di bawah dieksekusi (TDZ).
var profileInitialized = false;
const PASSWORD_MIN_LENGTH = 8;

function formatAuthTime(str) {
  const d = str ? new Date(str) : null;
  return d && !isNaN(d) ? d.toLocaleString(localeCode()) : '-';
}

function renderProfile() {
  if (!profileInitialized || !currentUser) return;
  const meta = currentUser.metadata || {};
  document.getElementById('pfName').textContent = firstNameFromEmail(currentUser.email);
  document.getElementById('pfEmail').textContent = currentUser.email;
  document.getElementById('pfRole').textContent = isAdminUser() ? t('profile.roleAdmin') : t('profile.roleUser');
  document.getElementById('pfCreated').textContent = formatAuthTime(meta.creationTime);
  document.getElementById('pfLastSignIn').textContent = formatAuthTime(meta.lastSignInTime);

  const mine = loadFlags()
    .filter(f => f.addedBy && f.addedBy === currentUser.email)
    .sort((a, b) => b.addedAt - a.addedAt);
  document.getElementById('pfFlagCount').textContent = mine.length;
  document.getElementById('pfFlagTable').style.display = mine.length ? 'table' : 'none';
  document.getElementById('pfFlagEmpty').style.display = mine.length ? 'none' : 'block';
  const body = document.getElementById('pfFlagBody');
  body.innerHTML = '';
  mine.forEach(flag => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${wbEscape(flag.id)}</td>
      <td><span class="badge badge-${wbEscape(flag.category)}">${categoryLabel(flag.category)}</span></td>
      <td>${wbEscape(flag.note || '-')}</td>
      <td>${new Date(flag.addedAt).toLocaleString(localeCode())}</td>
    `;
    body.appendChild(tr);
  });

  document.getElementById('pfLangId').classList.toggle('active', currentLang === 'id');
  document.getElementById('pfLangEn').classList.toggle('active', currentLang === 'en');
  const hiddenCount = loadHiddenBonusIds().size;
  document.getElementById('pfHiddenInfo').textContent = t('profile.hiddenInfo', { count: hiddenCount });
  document.getElementById('pfHiddenResetBtn').disabled = hiddenCount === 0;
}

function setPasswordMsg(key, kind, params) {
  const box = document.getElementById('pfPwMsg');
  box.className = 'auth-gate-msg' + (kind ? ' is-' + kind : '');
  box.textContent = key ? t(key, params) : '';
}

// Ganti password wajib verifikasi ulang password lama (reauthenticate) — Firebase juga
// menolak updatePassword untuk sesi yang sudah lama, dan ini sekaligus mencegah orang
// yang meminjam browser yang sedang login mengganti password.
document.getElementById('pfPwForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = currentUser;
  if (!user) return;
  const oldPw = document.getElementById('pfOldPw').value;
  const newPw = document.getElementById('pfNewPw').value;
  const confirmPw = document.getElementById('pfConfirmPw').value;

  if (!oldPw || !newPw || !confirmPw) return setPasswordMsg('profile.pwFillAll', 'error');
  if (newPw.length < PASSWORD_MIN_LENGTH) return setPasswordMsg('profile.pwTooShort', 'error', { min: PASSWORD_MIN_LENGTH });
  if (newPw !== confirmPw) return setPasswordMsg('profile.pwMismatch', 'error');
  if (newPw === oldPw) return setPasswordMsg('profile.pwSame', 'error');

  const btn = document.getElementById('pfPwBtn');
  btn.disabled = true;
  setPasswordMsg(null);
  user.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(user.email, oldPw))
    .then(() => user.updatePassword(newPw))
    .then(() => {
      document.getElementById('pfPwForm').reset();
      setPasswordMsg('profile.pwDone', 'success');
      logActivity({ type: 'password_change', actorEmail: user.email });
    })
    .catch(err => {
      const code = err && err.code;
      if (code === 'auth/wrong-password' || code === 'auth/invalid-credential' || code === 'auth/invalid-login-credentials') setPasswordMsg('profile.pwWrong', 'error');
      else if (code === 'auth/weak-password') setPasswordMsg('profile.pwWeak', 'error');
      else if (code === 'auth/too-many-requests') setPasswordMsg('profile.pwTooMany', 'error');
      else setPasswordMsg('profile.pwFailed', 'error', { error: err && err.message ? err.message : String(err) });
    })
    .finally(() => { btn.disabled = false; });
});

document.getElementById('pfLangId').addEventListener('click', () => setLanguage('id'));
document.getElementById('pfLangEn').addEventListener('click', () => setLanguage('en'));
document.getElementById('pfHiddenResetBtn').addEventListener('click', () => {
  saveHiddenBonusIds(new Set());
  renderBonusHiddenBar();
  renderProfile();
});
function setAllHowtoOpen(open) {
  document.querySelectorAll('.howto-card').forEach(card => setHowtoOpen(card, card.getAttribute('data-howto-page'), open));
}
document.getElementById('pfHowtoOpenBtn').addEventListener('click', () => setAllHowtoOpen(true));
document.getElementById('pfHowtoCloseBtn').addEventListener('click', () => setAllHowtoOpen(false));
document.getElementById('profileIcon').addEventListener('click', () => activatePage('profile'));

profileInitialized = true;

// Menampilkan/menyembunyikan seluruh app di balik gerbang login — akses semua fitur
// (bukan cuma yang admin-only) sekarang wajib pakai akun. Ditentukan murni dari
// isSignedIn() (bukan isAdminUser()), jadi akun biasa yang sudah disetujui admin bisa
// masuk dan pakai semua fitur, cuma tidak dapat menu/tema khusus admin.
function updateAuthGate() {
  const signedIn = isSignedIn();
  document.getElementById('appShell').style.display = signedIn ? 'flex' : 'none';
  document.getElementById('authGate').style.display = signedIn ? 'none' : 'flex';
}

auth.onAuthStateChanged(user => {
  currentUser = user;
  updateAuthGate();
  updateAdminUI();
  if (user) {
    startAuthedListeners();
    startPresence();
    if (isAdminUser()) startAdminListeners(); else stopAdminListeners();
  } else {
    stopPresence();
    stopAuthedListeners();
    stopAdminListeners();
  }
});

// --- Auth gate: tab Login <-> Ajukan Akun ---
function setGateTab(tab) {
  document.getElementById('gateTabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('gateTabRequest').classList.toggle('active', tab === 'request');
  document.getElementById('gateLoginPanel').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('gateRequestPanel').style.display = tab === 'request' ? 'flex' : 'none';
}
document.getElementById('gateTabLogin').addEventListener('click', () => setGateTab('login'));
document.getElementById('gateTabRequest').addEventListener('click', () => setGateTab('request'));

function submitGateLogin() {
  const email = document.getElementById('gateEmailInput').value.trim();
  const password = document.getElementById('gatePasswordInput').value;
  const errBox = document.getElementById('gateLoginError');
  errBox.textContent = '';
  auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
      document.getElementById('gateEmailInput').value = '';
      document.getElementById('gatePasswordInput').value = '';
      // Pakai email dari hasil sign-in langsung (bukan variabel currentUser global)
      // supaya tidak bergantung urutan firing onAuthStateChanged vs promise ini.
      logActivity({ type: 'login', actorEmail: cred.user.email });
      writePresence({ lastLoginAt: serverNow() });
    })
    .catch(() => {
      errBox.textContent = t('admin.loginError');
    });
}

document.getElementById('gateLoginBtn').addEventListener('click', submitGateLogin);

['gateEmailInput', 'gatePasswordInput'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitGateLogin();
  });
});

function submitAccountRequest() {
  const nameInput = document.getElementById('gateReqNameInput');
  const emailInput = document.getElementById('gateReqEmailInput');
  const noteInput = document.getElementById('gateReqNoteInput');
  const msgBox = document.getElementById('gateRequestMsg');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const note = noteInput.value.trim();

  msgBox.className = 'auth-gate-msg';
  msgBox.textContent = '';

  if (!name || !email) {
    msgBox.textContent = t('gate.requestFillRequired');
    msgBox.classList.add('is-error');
    return;
  }

  db.collection(ACCOUNT_REQUESTS_COLLECTION).add({
    name,
    email,
    note,
    status: 'pending',
    requestedAt: Date.now(),
    reviewedAt: null,
    reviewedBy: null,
  }).then(() => {
    nameInput.value = '';
    emailInput.value = '';
    noteInput.value = '';
    msgBox.textContent = t('gate.requestSent');
    msgBox.classList.add('is-success');
    logActivity({ type: 'account_request_submitted', requesterName: name, requesterEmail: email });
  }).catch(err => {
    msgBox.textContent = t('gate.requestFailed', { error: err.message });
    msgBox.classList.add('is-error');
  });
}

document.getElementById('gateRequestBtn').addEventListener('click', submitAccountRequest);

// Log & status offline harus terkirim SEBELUM signOut — aturan Firestore mewajibkan
// pengirimnya masih login, jadi signOut menunggu kedua tulisan itu selesai.
document.getElementById('adminLogoutBtn').addEventListener('click', () => {
  if (!currentUser) { auth.signOut(); return; }
  Promise.all([
    logActivity({ type: 'logout', actorEmail: currentUser.email }),
    writePresence({ status: 'offline' }),
  ]).finally(() => auth.signOut());
});

// --- Navigasi sidebar: satu halaman ("page") aktif ditampilkan, sisanya disembunyikan ---
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const dataSumber = document.querySelector('.data-sumber');
// Data Sumber (History QR Pay & History) cuma dipakai oleh Bonus/New Member/ID
// Bermasalah — Dashboard & Win/Lose punya sumber datanya sendiri (atau tidak butuh sama sekali).
const ADMIN_ONLY_PAGES = new Set(['accountrequests', 'usermonitor']);
const PAGES_WITHOUT_DATA_SUMBER = new Set(['dashboard', 'accountrequests', 'usermonitor', 'profile', 'winlose', 'flagged', 'inputbonus', 'withdrawreport', 'winlosemember', 'wdbalance']);

function activatePage(target) {
  navItems.forEach(b => b.classList.toggle('active', b.dataset.page === target));
  pages.forEach(p => {
    p.style.display = p.dataset.page === target ? 'block' : 'none';
  });
  dataSumber.style.display = PAGES_WITHOUT_DATA_SUMBER.has(target) ? 'none' : 'block';

  // Buka grup accordion yang memuat halaman ini, supaya item aktifnya kelihatan.
  const activeBtn = Array.from(navItems).find(b => b.dataset.page === target);
  const group = activeBtn && activeBtn.closest('.nav-group');
  if (group) openOnlyNavGroup(group);

  currentPageId = target;
  document.getElementById('profileIcon').classList.toggle('active', target === 'profile');
  if (target === 'profile') renderProfile();
  if (target === 'dashboard') renderDashboard();
  if (target === 'usermonitor' && isAdminUser()) { startMonitorListeners(); renderMonitor(); }
  writePresence({}, true);
}

navItems.forEach(btn => {
  btn.addEventListener('click', () => activatePage(btn.dataset.page));
});

// --- Grup menu sidebar bisa dibuka/tutup (accordion) ---
// Hanya satu grup yang boleh terbuka sekaligus: membuka satu grup menutup yang lain.
function openOnlyNavGroup(group) {
  document.querySelectorAll('.nav-group.open').forEach(g => {
    if (g !== group) g.classList.remove('open');
  });
  group.classList.add('open');
}

document.querySelectorAll('.nav-group-header').forEach(header => {
  header.addEventListener('click', () => {
    const group = header.closest('.nav-group');
    if (group.classList.contains('open')) group.classList.remove('open');
    else openOnlyNavGroup(group);
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

// --- Dashboard: ringkasan daftar Member Safety (satu-satunya data yang persisten). ---
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
  db.collection(FLAGS_COLLECTION).doc(flagDocId(id)).set({ id, category, note, addedAt: Date.now(), addedBy: currentUser.email })
    .then(() => {
      idInput.value = '';
      noteInput.value = '';
      logActivity({ type: 'flag_add', actorEmail: currentUser.email, targetId: id, category });
    })
    .catch(err => {
      warnBox.innerHTML = err.code === 'permission-denied'
        ? `<div class="warn-box">${t('admin.editAdminOnly', { id })}</div>`
        : `<div class="warn-box">${t('flagged.saveFailed', { error: err.message })}</div>`;
    });
});

// --- Backup & restore daftar Member Safety ---
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
      // Pencatat asli ikut dipertahankan kalau ada di backup (id lama tidak punya field ini).
      ...(typeof item.addedBy === 'string' && item.addedBy ? { addedBy: item.addedBy } : {}),
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
function buildBonusReport(txRaw, givenRaw, pct, hiddenIds) {
  const deposits = parseRecords(txRaw).filter(r => r.status.toLowerCase() === 'confirmed');
  const bonusRecords = parseRecords(givenRaw).filter(isBonusDeposit).filter(r => r.status.toLowerCase() === 'confirmed');
  // Bonus awal + susulan kekurangannya digabung jadi satu "event" per kejadian
  // sebelum dicocokkan/dicek dobel — lihat komentar di groupBonusEvents().
  const bonusEvents = groupBonusEvents(bonusRecords);

  const { pairs, pendingDeposits, unmatchedEvents } = matchDepositsAndBonuses(deposits, bonusEvents);

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

  // Tidak Sesuai: JUMLAH semua bonus yang kepasang ke satu deposit beda dari
  // seharusnya (di luar toleransi pembulatan ke ribuan terdekat) — lihat komentar
  // di groupPairsByDeposit(). Kalau totalnya pas, deposit ini tidak ditampilkan
  // sama sekali walau bonusnya dikasih lewat lebih dari satu baris History.
  groupPairsByDeposit(pairs).forEach(({ deposit, bonusEvents: given }) => {
    const expected = computeExpectedBonus(deposit.amount, pct, deposit.code);
    const totalGiven = given.reduce((sum, b) => sum + b.amount, 0);
    const evaluation = evaluateBonusAmount(expected, totalGiven);
    if (evaluation.status === 'ok') return;
    const sorted = given.slice().sort((a, b) => a.timestamp - b.timestamp);
    const noteKey = evaluation.status === 'excess' ? 'bonus.noteExcess' : 'bonus.noteShortage';
    const note = t(noteKey) + formatRupiah(evaluation.diff)
      + (sorted.length > 1 ? ' ' + t('bonus.noteMultiRowSuffix', { count: sorted.length }) : '');
    const rows = sorted.map((b, i) => ({
      kind: 'mismatch', username: b.username, expected: i === 0 ? expected : null,
      given: b.amount, note: i === 0 ? note : '-',
      waktu: b.dateText || '-', groupStart: i === 0,
    }));
    items.push({ sortTs: sorted[sorted.length - 1].timestamp, rows });
  });

  // Dobel: username yang punya lebih dari satu bonus event yang SAMA-SAMA TIDAK
  // ketemu deposit confirmed yang cocok (unmatchedEvents). Bonus yang kepasang ke
  // deposit yang sama sudah dievaluasi lewat jumlahnya di atas, jadi tidak pernah
  // masuk sini walau ada 2+ baris History untuknya.
  findDuplicateGroups(unmatchedEvents).forEach(group => {
    const sorted = group.slice().sort((a, b) => a.timestamp - b.timestamp);
    const rows = sorted.map((r, i) => ({
      kind: 'double', username: r.username, expected: null,
      given: r.amount, note: i === 0 ? t('bonus.noteDouble', { count: sorted.length }) : '-',
      waktu: r.dateText || '-', groupStart: i === 0,
    }));
    items.push({ sortTs: sorted[sorted.length - 1].timestamp, rows });
  });

  items.sort((a, b) => b.sortTs - a.sortTs);

  // ID yang disembunyikan (lihat loadHiddenBonusIds()) dikeluarkan dari hasil
  // sebelum hitungan badge dibuat, supaya badge selalu cocok dengan yang tampil.
  const visibleItems = hiddenIds && hiddenIds.size > 0
    ? items.filter(it => !hiddenIds.has(it.rows[0].username.toLowerCase()))
    : items;

  return {
    rows: visibleItems.flatMap(it => it.rows),
    counts: {
      pending: visibleItems.filter(it => it.rows[0].kind === 'pending').length,
      mismatch: visibleItems.filter(it => it.rows[0].kind === 'mismatch').length,
      double: visibleItems.filter(it => it.rows[0].kind === 'double').length,
    },
    unmatchedCount: unmatchedEvents.length,
    hiddenCount: items.length - visibleItems.length,
  };
}

// Daftar id yang disembunyikan dari hasil Cek Bonus (misalnya karena sudah dicek
// atau diperbaiki manual dan sering muncul lagi sebagai dobel/kekurangan/kelebihan).
// Cuma tersimpan di localStorage browser ini — beda dari Member Safety yang sinkron
// lewat Firestore — supaya tidak hilang saat refresh tapi tetap gampang direset
// per device dan tidak memengaruhi orang lain.
const HIDDEN_BONUS_IDS_KEY = 'workingTools.hiddenBonusIds';

function loadHiddenBonusIds() {
  try {
    const raw = JSON.parse(localStorage.getItem(HIDDEN_BONUS_IDS_KEY) || '[]');
    return new Set(Array.isArray(raw) ? raw : []);
  } catch {
    return new Set();
  }
}

function saveHiddenBonusIds(set) {
  localStorage.setItem(HIDDEN_BONUS_IDS_KEY, JSON.stringify([...set]));
}

let bonusHiddenListOpen = false;

function renderBonusHiddenBar() {
  const bar = document.getElementById('bonusHiddenBar');
  const list = document.getElementById('bonusHiddenList');
  const toggleBtn = document.getElementById('bonusHiddenToggleBtn');
  const hidden = loadHiddenBonusIds();

  if (hidden.size === 0) {
    bar.style.display = 'none';
    bonusHiddenListOpen = false;
    return;
  }

  bar.style.display = 'block';
  toggleBtn.textContent = t('bonus.hiddenCount', { count: hidden.size })
    + ' · ' + (bonusHiddenListOpen ? t('bonus.hiddenHideList') : t('bonus.hiddenShow'));
  list.style.display = bonusHiddenListOpen ? 'flex' : 'none';

  list.innerHTML = [...hidden].sort().map(id => `
    <span class="hidden-id-chip">${id}<button type="button" data-id="${id}" title="${t('bonus.unhideBtn')}">×</button></span>
  `).join('');

  list.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const hiddenSet = loadHiddenBonusIds();
      hiddenSet.delete(btn.getAttribute('data-id'));
      saveHiddenBonusIds(hiddenSet);
      runBonusCheck();
    });
  });
}

document.getElementById('bonusHiddenToggleBtn').addEventListener('click', () => {
  bonusHiddenListOpen = !bonusHiddenListOpen;
  renderBonusHiddenBar();
});

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

function runBonusCheck() {
  const txRaw = document.getElementById('txData').value;
  const givenRaw = document.getElementById('givenData').value;
  const warnBox = document.getElementById('bonusWarnBox');
  warnBox.innerHTML = '';

  const hasAnyData = parseRecords(txRaw).length > 0 || parseRecords(givenRaw).length > 0;
  if (!hasAnyData) {
    warnBox.innerHTML = `<div class="warn-box">${t('bonus.noDataWarn')}</div>`;
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    renderBonusHiddenBar();
    return;
  }

  const pct = parseInt(document.getElementById('pctSelect').value, 10);
  const hiddenIds = loadHiddenBonusIds();
  const report = buildBonusReport(txRaw, givenRaw, pct, hiddenIds);
  const flags = loadFlags();
  renderBonusHiddenBar();

  const unmatchedNote = report.unmatchedCount > 0
    ? `<div class="warn-box">${t('bonus.unmatchedNote', { count: report.unmatchedCount })}</div>`
    : '';

  const body = document.getElementById('bonusResultBody');
  body.innerHTML = '';

  if (report.rows.length === 0) {
    document.getElementById('bonusResultCard').style.display = 'none';
    document.getElementById('bonusEmptyCard').style.display = 'block';
    document.getElementById('bonusEmptyCard').querySelector('.empty-state').textContent =
      report.hiddenCount > 0 ? t('bonus.allHiddenEmpty', { count: report.hiddenCount }) : t('bonus.safeEmpty');
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
      <td class="action-cell"><button type="button" class="row-hide-btn" title="${t('bonus.hideIdTitle')}">${t('bonus.hideIdBtn')}</button></td>
    `;
    body.appendChild(tr);

    makeCopyable(tr.querySelector('.idcell'), r.username);
    if (r.expected != null) makeCopyable(tr.children[1], String(r.expected));
    if (r.given != null) makeCopyable(tr.children[2], String(r.given));

    tr.querySelector('.row-hide-btn').addEventListener('click', () => {
      const hiddenSet = loadHiddenBonusIds();
      hiddenSet.add(r.username.toLowerCase());
      saveHiddenBonusIds(hiddenSet);
      runBonusCheck();
    });
  });
}

document.getElementById('bonusProcessBtn').addEventListener('click', runBonusCheck);

// --- Input Bonus ---
// Fitur simpel: paste laporan bonus yang sudah diberikan (format multi-baris yang
// sama seperti History), lalu tampilkan cuma id + nominalnya, diurutkan dari
// nominal terbesar/terkecil, dan tandai id yang muncul dobel (2x atau lebih).
// Tidak ada pengecekan kesesuaian/persentase di sini — murni menampilkan apa yang
// tertulis di data, plus deteksi dobel. Parser yang dipakai sama persis dengan yang
// sudah ada (parseRecords + isBonusDeposit), karena formatnya cocok.
let lastInputBonusRows = [];

function buildInputBonusReport(raw, sortOrder) {
  const records = parseRecords(raw).filter(isBonusDeposit);
  const doubleUsernames = new Set(
    findDuplicateGroups(records).map(group => group[0].username.toLowerCase())
  );
  const rows = records
    .slice()
    .sort((a, b) => (sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount));
  return { rows, doubleCount: doubleUsernames.size, doubleUsernames };
}

document.getElementById('inputBonusProcessBtn').addEventListener('click', () => {
  const raw = document.getElementById('inputBonusData').value;
  const sortOrder = document.getElementById('inputBonusSortSelect').value;
  const warnBox = document.getElementById('inputBonusWarnBox');
  warnBox.innerHTML = '';

  const { rows, doubleCount, doubleUsernames } = buildInputBonusReport(raw, sortOrder);
  lastInputBonusRows = rows;
  const body = document.getElementById('inputBonusResultBody');
  body.innerHTML = '';

  if (rows.length === 0) {
    document.getElementById('inputBonusResultCard').style.display = 'none';
    document.getElementById('inputBonusEmptyCard').style.display = 'block';
    document.getElementById('inputBonusEmptyCard').querySelector('.empty-state').textContent = t('inputBonus.noData');
    return;
  }

  document.getElementById('inputBonusEmptyCard').style.display = 'none';
  document.getElementById('inputBonusResultCard').style.display = 'block';
  document.getElementById('inputBonusCountBadge').textContent =
    doubleCount > 0 ? t('inputBonus.doubleBadge', { count: doubleCount }) : t('inputBonus.noDouble');

  rows.forEach(r => {
    const isDouble = doubleUsernames.has(r.username.toLowerCase());
    // Kode di depan id (mis. "BBC@") ditampilkan utuh di fitur ini karena dibutuhkan —
    // beda dari menu lain yang memang menghilangkannya.
    const idWithCode = r.code ? `${r.code}@${r.username}` : r.username;
    const tr = document.createElement('tr');
    if (isDouble) tr.classList.add('kind-double');
    tr.innerHTML = `
      <td class="idcell">${idWithCode}${isDouble ? ' <span class="badge badge-warn">2x+</span>' : ''}</td>
      <td class="amount">${formatCopyableAmount(r.amount)}</td>
    `;
    body.appendChild(tr);
    makeCopyable(tr.querySelector('.idcell'), idWithCode);
    makeCopyable(tr.children[1], String(r.amount));
  });
});

document.getElementById('inputBonusCopyBtn').addEventListener('click', () => {
  const text = lastInputBonusRows.map(r => `${r.code ? r.code + '@' + r.username : r.username}\t${r.amount}`).join('\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('inputBonusCopyBtn');
    const original = btn.textContent;
    btn.textContent = t('inputBonus.copyBtnDone');
    setTimeout(() => { btn.textContent = original; }, 1000);
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

// --- Upload file Excel untuk Data Win/Lose (alternatif dari paste manual) ---
// Sheet pertama dibaca lalu tiap baris/selnya digabung jadi teks tab-separated
// persis seperti hasil copy-paste — jadi baris parser yang sudah ada
// (parseWinLoseRecords dkk.) langsung bisa dipakai lagi tanpa logika baca-Excel
// terpisah. Angka negatif format akuntansi Excel, mis. "(965.67)", diubah dulu ke
// "-965.67" supaya tetap terbaca oleh parser yang sama.
function excelSheetToTabText(workbook) {
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' });
  return rows
    .map(row => row.map(cell => String(cell).trim().replace(/^\(([\d,]+\.?\d*)\)$/, '-$1')).join('\t'))
    .join('\n');
}

function setWinloseFileChip(fileName) {
  document.getElementById('winloseFileName').textContent = fileName;
  document.getElementById('winloseFileChip').style.display = fileName ? 'flex' : 'none';
}

function handleWinloseFile(file) {
  const warnBox = document.getElementById('winloseWarnBox');
  warnBox.innerHTML = '';
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const workbook = XLSX.read(e.target.result, { type: 'array' });
      const text = excelSheetToTabText(workbook);
      if (!text.trim()) {
        warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadEmpty')}</div>`;
        return;
      }
      document.getElementById('winloseData').value = text;
      setWinloseFileChip(file.name);
    } catch (err) {
      warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadReadError', { error: err.message })}</div>`;
    }
  };
  reader.onerror = () => {
    warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadReadError', { error: reader.error && reader.error.message })}</div>`;
  };
  reader.readAsArrayBuffer(file);
}

const winloseUploadZone = document.getElementById('winloseUploadZone');
const winloseFileInput = document.getElementById('winloseFileInput');

winloseUploadZone.addEventListener('click', () => winloseFileInput.click());

winloseFileInput.addEventListener('change', (e) => {
  handleWinloseFile(e.target.files[0]);
  e.target.value = '';
});

['dragover', 'dragenter'].forEach(evt => {
  winloseUploadZone.addEventListener(evt, (e) => {
    e.preventDefault();
    winloseUploadZone.classList.add('dragover');
  });
});
['dragleave', 'dragend'].forEach(evt => {
  winloseUploadZone.addEventListener(evt, () => winloseUploadZone.classList.remove('dragover'));
});
winloseUploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  winloseUploadZone.classList.remove('dragover');
  handleWinloseFile(e.dataTransfer.files[0]);
});

document.getElementById('winloseFileRemove').addEventListener('click', (e) => {
  e.stopPropagation();
  setWinloseFileChip('');
  document.getElementById('winloseData').value = '';
});

// --- Laporan Withdraw ---
// Ringkasan satu id member: deposit & withdraw TERBARU (plus totalnya di hari yang
// sama dengan masing-masing), sisa saldo setelah withdraw terbaru, dan statistik
// akumulasi selama rentang data yang di-paste (idealnya 3 bulan terakhir, sesuai
// arahan di kartu Cara Penggunaan). "Data Deposit" tetap dibaca lewat parseRecords()
// yang sudah ada (formatnya sama seperti Deposit Request History/History), tapi
// "Data Withdraw" BEDA bentuknya — lihat parseWithdrawRecords() di bawah — jadi
// dibikinkan parser sendiri.
//
// SISA SALDO dihitung dari SELURUH data yang di-paste (total deposit dikurangi total
// withdraw, bukan cuma hari ini), supaya benar-benar mencerminkan saldo akhir —
// makanya rentang data yang di-paste harus mencakup sejak saldo terakhir "nol"
// (idealnya 3 bulan terakhir), bukan cuma sehari.
function sameLocalDay(ts1, ts2) {
  const a = new Date(ts1);
  const b = new Date(ts2);
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

// Withdraw Request History satu baris = satu record (bukan multi-baris per blok
// seperti Deposit Request History), kolomnya (tab-separated): No, User Name, Bank
// Name, Account Name, Account Number, Date/Time, Withdraw Amount, Old Balance, New
// Balance, Payment Method, Status, Status Date, Remark, Edited By.
//
// Nominalnya (Withdraw Amount/Old Balance/New Balance) ditulis koma = pemisah ribuan,
// titik = desimal (mis. "17,000.00") — TAPI angka itu masih perlu dikali 1000 untuk
// jadi Rupiah yang benar, laporan ini nominalnya "diringkas" per-ribu dibanding
// Deposit/History yang nominalnya Rupiah utuh. Dikonfirmasi dari selisih Old Balance
// - Withdraw Amount = New Balance di satuan aslinya (17,020.18 - 17,000.00 = 20.18)
// — begitu dikali 1000 semua, hasilnya Rp17.020.180 - Rp17.000.000 = Rp20.180, tetap
// konsisten, jadi memang cuma soal satuan tampilan, bukan bug pembulatan.
const WD_AMOUNT_RE = /^-?[\d,]+(?:\.\d+)?$/;

function parseWithdrawAmount(str) {
  const n = parseFloat((str || '').replace(/,/g, ''));
  return isNaN(n) ? 0 : Math.round(n * 1000);
}

function parseWithdrawRecords(raw) {
  const records = [];
  raw.split(/\r?\n/).forEach(line => {
    const cols = line.split('\t').map(c => c.trim());
    // Butuh minimal sampai kolom Status (indeks 10) — baris header/ringkasan/kosong
    // otomatis gagal di pengecekan "@" atau format nominal di bawah.
    if (cols.length < 11) return;
    const usernameCol = cols[1] || '';
    if (!usernameCol.includes('@')) return;
    if (!WD_AMOUNT_RE.test(cols[6] || '')) return;

    const code = usernameCol.slice(0, usernameCol.indexOf('@'));
    const username = usernameCol.slice(usernameCol.indexOf('@') + 1);
    const amount = parseWithdrawAmount(cols[6]);
    const newBalance = parseWithdrawAmount(cols[8]);
    const { timestamp, text: dateText } = parseDateTime((cols[5] || '').match(DATETIME_RE));
    const status = cols[10] || '';
    // Remark & editor dipakai menu Withdraw Balance; menu lain tidak memakainya.
    const remark = cols[12] || '';
    const editedBy = cols[13] || '';

    records.push({ username, amount, newBalance, timestamp, dateText, status, code, remark, editedBy });
  });
  return records;
}

function buildWithdrawReport(depositRaw, withdrawRaw, rawId, website, games, registerTime, betTypes) {
  const id = stripIdCode(rawId.trim());
  const key = id.toLowerCase();

  const deposits = parseRecords(depositRaw)
    .filter(r => r.status.toLowerCase() === 'confirmed')
    .filter(r => r.username.toLowerCase() === key);
  const withdraws = parseWithdrawRecords(withdrawRaw)
    .filter(r => r.status.toLowerCase() === 'confirmed')
    .filter(r => r.username.toLowerCase() === key);

  if (deposits.length === 0 && withdraws.length === 0) return null;

  const sumAmount = list => list.reduce((s, r) => s + r.amount, 0);
  const latestOf = list => (list.length === 0 ? null : list.reduce((a, b) => (b.timestamp > a.timestamp ? b : a)));

  const lastDeposit = latestOf(deposits);
  const lastWithdraw = latestOf(withdraws);

  // TOTAL DP/TOTAL WD di blok atas = total di hari yang sama dengan deposit/withdraw
  // TERBARU masing-masing (bisa beda hari kalau member terakhir deposit & withdraw
  // tidak di hari yang sama).
  const totalDpToday = lastDeposit ? sumAmount(deposits.filter(r => sameLocalDay(r.timestamp, lastDeposit.timestamp))) : 0;
  const totalWdToday = lastWithdraw ? sumAmount(withdraws.filter(r => sameLocalDay(r.timestamp, lastWithdraw.timestamp))) : 0;

  const totalDpAll = sumAmount(deposits);
  const totalWdAll = sumAmount(withdraws);
  // TOTAL BONUS di sini sengaja lebih luas dari isBonusDeposit() (yang hanya
  // mengenali remark "BONUS DEPOSIT"/"BONUS DP") — mencakup SEMUA kredit dari admin
  // (bonus deposit harian, cashback slot, referral, dll), bukan cuma yang remark-nya
  // literal "bonus". Sinyalnya: depositType "agent" (Payment Method "Agent Deposit")
  // ATAU "bonus" — dua-duanya kredit dari admin, beda dengan "Member Deposit" asli
  // (depositType kosong). Tetap masuk hitungan TOTAL DP juga (tidak dikurangkan),
  // karena TOTAL DP memang didefinisikan mencakup bonus/cashback — lihat komentar
  // fungsi ini di atas.
  const totalBonus = sumAmount(deposits.filter(r => r.depositType === 'bonus' || r.depositType === 'agent'));
  // SISA SALDO diambil langsung dari kolom "New Balance" pada withdraw TERBARU yang
  // di-paste (bukan dihitung sendiri dari total deposit - total withdraw) — itu
  // saldo yang beneran tercatat di sistem, bukan estimasi. Kalau belum pernah
  // withdraw sama sekali, tidak ada New Balance untuk dijadikan acuan, jadi dipakai
  // total deposit dikurangi total withdraw (=total deposit, karena WD-nya 0) sebagai
  // estimasi seadanya.
  const sisaSaldo = lastWithdraw ? lastWithdraw.newBalance : (totalDpAll - totalWdAll);

  // Akumulasi dihitung dari sudut pandang saldo KITA (operator): deposit itu saldo
  // MASUK jadi plus, sementara withdraw dan bonus itu saldo KELUAR dari kita jadi
  // minus. Hasil plus = WIN, hasil minus = LOSE.
  const winLoseResult = (totalDpAll - totalBonus) - totalWdAll;
  const status = winLoseResult > 0 ? 'WIN' : (winLoseResult < 0 ? 'LOSE' : 'IMPAS');
  // Nominal yang ditampilkan di baris STATUS = selisih akumulasinya (Math.abs, karena
  // arah untung/rugi sudah terwakili oleh kata WIN/LOSE itu sendiri).
  const winLoseAmount = Math.abs(winLoseResult);

  const lines = [
    website || '-',
    `ID : ${id}`,
    `DP : ${lastDeposit ? formatRupiah(lastDeposit.amount) + ' | ' + (lastDeposit.dateText || '-') : '-'}`,
    `TOTAL DP : ${formatRupiah(totalDpToday)}`,
    `WD : ${lastWithdraw ? formatRupiah(lastWithdraw.amount) + ' | ' + (lastWithdraw.dateText || '-') : '-'}`,
    `TOTAL WD : ${formatRupiah(totalWdToday)}`,
    `SISA SALDO : ${formatRupiah(sisaSaldo)}`,
    '',
    'STATISTIK 3 BULAN',
    `TOTAL DP : ${formatRupiah(totalDpAll)}`,
    `TOTAL WD : ${formatRupiah(totalWdAll)}`,
    `TOTAL BONUS : ${formatRupiah(totalBonus)}`,
    `STATUS KITA : ${status} (${formatRupiah(winLoseAmount)})`,
  ];
  // Jenis game (bisa dicampur lebih dari satu) dan jenis taruhan (Single Bet/
  // Parlay/O-U, relevan cuma untuk game sport) ditempel jadi satu baris hashtag.
  if (games && games.length) {
    const betSuffix = betTypes && betTypes.length ? ' ' + betTypes.join(' ') : '';
    lines.push(`#${games.join(' ')}${betSuffix}`);
  }

  // Waktu register opsional — di-paste manual oleh admin (bukan dihitung dari data
  // Deposit/Withdraw), jadi baris ini cuma ditampilkan kalau memang diisi. Selalu di
  // paling bawah, dipisah satu baris kosong dari sisa laporan di atasnya.
  if (registerTime) lines.push('', `REGISTER : ${registerTime}`);

  return lines.join('\n');
}

// Jenis Game sekarang boleh dicentang lebih dari satu ("dicampur"), bukan pilih
// satu lewat dropdown lagi. Menu turunan jenis taruhan (Single Bet/Parlay/O-U) cuma
// relevan kalau SALAH SATU game yang dicentang itu game sport — disembunyikan kalau
// tidak ada satu pun, dan boleh dicentang lebih dari satu juga ("bisa dicampur").
// Daftar eksplisit (bukan tebak dari nama, mis. awalan "SPORT") supaya tidak ikut
// rusak kalau nama game-nya berubah lagi nanti (mis. "SPORT 2" -> "LIGA SB").
const SPORT_GAMES = ['SPORT 1', 'LIGA SB', 'LIGA OMEGA'];
function isSportGame(game) {
  return SPORT_GAMES.includes((game || '').toUpperCase());
}

function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector)).filter(el => el.checked).map(el => el.value);
}

function updateWdBetTypeVisibility() {
  const games = getCheckedValues('.wd-game-checkbox');
  document.getElementById('wdBetTypeGroup').style.display = games.some(isSportGame) ? 'flex' : 'none';
}

// Daftar game-nya ditaruh di <details> supaya ringkas (collapsed by default) — judul
// <summary>-nya diperbarui menampilkan game yang sedang dicentang, jadi tetap
// kelihatan tanpa perlu buka detailnya.
function updateWdGameSummary() {
  const games = getCheckedValues('.wd-game-checkbox');
  const summary = document.getElementById('wdGameSummary');
  summary.textContent = games.length ? `${t('wd.gameLabel')} ${games.join(', ')}` : t('wd.gameLabel');
}

document.querySelectorAll('.wd-game-checkbox').forEach(cb => {
  cb.addEventListener('change', () => { updateWdBetTypeVisibility(); updateWdGameSummary(); });
});
updateWdGameSummary();

document.getElementById('wdProcessBtn').addEventListener('click', () => {
  const website = document.getElementById('wdWebsiteInput').value.trim();
  const idRaw = document.getElementById('wdIdInput').value.trim();
  const registerTime = document.getElementById('wdRegisterInput').value.trim();
  const depositRaw = document.getElementById('wdDepositData').value;
  const withdrawRaw = document.getElementById('wdWithdrawData').value;
  const games = getCheckedValues('.wd-game-checkbox');
  const betTypes = games.some(isSportGame) ? getCheckedValues('#wdBetTypeGroup input[type="checkbox"]') : [];
  const warnBox = document.getElementById('wdWarnBox');
  warnBox.innerHTML = '';

  const resultCard = document.getElementById('wdResultCard');
  const emptyCard = document.getElementById('wdEmptyCard');

  if (!idRaw) {
    warnBox.innerHTML = `<div class="warn-box">${t('wd.noIdWarn')}</div>`;
    resultCard.style.display = 'none';
    emptyCard.style.display = 'block';
    return;
  }

  const report = buildWithdrawReport(depositRaw, withdrawRaw, idRaw, website, games, registerTime, betTypes);

  if (report === null) {
    warnBox.innerHTML = `<div class="warn-box">${t('wd.noDataWarn')}</div>`;
    resultCard.style.display = 'none';
    emptyCard.style.display = 'block';
    return;
  }

  emptyCard.style.display = 'none';
  resultCard.style.display = 'block';
  document.getElementById('wdResultText').value = report;
});

document.getElementById('wdCopyBtn').addEventListener('click', () => {
  const text = document.getElementById('wdResultText').value;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('wdCopyBtn');
    const original = btn.textContent;
    btn.textContent = t('wd.copyBtnDone');
    setTimeout(() => { btn.textContent = original; }, 1000);
  });
});

// --- Win/Lose Member: rekap bulanan Deposit/Withdraw/Bonus Harian/Bonus Cashback
// satu id, dari Data Deposit Request History + Data Withdraw History (format sama
// persis dengan yang dipakai Laporan Withdraw — lihat komentar parseWithdrawRecords).
// Setiap baris DEPOSIT diklasifikasi ke salah satu dari 3 ember: Bonus Harian, Bonus
// Cashback, atau (kalau bukan dua-duanya) digabung jadi Total Deposit — mencakup
// deposit asli member MAUPUN bonus/kredit admin lain (deposit bonus, referral, dst)
// yang tidak secara spesifik ditandai "HARIAN"/"CASHBACK", sesuai permintaan supaya
// semua itu "digabung" jadi satu angka Total Deposit.
function classifyWlmDeposit(record) {
  if (BONUS_HARIAN_RE.test(record.block)) return 'harian';
  if (BONUS_CASHBACK_RE.test(record.block)) return 'cashback';
  return 'deposit';
}

function wlmMonthKey(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function wlmMonthLabel(key) {
  const [year, month] = key.split('-').map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString(localeCode(), { month: 'long', year: 'numeric' });
}

function buildWinLoseMemberReport(depositRaw, withdrawRaw, rawId) {
  const id = stripIdCode(rawId.trim());
  const key = id.toLowerCase();

  const deposits = parseRecords(depositRaw)
    .filter(r => r.status.toLowerCase() === 'confirmed')
    .filter(r => r.username.toLowerCase() === key);
  const withdraws = parseWithdrawRecords(withdrawRaw)
    .filter(r => r.status.toLowerCase() === 'confirmed')
    .filter(r => r.username.toLowerCase() === key);

  if (deposits.length === 0 && withdraws.length === 0) return null;

  const months = new Map();
  const ensureMonth = monthKey => {
    if (!months.has(monthKey)) months.set(monthKey, { deposit: 0, withdraw: 0, harian: 0, cashback: 0 });
    return months.get(monthKey);
  };

  deposits.forEach(r => {
    const m = ensureMonth(wlmMonthKey(r.timestamp));
    const bucket = classifyWlmDeposit(r);
    if (bucket === 'harian') m.harian += r.amount;
    else if (bucket === 'cashback') m.cashback += r.amount;
    else m.deposit += r.amount;
  });

  withdraws.forEach(r => {
    ensureMonth(wlmMonthKey(r.timestamp)).withdraw += r.amount;
  });

  // Akumulasi dihitung dari sudut pandang saldo KITA (operator), sama prinsipnya
  // dengan Laporan Withdraw: Total Deposit itu saldo MASUK (plus), Withdraw/Bonus
  // Harian/Bonus Cashback itu saldo KELUAR dari kita (minus). Plus = WIN, minus = LOSE.
  const rows = Array.from(months.entries())
    .sort((a, b) => a[0].localeCompare(b[0])) // "YYYY-MM" terurut kronologis, terlama dulu
    .map(([monthKey, m]) => ({
      monthKey,
      ...m,
      winLose: m.deposit - m.withdraw - m.harian - m.cashback,
    }));

  const total = rows.reduce((acc, r) => ({
    deposit: acc.deposit + r.deposit,
    withdraw: acc.withdraw + r.withdraw,
    harian: acc.harian + r.harian,
    cashback: acc.cashback + r.cashback,
    winLose: acc.winLose + r.winLose,
  }), { deposit: 0, withdraw: 0, harian: 0, cashback: 0, winLose: 0 });

  return { id, rows, total };
}

// Kolom Withdraw/Bonus Harian/Bonus Cashback selalu disimpan sebagai jumlah positif
// (murni sum nominal), tapi TAMPILANNYA harus format akuntansi negatif (merah + kurung)
// karena ini saldo pengeluaran — makanya dibalik tandanya khusus untuk ditampilkan,
// bukan untuk disimpan/dihitung ulang.
function wlmFormatOutflow(amount) {
  if (amount === 0) return formatRupiah(0);
  return `<span class="wlm-amount-negative">(${formatRupiah(amount)})</span>`;
}

function wlmStatusHtml(winLose) {
  const cls = winLose > 0 ? 'wlm-status-win' : (winLose < 0 ? 'wlm-status-lose' : 'wlm-status-impas');
  const label = winLose > 0 ? t('wlm.statusWin') : (winLose < 0 ? t('wlm.statusLose') : t('wlm.statusImpas'));
  const amountText = winLose < 0 ? `(${formatRupiah(Math.abs(winLose))})` : formatRupiah(winLose);
  return `<span class="${cls}">${label} ${amountText}</span>`;
}

function renderWinLoseMemberReport(report) {
  document.getElementById('wlmThId').textContent = report.id;
  document.getElementById('wlmResultTitle').textContent = t('wlm.resultTitle');

  const overallBadge = document.getElementById('wlmOverallBadge');
  overallBadge.className = 'badge ' + (report.total.winLose < 0 ? 'badge-warn' : '');
  overallBadge.innerHTML = wlmStatusHtml(report.total.winLose);

  const body = document.getElementById('wlmResultBody');
  body.innerHTML = '';
  report.rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${wlmMonthLabel(r.monthKey)}</td>
      <td class="amount">${formatRupiah(r.deposit)}</td>
      <td class="amount">${wlmFormatOutflow(r.withdraw)}</td>
      <td class="amount">${wlmFormatOutflow(r.harian)}</td>
      <td class="amount">${wlmFormatOutflow(r.cashback)}</td>
      <td>${wlmStatusHtml(r.winLose)}</td>
    `;
    body.appendChild(tr);
  });

  document.getElementById('wlmResultFoot').innerHTML = `
    <tr>
      <td>${t('wlm.totalRowLabel')}</td>
      <td class="amount">${formatRupiah(report.total.deposit)}</td>
      <td class="amount">${wlmFormatOutflow(report.total.withdraw)}</td>
      <td class="amount">${wlmFormatOutflow(report.total.harian)}</td>
      <td class="amount">${wlmFormatOutflow(report.total.cashback)}</td>
      <td>${wlmStatusHtml(report.total.winLose)}</td>
    </tr>
  `;
}

document.getElementById('wlmProcessBtn').addEventListener('click', () => {
  const idRaw = document.getElementById('wlmIdInput').value.trim();
  const depositRaw = document.getElementById('wlmDepositData').value;
  const withdrawRaw = document.getElementById('wlmWithdrawData').value;
  const warnBox = document.getElementById('wlmWarnBox');
  warnBox.innerHTML = '';

  const resultCard = document.getElementById('wlmResultCard');
  const emptyCard = document.getElementById('wlmEmptyCard');

  if (!idRaw) {
    warnBox.innerHTML = `<div class="warn-box">${t('wlm.noIdWarn')}</div>`;
    resultCard.style.display = 'none';
    emptyCard.style.display = 'block';
    return;
  }

  const report = buildWinLoseMemberReport(depositRaw, withdrawRaw, idRaw);

  if (!report) {
    warnBox.innerHTML = `<div class="warn-box">${t('wlm.noDataWarn')}</div>`;
    resultCard.style.display = 'none';
    emptyCard.style.display = 'block';
    return;
  }

  emptyCard.style.display = 'none';
  resultCard.style.display = 'block';
  renderWinLoseMemberReport(report);
});

// --- Withdraw Balance: cek apakah ID & nominal di Google Sheet (yang sudah diproses)
// sama dengan yang ada di panel withdraw ---
// Sheet mencatat withdraw yang diproses otomatis dari QRIS — di panel ditandai "(ABD)"
// pada kolom "Edited By" (kolom biaya "(1,800)" di sheet = biaya QRIS per transaksi).
// Jadi yang dibandingkan cuma baris panel ber-(ABD). Baris tanpa (ABD) dikirim manual
// atau TM (termasuk Agent Withdraw "TM BONUS"/"TM DOUBLE BONUS") dan memang tidak ada
// di sheet, jadi dilewati — bukan temuan.
//
// Format sheet (tab-separated, tanpa tanggal/jam): "Bank<TAB>Nama<TAB>No Rekening",
// User Name, (Nominal), (Biaya). Nominal sheet Rupiah utuh dalam kurung, BEDA dengan
// panel yang per-ribu (lihat parseWithdrawAmount). Sel Bank/Nama/Rekening bisa
// berkutip dan berisi newline kalau disalin langsung dari Google Sheets.
function wbEscape(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Baris REFUND di sheet: withdraw itu diproses manual (bukan auto), nominalnya ditulis
// bebas oleh operator tanpa format "(1,000.00)" dan tanpa kolom biaya — contoh
// "2.900.000-/" (Rupiah utuh, titik pemisah ribuan) atau "108/" (per-ribu, seperti panel).
// Angka dengan pemisah ribuan dianggap Rupiah utuh; angka polos di bawah 1000 dianggap
// per-ribu (nominal withdraw minimal 50.000, jadi tidak ada Rupiah utuh sekecil itu).
function wbParseRefundAmount(str) {
  const s = String(str).replace(/[^\d.,]/g, '');
  if (!s) return NaN;
  let n;
  if (/^\d{1,3}(?:[.,]\d{3})+$/.test(s)) n = parseInt(s.replace(/[.,]/g, ''), 10);
  else n = parseFloat(s.replace(',', '.'));
  if (!(n > 0)) return NaN;
  return Math.round(n < 1000 ? n * 1000 : n);
}

function wbParseSheet(raw) {
  const rows = [];
  const flat = (raw || '').replace(/"([^"]*)"/g, (m, inner) => inner.replace(/\r?\n/g, '\t'));
  flat.split(/\r?\n/).forEach(line => {
    const cols = line.split('\t').map(c => c.replace(/"/g, '').trim()).filter(c => c !== '');
    const userIdx = cols.findIndex(c => /^[^\s@]+@\S+$/.test(c));
    if (userIdx < 0) return;
    const amountStr = cols[userIdx + 1] || '';
    const refund = cols.slice(userIdx + 2).some(c => /refund/i.test(c));

    let amount;
    if (refund) amount = wbParseRefundAmount(amountStr);
    else if (/^\(?-?[\d,]+(?:\.\d+)?\)?$/.test(amountStr)) amount = Math.round(Math.abs(parseFloat(amountStr.replace(/[(),]/g, ''))));
    if (amount === undefined || isNaN(amount)) return;

    const userCol = cols[userIdx];
    rows.push({
      code: userCol.slice(0, userCol.indexOf('@')),
      username: userCol.slice(userCol.indexOf('@') + 1),
      amount,
      refund,
    });
  });
  return rows;
}

// Mencocokkan per user name: (1) nominal sama persis = cocok, (2) sisa dipasangkan
// dengan nominal terdekat = nominal beda, (3) sisa panel = belum ada di sheet, sisa
// sheet = tidak ada di panel. Sheet tidak punya jam, jadi tidak dipakai mencocokkan.
function wbCompare(panelRows, sheetRows) {
  const out = [];
  const groups = new Map();
  const groupOf = key => {
    if (!groups.has(key)) groups.set(key, { panel: [], sheet: [] });
    return groups.get(key);
  };
  panelRows.forEach(p => groupOf(p.username.toLowerCase()).panel.push(p));
  sheetRows.forEach(s => groupOf(s.username.toLowerCase()).sheet.push(s));

  groups.forEach(g => {
    const sheetLeft = g.sheet.slice();
    const panelLeft = [];
    g.panel.forEach(p => {
      // Baris sheet biasa didahulukan; baris REFUND (diproses manual) cuma dipakai kalau
      // tidak ada baris biasa dengan nominal yang sama.
      let i = sheetLeft.findIndex(s => !s.refund && s.amount === p.amount);
      if (i < 0) i = sheetLeft.findIndex(s => s.refund && s.amount === p.amount);
      if (i < 0) { panelLeft.push(p); return; }
      const s = sheetLeft.splice(i, 1)[0];
      out.push({ type: s.refund ? 'refund' : 'ok', panel: p, sheet: s });
    });

    const pairs = [];
    panelLeft.forEach((p, pi) => sheetLeft.forEach((s, si) => pairs.push({ pi, si, diff: Math.abs(p.amount - s.amount) })));
    pairs.sort((a, b) => a.diff - b.diff);
    const usedP = new Set();
    const usedS = new Set();
    pairs.forEach(({ pi, si }) => {
      if (usedP.has(pi) || usedS.has(si)) return;
      usedP.add(pi);
      usedS.add(si);
      out.push({ type: 'wrongAmount', panel: panelLeft[pi], sheet: sheetLeft[si] });
    });
    panelLeft.forEach((p, pi) => { if (!usedP.has(pi)) out.push({ type: 'missingInSheet', panel: p, sheet: null }); });
    sheetLeft.forEach((s, si) => { if (!usedS.has(si)) out.push({ type: 'notInPanel', panel: null, sheet: s }); });
  });
  return out;
}

const WB_TYPE_ORDER = ['wrongAmount', 'missingInSheet', 'notInPanel', 'refund', 'ok'];
const WB_TYPE_BADGE = {
  wrongAmount: 'badge-safety',
  notInPanel: 'badge-safety',
  missingInSheet: 'badge-warn',
  refund: 'badge-other',
  ok: '',
};
// Bukan temuan: 'ok' cocok otomatis, 'refund' cocok tapi diproses manual (dicatat REFUND di sheet).
const wbIsIssue = f => f.type !== 'ok' && f.type !== 'refund';

// "var" (bukan let) sengaja: setLanguage() bisa memanggil renderWbResult() saat load,
// sebelum baris ini dieksekusi — var tidak kena TDZ, jadi aman dibaca sebagai undefined.
var wbState = null;

function wbBuildReport(panelRaw, sheetRaw) {
  const panelAll = parseWithdrawRecords(panelRaw).filter(r => r.status.toLowerCase() === 'confirmed');
  const sheetRows = wbParseSheet(sheetRaw);
  if (panelAll.length === 0 && sheetRows.length === 0) return null;

  const panelAuto = panelAll.filter(r => /\(ABD\)/i.test(r.editedBy));

  const findings = wbCompare(panelAuto, sheetRows);
  findings.sort((a, b) => {
    const o = WB_TYPE_ORDER.indexOf(a.type) - WB_TYPE_ORDER.indexOf(b.type);
    if (o !== 0) return o;
    return (b.panel ? b.panel.timestamp : 0) - (a.panel ? a.panel.timestamp : 0);
  });

  // Withdraw REFUND diproses dengan cara lain (manual), jadi nominalnya tidak masuk
  // jumlah/total kedua sisi — barisnya tetap tampil sebagai informasi.
  const refundPanel = new Set(findings.filter(f => f.type === 'refund').map(f => f.panel));
  const refundSheet = new Set(findings.filter(f => f.type === 'refund').map(f => f.sheet));
  const panelCounted = panelAuto.filter(r => !refundPanel.has(r));
  const sheetCounted = sheetRows.filter(r => !refundSheet.has(r));

  const sum = list => list.reduce((s, r) => s + r.amount, 0);
  return {
    findings,
    panelCount: panelCounted.length,
    panelTotal: sum(panelCounted),
    sheetCount: sheetCounted.length,
    sheetTotal: sum(sheetCounted),
    manualSkipped: panelAll.length - panelAuto.length,
  };
}

function wbDisplayUser(f) {
  const r = f.panel || f.sheet;
  return `${r.code}@${r.username}`;
}

function wbAmountText(r) {
  return r ? formatRupiah(r.amount) : '-';
}

function wbNoteText(f) {
  if (f.type === 'refund') return t('wb.noteRefund');
  return f.type === 'missingInSheet' && f.panel.remark ? t('wb.noteRemark', { remark: f.panel.remark }) : '';
}

function wbDiffText(f) {
  if (f.type !== 'wrongAmount') return '-';
  const d = f.sheet.amount - f.panel.amount;
  return (d > 0 ? '+' : '') + formatRupiah(d);
}

function renderWbResult() {
  const resultCard = document.getElementById('wbResultCard');
  const emptyCard = document.getElementById('wbEmptyCard');
  if (!wbState) {
    resultCard.style.display = 'none';
    emptyCard.style.display = 'block';
    return;
  }
  emptyCard.style.display = 'none';
  resultCard.style.display = 'block';

  const showOk = document.getElementById('wbShowOk').checked;
  const issues = wbState.findings.filter(wbIsIssue);
  const refundCount = wbState.findings.filter(f => f.type === 'refund').length;
  const okCount = wbState.findings.length - issues.length - refundCount;
  // Baris refund selalu tampil (informasi), yang 'ok' hanya kalau dicentang.
  const shown = wbState.findings.filter(f => showOk || f.type !== 'ok');

  document.getElementById('wbSummary').textContent = t('wb.summary', {
    panelCount: wbState.panelCount, panelTotal: formatRupiah(wbState.panelTotal),
    sheetCount: wbState.sheetCount, sheetTotal: formatRupiah(wbState.sheetTotal),
    manual: wbState.manualSkipped, ok: okCount, refund: refundCount,
  });
  const badge = document.getElementById('wbOverallBadge');
  badge.className = 'badge ' + (issues.length ? 'badge-warn' : '');
  badge.textContent = issues.length ? t('wb.issueCount', { n: issues.length }) : t('wb.allGood');

  const body = document.getElementById('wbResultBody');
  body.innerHTML = '';
  shown.forEach(f => {
    const tr = document.createElement('tr');
    const panelCell = f.panel
      ? `${formatRupiah(f.panel.amount)}<div class="flag-note">${wbEscape(f.panel.dateText || '-')} · ${wbEscape(f.panel.editedBy || '-')}</div>`
      : '-';
    tr.innerHTML = `
      <td><span class="badge ${WB_TYPE_BADGE[f.type]}">${t('wb.type.' + f.type)}</span></td>
      <td>${wbEscape(wbDisplayUser(f))}</td>
      <td class="amount">${panelCell}</td>
      <td class="amount">${wbAmountText(f.sheet)}</td>
      <td class="amount">${wbDiffText(f)}</td>
      <td>${wbEscape(wbNoteText(f))}</td>
    `;
    body.appendChild(tr);
  });
  document.getElementById('wbNoRows').style.display = shown.length ? 'none' : 'block';
}

document.getElementById('wbProcessBtn').addEventListener('click', () => {
  const panelRaw = document.getElementById('wbPanelData').value;
  const sheetRaw = document.getElementById('wbSheetData').value;
  const warnBox = document.getElementById('wbWarnBox');
  warnBox.innerHTML = '';

  const warn = key => {
    warnBox.innerHTML = `<div class="warn-box">${t(key)}</div>`;
    wbState = null;
    renderWbResult();
  };
  if (!panelRaw.trim()) return warn('wb.noPanelWarn');
  if (!sheetRaw.trim()) return warn('wb.noSheetWarn');

  wbState = wbBuildReport(panelRaw, sheetRaw);
  if (!wbState) return warn('wb.noDataWarn');
  renderWbResult();
});

document.getElementById('wbShowOk').addEventListener('change', renderWbResult);

document.getElementById('wbCopyBtn').addEventListener('click', () => {
  if (!wbState) return;
  const lines = wbState.findings
    .filter(wbIsIssue)
    .map(f => [
      t('wb.type.' + f.type),
      wbDisplayUser(f),
      `${t('wb.thPanel')}: ${wbAmountText(f.panel)}`,
      `${t('wb.thSheet')}: ${wbAmountText(f.sheet)}`,
    ].join(' | '));
  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    const btn = document.getElementById('wbCopyBtn');
    const original = btn.textContent;
    btn.textContent = t('wb.copyBtnDone');
    setTimeout(() => { btn.textContent = original; }, 1000);
  });
});

// --- Upload file Excel untuk data Withdraw History (panel) ---
// Sama seperti upload di Win/Lose All Game: sheet pertama dibaca lalu dijadikan teks
// tab-separated di kotak Data Withdraw History, jadi parser paste (parseWithdrawRecords)
// yang sama dipakai. Sel kosong tetap dipertahankan supaya urutan kolomnya tidak
// bergeser; sel yang berisi newline diratakan jadi tab supaya tidak memecah baris.
function wbExcelToText(workbook) {
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' });
  return rows
    .map(row => row.map(cell => String(cell).trim().replace(/\s*\r?\n\s*/g, '\t')).join('\t'))
    .join('\n');
}

function setWbFileChip(fileName) {
  document.getElementById('wbFileName').textContent = fileName;
  document.getElementById('wbFileChip').style.display = fileName ? 'flex' : 'none';
}

function handleWbFile(file) {
  const warnBox = document.getElementById('wbWarnBox');
  warnBox.innerHTML = '';
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const workbook = XLSX.read(e.target.result, { type: 'array' });
      const text = wbExcelToText(workbook);
      if (!text.trim()) {
        warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadEmpty')}</div>`;
        return;
      }
      document.getElementById('wbPanelData').value = text;
      setWbFileChip(file.name);
    } catch (err) {
      warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadReadError', { error: err.message })}</div>`;
    }
  };
  reader.onerror = () => {
    warnBox.innerHTML = `<div class="warn-box">${t('winlose.uploadReadError', { error: reader.error && reader.error.message })}</div>`;
  };
  reader.readAsArrayBuffer(file);
}

const wbUploadZone = document.getElementById('wbUploadZone');
const wbFileInput = document.getElementById('wbFileInput');

wbUploadZone.addEventListener('click', () => wbFileInput.click());

wbFileInput.addEventListener('change', (e) => {
  handleWbFile(e.target.files[0]);
  e.target.value = '';
});

['dragover', 'dragenter'].forEach(evt => {
  wbUploadZone.addEventListener(evt, (e) => {
    e.preventDefault();
    wbUploadZone.classList.add('dragover');
  });
});
['dragleave', 'dragend'].forEach(evt => {
  wbUploadZone.addEventListener(evt, () => wbUploadZone.classList.remove('dragover'));
});
wbUploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  wbUploadZone.classList.remove('dragover');
  handleWbFile(e.dataTransfer.files[0]);
});

document.getElementById('wbFileRemove').addEventListener('click', (e) => {
  e.stopPropagation();
  setWbFileChip('');
  document.getElementById('wbPanelData').value = '';
});

// --- Jam digital WIB di topbar ---
// Selalu dikunci ke zona waktu Asia/Jakarta (WIB) lewat Intl.DateTimeFormat, jadi
// jamnya tetap benar berapa pun zona waktu perangkat yang membuka situs ini.
// Locale "en-GB" dipakai murni supaya pemisahnya titik dua (format jam digital pada
// umumnya) — zona waktunya tetap dikunci ke Asia/Jakarta terlepas dari locale ini.
const wibClockFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

function updateTopbarClock() {
  document.getElementById('topbarClock').textContent = `${wibClockFormatter.format(new Date())} WIB`;
}

updateTopbarClock();
setInterval(updateTopbarClock, 1000);

// --- Rentang tanggal "3 bulan ke belakang" di halaman Laporan Withdraw ---
// Supaya admin tahu persis dari tanggal berapa sampai tanggal berapa data
// Deposit/Withdraw yang perlu di-paste — patokannya cuma tanggal & bulan (bukan
// jam), dihitung dari kalender WIB (Asia/Jakarta), bukan zona waktu perangkat yang
// membuka situs ini. Komponen tanggal WIB diambil dulu lewat Intl.DateTimeFormat,
// baru dikurangi 3 bulan pakai Date biasa sebagai "kalkulator kalender" murni
// (bukan dikonversi timezone lagi) supaya hasilnya tidak ikut bergeser oleh zona
// waktu device yang membuka situs ini.
function getJakartaDateParts(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date);
  const get = type => parts.find(p => p.type === type).value;
  return { year: +get('year'), month: +get('month'), day: +get('day') };
}

// Format MM/DD/YYYY — sama seperti format tanggal di kolom filter "Date" pada
// laporan History admin panel (mis. "09/10/2026 - 09/10/2026"), supaya rentang
// ini bisa langsung di-copy-paste ke filter tanggalnya.
function formatMDY({ year, month, day }) {
  const pad = n => String(n).padStart(2, '0');
  return `${pad(month)}/${pad(day)}/${year}`;
}

function updateWdDateRange() {
  const el = document.getElementById('wdRangeInfo');
  if (!el) return;
  const nowParts = getJakartaDateParts(new Date());
  // Date di sini cuma dipakai sebagai kalkulator kalender (mundur 3 bulan dari
  // tanggal WIB yang sudah didapat) — bukan diformat ulang lewat timezone apa pun.
  const fromCalc = new Date(nowParts.year, nowParts.month - 1, nowParts.day);
  fromCalc.setMonth(fromCalc.getMonth() - 3);
  const fromParts = { year: fromCalc.getFullYear(), month: fromCalc.getMonth() + 1, day: fromCalc.getDate() };
  const range = `${formatMDY(fromParts)} - ${formatMDY(nowParts)}`;
  el.innerHTML = t('wd.rangeInfo', { range });
  el.dataset.copyText = range;
}

updateWdDateRange();
// Cukup dicek tiap menit — patokannya cuma tanggal, jadi tidak perlu presisi detik.
setInterval(updateWdDateRange, 60000);

// Klik buat copy rentang tanggalnya (dipasang sekali di sini, bukan tiap kali
// updateWdDateRange() jalan, supaya listener-nya tidak menumpuk — nilai yang
// di-copy dibaca dari data-copy-text yang diperbarui tiap kali fungsi itu jalan).
document.getElementById('wdRangeInfo').addEventListener('click', function () {
  navigator.clipboard.writeText(this.dataset.copyText || '').then(() => {
    this.classList.add('copied');
    setTimeout(() => this.classList.remove('copied'), 500);
  });
});

// Terapkan bahasa tersimpan (atau default Indonesia) — ditaruh paling akhir supaya
// semua fungsi render (renderFlagTable, renderDashboard, dst) dan variabel yang
// dipakainya sudah pasti terdefinisi lebih dulu.
setLanguage(currentLang);
