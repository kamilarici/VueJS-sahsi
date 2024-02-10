<template>
  <form >
    <label > Email:</label>
    <input v-model="email" type="email"/>
<label >Yetki</label>
<hr>
<select v-model="yetki" >
    <option value="5">cccc</option>
    <option  value="1">editor</option>
    <option  value="2">admin</option>
    <option  value="3">aaa</option>
    <option  value="4">bbbb</option>
    <option  value="6">ddd</option>
</select>
<hr>
<input v-model="anlasma" type="checkbox"/>
<label for="">Kabul ediyorum</label>
<hr>
<!-- <p>Anlaşma Kabulü: {{ anlasma ? 'Ediyorum' :'Etmiyorum'}}</p> -->
<div>
<input type="checkbox" value="yönetim" v-model="istekler"/>
<label for="">yönetim</label>

</div>
<div>
<input type="checkbox" value="erişim" v-model="istekler"/>
<label for="">Erişim</label>

</div>
<div>
<input type="checkbox" value="silme" v-model="istekler"/>
<label for="">Silme</label>

</div>
<p>İstekler:{{ istekler }}</p>
  </form>
</template>

<script>

export default {
data() {
    return {
        email:"dfgd",
        yetki:"5",
        anlasma:true,
        istekler:[]
    }
},
}
</script>

<style>

</style>