<template>
  <div class="home">home</div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    console.log("setup yüklendi");
    onMounted(() => {
      console.log("mounted yüklendi");
    });
  },
};
</script>
