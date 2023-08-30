<template>
  <div @click="temizle">
    <h1>temizle</h1>
  </div>
</template>

<script>
export default {
data(){

},
methods:{
    temizle(){
        this.$emit("temizle")
        //? Bir Vue bileşeni, başka bir bileşene bir olayı tetiklemek için $emit kullanabilir ve hedef bileşen bu olayı dinleyebilir 
    }
}

}
</script>

<style>

</style>