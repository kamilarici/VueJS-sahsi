<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <h4>İş Oluştur</h4>
        <input type="text" placeholder="İş Başlik" v-model="baslik">
        <textarea  placeholder="İş Açiklama" v-model="aciklama"></textarea>
        <label for="">İş Tanitici Resim</label>
        <input type="file">
        <input type="datetime-local" v-model="basTarih">
        <div class="error"></div>
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

        const handleSubmit=()=>{
            console.log(baslik.value,aciklama.value,basTarih.value)
        }

        return {baslik,aciklama,basTarih,handleSubmit}
    }

}
</script>

<style>

</style>