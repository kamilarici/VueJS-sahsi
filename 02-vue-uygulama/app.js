const app = Vue.createApp({
  //? html içine yazılan h2 taglerini eziyor
  //   template: "<h2>bu ilk uygulamamiz</h2>",
  template: `
 <h2>başlik:{{baslik}}</h2>
<h3>içerik:{{icerik}} </h3>
<p>yorum sayisi: {{yorumSayisi}}</p>

 `,
  data() {
    return {
      baslik: "Vue Dersi",
      icerik: "vue 3 konulari",
      yorumSayisi: 7,
    };
  },
});

app.mount("#app");
