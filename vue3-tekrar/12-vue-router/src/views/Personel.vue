<template>
  <h1>personeller</h1>
  <div v-for="personel in personeller" :key="personel.id">
  
<router-link :to="{name:'PersonelDetay',params:{id:personel.id}}">
    <p>  {{ personel.ad }} </p>
</router-link>
  </div>
  
</template>

<script>
export default {
data(){
    return{
        personeller:[
            {id:1,ad:"luffy",gorev:"kaptan"},
            {id:2,ad:"zoro",gorev:" yardimci kaptan"},
            {id:3,ad:"sanji",gorev:"aşci"},
            
        ]
    }
}
}
</script>

<style>

</style>