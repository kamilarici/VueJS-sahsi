<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <div class="content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import { ref } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const post = ref("");
    getPosts().then((data) => {
      post.value = data.find((e) => e.id == props.id);
    });
    return { post };
  },
};
</script>

<style>
.post {
  margin: 20px auto;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);

  border-left: 4px solid #f52c11;
}
h3 {
  cursor: pointer;
}
</style>
