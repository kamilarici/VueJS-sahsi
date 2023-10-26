<template>
  <!-- //? direk props olarak baslik ı props olarak yollayabiliriz   -->
  <Header baslik="merhaba vue 3 (header props string)" />
  <!-- //? data dan çekip yollamak için başına iki nokta koymalıyız :   :baslik="yazi "şeklinde  -->
  <Header :baslik="yazi" />
</template>

<script>
import Header from './components/Header.vue';

// import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    Header,
  },
  data(){
    return{
      yazi:"merhaba vue3 (props data) "
  }
}
}
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
