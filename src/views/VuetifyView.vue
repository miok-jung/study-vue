<template>
  <v-app>
    <VuetifyNav />
    <MainContainer />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import VuetifyNav from "../components/VuetifyNav.vue";
import MainContainer from "../components/MainContainer.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    VuetifyNav,
    MainContainer,
  },
});
</script>
