<template>
     
  <div class="yapilacak">
    <div class="baslik">
        <h3 @click="detayGoster=!detayGoster">{{ yapilacak.baslik }}</h3>
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
    detayGoster:false
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

</style>