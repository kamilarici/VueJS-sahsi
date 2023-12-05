import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDrn_wYnupiGyk4ignIB_L4S6sfVxzm9gE",
    authDomain: "aos-sosyal-app-dbc85.firebaseapp.com",
    projectId: "aos-sosyal-app-dbc85",
    storageBucket: "aos-sosyal-app-dbc85.appspot.com",
    messagingSenderId: "621442397636",
    appId: "1:621442397636:web:f3010f1d685e87c470a091"
  };
// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const firestoreRef = firebase.firestore();
const authRef = firebase.auth();
const storageRef = firebase.storage();

// timestamp
const tarih = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, firestoreRef, authRef, storageRef, tarih };
