<template>
  <div>
    <div class="add-work">
        <button v-if="!formGoster" @click="formGoster=true">İs Adimi Ekle</button>
        <form v-if="formGoster" @submit.prevent="handleSubmit">
        <h4>yeni is adimi</h4>
        <input type="text" placeholder="is adimi" required v-model="isAdimi">
        <button>Ekle</button>
        
        
        </form>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import useDocument from '../composables/useDocument';
export default {
props:['is'],
setup(props) {
  const isAdimi=ref(null)  
  const formGoster=ref(false)

  const {belgeGuncelle}=useDocument('isler',props.is.id)

  const handleSubmit=async()=>{
    const yeniIsAdimi={
        isAdimi:isAdimi.value,
        id:Math.floor(Math.random()*100000)
    }
    // console.log([...props.is.isAdimlar,yeniIsAdimi])
    const res=await belgeGuncelle({
        isAdimlar:[...props.is.isAdimlar,yeniIsAdimi]
    })
    isAdimi.value=null
    formGoster.value=false
  }

return {isAdimi,formGoster,handleSubmit}
    
}

}
</script>

<style scoped>
.add-work{
    text-align: center;
    margin-top: 40px;

}
form{
    max-width: 100%;
    text-align: left;
}

</style>