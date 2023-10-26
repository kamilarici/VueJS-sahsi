const app = Vue.createApp({
  template: `
  <h2>Başlik: {{baslik}}</h2>
  <h3>İçerik: {{icerik}} </h3>
  <p>uygulama sayisi: {{appAdet}} </p> 
  <button v-on:click="appEkle()">uygulama ekle</button>
  <p @click="appEkle">{{metin}}</p>
  `,
  data() {
    return {
      baslik: "vue 3 ile web --- sayfalari",
      icerik: "composition api-router-firebase",
      appAdet: 5,
      metin: "metin eklemek için tiklayiniz",
    };
  },
  methods: {
    // ?dataları oluşturduğumuzda değiştirmek için methodlardan yararlanacağız
    appEkle() {
      console.log("appEkle metodu çalıştı");
      //? butona tıklandığında appAdet artırmak için appEkle fonsiyonu içinde this ile appAdet e ulaşıp değerini 1 artırabiliriz
      this.appAdet++;
      this.metin = `${this.appAdet} tane uygulama var`;
    },
  },
});

app.mount("#uygulama");
