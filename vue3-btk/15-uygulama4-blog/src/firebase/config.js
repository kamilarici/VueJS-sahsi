import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcr3SFAVlFL6QQS7VraqHMJOagxLE3KFs",
  authDomain: "blog-vue3-f8644.firebaseapp.com",
  projectId: "blog-vue3-f8644",
  storageBucket: "blog-vue3-f8644.appspot.com",
  messagingSenderId: "243990427326",
  appId: "1:243990427326:web:16df0f3b82b40011dfd0ef",
};

const fb = initializeApp(firebaseConfig);
export { fb };
