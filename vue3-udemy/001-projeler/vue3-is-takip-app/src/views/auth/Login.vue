<template>
  <form @submit.prevent="handleSubmit" >
<h3>Giriş Sayfası</h3>
<input type="email" placeholder="Lütfen Email Adresini Giriniz" v-model="email">
<input type="password" placeholder="Lütfen Parolanizi Giriniz" v-model="parola">
<button>Giriş</button>
<div v-if="hata" class="error">{{ hata }}</div>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import {ref} from 'vue'
export default {
setup() {
    const {hata,login}=useLogin();
    const email=ref('')
    const parola=ref('')
    const handleSubmit=async()=>{
        const res=await login(email.value, parola.value)
        if(!hata.value){
            console.log('kullanici giriş yapti')
        }
    }
    return {email,parola,handleSubmit,hata}
}
}
</script>

<style>

</style>