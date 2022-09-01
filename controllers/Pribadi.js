import { firebase } from '../configs/firebase.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';

const db = getFirestore(firebase);

export const readPribadi = async (req, res) => {
    const pribadiCol = collection(db, 'pribadi');
    const pribadiSnapshot = await getDocs(pribadiCol);
    let data = [];
    pribadiSnapshot.docs.map(each => {
        const row = each.data();
        const d = new Date(row.tgllahir.toDate());
        const doc = {
            nama: `${row.kode} ${row.nama}`,
            tgllahir: d.toLocaleString("id-ID", { dateStyle: "long" }),
            alamat: row.alamat,
            aktif: row.is_aktif ? "AKTIF" : "TIDAK AKTIF",
            umur: new Date().getFullYear() - d.getFullYear()
        }
        data.push(doc);
    });
    res.send(data);
}