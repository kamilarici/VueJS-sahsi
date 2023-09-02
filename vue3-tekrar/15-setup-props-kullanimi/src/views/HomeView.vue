<template>
  <div class="home">
   <PostListesi :postlar="postlar"/>
  </div>
</template>

<script>
import {ref,computed,watch,watchEffect} from 'vue'
import PostListesi from '../components/PostListesi.vue'


export default {
  name: 'HomeView',
  components: {
    PostListesi
  },
  setup(){
    const postlar=ref([
      {id:1,baslik:'ilk post',icerik:'ilk icerik'},
      {id:2,baslik:'ikinci post',icerik:'ikinci icerik'},
      {id:3,baslik:'üçüncü post',icerik:'üçüncü icerik'},
    ])
    return {postlar}
  }
}
</script>
