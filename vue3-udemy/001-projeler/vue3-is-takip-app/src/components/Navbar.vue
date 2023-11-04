<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="" />
      <h1><router-link :to="{ name: 'Home' }">AOS İs Takip</router-link></h1>
      <div class="links">

      <div v-if="kullanici">  <button @click="handleClick">Çikis</button></div>
       <div v-if="!kullanici"> <router-link class="btn" :to="{ name: 'Signup' }">Üye Ol</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Giris</router-link></div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser'



export default {
  setup(){
    const {logout}=useLogout()
    const router=useRouter()
    const {kullanici}=getUser()

    const handleClick=async()=>{
      console.log('hop')
      await logout()
      router.push({name:'Login'})

    }
return {handleClick,kullanici}
  }
};
</script>

<style></style>
