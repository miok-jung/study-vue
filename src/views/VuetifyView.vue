<template>
  <v-app>
    <MainNav />
    <MainContainer />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import MainNav from "../components/MainNav.vue";
import MainContainer from "../components/MainContainer.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    MainNav,
    MainContainer,
  },
});
</script>
