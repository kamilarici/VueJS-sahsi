<template>
  <div v-for="post in postlar" :key="post.id">
  {{ post.baslik }}
  </div>
</template>

<script>
export default {
props:['postlar'],
//? setup fonk olmadan da fonk kullanabiliriz yalnız setup içinde kullanmak için props olarak tanımlamamız gerekir 
// setup(props){
//     console.log(props.postlar);
// }


}
</script>

<style>

</style>