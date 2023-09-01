<template>
  <form @submit.prevent="yapilacakEkle">
<label >Baslik:</label>
<input type="text" v-model="baslik" required>
<label >icerik:</label>
<input type="text" v-model="icerik" required>
<button>Ekle</button>
  </form>
</template>

<script>
export default {
data(){
  return{
    baslik:'',
    icerik:''
  }
},
methods:{
    yapilacakEkle(){
   let yapilacak={
    id:Math.floor(Math.random()*100000),
    baslik:this.baslik,
    icerik:this.icerik,
    yapildi:false,
    
   }
   
   fetch('http://localhost:3000/yapilacaklar',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(yapilacak)
   }).then(()=>{
    this.$router.push('/')
   })
    }
}
}
</script>

<style>
form{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;

}
textarea{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}
form button{
    display: block;
    margin: 20px auto 0;
    background: green;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
</style>