// import { initializeApp } from 'firebase/app';

// // import firebase from 'firebase/app';
// import {getFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAY8CLQSTOhwg-WWwuUDQm7I993XtLbkhE",
//   authDomain: "vue3-firebase-projeler-a33a6.firebaseapp.com",
//   projectId: "vue3-firebase-projeler-a33a6",
//   storageBucket: "vue3-firebase-projeler-a33a6.appspot.com",
//   messagingSenderId: "783623978322",
//   appId: "1:783623978322:web:323824bbdb5e2a61d68e8b"
// };
//! sorulacak
//   initializeApp(firebaseConfig);
//   const firestoreRef=getFirestore();

//   export {firestoreRef}

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY8CLQSTOhwg-WWwuUDQm7I993XtLbkhE",
  authDomain: "vue3-firebase-projeler-a33a6.firebaseapp.com",
  projectId: "vue3-firebase-projeler-a33a6",
  storageBucket: "vue3-firebase-projeler-a33a6.appspot.com",
  messagingSenderId: "783623978322",
  appId: "1:783623978322:web:2f2f7dfbca19801ad68e8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreRef = getFirestore(app);
export { firestoreRef };
