<template>
  <v-app>
    <MainNavigation />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
      <p>This is Footer</p>
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
import MainNavigation from "./components/MainNavigation.vue";
</script>
