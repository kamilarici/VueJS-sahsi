<template>
  <div>
    <div class="error" v-if="hataDocument">{{ hataDocument }}</div>
    <div v-if="is && !hataDocument" class="work-details">
      <div class="work-info">
        <div class="image">
          <img :src="is.resimUrl" />
        </div>
        <h2>{{ is.baslik }}</h2>
        <p class="username">{{ is.kullaniciAd }}</p>
        <p class="description">{{ is.aciklama }}</p>
      </div>
      <div class="work-list">
        <h2>İs Adımlar</h2>
        <IsAdimEkle v-if="kullaniciİs" :is="is"/>
        <button v-if="kullaniciİs" @click="handleDelete">İsi Sil</button>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import useStorage from "@/composables/useStorage";
import getUser from "@/composables/getUser";
import useDocument from "@/composables/useDocument";
import { computed } from "vue";
import { useRouter } from "vue-router";
import IsAdimEkle from '../../components/IsAdimEkle.vue'


export default {
  components:{IsAdimEkle},
  props: ["id"],
  setup(props) {
    const { hataDocument, belge: is } = getDocument("isler", props.id);
    const {kullanici}=getUser()
    const kullaniciİs=computed(()=>{
      return is.value && kullanici.value && kullanici.value.uid==is.value.kullaniciId
    })
    const {belgeSil}=useDocument('isler',props.id)
    const {resimSil}=useStorage()
    const router=useRouter()
    const handleDelete=async()=>{
      await belgeSil()
      await resimSil(is.value.fileYol)
      router.push({name:'Home'})
    }
    return { hataDocument, is,kullaniciİs,handleDelete };
  },
};
</script>

<style></style>
