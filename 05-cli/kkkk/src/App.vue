<template>
  <Deneme />
  <Header @temizle="sil" />
  <input />
</template>

<script>
import Header from "./components/Header";
import Deneme from "./components/Deneme";
export default {
  name: "App",
  components: {
    Header,
    Deneme,
  },
  data() {
    return {
      yazi: "merhaba vue 33",
    };
  },
  methods: {
    sil() {
      this.$refs.metin.value = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
