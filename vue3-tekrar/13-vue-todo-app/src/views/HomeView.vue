<template>
  <div class="home">
<div v-for="yap in yapilacaklar" :key="yap.id">
<p> {{ yap.baslik }} </p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data(){
    return{
      yapilacaklar:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/yapilacaklar')
    .then((res)=>res.json())
    .then((data)=>this.yapilacaklar=data)
    .catch((err)=>console.log(err))
 
  }

}
</script>
