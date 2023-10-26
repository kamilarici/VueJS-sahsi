const app = Vue.createApp({
  //? if yapısı kurmak için v-if kullanılır ve true tanımladığımız için div oluşur.false ise div oluşmaz
  //? v-show da ise false olursa div oluşur ama display none olur
  // <span v-if="!bGoster">goster</span> //?else yerine bu şekilde de yapabiliriz
  template: `

  <div v-if='true'>bilgiler</div>
  <div v-if='bGoster'>bilgiler goster</div>
  <div v-show='false'>bilgiler</div>
  <div v-show='bGoster'>bilgiler goster show</div>
  <button @click="toggle">
  
  <span v-if="bGoster">gizle</span>
 
  <span v-else>goster</span>
  </button>
  `,
  data() {
    return {
      bGoster: false,
    };
  },
  methods: {
    toggle() {
      this.bGoster = !this.bGoster;
    },
  },
});

app.mount("#uygulama");
