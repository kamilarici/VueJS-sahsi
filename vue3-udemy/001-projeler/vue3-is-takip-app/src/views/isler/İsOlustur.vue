<template>
  <div>
    <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; border: 1px solid red; padding: 10px; gap: 15px; width: 80%;height: auto; background-color: rgb(63, 114, 180); border-radius: 8px;">
        <h4>İş Oluştur</h4>
        <input style="padding: 5px;" type="text" placeholder="İş Başlik" v-model="baslik">
        <textarea style="padding: 5px;"  placeholder="İş Açiklama" v-model="aciklama"></textarea>
        <label for="">İş Tanitici Resim</label>
        <input style="padding: 8px;" type="file" @change="handleChange">
        <input type="datetime-local" v-model="basTarih">
        <div class="error">{{ fileHata }}</div>
        <button >İş Oluştur</button>

    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import useStorage from '../../composables/useStorage';

export default {
    setup(){
        const baslik=ref('')
        const aciklama=ref('')
        const basTarih=ref('')
        const file=ref(null)
        const fileHata=ref(null)

        const {resimYukle,url,fileYol,hata}=useStorage()

      const  gecerliTipler=['image/png','image/jpeg']


        const handleSubmit=async()=>{
            //console.log(baslik.value,aciklama.value,basTarih.value)
            if(file.value){
              await resimYukle(file.value)
              console.log('resim yüklendi,url:',url)
            }


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