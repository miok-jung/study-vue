import { createRouter, createWebHistory } from "vue-router";
import SwitchMenu from "@/components/vuetify/SwitchMenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/vue3",
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
        {
          path: "transition",
          component: () => import("@/views/vue/VueTransition.vue"),
        },
      ],
    },
    {
      path: "/vuetify",
      name: "vuetify",
      component: () => import("@/views/vuetify/VuetifyLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/vuetify/VuetifyMain.vue"),
          name: "vuetify main",
        },
        {
          path: "slide",
          component: () => import("@/views/vuetify/VuetifySlide.vue"),
          name: "vuetifh slide",
        },
        {
          path: "switch",
          component: SwitchMenu,
          name: "vuetify Switch & menu",
        },
        {
          path: "chip",
          component: () => import("@/views/vuetify/VuetifyChip.vue"),
          name: "vuetify chip",
        },
        {
          path: "textarea",
          component: () => import("@/views/vuetify/VuetifyTextarea.vue"),
          name: "vuetify Textarea",
        },
        {
          path: "textfield",
          component: () => import("@/views/vuetify/TextField.vue"),
          name: "vuetify Textfield",
        },
        {
          path: "grid",
          component: () => import("@/views/vuetify/GridDialog.vue"),
          name: "vuetify Grid",
        },
        {
          path: "item",
          component: () => import("@/views/vuetify/ItemOverlay.vue"),
          name: "vuetify Item",
        },
        {
          path: "window",
          component: () => import("@/views/vuetify/VuetifyWindow.vue"),
          name: "vuetify window",
        },
        {
          path: "img",
          component: () => import("@/views/vuetify/VuetifyImg.vue"),
          name: "vuetify Image",
        },
        {
          path: "rating",
          component: () => import("@/views/vuetify/VuetifyRating.vue"),
          name: "vuetify rating",
        },
        {
          path: "system",
          component: () => import("@/views/vuetify/SystemBar.vue"),
          name: "vuetify system bar",
        },
      ],
    },
  ],
});

export default router;
