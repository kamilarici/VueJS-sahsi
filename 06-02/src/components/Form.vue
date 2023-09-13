<template>
  <form>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>

    <select v-model="framework">
      <!-- ?value hiç girmez isek textleri value kabul eder ve alttaki p tag içine yazar ama value değerleri girersek seçtiğimiz değerleri değil seştiğimiz textlerin valularını yazar p tag içine  -->
      <option value="1">vue</option>
      <option value="2">react</option>
      <option value="3">svelte</option>
    </select>
    <p>{{ framework }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "deneme",
      framework: "",
    };
  },
};
</script>

<style></style>
