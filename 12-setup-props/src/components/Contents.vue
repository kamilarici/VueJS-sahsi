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
export default {
  //   props: ["contents"],
  //   setup içinde props kullanmak için setup(props) şeklinde tanımlamak gerekiyor
  setup() {
    const contents = ref([]);
    const err = ref(null);
    const getContents = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        contents.value = await data.json();
        if (!data.ok) {
          throw new Error("verilere erişilemedi");
        }
      } catch (error) {
        err.value = error.message;
      }
    };
    getContents();

    return { contents, err };
  },
};
</script>

<style></style>
