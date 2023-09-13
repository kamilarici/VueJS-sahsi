<template>
  <div>
    <form>
      <label for="">email</label>
      <br />
      <input type="email" v-model="email" />
      <!-- {{ email }} -->
      <br />
      <label for="">yetki</label>
      <br />
      <select v-model="yetki">
        <option>editor</option>
        <option>admin</option>
      </select>
      <!-- {{ yetki }} -->
      <br />
      <br />
      <input type="checkbox" v-model="anlasma" />

      <label for="">kabul ediyorum</label>
      <hr />
      <p>anlaşma kabulu: {{ anlasma ? "ediyorum" : "etmiyorum" }}</p>
      <hr />
      <div>
        <input type="checkbox" value="yönetim" v-model="istekler" />
        <label>yönetim</label>
      </div>
      <div>
        <input type="checkbox" value="erişim" v-model="istekler" />
        <label>erişim</label>
      </div>
      <div>
        <input type="checkbox" value="silme" v-model="istekler" />
        <label>silme</label>
      </div>
      <p>istekler:{{ istekler }}</p>
    </form>
    //? *********
    <form @submit.prevent="handleSubmit">
      <label>hobiler</label>
      <input type="text" v-model="aktifHobi" @keyup="hobiEkle" />
      <div v-for="hobi in hobiler" :key="hobi">
        <span @click="hobiSil(hobi)"> {{ hobi }}</span>
      </div>
      <br />
      <!-- <button @click.prevent="handleSubmit">submit</button> -->
      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      yetki: "editor",
      anlasma: false,
      istekler: [],
      hobiler: [],
      aktifHobi: "",
    };
  },
  methods: {
    hobiEkle($event) {
      console.log($event);
      if ($event.key == "," && this.aktifHobi) {
        if (!this.hobiler.includes(this.aktifHobi)) {
          this.hobiler.push(this.aktifHobi);
        }
        this.aktifHobi = "";
      }
    },
    hobiSil(hobi) {
      this.hobiler = this.hobiler.filter((item) => {
        return hobi !== item;
      });
    },
    handleSubmit() {
      console.log(this.hobiler);
    },
  },
};
</script>

<style></style>
