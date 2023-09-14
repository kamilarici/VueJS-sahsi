<template>
  <div>
    <h1>ogrenciler</h1>
    <div v-for="student in students" :key="student.id">
      <router-link :to="{ path: `/students/${student.id}` }">
        {{ student.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "kamil", not: 55 },
        { id: 2, name: "ali", not: 75 },
        { id: 1, name: "kadir", not: 85 },
      ],
    };
  },
};
</script>

<style></style>
