<template>
  <div class="home">
    <!-- ? composition api ile data kullanımı -->
    <p>{{ name }}--{{ job.name }}</p>
    <!-- <p ref="info">Deneme</p> burada ref ile p tag ine ulaştık clicked clg(info ile) -->
    <!-- ? composition api ile methot kullanımı -->
    <button @click="clicked" ref="info">Click</button>
    <!-- burada ise ref ile button tag ine ulaştık  -->
    <!-- **************** -->
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = ref("kamil");

    // reactive obje ve nesne için ref ise primitiv değerler için
    let job = reactive({
      name: "çayci",
    });
    // ? ref değerini script içinde kullanılacaksa return etmeye gerek yok.ama direk template içinde kullanılacaksa return etmemiz gerekiyor
    const info = ref(null);

    const clicked = () => {
      // click ile atadığımız ref kamil değerini burada value ya ulaşarak değiştirdik
      name.value = "deneme click";
      job.name = "değer Değişti";
      console.log(name, name.value);
      // console.log("buton tıklandı");
      // console.log(info, info.value);
    };

    return { name, job, clicked, info };
  },
};
</script>
