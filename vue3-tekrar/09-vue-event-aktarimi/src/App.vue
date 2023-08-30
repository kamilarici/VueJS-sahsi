<template>
  <!-- //? dinlediğimiz yerdeki metodu event olarak kullanıp temizle div ine basıldığında input içi temizlenir -->
 <Header @temizle="sil"/>
 <input ref="metin" />
 <!-- //? ref (referans) Vue.js'de kullanılan bir özelliktir ve DOM öğelerine veya Vue bileşenlerine erişmek için kullanılır. ref ile bir DOM öğesine veya bileşene bir referans vererek, JavaScript kodunuzun bu öğeye erişmesini ve üzerinde işlem yapmasını sağlayabilirsiniz. -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
  Header,
    
  },
  methods:{
    sil(){
      this.$refs.metin.value=""
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
