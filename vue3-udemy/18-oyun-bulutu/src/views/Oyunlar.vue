<template>
  <div class="oyun-liste">
    <h1>Oyun Listesi</h1>
    <ul>
        <transition-group @before-enter="beforeEnter" @enter="enter" appear  >
            <li v-for="(oyun,index) in oyunlar" :key="oyun.id" :data-index="index">
        <span class="material-icons md-48"> videogame_asset</span>
        <div>{{ oyun.oyunAd }}</div>
        </li>
        </transition-group>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import gsap  from 'gsap'

export default {
setup(){
    const store=useStore()
    const oyunlar=computed(()=>{
        return store.state.oyunlar;
    })

    const beforeEnter=(el)=>{
        el.style.opacity=0
        el.style.transform='translateY(100px)'
    }
    const enter=(el)=>{
        gsap.to(el,{
            opacity:1,
            y:0,
            duration:0.8,
            delay:el.dataset.index*0.2

        })
    }
    return {oyunlar,enter,beforeEnter}
}
}
</script>

<style>
.oyun-liste ul{
 padding: 0;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap:20px;
 max-width: 600px;
 margin: 60px auto;
}
.oyun-liste li{
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0,1);
    cursor: pointer;
    line-height: 1.5em;
    text-transform:capitalize;
}
.material-icons.md-48{
    font-size:48px;
}
</style>