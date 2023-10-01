<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="" />
      <h1><router-link :to="{ name: 'home' }">🎶 PlayList</router-link></h1>
      <div class="links">
        <button>Logout</button>
        <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}
nav {
  display: flex;

  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>
