// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components"; // TODO 이건 무엇인가?
import * as directives from "vuetify/directives"; // TODO 이건 무엇인가?

export default createVuetify(
  components,
  directives
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
);
