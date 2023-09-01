<template>
     
  <div class="yapilacak" :class="{yapildi:yapilacak.yapildi}">
    <div class="baslik">
        <h3 @click="detayGoster=!detayGoster">{{ yapilacak.baslik }}</h3>
        <div class="icon">
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash" @click="yapilacakSil"></i>
           <i class="fa-solid fa-check" @click="toggle" :class="{tick:yapilacak.yapildi}"></i>
        </div>
    </div>
    <div v-if="detayGoster" class="detay">
        <p>{{ yapilacak.icerik }}</p>
    </div>
  </div>
</template>

<script>
export default {


    props:["yapilacak"],
   data(){
   return{
    detayGoster:false,
    uri:'http://localhost:3000/yapilacaklar/'+this.yapilacak.id
   }
},
methods:{
    yapilacakSil(){
fetch(this.uri,{method:'DELETE'})
.then(()=>this.$emit('sil',this.yapilacak.id))
.catch((err)=>console.log(err))
   
},
toggle(){
    fetch(this.uri,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({yapildi:!this.yapilacak.yapildi})
    }).then(()=>{
            this.$emit('yapildi',this.yapilacak.id)
        }).catch((err)=>console.log(err))
}
}
}
</script>

<style>
.yapilacak{
    margin: 20px auto;
    background-color: #4b4b4b;
    padding: 10px 20px;
    border-radius: 15px;
    border: 3px solid #b33939;
    color: #f7f1e3;
}
.yapilacak:hover{
    box-shadow: 8px 10px 10px rgba(2,2,2,0.3);
}
h3{
    cursor: pointer;
}

.baslik{
    display: flex;
    justify-content:space-between;
    align-items: center;
}
i{
    margin-right: 10px;
    font-size: 25px;
    color: #ccc;
    cursor: pointer;
  
}
i:hover{
    color: #2f3542;
}
.yapilacak.yapildi{
    border: 3px solid green;
}
.tick{
    color: green;
}
</style>