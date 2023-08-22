const app = Vue.createApp({
  template: `
  <div style="color:green">deneme yazisi1</div>
  <div v-bind:style="style">deneme yazisi2</div>
  <div :style="style">deneme yazisi3</div>
`,
  data() {
    return {
      style: "color:green",
    };
  },
  methods: {},
});

app.mount("#app");
