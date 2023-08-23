<template>
  <form>
    <label for="">email</label>
    <br />
    <input type="email" v-model="email" />
    {{ email }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "sdfs",
    };
  },
};
</script>

<style></style>
