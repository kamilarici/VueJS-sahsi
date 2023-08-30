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
    }
}

}
</script>

<style>

</style>