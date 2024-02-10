<template>
  <div>
    <h1>Perosneller</h1>
    <div v-for="personel in personeller" :key="personel.id">
    <router-link :to="{name:'personelDetay',params:{id:personel.id}}" >
        
      <p>{{ personel.ad }}</p>
    
    </router-link>
    
</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            personeller:[
                {id:1,ad:'Luffy',gorev:'kaptan'},
                {id:2,ad:'Zoro',gorev:'y.kaptan'},
                {id:3,ad:'Sanji',gorev:'ascı'}
            ]
        }
    },

}
</script>

<style>

</style>