<template>
 
   <div class="about">
    <h1> REF</h1>
    <button @click="butonTiklandi">tikla</button>
    <p>{{ ad }}</p>
    <input type="text" v-model="ad">
    <!-- <h1>This is an about page</h1>
    <button @click="butonTiklandi">tıkla</button>
    <p ref="bilgiler"> p etiketi</p> -->
  </div>
</template>
<!-- ? setup içinde referans değerleri değiştirmek için referansı ref ile tanımlamak lazım .sonrası değiştirmek için ise .value ile değiştirmemiz gerekiyor ...tabi bu yazılanları return içine yazmamız gerekiyor   -->
<script>
import {ref} from 'vue'
export default {
setup(){

  let ad=ref('luffy')
  const butonTiklandi=()=>{
    ad.value='zoro'
    console.log(ad);}
  return {ad,butonTiklandi}
//   const bilgiler =ref('luffy')
//   const butonTiklandi=()=>{
//     console.log(bilgiler,bilgiler.value);
//   }
//   return {butonTiklandi,bilgiler}
}
}
</script>

<style>

</style>