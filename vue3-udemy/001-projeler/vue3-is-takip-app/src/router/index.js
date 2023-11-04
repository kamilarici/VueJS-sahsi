import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import İsOlustur from '@/views/isler/İsOlustur.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup

  },
  {
    path: '/is-olustur',
    name: 'İsOlustur',
    component: İsOlustur

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
