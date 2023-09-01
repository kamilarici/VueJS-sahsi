<template>
  <form @submit.prevent="yapilacakEkle">
<label >Baslik:</label>
<input type="text" v-model="baslik" required>
<label >İçerik:</label>
<input type="text" v-model="icerik" required>

  </form>
</template>

<script>
export default {
data(){
  return{
    baslik:"",
    icerik:""
  }
}
}
</script>

<style>

</style>