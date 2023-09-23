<template>
  <div class="home">
    <!-- ? composition api ile data kullanımı -->
    <p>{{ name }}--{{ job }}</p>
    <!-- <p ref="info">Deneme</p> burada ref ile p tag ine ulaştık clicked clg(info ile) -->
    <!-- ? composition api ile methot kullanımı -->
    <button @click="clicked" ref="info">Click</button>
    <!-- burada ise ref ile button tag ine ulaştık  -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = ref("kamil");
    let job = "developer";
    // ? ref değerini script içinde kullanılacaksa return etmeye gerek yok.ama direk template içinde kullanılacaksa return etmemiz gerekiyor
    const info = ref(null);

    const clicked = () => {
      // click ile atadığımız ref kamil değerini burada value ya ulaşarak değiştirdik
      name.value = "deneme click";
      console.log(name);
      // console.log("buton tıklandı");
      // console.log(info, info.value);
    };

    return { name, job, clicked, info };
  },
};
</script>
