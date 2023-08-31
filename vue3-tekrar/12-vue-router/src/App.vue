<!-- //? router linkleri to name ve path olarak yönlendirebiliriz ..kullanım şekilleri aşağıdaki gibidir  -->

<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link :to="{name:'home'}">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{name:'about'}">About</router-link>  |
    <router-link :to="{path:'/personel'}">personel</router-link>  |
    <router-link :to="{name:'deneme'}">deneme</router-link>
  </nav>
  <br>
  <button @click="anasayfa">Anasayfa</button>
  <button @click="geri">Geri</button>
  <button @click="ileri">İleri</button>
  <router-view/>
  <!-- //? tıkladığımız linkteki components router-viev doldurur -->
</template>

<script>
export default {
  methods:{
    //? anasayfaya tıklandığında home sayfasına yönlenecek
    anasayfa(){
      this.$router.push({name:'home'})
    },
    geri(){
this.$router.go(-1)
    },
    ileri(){
      this.$router.go(1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
  button{
    border: none;
    margin: 10px;
    cursor: pointer;
    font-size: 20px;
  }

</style>
