<template>
  <div class="home">
    <div v-for="day in days" :key="day">
      {{ day }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const days = ref(["pazartesi", "salı", "çarşamba", "perşembe", "cuma"]);

    return { days };
  },
};
</script>
