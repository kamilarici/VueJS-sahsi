<template>
  <div>
    <div class="error" v-if="hataDocument">{{ hataDocument }}</div>
    <div v-if="is" class="work-details">
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
        <button v-if="kullaniciİs">İsi Sil</button>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const { hataDocument, belge: is } = getDocument("isler", props.id);
    const {kullanici}=getUser()
    const kullaniciİs=computed(()=>{
      return is.value && kullanici.value && kullanici.value.uid==is.value.kullaniciId
    })
    return { hataDocument, is,kullaniciİs };
  },
};
</script>

<style></style>
