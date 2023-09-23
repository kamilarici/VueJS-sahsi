<template>
  <div class="home">
    <Contents :contents="contents"></Contents>
  </div>
</template>

<script>
import { ref } from "vue";
import Contents from "../components/Contents.vue";

export default {
  name: "HomeView",
  components: { Contents },

  setup() {
    const contents = ref([
      { id: 1, title: "deneme 1", details: "Detail 1" },
      { id: 2, title: "deneme 2", details: "Detail 2" },
      { id: 3, title: "deneme 3", details: "Detail 4" },
      { id: 4, title: "deneme 4", details: "Detail 4" },
    ]);
    return { contents };
  },
};
</script>
