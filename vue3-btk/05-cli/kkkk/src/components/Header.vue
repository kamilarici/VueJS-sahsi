<template>
  <div @click="temizle">
    <h1>temizle</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    temizle() {
      this.$emit("temizle");
    },
  },
};
</script>

<style scoped>
/* h1 {
  color: red;
  font-size: 40px;
} */
</style>
