<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span @click="toggleComplete" class="material-symbols-outlined tick"
          >check</span
        >
        <span @click="deleteProject" class="material-symbols-outlined"
          >delete</span
        >
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-symbols-outlined">edit</span></router-link
        >
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        //? burada sildiğimiz elemanlar serverden siliniyor ama projects içinden silinmediği için ekranda göremiyoruz bu sebeble sildiğimiz elemanın id sini parent e yolluyoruz ve orada id ile silinen elemanı ekrandan çıkaracağız
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      // burası sabit server için yapılan yapı server içindeki elemanının complete özelliğini tersine çeviriyor .fetch den sonra da  project içindeki değişimi yapıyoruz
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        //   aynı delete gibi complete özelliği değişenin id sini yukarı yolluyoruz
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
.project {
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
