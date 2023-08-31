<template>
  <h1>rakanlar</h1>
  <div v-for="rakam in rakamlar" :key="rakam">
    {{ rakamlar }}
  </div>
</template>

<script>
export default {
data(){
    return{
        rakamlar:[12,158,12574,14,6]
    }
}
}
</script>

<style>

</style>