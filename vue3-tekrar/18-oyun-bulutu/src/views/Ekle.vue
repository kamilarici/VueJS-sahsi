<template>
<div class="oyunlar">
    <input type="text" v-model="yeniOyun" placeholder="Yeni Oyun Adı"
    @keypress.enter="oyunEkle">
<ul>
    <transition-group tag="ul" name="list"  appear>
        <li v-for="oyun in oyunlar" :key="oyun.id" @click="oyunSil(oyun.id)">{{ oyun.oyunAd }}</li>
    </transition-group>
</ul>
</div>
<transition name="modal">

    <Modal v-if="modalGoster" />
</transition>
</template>
<script>
import {ref,computed} from 'vue'
import { useStore } from 'vuex';
import Modal from '../components/Modal.vue'

export default{
    components:{Modal},
setup(){
    const store=useStore()
    const yeniOyun=ref('')
    const modalGoster=ref(false)


    const oyunlar =computed(()=>{
        return store.state.oyunlar
    })
    const oyunEkle=()=>{
        if(yeniOyun.value){
            store.dispatch('oyunEkleAction',yeniOyun.value)
            yeniOyun.value=''

        }else{
triggerModal()
        }
    }
    const triggerModal=()=>{
        modalGoster.value=true
        setTimeout(()=>modalGoster.value=false,3000)
    }
    const oyunSil=(id)=>{
        store.dispatch('oyunSilAction',id)
    }
    return {oyunlar,yeniOyun,oyunEkle,oyunSil,modalGoster}
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

@keyframes titresim {
    0%{transform: translateY((-100px));opacity: 0;}
    50%{transform: translateY((0px));opacity: 1;}
    60% {transform: translateX(8px);opacity: 1;}
    70% {transform: translateX(-8px);opacity: 1;}
    80% {transform: translateX(4px);opacity: 1;}
    90% {transform: translateX(-4px);opacity: 1;}
    100% {transform: translateX(0px);opacity: 1;}
}

.modal-enter-from{
    opacity: 0;
    transform: translateY(-60px);

}
.modal-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.modal-enter-active{
 animation: titresim 0.5s ease;

}
.modal-leave-from{
    opacity: 1;
    transform: translateY(0px);

}
.modal-leave-to{
    opacity: 0;
    transform: translateY(-60px);
}
.modal-leave-active{
    transition: all 0.5s ease;
    
}



.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
    
}
.list-enter-to{
    opacity: 1;
    transform: scale(1);

}
.list-enter-active{
   transition: all 0.4s ease ;
   

}
.list-leave-to{
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active{
    transition: all 0.4s ease ;
    position: absolute;
}
.list-move{
    transition: all 0.3s ease;
}

</style>