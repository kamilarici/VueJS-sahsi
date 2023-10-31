import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Firestore'ü içe aktardığınızdan emin olun

const firebaseConfig = {
  apiKey: "AIzaSyDrn_wYnupiGyk4ignIB_L4S6sfVxzm9gE",
  authDomain: "aos-sosyal-app-dbc85.firebaseapp.com",
  projectId: "aos-sosyal-app-dbc85",
  storageBucket: "aos-sosyal-app-dbc85.appspot.com",
  messagingSenderId: "621442397636",
  appId: "1:621442397636:web:3da12516eb7b995d70a091"
};

firebase.initializeApp(firebaseConfig);

const firestoreRef = firebase.firestore();
const authRef = firebase.auth();

const tarih = firebase.firestore.FieldValue.serverTimestamp();

export { firestoreRef, authRef, tarih };
