import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personel from '../views/Personel.vue'
import PersonelDetay from '../views/PersonelDetay.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-me',
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
    path:'/personel/:id',
    name:'personelDetay',
    component:PersonelDetay,
    props:true
  },
  {
    path:'/personeller',
    redirect:'/personel'
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
