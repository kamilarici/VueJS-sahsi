<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <h4>İş Oluştur</h4>
        <input type="text" placeholder="İş Başlik" v-model="baslik">
        <textarea  placeholder="İş Açiklama" v-model="aciklama"></textarea>
        <label for="">İş Tanitici Resim</label>
        <input type="file" @change="handleChange">
        <input type="datetime-local" v-model="basTarih">
        <div class="error">{{ fileHata }}</div>
        <button>İş Oluştur</button>

    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        const baslik=ref('')
        const aciklama=ref('')
        const basTarih=ref('')
        const file=ref(null)
        const fileHata=ref(null)

      const  gecerliTipler=['image/png','image/jpeg']


        const handleSubmit=()=>{
            console.log(baslik.value,aciklama.value,basTarih.value)
        }

        const handleChange=(e)=>{
let secilen=e.target.files[0]
// console.log(secilen)

if(secilen && gecerliTipler.includes(secilen.type)){

  file.value=secilen;
  fileHata.value=null
}else{
  file.value=null
  fileHata.value='lütfen png yada jpeg uzantılı dosyalar secin'
}


        }

        return {baslik,aciklama,basTarih,handleSubmit,handleChange,fileHata}
    }

}
</script>

<style>

</style>