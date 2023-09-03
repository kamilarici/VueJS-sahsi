<template>
  <nav>
    <router-link :to="{name:'home'}">Makale Listesi</router-link>  |
    <router-link :to="{name:'Ekle'}">Makale Oluştur</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;
    text-transform: uppercase;
}
nav ul{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
nav li{
list-style-type: none;
margin-left: 20px;
}
nav a{
    color: #333;
}
nav .router-link-active{
    color: #eb4d4b;
}
</style>