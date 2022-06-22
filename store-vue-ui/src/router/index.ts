import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {title:"Home"},
  },
  {
    path:"/dashboard",
    name:"dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/home",
        name: "homeview",
        component: () => import("../views/dashboards/Home.vue")
      },
      {
        path: "/products",
        name: "products",
        component: () => import("../views/dashboards/Products.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
