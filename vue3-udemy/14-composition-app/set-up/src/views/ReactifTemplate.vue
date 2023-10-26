<template>
  <div>
    <h1>reactif template</h1>
    <button @click="butonTiklandi">tikla</button>
    <p> {{ ad }}-{{ yetenekNesnesi.yetenekAd }}</p>
    <input type="text" v-model="ad">
  </div>
</template>
<!-- ? objelerde reaktif kullanmak gerekiyor -->
<script>

import {ref ,reactive} from 'vue'
export default {
setup(){
    let ad=ref('luffy')
    let yetenekNesnesi=reactive({yetenekAd:"lastik"})

    const butonTiklandi=()=>{
        ad.value="zoro"
        yetenekNesnesi.yetenekAd="kilic"
    }
    return {ad,butonTiklandi,yetenekNesnesi}
}
}
</script>

<style>

</style>