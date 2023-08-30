<!-- //? v-model, Vue.js'deki iki yönlü veri bağlaması (two-way data binding) özelliğini ifade eder. Bu özellik, bir HTML form elemanının değeriyle Vue bileşeni arasında bağlantı kurmanıza ve bu değerlerdeki değişikliklerin otomatik olarak senkronize edilmesine olanak tanır. -->

<template>
  <form >
    <label >Email:</label>
    <input type="email" v-model="email"/>
  <p>  {{ email }}</p>
<hr>
<!-- //? v-model ile değerleri direkt selectten yakalayabiliyoruz ..eger value yazılırsa v model value yakalar valu yazılmaz ise direk option değeri içine yazılan değeri yakalar -->
    <label class="yetki">Yetki</label>
    <select v-model="yetki" >
        <option value="1">editör</option>
        <option value="2">admin</option>
    </select>
    <p> {{ yetki }} </p>
    <hr>
    <input type="checkbox" v-model="anlasma">
    <label >kabul ediyorum</label>
    <hr>
    <p>anlaşma kabulu: {{ anlasma?"ediyorum":"etmiyorum" }} </p>
    <hr>
    <hr>
    <div>
        <input type="checkbox" value="yönetim" v-model="istekler">
        <label >yönetim</label>
    </div>
    <div>
        <input type="checkbox" value="erişim" v-model="istekler">
        <label >erişim</label>
    </div>
    <div>
        <input type="checkbox" value="erişim" v-model="istekler">
        <label >silme</label>
    </div>
    <p>istekler : {{istekler  }} </p>
  </form>
</template>

<script>
export default {
data(){
    return{
        email:"",
        yetki:"1",
        anlasma:true,
        istekler:[]
    }
}
}
</script>

<style>
.yetki{
    color: red;
    display: block;
}
</style>