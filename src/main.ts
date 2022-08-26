import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia, setMapStoreSuffix } from "pinia";

loadFonts();
setMapStoreSuffix(""); // 접미사를 완전히 제거?
const pinia = createPinia();
declare module "pinia" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MapStoresCustomization {
    // 위와 같은 값으로 설정
  }
}

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
