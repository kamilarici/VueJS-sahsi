<template>
 <div>
    <h1>PersonelDetay Sayfası</h1>
    <!-- <p>Personel id {{route}}</p> -->
    <p>Personel id {{id}}</p>
 </div>
</template>

<script>
export default {
    props:['id'],
data(){
    return{
        route:this.$route
    }
}
}
</script>

<style>

</style>