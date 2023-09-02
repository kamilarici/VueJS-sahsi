<template>
  <h1>FETCH METODU VE PROPS -hata fırlatma</h1>
  <div v-for="post in postlar" :key="post.id">
  {{ post.title }}
  </div>
  <div v-if="hatalar"> {{ hatalar }} </div>
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
try {
  let veriler=await fetch('https://jsonplaceholder.typicode.com/posts');
    postlar.value=await veriler.json()

//? catch e hata fırlatmak
    if(!veriler.ok){
     throw new Error('verilere erişilemedi') 
    }
} catch (error) {
  hatalar.value=error.message
}
  }

verileriYukle()

return {postlar,hatalar}


}

}
</script>

<style>

</style>