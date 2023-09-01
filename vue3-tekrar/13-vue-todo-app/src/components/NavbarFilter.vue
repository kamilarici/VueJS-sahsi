<template>
  <nav class="filter-nav">
<button @click="filterGuncelle('hepsi')">bütün yapilacaklar</button>
<button @click="filterGuncelle('tamamlandi')">Tamamlanan yapilacaklar</button>
<button @click="filterGuncelle('yapiliyor')">Devam Eden yapilacaklar</button>
  </nav>
</template>

<script>
export default {
methods:{
    filterGuncelle(durum){
        this.$emit('filterDurum',durum)
    }
}
}
</script>

<style>
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
.filter-nav button.active{
    color: #555;
    
}
</style>