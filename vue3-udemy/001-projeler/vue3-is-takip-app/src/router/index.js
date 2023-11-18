import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import İsOlustur from "@/views/isler/İsOlustur.vue";
import İsDetay from "@/views/isler/İsDetay.vue";

import { authRef } from "@/firebase/config";

const authGiris = (to, from, next) => {
  let kullanici = authRef.currentUser;

  if (!kullanici) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGiris,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/is-olustur",
    name: "İsOlustur",
    component: İsOlustur,
    beforeEnter: authGiris,
  },
  {
    path: "/isler/:id",
    name: "İsDetay",
    component: İsDetay,
    beforeEnter: authGiris,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
