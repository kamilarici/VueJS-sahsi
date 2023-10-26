import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/students",
    name: "students",

    component: () => import("../views/Students.vue"),
  },
  {
    path: "/students/:id",
    name: "studentInfo",

    component: () => import("../views/StudentInfo.vue"),
    props: true,
  },
  {
    // ? path yanlış girilirse de yani s takısı olmaz ise de doğru path a yolla demek için yazıyoruz.
    path: "/student",
    redirect: "/students",
  },
  {
    // ? olmayan yada yanlış girilen path lar için oluşturulan hata sayfası için yol ***
    path: "/:catchAll(.*)",
    name: "notFound",

    // lazy loading
    component: () => import("../views/NotFound.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
