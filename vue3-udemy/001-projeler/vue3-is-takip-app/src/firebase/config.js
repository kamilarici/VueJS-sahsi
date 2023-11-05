import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Firestore'ü içe aktardığınızdan emin olun
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyAcr3SFAVlFL6QQS7VraqHMJOagxLE3KFs",
  authDomain: "blog-vue3-f8644.firebaseapp.com",
  projectId: "blog-vue3-f8644",
  storageBucket: "blog-vue3-f8644.appspot.com",
  messagingSenderId: "243990427326",
  appId: "1:243990427326:web:16df0f3b82b40011dfd0ef"
};


firebase.initializeApp(firebaseConfig);

const firestoreRef = firebase.firestore();
const authRef = firebase.auth();
const storageRef = firebase.storage();

const tarih = firebase.firestore.FieldValue.serverTimestamp;

export { firestoreRef, authRef, tarih,storageRef };
