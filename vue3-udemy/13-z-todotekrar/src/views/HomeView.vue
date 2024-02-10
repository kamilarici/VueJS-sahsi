<template>
  <div class="home">
<div v-if="yapilacaklar.length">
  <div v-for="yap in yapilacaklar" :key="yap.id">
<Yapilacak :yapilacak="yap" @sil="silHandle" @yapildi="yapildiHandle"/>
</div>
</div>

<div v-else>
  <p>yapilacaklar yükleniyor</p>


</div>
  </div>
</template>

<script>
import Yapilacak from '../components/Yapilacak'


export default {

  name: 'HomeView',
  components:{Yapilacak},
  data() {
    return {
      yapilacaklar:[]
    }
  },
  mounted() {
    fetch('http://localhost:3000/yapilacaklar')
    .then((res)=>res.json())
    .then((data)=>this.yapilacaklar=data)
    .catch((err)=>console.log(err))
  },
  methods: {
    silHandle(id){
      this.yapilacaklar=this.yapilacaklar.filter(yap=>{
        return yap.id!==id
      });
    },
    yapildiHandle(id){
      let yap=this.yapilacaklar.find(yapilacak=>{
        return yapilacak.id==id
        
      });
      yap.yapildi=!yap.yapildi
    },
  },

}
</script>
