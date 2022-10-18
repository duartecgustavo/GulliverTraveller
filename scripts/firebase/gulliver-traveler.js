import app from './app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

export async function getLogins() {
   const db = getFirestore()
   const colRef = collection(db, 'Usuario')

   const docsSnap = await getDocs(colRef);
   return docsSnap
}

// export async function getInfos() {
//    const db = getDatabase();
//    var user;
//    const snapshot = await get(ref(db, '/Usuario/' + ROBpwKYYJG2Sg55CUsSm))
//    user = snapshot.val();
//    console.log("user");
//    return console.log("user", user);
// }