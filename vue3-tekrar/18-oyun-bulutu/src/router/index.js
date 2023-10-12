import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hakkimizda from '../views/Hakkimizda.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
