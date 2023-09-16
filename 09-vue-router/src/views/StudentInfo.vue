<template>
  <div>
    <h3>Ögrenci Bilgi Sayfasi</h3>
    <!-- <p>Ögrenci ID: {{ studentID }}</p> -->
    <p>Ögrenci ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     studentID: this.$route.params.id,
  //   };
  // },
  // ? props true olduğu için burada data tanımlamamıza gerek yok
  props: ["id"],
};
</script>

<style></style>
