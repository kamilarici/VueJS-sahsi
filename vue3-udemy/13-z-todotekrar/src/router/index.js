import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YapilacakEkle from '../views/YapilacakEkle.vue'
import YapilacakGuncelle from '../views/YapilacakGuncelle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapilacak-ekle',
    name: 'yapilacakEkle',
    component: YapilacakEkle
  },
  {
    path: '/yapilacak-guncelle/:id',
    name: 'yapilacakGuncelle',
    component: YapilacakGuncelle,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
