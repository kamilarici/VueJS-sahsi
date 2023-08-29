const app = Vue.createApp({
  template: `
  <h2>Başlik: {{baslik}}</h2>
  <h3>İçerik: {{icerik}} </h3>
  <p>uygulama sayisi: {{appAdet}} </p> 
  <button v-on:click="appEkle()">uygulama ekle</button>
  `,
  data() {
    return {
      baslik: "vue 3 ile web --- sayfalari",
      icerik: "composition api-router-firebase",
      appAdet: 5,
    };
  },
  methods: {
    // ?dataları oluşturduğumuzda değiştirmek için methodlardan yararlanacağız
    appEkle() {
      console.log("appEkle metodu çalıştı");
    },
  },
});

app.mount("#uygulama");
