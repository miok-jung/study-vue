<template>
  <v-app>
    <VuetifyNav />
    <v-main>
      <VuetifyCarouselsVue />
      <VuetifyCard />
      <VuetifyForm />
      <VuetifyFile />
      <VuetifyFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Components
import VuetifyNav from "../components/vuetify/VuetifyNav.vue";
import VuetifyCarouselsVue from "../components/vuetify/VuetifyCarousels.vue";
import VuetifyCard from "../components/vuetify/VuetifyCard.vue";
import VuetifyForm from "../components/vuetify/VuetifyForm.vue";
import VuetifyFile from "../components/vuetify/VuetifyFile.vue";
import VuetifyFooter from "../components/vuetify/VuetifyFooter.vue";
</script>
<style lang="scss" scoped></style>
