<template>
  <div @click="clean">
    <h3>temizle</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //    emit yukarı veri yollamak için kullanılır
  methods: {
    clean() {
      this.$emit;
    },
  },
};
</script>

<style></style>
