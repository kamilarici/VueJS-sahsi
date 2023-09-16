<template>
  <div>
    <!-- <h1>{{ content }}</h1> -->

    <!-- ?App.vue comp içerisinde  header içine h1 tag yazdık ve burada gelmesi istediğimiz yere slot koymamız yeterlidir  -->
    <slot></slot>
    <hr />
    <input type="text" v-model="name" />
    <input type="text" v-model="surname" />
    <p>{{ nameSurname }}</p>
  </div>
</template>

<script>
export default {
  //   props: ["content"],
  data() {
    return {
      name: "",
      surname: "",
    };
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
