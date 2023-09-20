<template>
  <h1>personel detay sayfasi</h1>
  <!-- <p>personel id {{ $route.params.id }} </p> -->
  <!-- <p>personel id {{ route }} </p> -->
  <p>personel id {{ id }}</p>
</template>

<script>
export default {
  //? direk props ile id yi yakalayabiliriz(öncesi index.js e props :true yapmak gerekiyor.)
  props: ["id"],
  // data(){
  //     return{
  //         route:this.$route.params.id
  //     }
  // }
};
</script>

<style></style>
