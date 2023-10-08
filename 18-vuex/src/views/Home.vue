<template>
  <div class="home">home</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: home,
  components: {},
  setup() {
    const todos = ref([
      { id: 1, todo: "ders çaliş" },
      { id: 2, todo: "film izle" },
      { id: 3, todo: "kitap oku" },
    ]);
    return { todos };
  },
};
</script>
