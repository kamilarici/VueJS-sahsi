<template>
    <div>
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
  <hr>
  <hr>
  <form @submit.prevent="handleSubmit" style="border: 1px solid red; height: 100px;">
<label for="">Hobiler</label>
<input type="text" v-model="aktifHobi" @keyup.alt="hobiEkle"/>
<div v-for="hobi in hobiler" :key="hobi">
<span @click="hobiSil(hobi)" >{{ hobi }}</span>
</div>
<button>Submit</button>
  </form>
  </div>
</template>

<script>

export default {
data() {
    return {
        email:"dfgd",
        yetki:"5",
        anlasma:true,
        istekler:[],
        hobiler:[],
        aktifHobi:""
    }
},
methods:{
    hobiEkle($event){
        // console.log($event)
        if ($event.key=="," && this.aktifHobi){
            if(!this.hobiler.includes(this.aktifHobi)){
                this.hobiler.push(this.aktifHobi)

            }
            this.aktifHobi=""
        }
    },
    hobiSil(hobi){
        this.hobiler=this.hobiler.filter(item=>{
            return hobi !== item //eşit olmyanları dön
        })
    },
    handleSubmit(){
     console.log(this.hobiler)   
     this.aktifHobi=""
    },
   
}
}
</script>

<style>

</style>