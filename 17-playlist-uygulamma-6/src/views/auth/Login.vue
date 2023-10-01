<template>
  <div>
    <form>
      <h3>Login</h3>
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>
<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("uder logged in");
      }
    };
  },
};
</script>
<style></style>
