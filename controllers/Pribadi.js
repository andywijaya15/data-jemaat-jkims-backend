import { firebase } from '../configs/firebase.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(firebase);

const pribadi = async () => {
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
    return data;
}

export const readPribadi = async (req, res) => {
    res.send(await pribadi());
}