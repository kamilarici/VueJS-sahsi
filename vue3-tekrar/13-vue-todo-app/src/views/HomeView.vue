<template>
  <div class="home">
    <div v-if="yapilacaklar.length">
      <div v-for="yap in yapilacaklar" :key="yap.id">
          
          <Yapilacak :yapilacak="yap"/>
     </div>
    </div>
    <div v-else>
<p>yapilacaklar yükleniyor</p>
    </div>
  </div>
</template>

<script>
import Yapilacak from '../components/Yapilacak.vue'
// @ is an alias to /src
 


export default {
  name: 'HomeView',
  components:{
    Yapilacak
  },
  data(){
    return{
      yapilacaklar:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/yapilacaklar')
    .then((res)=>res.json())
    .then((data)=>this.yapilacaklar=data)
    .catch((err)=>console.log(err))
 
  }

}
</script>
