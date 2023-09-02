<template>
  <h1>FETCH METODU VE PROPS -hata fırlatma</h1>
  <h2> composables (context api benzeri)</h2>
  <div v-for="post in postlar" :key="post.id">
  {{ post.title }}
  </div>
  <div v-if="hatalar"> {{ hatalar }} </div>
</template>
<!-- ? verileri burada çekebiliriz (sayfa altında örneği var ) ama başka sayfalarda da kullanacaksak global olarak çekip gerekli yerlerde kullanmak için çağırmamız yeterli bura da da ihtiyacımız oldu ve 1**** getPost  import etmek gerekir 2******gerekli fonk ve dataları destrancing etmek gerekr  ve kullanacağımız fonk return etmemiz yeterlidir -->
<script>
import {ref} from 'vue'
import getPosts from '../composables/getPosts'
export default {
  //
// props:['postlar'],
//
//? setup fonk olmadan da fonk kullanabiliriz yalnız setup içinde kullanmak için props olarak tanımlamamız gerekir 
// setup(props){
//     console.log(props.postlar);
// }
//************************ */
setup(){
const {postlar,hatalar,verileriYukle}=getPosts()


verileriYukle();

return {postlar,hatalar}

}
}
</script>

<style>

</style>




//   const postlar=ref([])
//   const hatalar=ref(null)


//   const verileriYukle=async()=>{
// try {
//   let veriler=await fetch('https://jsonplaceholder.typicode.com/posts');
//     postlar.value=await veriler.json()

// //? catch e hata fırlatmak
//     if(!veriler.ok){
//      throw new Error('verilere erişilemedi') 
//     }
// } catch (error) {
//   hatalar.value=error.message
// }
//   }