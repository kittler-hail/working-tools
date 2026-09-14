// Export data dari project Firestore SUMBER (working-tools-1354f) yang public-read,
// tanpa perlu login/akun Google. Jalankan di komputer sendiri:
//   1) npm install firebase
//   2) node migration/export-firestore.js
// Hasilnya tersimpan di migration/export/flags.json dan migration/export/pageNotes.json

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

// Config project SUMBER, diambil dari script.js baris 742-750 (apiKey ini memang publik,
// bukan rahasia — proteksi sebenarnya ada di Firestore Security Rules).
const sourceConfig = {
  apiKey: "AIzaSyDdAYyCjoxt2xcU2IblQroAS0zpZZvOfmU",
  authDomain: "working-tools-1354f.firebaseapp.com",
  projectId: "working-tools-1354f",
  storageBucket: "working-tools-1354f.firebasestorage.app",
  messagingSenderId: "660179896468",
  appId: "1:660179896468:web:faa676d46b851639740c81",
};

const app = initializeApp(sourceConfig);
const db = getFirestore(app);

const COLLECTIONS = ['flags', 'pageNotes'];

async function exportCollection(name) {
  const snap = await getDocs(collection(db, name));
  const data = {};
  snap.forEach(doc => { data[doc.id] = doc.data(); });
  return data;
}

async function main() {
  const outDir = path.join(__dirname, 'export');
  fs.mkdirSync(outDir, { recursive: true });

  for (const name of COLLECTIONS) {
    console.log(`Mengambil collection "${name}"...`);
    const data = await exportCollection(name);
    const count = Object.keys(data).length;
    fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(data, null, 2));
    console.log(`  -> ${count} dokumen disimpan ke migration/export/${name}.json`);
  }

  console.log('Selesai.');
}

main().catch(err => {
  console.error('Export gagal:', err);
  process.exit(1);
});
