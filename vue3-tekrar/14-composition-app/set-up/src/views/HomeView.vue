<template>
  <div class="home">
    <h1>home comp.</h1>
  </div>
</template>

<script>
import {onMounted} from 'vue'
// ? setup tüm fonsiyonların üzerinde bir fonk old. için her zaman ilk o çalışır 
export default {
  name: 'HomeView',
  setup(){
    console.log('setup yüklendi');
    onMounted(()=>{
      console.log('mounted yüklendi');
    })
  },
//   mounted(){
// console.log('mounted yüklendi');
//   },
//   created(){
// console.log('created yüklendi');
//   },
  components: {
  
  }
}
</script>
