import { createRouter, createWebHistory } from "vue-router";
import Study1 from "../views/vuetify/Study1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/vuetify",
      name: "vuetify",
      component: () => import("../views/vuetify/index.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/vuetify/Main.vue"),
          name: "vuetify main",
        },
        {
          path: "study1",
          component: Study1,
          name: "study1",
        },
      ],
    },
  ],
});

export default router;
