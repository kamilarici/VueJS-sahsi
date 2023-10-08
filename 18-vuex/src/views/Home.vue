<template>
  <div class="home">
    <List />
    <!-- <List :todos="todos" /> -->
    <AddTodo />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { ref, onUpdated } from "vue";
import AddTodo from "@/components/AddTodo.vue";
import { useRoute } from "vue-router";

export default {
  components: { AddTodo, List },
  setup() {
    // const todos = ref([
    //   { id: 1, todo: "ders çaliş" },
    //   { id: 2, todo: "film izle" },
    //   { id: 3, todo: "kitap oku" },
    // ]);
    // const route = useRoute();
    // onUpdated(() => {
    //   console.log(route.query.data);
    //   todos.value.push({
    //     id: Math.floor(Math.random() * 10000000),
    //     todo: route.query.data,
    //   });
    // });
    // return { todos };
  },
};
</script>
