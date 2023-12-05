import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  ...
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestoreRef = firebase.firestore()
const authRef = firebase.auth()
const storageRef = firebase.storage()

// timestamp
const tarih = firebase.firestore.FieldValue.serverTimestamp

export { firebase,firestoreRef, authRef,storageRef, tarih }