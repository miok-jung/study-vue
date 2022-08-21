import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/MainContainer.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/DashboardView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/ProfileView.vue"),
        },
        {
          path: "table",
          name: "table",
          component: () => import("@/views/TableView.vue"),
        },
        {
          path: "translate",
          name: "translate",
          component: () => import("@/views/TypoView.vue"),
        },
        {
          path: "icon",
          name: "icon",
          component: () => import("@/views/IconView.vue"),
        },
        {
          path: "map",
          name: "map",
          component: () => import("@/views/MapView.vue"),
        },
        {
          path: "notifications",
          name: "notifications",
          component: () => import("@/views/NotificationView.vue"),
        },
      ],
    },
  ],
});

export default router;
