<template>
  <h1>Yapilacak Güncelle  {{ id }}</h1>
  <form>
<label >Baslik:</label>
<input type="text" v-model="baslik"/>
<label >İcerik:</label>
<input type="text" v-model="icerik"/>
<button>Güncelle</button>

  </form>
</template>

<script>
export default {
  props:['id'],
data(){
    return{
        baslik:'',
        icerik:''
        
    }
}
}
</script>

<style>

</style>