import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "ders çaliş" },
      { id: 2, todo: "film izle" },
      { id: 3, todo: "kitap oku" },
      { id: 4, todo: "spor yap" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
