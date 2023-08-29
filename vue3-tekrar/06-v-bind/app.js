const app = Vue.createApp({
  //? style html etribute olduğu için direk kullanamayız ve v-bind ile kullanmamız gerekiyor (data aracılığı ile)
  //? v-bind:style="style" yerine :style="style" şeklinde de kullanabiliriz
  template: `
  <div v-bind:style="style">kirmizi</div>
  <div :style="style">kirmizi</div>
  `,
  data() {
    return {
      style: "color:red",
    };
  },
  methods: {},
});

app.mount("#uygulama");
