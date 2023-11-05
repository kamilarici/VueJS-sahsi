<template>
  <div class="navbar" style="border-bottom: 2px solid blue; margin-bottom: 25px; background-color: rgb(121, 121, 143);">
    <nav style="display: flex; justify-content: space-between; align-items: center; ">
      <div style="display: flex;">

        <img width="50"  src="@/assets/logo.png" alt="" />
        <h1 ><router-link style="text-decoration: none; color: white;" :to="{ name: 'Home' }">AOS İs Takip</router-link></h1>
      </div>
      <div class="links" style="display: flex; gap:15px;">

      <div  style="color: white;" v-if="kullanici">  <button @click="handleClick">Çikis</button></div>
       <div v-if="!kullanici"> <router-link class="btn" :to="{ name: 'Signup' }">Üye Ol</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Giris</router-link>
      </div>
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
