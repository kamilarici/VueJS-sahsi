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
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
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
      //**************** */
      // const docRef = doc(db, "books", "aJtnDQRTa2tZEEnzDefo");
      // deleteDoc(docRef);
      //*********************** */
      //*istediğim verileri sağlayan verileri çağırmış olduk
      const q = query(fbRef, where("pageCount", "==", 500));
      onSnapshot(q, (ss) => {
        let books = [];
        ss.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
      });

      const docRef = doc(db, "books", "3tMdxvaitdteB6EdeQqX");
      updateDoc(docRef, {
        pageCount: 399,
      });
      return data;
    });
  },
};
</script>
