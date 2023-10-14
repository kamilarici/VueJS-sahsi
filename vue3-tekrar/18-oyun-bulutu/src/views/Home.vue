<template>
  <div class="home">
    <div>
    <transition name="fade">
      <div  v-if="showMerhaba" >
        merhaba transition
      </div>
    </transition>
    <button @click="showMerhaba=!showMerhaba">goster/gizle</button>
      <h1>AOS oyun bulutu</h1>
      <p>Buluta oyun eklemek ve oyun görmek için giriş yapınız</p>
      <button @click="handleGiris">Misafir Girişi</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import girisYap from "../composables/girisYap";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const showMerhaba=ref(true)
    const { login } = girisYap();
    const router = useRouter();
    const handleGiris = async () => {
      await login();
      router.push({ name: "Ekle" });
    };

    return { handleGiris,showMerhaba };
  },
};
</script>
<style scoped>
button {
  background-color: #fd7272;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition:all 2s ease;;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition:all 2s ease;;
}
</style>
