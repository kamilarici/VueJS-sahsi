const app = Vue.createApp({
  template: `
  <h2>frameworkler</h2>
  <ul>
    <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectTag(f)">
    {{f.name}}
    
    </li>
  </ul>
`,
  data() {
    return {
      frameworks: [
        { name: "vue", selected: true },
        { name: "react", selected: false },
        { name: "svelte", selected: false },
        { name: "agular", selected: false },
      ],
    };
  },
  methods: {
    selectTag(f) {
      f.selected = !f.selected;
    },
  },
});

app.mount("#app");
