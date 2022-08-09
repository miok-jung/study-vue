import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/vue",
      name: "vue home",
      component: () => import("@/views/vue/VueLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/vue/VueMain.vue"),
          name: "vue main",
        },
        {
          path: "props",
          component: () => import("@/views/vue/VueProps.vue"),
          name: "vue prps",
        },
        {
          path: "emit",
          component: () => import("@/views/vue/VueEmit.vue"),
          name: "vue emit",
        },
        {
          path: "interface",
          component: () => import("@/views/vue/VueInterface.vue"),
          name: "vue interface",
        },
        {
          path: "style",
          component: () => import("@/views/vue/VueStyle.vue"),
          name: "vue style",
        },
        {
          path: "store",
          component: () => import("@/views/vue/VueStore.vue"),
          name: "vue store",
        },
      ],
    },
    {
      path: "/vuetify",
      name: "vuetify",
      component: () => import("@/views/vuetify/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/vuetify/Main.vue"),
          name: "vuetify main",
        },
        {
          path: "slide",
          component: () => import("@/views/vuetify/Slide.vue"),
          name: "vuetifh slide",
        },
        {
          path: "switch",
          component: () => import("@/views/vuetify/Switch.vue"),
          name: "vuetify Switch",
        },
        {
          path: "textarea",
          component: () => import("@/views/vuetify/Textarea.vue"),
          name: "vuetify Textarea",
        },
        {
          path: "textfield",
          component: () => import("@/views/vuetify/TextField.vue"),
          name: "vuetify Textfield",
        },
      ],
    },
  ],
});

export default router;
