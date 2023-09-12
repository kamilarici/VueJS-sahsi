<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" ref="name" />
    <input type="text" ref="password" />
    <button @click="login">Giriş</button>
    <br />
    <p>{{ isLogin }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "login",
      name: "varol",
      pasword: "1234",
      isLogin: false,
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
