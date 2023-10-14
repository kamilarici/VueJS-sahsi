import { createStore } from 'vuex'
import belgeleriGetir from '@/composables/belgelerGetir'

const {error,documents}=belgeleriGetir('oyunlar')

export default createStore({
  state: {
    oyunlar:documents
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
