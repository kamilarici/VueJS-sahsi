<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import {firestoreRef} from '../firebase/config'

export default {
  name: 'HomeView',
  setup(){
    console.log(firestoreRef);

  },
  components: {
   
  }
}
</script>

