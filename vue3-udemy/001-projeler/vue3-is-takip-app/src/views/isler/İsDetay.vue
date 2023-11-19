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
        <IsAdimEkle v-if="kullaniciİs" :is="is" />
        <div class="work-list">
          <div v-if="!is.isAdimlar.length">henüz is eklenmedi</div>
          <div
            v-for="isAdim in is.isAdimlar"
            :key="isAdim.id"
            class="single-work"
          >
            <div class="details">
              <h3>{{ isAdim.isAdimi }}</h3>

            </div>
            <button v-if="kullaniciİs" @click="handleClick(isAdim.id)">Sil</button>
          </div>
        </div>
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
import IsAdimEkle from "../../components/IsAdimEkle.vue";

export default {
  components: { IsAdimEkle },
  props: ["id"],
  setup(props) {
    const { hataDocument, belge: is } = getDocument("isler", props.id);
    const { kullanici } = getUser();
    const kullaniciİs = computed(() => {
      return (
        is.value &&
        kullanici.value &&
        kullanici.value.uid == is.value.kullaniciId
      );
    });
    const { belgeSil,belgeGuncelle } = useDocument("isler", props.id);
    const { resimSil } = useStorage();
    const router = useRouter();
    const handleDelete = async () => {
      await belgeSil();
      await resimSil(is.value.fileYol);
      router.push({ name: "Home" });
    };
const handleClick=async(id)=>{
const isAdimlar=is.value.isAdimlar.filter((adim)=>adim.id!==id)
await belgeGuncelle({isAdimlar})
// await belgeGuncelle({isAdimlar:isAdimlar})
}

    return { hataDocument, is, kullaniciİs, handleDelete,handleClick };
  },
};
</script>

<style></style>
