import app from './app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

export async function getLogins() {
   const db = getFirestore()
   const colRef = collection(db, 'Usuario')

   const docsSnap = await getDocs(colRef);
   return docsSnap
}

export async function getDestiny() {
   const db = getFirestore()
   const colRef = collection(db, 'Destinos')

   const docsSnap = await getDocs(colRef);
   return docsSnap
}