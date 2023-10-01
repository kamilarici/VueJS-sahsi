<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="error" v-if="error">{{ error }}</div>
      <button v-if="!isPengding">Login</button>
      <button v-if="isPengding">Loading</button>
    </form>
  </div>
</template>
<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login, isPengding } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };
    return { email, password, handleSubmit, error, isPengding };
  },
};
</script>
<style></style>
