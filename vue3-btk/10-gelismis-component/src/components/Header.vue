<template>
  <div>
    <!-- <h1>{{ content }}</h1> -->

    <!-- ?App.vue comp içerisinde  header içine h1 tag yazdık ve burada gelmesi istediğimiz yere slot koymamız yeterlidir  -->
    <slot></slot>
    <hr />
    <input type="text" v-model="name" />
    <input type="text" v-model="surname" />
    <p>{{ nameSurname }}</p>
    <hr />
    <input type="number" v-model="number1" /> <br />
    <input type="number" v-model="number2" /><br />
    <input type="number" v-model="total" />
  </div>
</template>

<script>
export default {
  //   props: ["content"],
  data() {
    return {
      name: "",
      surname: "",
      number1: 0,
      number2: 0,
      total: 0,
    };
  },

  watch: {
    // ***** watch dataları yada state leri izleyerek değişiklikleri yapması ve istenen yenilikleri yapmasıdır
    number1(newValue, oldValue) {
      console.log("sayilar", oldValue, newValue);
      this.total = parseInt(this.number1) + parseInt(this.number2);
    },
    number2(newValue, oldValue) {
      console.log("sayilar", oldValue, newValue);
      this.total = parseInt(this.number1) + parseInt(this.number2);
    },
  },
  computed: {
    //* bu işlemi method ile de yapabiliriz ama çalışma mantığı olarak bu daha performanslı çalışır
    nameSurname() {
      return this.name + " " + this.surname;
    },
  },
};
</script>

<style></style>
