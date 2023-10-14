import { createStore } from 'vuex'
import belgeleriGetir from '@/composables/belgelerGetir'
import belgeIslem from '../composables/belgeIslem'

const {error,documents}=belgeleriGetir('oyunlar')
const {hata,ekle,sil}=belgeIslem('oyunlar')

export default createStore({
  state: {
    oyunlar:documents
  },
  getters: {
  },
  mutations: {
    ekleMutation(state,oyun){
      let oyunN={
        oyunAd:oyun

      }
      ekle(oyunN)
    },
    silMutation(state,id){
      sil(id)
    }

  },
  actions: {

    oyunEkleAction(context,oyun){
      context.commit('ekleMutation',oyun)
    },
    oyunSilAction(context,id){
      context.commit('silMutation',id)
    }
  },
  modules: {
  }
})
