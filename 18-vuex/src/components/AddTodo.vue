<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="todo" />
    <button>Ekle</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const todo = ref(null);
    const addTodo = () => {
      router.push({ path: "/", query: { data: todo.value } });
      todo.value = "";
    };
    return { todo, addTodo };
  },
};
</script>
