<template>
  <Header/>
  <h3>{{baslik}}</h3>
  <input type="text" ref="isim"/>
  <input type="text" ref="parola"/>
  <button @click="handleClick" > tıkla</button>
  <br>
  {{ sonuc }}
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    
},
  data(){
return{
  baslik:"merhaba vue cli",
  sonuc:""
}
  },
  methods:{
handleClick(){
  console.log(this.$refs.isim.value);
  console.log(this.$refs.parola.value);
  console.log(this.$refs
  );
}
  },

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
