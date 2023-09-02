<template>
  <div>
    <h1>set up comp</h1>
    <input type="text" v-model="ara">
<div v-for="isim in bulunanlar">
{{ isim }}
</div>
  </div>
</template>

<script>
import { ref,computed,watch,watchEffect } from 'vue';
export default {
setup(){
  const isimler=ref(['luffy', 'zoro','sanji','nami','usop'])  
  const ara=ref('')

  const bulunanlar=computed(()=>{
    return isimler.value.filter((isim)=>isim.includes(ara.value))
  })


// ? watch içinde sadece bir değişken tanımlanır ve o değiştiğinde çalışır ve kontrol edilir 
  watch(ara,()=>{
    console.log('watch çalisti');
  })
//?watchEffect içerisinde birden fazla  değişen değişken tanımlandığında  herhangi birinin değişmesi ile çalışır 
  watchEffect(()=>{
    console.log('watch effect calisti',isimler.value);
  })
  return {isimler,ara,bulunanlar}
}
}
</script>

<style>

</style>