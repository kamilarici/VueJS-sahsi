<template>
  <div class="home">
    <H1>SETUP</H1>
 <p> {{ ad }}- {{ gorev }}</p>
 <button @click="butonTiklandi">tikla</button>
  </div>
</template>

<script>
import {onMounted} from 'vue'
// ? setup tüm fonsiyonların üzerinde bir fonk old. için her zaman ilk o çalışır 
export default {
  name: 'HomeView',
  setup(){
// ? burada tanımlananlar direk method olarak görecek setup
    let ad='luffy';
    let gorev='kaptan';
    const butonTiklandi=()=>{
      console.log('buton tiklandi');
    }
    return{ad,gorev,butonTiklandi}
    // console.log('setup yüklendi');
    // onMounted(()=>{
    //   console.log('mounted yüklendi');
    // })
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
