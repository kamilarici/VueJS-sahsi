import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAY8CLQSTOhwg-WWwuUDQm7I993XtLbkhE",
    authDomain: "vue3-firebase-projeler-a33a6.firebaseapp.com",
    projectId: "vue3-firebase-projeler-a33a6",
    storageBucket: "vue3-firebase-projeler-a33a6.appspot.com",
    messagingSenderId: "783623978322",
    appId: "1:783623978322:web:323824bbdb5e2a61d68e8b"
  };

  firebase.initializeApp(firebaseConfig);
  const firestoreRef=firebase.firestore();

  export {firestoreRef}