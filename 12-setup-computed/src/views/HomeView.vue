<template>
  <div class="home">
    <input type="text" v-model="search" />
    <div v-for="day in finded" :key="day">
      {{ day }}
    </div>
  </div>
  <!-- ? computed  ile arama ve filtreleme işlemi yaptık..inputa v- model ile sarch değeri verdik ve başlangıç ref değerini "" verdik  sonrası for ile dönerken filtrelediğimiz finded leri dönüyoruz computed ile de input içine girilen değerler sayesinde   filtrelenmiş değerler önüöüze düşüyor -->
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const days = ref(["pazartesi", "salı", "çarşamba", "perşembe", "cuma"]);
    const search = ref("");
    const finded = computed(() => {
      return days.value.filter((day) => day.includes(search.value));
    });
    return { days, finded, search };
  },
};
</script>
