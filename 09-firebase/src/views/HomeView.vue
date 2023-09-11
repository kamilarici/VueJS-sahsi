<template>
  <div class="home">
    <H1>FİREBASE</H1>
  </div>
</template>

<script>
import { onMounted } from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  get,
  addDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore/lite";

import { fb } from "../firebase/config";
export default {
  name: "HomeView",
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books");
      const fbDocs = await getDocs(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);

      // console.log(docID);
      // console.log(data);
      // yeni belge ekle
      // addDoc(fbRef, {
      //   name: "sokratesin savunmasi",
      //   author: "platon",
      //   pageCount: 200,
      // });
      //? belge silme
      //   const docRef = doc(db, "books", "YFp9Shn4KZCyCIav4YLQ");
      //   deleteDoc(docRef);

      const q = query(fbRef, where("pageCount", "==", 200));
      onSnapshot(q, (ss) => {
        let books = [];
        ss.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
      });
      console.log();
      return data;
    });
  },
};
</script>
