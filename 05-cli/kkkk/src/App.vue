<template>
  <Deneme />
  <Header :baslik="yazi" />
  <h1>CLI ile proje</h1>
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
  methods: {},
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
