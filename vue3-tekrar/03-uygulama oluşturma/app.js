const app = Vue.createApp({
  template: `
  <h2>Başlik: {{baslik}}</h2>
  <h3>İçerik</h3>
  <p>uygulama sayisi</p> 
  `,
  data() {
    return {
      baslik: "vue 3 ile web --- sayfalari",
    };
  },
});

app.mount("#uygulama");
