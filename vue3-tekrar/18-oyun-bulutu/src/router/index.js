import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hakkimizda from '../views/Hakkimizda.vue'
import Ekle from '../views/Ekle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda
  },
  {
    path: '/ekle',
    name: 'Ekle',
    component: Ekle
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
