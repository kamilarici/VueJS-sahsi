const app = Vue.createApp({
  template: `
  <h2>frameworkler</h2>
  <ul>
    <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectTag(f)">
    {{f.name}}
    
    </li>
  </ul>
  <h3>seçilen frameworksler </h3>
  <ul>
    <li v-for="s in selectTags">
    {{s.name}}
    
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
  computed: {
    selectTags() {
      console.log("değişik oldu");
      return (selecteds = this.frameworks.filter((i) => i.selected));
    },
  },
});

app.mount("#app");
