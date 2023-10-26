const app = Vue.createApp({
  //   template: `
  //   <ul>
  //    <li v-for="gun in gunler">{{gun}}</li>
  // </ul>;

  //  `,
  template: `
  <ul>
   <li v-for="person in persons"> çalışan:{{person.isim}}- maas:{{person.maas}}</li>
</ul>;

  
 `,
  data() {
    return {
      // gunler: [
      //   "pazartesi",
      //   "sali",
      //   "çarşamba",
      //   "perşembe",
      //   "cuma",
      //   "cumartesi",
      //   "pazar",
      // ],
      persons: [
        { isim: "varol", maas: 4250 },
        { isim: "seyit", maas: 5250 },
        { isim: "elif", maas: 7250 },
      ],
    };
  },
  methods: {
    toggle() {},
  },
});

app.mount("#app");
