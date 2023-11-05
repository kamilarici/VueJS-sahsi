<template>
    <div>
  <div v-for="is in isler" :key="is.id">
<div class="single">
    <div class="thumbnail">
        <img :src="is.resimUrl" alt="">
    </div>
    <div class="info">
        <h3>{{ is.baslik }}</h3>
        <p>Olusturan: {{ is.kullaniciAd }}</p>
    </div>
    <div class="work-number">
        <p>{{ is.isAdimlar.lenght }} tane iş adimi bulunuyor</p>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
props:['isler']
}
</script>

<style>

</style>