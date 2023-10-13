<template>
  <div class="home">
 <div>
   <h1>AOS oyun bulutu</h1>
   <p>Buluta oyun eklemek ve oyun görmek için giriş yapınız </p>
   <button>Misafir Girişi</button>
 </div>  
  </div>
 </template>
 
 <script>
 import girisYap from  '../composables/girisYap'
 import { useRouter } from 'vue-router';

 
 
 export default {
   name: 'Home',
setup(){
  const {login}=girisYap()
  const useRouter=useRouter()
  const handleGiris=async()=>{
    await login()
    router.push({name:'Ekle'})
  }
}
 }
 </script>
 <style scoped>
 button{
   background-color:#FD7272  ;
 }
 </style>
 