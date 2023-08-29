const app = Vue.createApp({
  template: `
  <ul>
  <li v-for="sayi in sayilar" > {{sayi}}  </li> 
 </ul>
  <ul>
  <li v-for="karakter in karakterler" > {{karakter}}  </li> 
 </ul>
  <ul>
  <li v-for="karakter in karakterler" > {{karakter.isim}}- {{karakter.gorev}}  </li> 
 </ul>
  `,
  data() {
    return {
      sayilar: [5, 25, 4256, 14, 22],
      karakterler: [
        { isim: "luffy", gorev: "kaptan" },
        { isim: "zoro", gorev: "kiliç kullanmak" },
        { isim: "sanji", gorev: "asci" },
        { isim: "kkkkk", gorev: "yemek yemek" },
      ],
    };
  },
  methods: {},
});

app.mount("#uygulama");
