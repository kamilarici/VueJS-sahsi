<template>
  <div class="home">
    <!-- ? composition api ile data kullanımı -->
    <p>{{ name }}--{{ job }}</p>
    <!-- ? composition api ile methot kullanımı -->
    <button @click="clicked">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "kamil";
    let job = "developer";
    // ? ref değerini script içinde kullanılacaksa return etmeye gerek yok.ama direk template içinde kullanılacaksa return etmemiz gerekiyor
    const info = ref(null);

    const clicked = () => {
      console.log("buton tıklandı");
    };

    return { name, job, clicked };
  },
};
</script>
