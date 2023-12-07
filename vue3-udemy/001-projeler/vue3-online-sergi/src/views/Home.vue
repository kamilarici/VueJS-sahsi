<template>
  <div>
   <Navbar/>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/home/HomeNavbar.vue';
export default {
components:{Navbar}
}
</script>

<style>

</style>