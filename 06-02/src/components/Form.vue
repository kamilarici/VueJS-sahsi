<template>
  <form @submit.prevent="sendData">
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
      <label for="vue">vue</label>
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
    <hr />
    <h3>öğrenciler</h3>
    <input type="text" v-model="student" @keyup="addStudent" />
    <div v-for="student in students" :key="student">
      <span @click="deleteStudent(student)">{{ student }}</span>
    </div>
    <br />
    <button @click.prevent="sendData">Gönder</button>
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
      student: "",
      students: [],
    };
  },
  methods: {
    addStudent(e) {
      if (e.key == "," && this.student) {
        if (!this.students.includes(this.student)) {
          this.students.push(this.student);
        }
        this.student = "";
      }
    },
    deleteStudent(student) {
      this.students = this.students.filter((item) => student !== item);
    },
    sendData() {
      console.log("veriler gönderildi");
    },
  },
};
</script>

<style></style>
