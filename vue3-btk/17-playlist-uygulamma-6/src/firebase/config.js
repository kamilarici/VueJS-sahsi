import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoBI37wFg3TTholhaAULWn40IjSNtk2k4",
  authDomain: "playlist-vue-btk-d6769.firebaseapp.com",
  projectId: "playlist-vue-btk-d6769",
  storageBucket: "playlist-vue-btk-d6769.appspot.com",
  messagingSenderId: "144357594614",
  appId: "1:144357594614:web:274b7741ac88cb88b723d7",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
