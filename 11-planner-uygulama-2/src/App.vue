<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">addproject</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  components: {},
};
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
