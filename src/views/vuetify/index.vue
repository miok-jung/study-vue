<template>
  <v-app>
    <VuetifyNav />
    <v-main>
      <router-view></router-view>
      <VuetifyFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Components
import VuetifyNav from "../../components/vuetify/VuetifyNav.vue";
import VuetifyFooter from "../../components/vuetify/VuetifyFooter.vue";
</script>
