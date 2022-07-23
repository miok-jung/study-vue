import { createWebHistory, createRouter } from "vue-router";
import { publicPath } from "../vue.config";
import RealEstateHome from "./components/realEstate/Home.vue";

const routes = [
  {
    path: "/realestate",
    component: RealEstateHome,
    base: publicPath,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
