import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personel from "../views/Personel.vue"
import Deneme from "../views/Deneme.vue"
import PersonelDetay from "../views/PersonelDetay.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/personel',
    name:'personel',
    component:Personel
  },
  {
    path:'/deneme',
    name:'deneme',
    component:Deneme

  },
  {
    path:'/personel/:id',
    name:'PersonelDetay',
    component:PersonelDetay,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
