<template>
    <form @submit.prevent="handleSubmit" >
  <h3>AOS iş takip üye olma  Sayfası</h3>
  <input type="text" placeholder="Lütfen Kullanıcı Addınızı Giriniz" v-model="kullaniciAd">
  <input type="email" placeholder="Lütfen Email Adresini Giriniz" v-model="email">
  <input type="password" placeholder="Lütfen Parolanizi Giriniz" v-model="parola">
  <button>Giriş</button>
  <div v-if="hata" class="error">{{ hata }}</div>
    </form>
  </template>
  
  <script>
  import useSignup from '@/composables/useSignup'
  import {ref} from 'vue'
  export default {
  setup() {
      const {hata,signup}=useSignup();
      const email=ref('')
      const parola=ref('')
      const kullaniciAd=ref('')
      const handleSubmit=async()=>{
          const res=await signup(email.value, parola.value,kullaniciAd.value)
          if(!hata.value){
              console.log('kullanici üye oldu')
          }
      }
      return {email,parola,handleSubmit,hata,kullaniciAd}
  }
  }
  </script>
  
  <style>
  
  </style>