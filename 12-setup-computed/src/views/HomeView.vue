<template>
  <div class="home">
    <input type="text" v-model="search" />
    <div v-for="day in finded" :key="day">
      {{ day }}
    </div>
    <button @click="stop">Stop</button>
  </div>
  <!-- ? computed  ile arama ve filtreleme işlemi yaptık..inputa v- model ile sarch değeri verdik ve başlangıç ref değerini "" verdik  sonrası for ile dönerken filtrelediğimiz finded leri dönüyoruz computed ile de input içine girilen değerler sayesinde   filtrelenmiş değerler önüöüze düşüyor -->
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",

  setup() {
    const days = ref(["pazartesi", "salı", "çarşamba", "perşembe", "cuma"]);
    const search = ref("");
    const finded = computed(() => {
      return days.value.filter((day) => day.includes(search.value));
    });
    const watchS = watch(search, () => {
      console.log("watch çalıştı");
    });
    const watchEffectS = watchEffect(() => {
      console.log("watch effect çalıştı", days.value);
      console.log("watch effect çalıştı", search.value);
    });
    const stop = () => {
      watchS();
      watchEffectS();
    };
    return { days, finded, search, stop };
  },
};
</script>
