import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        icon: "home-outline",
        iconActive: "home",
      },
    },
    {
      path: "/timetable",
      name: "timetable",
      component: () => import("../views/TimetableView.vue"),
      meta: {
        icon: "calendar-outline",
        iconActive: "calendar",
      },
    },
    {
      path: "/messages",
      name: "messages",
      component: () => import("../views/MessagesView.vue"),
      meta: {
        icon: "inbox-outline",
        iconActive: "inbox",
      },
    },
  ],
})

export default router
