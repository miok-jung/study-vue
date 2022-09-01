import { createRouter, createWebHistory } from "vue-router";

// export default router;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/TodoHome.vue"),
    },
  ],
});
export default router;
