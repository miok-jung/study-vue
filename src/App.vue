<template>
  <v-app>
    <MainNavigation />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <p>This is Main</p>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <p>This is container</p>
        <!-- If using vue-router -->
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
