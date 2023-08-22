const app = Vue.createApp({
  //? html içine yazılan h2 taglerini eziyor
  //   template: "<h2>bu ilk uygulamamiz</h2>",
  template: `
  <div v-if="showInfo">deneme yazisi</div>
  
  <div v-if="!showInfo">deneme yazisi 2</div>
 
  <div v-show="showInfo">deneme yazisi 3</div>

  <button @click="toggle" >

  <span v-if="!showInfo">göster</span>
  <span v-else>gizle</span>
  
  </button>
  
 `,
  data() {
    return {
      showInfo: true,
    };
  },
  methods: {
    toggle() {
      this.showInfo = !this.showInfo;
    },
  },
});

app.mount("#app");
// ? v -if doma hiç yazılmıyor
// ? v-show doma yazılır ama display none olur görünmez
