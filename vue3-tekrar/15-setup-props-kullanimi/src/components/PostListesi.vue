<template>
  <div v-for="post in postlar" :key="post.id">
  {{ post.title }}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  //
// props:['postlar'],
//
//? setup fonk olmadan da fonk kullanabiliriz yalnız setup içinde kullanmak için props olarak tanımlamamız gerekir 
// setup(props){
//     console.log(props.postlar);
// }

setup(){
  const postlar=ref([])
  const hatalar=ref(null)


  const verileriYukle=async()=>{
    let veriler=await fetch('https://jsonplaceholder.typicode.com/posts');
    postlar.value=await veriler.json()
  }

verileriYukle()

return {postlar,hatalar}


}

}
</script>

<style>

</style>