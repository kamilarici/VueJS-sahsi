import  {ref} from 'vue'
// ! global olarak veriyi çektik ve istediğimiz yerde çağırabiliriz export default ederek
const getPosts=()=>{

   
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
        return {postlar,hatalar,verileriYukle}

}

export default getPosts