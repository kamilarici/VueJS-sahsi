<template>
  <div>
    <h1>
      {{ baslik }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baslik: "merhaba vue 3",
    };
  },
};
</script>

<style scoped>
/* h1 {
  color: red;
  font-size: 40px;
} */
</style>
