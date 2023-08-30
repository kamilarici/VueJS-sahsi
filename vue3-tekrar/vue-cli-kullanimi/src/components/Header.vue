<template>
  <div>
    <h1>    {{ baslik }}</h1>
 
  </div>

</template>

<script>
export default {
    data(){
        return{
           baslik:"merhaba vue3(header components)" 
        }
    }

}
</script>

<!-- //?  sadece bu componente geçerli olsun istiyorsak scoped deriz ama global olarak tüm h1 ler aynı style alsın istersek scoped vermeyiz  -->
<style scoped >
h1{
  color: red;
  font-size: 40px;
}
</style>