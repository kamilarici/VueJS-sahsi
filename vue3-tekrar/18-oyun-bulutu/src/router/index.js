import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hakkimizda from '../views/Hakkimizda.vue'
import Ekle from '../views/Ekle.vue'
import Oyunlar from '../views/Oyunlar.vue'

import {authRef} from '../firebase/config'

const authKontrol=(to,from,next)=>{
  let user =authRef.currentUser
  if(!user){
    next({name:'Home'})
  }else{
    next()
  }
}

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
    component: Ekle,
    beforeEnter:authKontrol
  },
  {
    path: '/oyunlar',
    name: 'Oyunlar',
    component: Oyunlar,
    beforeEnter:authKontrol
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
