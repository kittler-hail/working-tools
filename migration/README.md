# Migrasi Working Tools ke akun Firebase baru

## 1. Buat project Firebase baru (akun kamu sendiri)
- Buka https://console.firebase.google.com/, login pakai akun Google tujuan.
- Add project → beri nama (bebas, misal `working-tools`).
- Di project baru: Build > Firestore Database > Create database (mode production, pilih region terdekat).
- Build > Authentication > Sign-in method > aktifkan Email/Password.
- Build > Authentication > Users > Add user → email `adminrey@workingtools.com` (atau email admin baru), set password baru.

## 2. Ambil config project baru
Project Settings (ikon gerigi) > General > scroll ke "Your apps" > tambah Web App (</>) kalau belum ada > copy `firebaseConfig`.

## 3. Export data dari project lama (public read, tidak perlu login)
```
cd D:\Reyhan\working-tools
npm install firebase
node migration/export-firestore.js
```
Hasil: `migration/export/flags.json` dan `migration/export/pageNotes.json`.

## 4. Import data ke project baru
- Edit `migration/import-firestore.js`, isi `targetConfig` dengan config dari langkah 2.
```
node migration/import-firestore.js
```

## 5. Update kode aplikasi ke project baru
Ganti `firebaseConfig` di `script.js` (baris ~742) dan `ADMIN_EMAIL` (baris ~754 kalau email admin berubah) dengan nilai project baru.

## 6. Deploy Firestore Rules & Hosting
```
npm install -g firebase-tools
firebase login
firebase use --add          # pilih project Firebase baru
firebase deploy --only firestore:rules,hosting
```

## Catatan
- Fitur lain (Cek Bonus, Input Bonus, Win/Lose, Laporan Withdraw) tidak memakai Firestore
  sama sekali (murni client-side), jadi tidak ada data tambahan yang perlu dimigrasi untuk itu.
- Auth lama (kalau ada user lain selain admin) tidak bisa di-export tanpa akses ke project
  sumber — cuma admin login yang perlu dibuat ulang manual di langkah 1.
