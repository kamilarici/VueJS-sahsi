<template>
  <div>
    <h3>Ögrenci Bilgi Sayfasi</h3>
    <p>Ögrenci ID: {{ studentID }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentID: this.$route.params.id,
    };
  },
};
</script>

<style></style>
