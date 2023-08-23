<template>
  <div>
    <h1>
      {{ baslik }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["baslik"],
  data() {
    return {};
  },
};
</script>

<style scoped>
/* h1 {
  color: red;
  font-size: 40px;
} */
</style>
