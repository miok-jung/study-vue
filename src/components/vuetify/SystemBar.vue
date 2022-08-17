<template>
  <div class="wrap">
    <h2>SystemBar</h2>
  </div>
  <v-system-bar color="indigo darken-2" window>
    <v-icon icon="mdi-wifi-strength-3"></v-icon>
    <v-icon icon="mdi-signal-cellular-outline" class="ml-2"></v-icon>
    <v-icon icon="mdi-battery" class="ml-2"></v-icon>
    <!-- <span class="ml-2">{{ now }}</span> -->
    <span class="ml-2">12:30</span>
  </v-system-bar>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const now = ref<number>(Date.now());

// setInterval(() => {
//   const getHourse
// }, 1000);
</script>

<style scoped></style>
