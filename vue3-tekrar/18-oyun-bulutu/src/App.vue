<template>
  <div v-if="kullanici">
    <router-link :to="{name:'Ekle'}">Oyun Ekle | </router-link>
  <router-link :to="{name:'Oyunlar'}">Oyunlar</router-link>
  <button @click="handleCikis">Cikis Yap</button>
  </div>
 <div v-else class="nav">
  <router-link :to="{name:'Home'}">Anasayfa | </router-link>
  <router-link :to="{name:'Hakkimizda'}">Hakkımızda</router-link>

 </div>
  <router-view/>
</template>
<script>
import kullaniciGetir from  './composables/KullaniciGetir';
import cikisYap from './composables/cikisYap'
import { useRouter } from 'vue-router';
export default{

  setup(){
    const {kullanici}=kullaniciGetir()
    const {logout}=cikisYap()

    const router=useRouter()
    


    const handleCikis= async()=>{
      await logout();
      router.push("/")
    }
    return {kullanici,logout,handleCikis}
    
  }
}
</script>
<style>
body{
  font-family:sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f7d794;
}
.nav{
padding: 30px;

}

.nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

.nav a.router-link-exact-active{
  color: #c44569;
}

button{
  border: 1px solid #ee5253;
  border-radius: 10px;
  background-color: #ee5253;
  padding: 7px;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
}
</style>
