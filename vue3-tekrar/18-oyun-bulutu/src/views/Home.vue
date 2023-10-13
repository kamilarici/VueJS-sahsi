<template>
  <div class="home">
    <div>
      <h1>AOS oyun bulutu</h1>
      <p>Buluta oyun eklemek ve oyun görmek için giriş yapınız</p>
      <button @click="handleGiris">Misafir Girişi</button>
    </div>
  </div>
</template>

<script>
import girisYap from "../composables/girisYap";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const { login } = girisYap();
    const router = useRouter();
    const handleGiris = async () => {
      await login();
      router.push({ name: "Ekle" });
    };

    return { handleGiris };
  },
};
</script>
<style scoped>
button {
  background-color: #fd7272;
}
</style>
