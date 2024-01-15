<template>
  <nav class="deep-purple lighten-3">
<div>
    <router-link to="{name:'SergiListesi'}" class="brand-logo" >
        AOS Online Sergi
    </router-link>
    <ul class="right">
<li>
    <a class="waves-effect waves-light btn-flat">
        <i class="fab fa-google-plus-g"></i>
    </a>
</li>
</ul>
</div>
  </nav>
</template>

<script>
import {firebase,authRef} from '@firebase/config'
export default {


  setup(){
    const handleGiris=async ()=>{
      
    }
  }
}
</script>

<style>

</style>