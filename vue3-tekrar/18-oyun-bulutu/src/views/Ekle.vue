<template>
<div class="oyunlar">
    <input type="text" v-model="yeniOyun" placeholder="Yeni Oyun Adı"
    @keypress.enter="oyunEkle">
<ul>
    <li v-for="oyun in oyunlar" :key="oyun.id" @click="oyunSil(oyun.id)">{{ oyun.oyunAd }}</li>
</ul>
</div>
</template>
<script>
import {ref,computed} from 'vue'
import { useStore } from 'vuex';

export default{
setup(){
    const store=useStore()
    const yeniOyun=ref('')


    const oyunlar =computed(()=>{
        return store.state.oyunlar
    })
    const oyunEkle=()=>{
        if(yeniOyun.value){
            store.dispatch('oyunEkleAction',yeniOyun.value)
            yeniOyun.value=''

        }else{

        }
    }
    const oyunSil=(id)=>{
        store.dispatch('oyunSilAction',id)
    }
    return {oyunlar,yeniOyun,oyunEkle,oyunSil}
}
}
</script>
<style>
.oyunlar{
    max-width: 400px;
    margin: 20px auto;
    position: relative;

}
input{
    width: 100%;
    padding: 12px;
    border:  1 px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    outline: none;

}
.oyunlar ul{
    position: relative;
    padding: 0;


}
.oyunlar li{
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    background: #e66767;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0,1);
    width: 100%;
    box-sizing: border-box;
   
    text-transform:capitalize;
}
.oyunlar li:hover{
    cursor: pointer;
} 
</style>