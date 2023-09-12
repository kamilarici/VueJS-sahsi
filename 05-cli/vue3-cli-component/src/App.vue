<template>
  <div>
    <!-- <Title titleText="vue 3' e giriş" /> -->
    <!--? props istediğimiz şekilde yollarız isim olarak data da da aynı şekilde tanımlamamız yeterli -->
    <Title :titleText="text" :text="text2" />
    <h3>app vue başlik</h3>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
export default {
  name: "App",
  components: {
    Title,
  },
  data() {
    return {
      text: "vue 3'e giriş",
      text2: "vue ya hoş geldiniz",
    };
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
