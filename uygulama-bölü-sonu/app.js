const app = Vue.createApp({
  template: `
  <h2>icecek seciniz </h2>
  <ul>
    <li v-for="i in icecekler" class="li" :class="{secilen:i.sec}" @click="icecekSec(i)"> {{i.isim}}</li>
  </ul>
  <button @click="secilenIceceklerGetir" >secilen icecekler <button>
`,
  data() {
    return {
      icecekler: [
        { isim: "su", sec: true },
        { isim: "ayran", sec: false },
        { isim: "kola", sec: false },
        { isim: "salgam", sec: false },
      ],
    };
  },
  methods: {
    icecekSec(icecek) {
      icecek.sec = !icecek.sec;
    },
    secilenIceceklerGetir() {
      const secilenler = this.icecekler.filter((i) => i.sec == true);
      console.log(secilenler);
    },
  },
});

app.mount("#app");
