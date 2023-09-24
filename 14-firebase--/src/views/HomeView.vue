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
} from "firebase/firestore/lite";
import { fb } from "../firebase/config";
export default {
  name: "HomeView",
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore(fb);
      const fbDataName = collection(db, "books");
      const fbDocs = await getDocs(fbDataName);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);

      console.log(docID);
      console.log(data);
      return data;
    });
  },
};
</script>
