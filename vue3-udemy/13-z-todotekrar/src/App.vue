<template>
  <div>
<Navbar/>
    <router-view/>
  </div>
 
</template>
<script>
import Navbar from './components/Navbar.vue'
export default{
  components:{
    Navbar
  }
}

</script>

<style>
body{
  background-color: #2f3542;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
color: white;
  max-width: 800px;
  margin: 0 auto;
}


</style>
