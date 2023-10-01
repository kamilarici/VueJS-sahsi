<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPengding">Signup</button>
    <button v-if="isPengding">Loading</button>
  </form>
</template>
<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
export default {
  setup() {
    const { error, signup, isPengding } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user signed in");
      }
    };

    return { email, password, displayName, isPengding, handleSubmit };
  },
};
</script>
<style></style>
