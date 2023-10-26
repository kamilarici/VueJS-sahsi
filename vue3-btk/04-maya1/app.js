const app = Vue.createApp({
  template: `
  <h2>içecek seciniz</h2>
  
  <ul>
  <li v-for="i in icecekler" class="li">
    {{i.isim}}
  </li>
</ul>
`,
  data() {
    return {};
  },
  methods: {},
});
// dene
app.mount("#app");
