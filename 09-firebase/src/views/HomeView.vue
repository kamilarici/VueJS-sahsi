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
  get,
  addDoc,
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

      console.log(docID);
      console.log(data);
      // yeni belge
      addDoc(fbRef, {
        name: "sokratesin savunmasi",
        author: "platon",
        pageCount: 200,
      });
      return data;
    });
  },
};
</script>
