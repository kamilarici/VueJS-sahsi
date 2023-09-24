<template>
  <div class="post">
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["post"],
  setup() {},
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
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-symbols-outlined :hover {
  color: #ff5500;
}
.project.complete {
  border-left: 4px solid green;
}
.project.complete .tick {
  color: green;
}
</style>
