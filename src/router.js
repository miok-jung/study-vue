import { createWebHistory, createRouter } from "vue-router";
import BudongsanMain from "./components/budongsan/Home.vue";
const routes = [
  {
    path: "/study-vue",
    component: BudongsanMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
