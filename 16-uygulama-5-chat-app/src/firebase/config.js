import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkizJMKbwdMT58IAx20d_8ZEXWP2kS_yg",
  authDomain: "auth-btk.firebaseapp.com",
  projectId: "auth-btk",
  storageBucket: "auth-btk.appspot.com",
  messagingSenderId: "869234126265",
  appId: "1:869234126265:web:5b3b1c4def7129d383da68",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAcr3SFAVlFL6QQS7VraqHMJOagxLE3KFs",
//   authDomain: "blog-vue3-f8644.firebaseapp.com",
//   projectId: "blog-vue3-f8644",
//   storageBucket: "blog-vue3-f8644.appspot.com",
//   messagingSenderId: "243990427326",
//   appId: "1:243990427326:web:6821aa4583111c66dfd0ef",
// };

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
