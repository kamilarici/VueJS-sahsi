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
    <hr />
    <input type="checkbox" id="checkbox1" v-model="checked" />
    <label for="checkbox1">onay</label>
    <p>sonuç:{{ checked ? "onaylıyorum" : "onaylamıyorum" }}</p>
    <br />
    <div>
      <input type="checkbox" id="vue" value="vue" v-model="frameworks" />
      <label for="vue">onay</label>
    </div>
    <div>
      <input type="checkbox" id="react" value="react" v-model="frameworks" />
      <label for="react">react</label>
    </div>
    <div>
      <input type="checkbox" id="svelte" value="svelte" v-model="frameworks" />
      <label for="svelte">svelte</label>
    </div>
    <br />
    <p>seçilen frameworkler: {{ frameworks }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "bir metin yazın",
      framework: "Framework Seçin",
      checked: false,
      frameworks: [],
    };
  },
};
</script>

<style></style>
