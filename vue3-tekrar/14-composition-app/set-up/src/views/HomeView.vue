<template>
  <div class="home">
    <h1>home comp.</h1>
  </div>
</template>

<script>
import {onMounted} from 'vue'

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
