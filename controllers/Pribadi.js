import { firebase } from '../configs/firebase.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';

const db = getFirestore(firebase);

export const readPribadi = async (req, res) => {
    const pribadiCol = collection(db, 'pribadi');
    const pribadiSnapshot = await getDocs(pribadiCol);
    let data = [];
    pribadiSnapshot.docs.map(each => {
        const d = new Date(each.data().tgllahir.toDate());
        const row = {
            nama: each.data().nama,
            tgllahir: d.toLocaleString("id-ID", { dateStyle: "long" }),
            alamat: each.data().alamat
        }
        data.push(row);
    });
    res.send(data);
}