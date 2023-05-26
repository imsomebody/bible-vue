import { createRouter, createWebHistory } from "vue-router"

import search from "./search"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    ...search,
  ],
})

export default router
