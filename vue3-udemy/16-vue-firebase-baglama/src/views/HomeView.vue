<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted } from 'vue';
import {firestoreRef} from '../firebase/config'

export default {
  name: 'HomeView',
  setup(){
   onMounted(async()=>{
let res=await firestoreRef.collection('personeller').get()
console.log(res.doc);
   })

  },
  components: {
   
  }
}
</script>

