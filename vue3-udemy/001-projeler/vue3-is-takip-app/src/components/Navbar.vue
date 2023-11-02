<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="" />
      <h1><router-link :to="{ name: 'Home' }">AOS İs Takip</router-link></h1>
      <div class="links">
        <button>Çikis</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Üye Ol</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Giris</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
