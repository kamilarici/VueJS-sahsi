import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBRA8K7htbgxYagKqq2zD2eaVsAjcG9rxU",
    authDomain: "vue3-btk-f0d2b.firebaseapp.com",
    projectId: "vue3-btk-f0d2b",
    storageBucket: "vue3-btk-f0d2b.appspot.com",
    messagingSenderId: "533400473884",
    appId: "1:533400473884:web:36a7771df3d466e58c2ad9"
  };



  firebase.initializeApp(firebaseConfig)

  const authRef=firebase.auth()

  const firestoreRef=firebase.firestore();

  export {firestoreRef,authRef}