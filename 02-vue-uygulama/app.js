const app = Vue.createApp({
  //? html içine yazılan h2 taglerini eziyor
  //   template: "<h2>bu ilk uygulamamiz</h2>",
  template: `
 <h2>başlik:{{baslik}}</h2>
<h3>içerik:{{icerik}} </h3>
<p>yorum sayisi: {{yorumSayisi}}</p>
<button v-on:click="ekle()">ekle</button>
<p>{{yazi}}</p>
 `,
  data() {
    return {
      baslik: "Vue Dersi",
      icerik: "vue 3 konulari",
      yorumSayisi: 8,
      yazi: "yorum eklemek için tiklayin",
    };
  },
  methods: {
    ekle() {
      console.log("ekle metodu çalistir");
      this.yorumSayisi++;
      this.yazi = `${this.yorumSayisi} tane yorum girildi`;
    },
  },
});

app.mount("#app");
