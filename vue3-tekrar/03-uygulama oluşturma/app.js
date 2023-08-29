const app = Vue.createApp({
  template: `
  <h2>Başlik: {{baslik}}</h2>
  <h3>İçerik: {{icerik}} </h3>
  <p>uygulama sayisi: {{appAdet}} </p> 
  `,
  data() {
    return {
      baslik: "vue 3 ile web --- sayfalari",
      icerik: "composition api-router-firebase",
      appAdet: 5,
    };
  },
});

app.mount("#uygulama");
