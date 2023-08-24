<template>
  <h1>personeller</h1>
  <div v-for="personel in personeller" :key="personel.id">
    <p>{{ personel.ad }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personeller: [
        { id: 1, ad: "luffy", gorev: "kaptan" },
        { id: 2, ad: "zoro", gorev: "yardımcı kaptan" },
        { id: 3, ad: "sanji", gorev: "aşcı" },
      ],
    };
  },
};
</script>

<style></style>
