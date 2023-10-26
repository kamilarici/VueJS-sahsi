<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="todo ekle" v-model="todo" />
    <button>Ekle</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

// import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const todo = ref("");
    const addTodo = () => {
      const objectTodo = {
        newTodo: todo.value,
        done: true,
      };
      store.dispatch("addTodoAction", objectTodo);
    };
    // const router = useRouter();
    // const todo = ref(null);
    // const addTodo = () => {
    //   router.push({ path: "/", query: { data: todo.value } });
    //   todo.value = "";
    // };

    return { todo, addTodo };
  },
};
</script>
