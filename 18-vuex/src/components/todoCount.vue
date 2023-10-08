<template>
  <div>
    <p>Yapılanlar:{{ todoDoneCount }}</p>
    <p>Yapılmayanlar:{{ todoNotCount }}</p>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const todoDoneCount = computed(() => {
      return store.getters.todoDoneCount;
    });
    const todoNotCount = computed(() => {
      return store.getters.todoNotCount;
    });
    return { todoDoneCount, todoNotCount };
  },
};
</script>
