import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDp1sz-vLlAADAyLWm-Gtp9UuyUoP_703M",
  authDomain: "vue3-btk-fb9cf.firebaseapp.com",
  projectId: "vue3-btk-fb9cf",
  storageBucket: "vue3-btk-fb9cf.appspot.com",
  messagingSenderId: "41163470434",
  appId: "1:41163470434:web:2b2f76ede1c68d67c0833b",
};

const fb = initializeApp(firebaseConfig);
export { fb };
