// Import data hasil export (migration/export/*.json) ke project Firestore TUJUAN
// (akun Firebase kamu yang baru). Jalankan setelah export-firestore.js selesai:
//   1) Isi targetConfig di bawah dengan config project baru (Firebase Console >
//      Project Settings > General > Your apps > SDK setup and configuration)
//   2) node migration/import-firestore.js

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

// TODO: ganti dengan firebaseConfig project BARU (punya akun kamu sendiri)
const targetConfig = {
  apiKey: "GANTI_INI",
  authDomain: "GANTI_INI.firebaseapp.com",
  projectId: "GANTI_INI",
  storageBucket: "GANTI_INI.firebasestorage.app",
  messagingSenderId: "GANTI_INI",
  appId: "GANTI_INI",
};

const app = initializeApp(targetConfig);
const db = getFirestore(app);

const COLLECTIONS = ['flags', 'pageNotes'];

async function importCollection(name) {
  const filePath = path.join(__dirname, 'export', `${name}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const ids = Object.keys(data);
  for (const id of ids) {
    await setDoc(doc(db, name, id), data[id]);
  }
  return ids.length;
}

async function main() {
  if (targetConfig.projectId === 'GANTI_INI') {
    console.error('Isi dulu targetConfig di file ini dengan config project Firebase barumu.');
    process.exit(1);
  }
  for (const name of COLLECTIONS) {
    console.log(`Mengimpor collection "${name}"...`);
    const count = await importCollection(name);
    console.log(`  -> ${count} dokumen ditulis ke project baru.`);
  }
  console.log('Selesai.');
}

main().catch(err => {
  console.error('Import gagal:', err);
  process.exit(1);
});
