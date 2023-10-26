<template>
  <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import getContentsFetch from "../composables/getContentsFetch";
import { useRoute, useRouter, useRouters } from "vue-router";
export default {
  //   props: ["contents"],
  //   setup içinde props kullanmak için setup(props) şeklinde tanımlamak gerekiyor
  setup() {
    // const contents = ref([]);
    // const err = ref(null);
    // const getContents = async () => {
    //   try {
    //     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     contents.value = await data.json();
    //     if (!data.ok) {
    //       throw new Error("verilere erişilemedi");
    //     }
    //   } catch (error) {
    //     err.value = error.message;
    //   }
    // };

    const route = useRoute();
    const router = useRouter();

    console.log("route:", route);
    console.log("router:", router);

    const { contents, err, getContents } = getContentsFetch();
    getContents();

    return { contents, err };
  },
};
</script>
<!-- ? script içindeki yorum satırları composables dosyasına taşındı heryerden ulaşıp kullanabilmek için(contex api benzeri react) -->

<!-- !route ve router kullanabilmek için import etmek ve atama yapmak gerekiyor useroute-ve userouter dan -->
<style></style>
