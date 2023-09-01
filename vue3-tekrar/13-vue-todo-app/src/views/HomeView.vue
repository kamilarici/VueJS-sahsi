<template>
  <div class="home">
    <NavbarFilter @filterDurum="aktifSekme=$event" :aktifSekme="aktifSekme"/>
    <div v-if="yapilacaklar.length">
      <div v-for="yap in filtrelenmisYapilacaklar" :key="yap.id">
          
          <Yapilacak :yapilacak="yap" @sil="silHandle" @yapildi="yapildiHandle"/>
     </div>
    </div>
    <div v-else>
<p>yapilacaklar yükleniyor</p>
    </div>
  </div>
</template>

<script>
import Yapilacak from '../components/Yapilacak.vue'
import NavbarFilter from '@/components/NavbarFilter.vue'
// @ is an alias to /src
 


export default {
  name: 'HomeView',
  components:{
    Yapilacak,
    NavbarFilter
  },
  data(){
    return{
      yapilacaklar:[],
      aktifSekme:'hepsi'
    }
  },
  mounted(){
    fetch('http://localhost:3000/yapilacaklar')
    .then((res)=>res.json())
    .then((data)=>this.yapilacaklar=data)
    .catch((err)=>console.log(err))
 
  },
  methods:{
    silHandle(id){
      this.yapilacaklar=this.yapilacaklar.filter(yap=>{
        return yap.id!==id
      })
    },
    yapildiHandle(id){
      let yap=this.yapilacaklar.find(yapilacak=>{
        return yapilacak.id ==id
      })
      yap.yapildi=!yap.yapildi
    }
  },
  computed:{
    filtrelenmisYapilacaklar(){
      if(this.aktifSekme==='tamamlandi'){
        return this.yapilacaklar.filter(yapilacak=>yapilacak.yapildi)
      }
      if(this.aktifSekme==='yapiliyor'){
        return this.yapilacaklar.filter(yapilacak=>!yapilacak.yapildi)
      }
      return this.yapilacaklar
    }
  }

}
</script>
