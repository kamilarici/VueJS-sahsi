<template>
  <div>
    <!-- <h1>{{ content }}</h1> -->

    <!-- ?App.vue comp içerisinde  header içine h1 tag yazdık ve burada gelmesi istediğimiz yere slot koymamız yeterlidir  -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  //   props: ["content"],
};
</script>

<style></style>
