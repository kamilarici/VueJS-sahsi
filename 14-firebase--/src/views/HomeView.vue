<template>
  <div class="home">
    <h2>firebase</h2>
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
  deleteDoc,
  doc,
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

      // addDoc(fbRef, {
      //   name: "Sokratesin Savunmasi",
      //   author: "Platon",
      //   pageCount: 200,
      // });
      const docRef = doc(db, "books", "oOCnhRWDqpN1PuPeZMbd");
      deleteDoc(docRef);
      return data;
    });
  },
};
</script>
