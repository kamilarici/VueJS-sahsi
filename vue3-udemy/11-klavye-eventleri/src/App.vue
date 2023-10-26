<template>
  <form @submit.prevent="handleSubmit" >
<label >hobiler</label>
<input type="text" v-model="aktifHobi" @keyup.alt="hobiEkle">
<div v-for="hobi in hobiler" :key="hobi">
<span @click="hobiSil(hobi)">{{ hobi }}</span>
</div>
<br>
<button>submit</button>
  </form>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
hobiler:[],
aktifHobi:""

    }
  },
  methods:{
hobiEkle($event){
  // console.log($event);
  if($event.key=="," && this.aktifHobi){
    if(!this.hobiler.includes(this.aktifHobi)){
      this.hobiler.push(this.aktifHobi)
    }
    this.aktifHobi=""
  }
},
hobiSil(hobi){
  this.hobiler=this.hobiler.filter(item=>{
    return hobi!==item
  })

},
handleSubmit(){
  console.log(this.hobiler);
}
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
