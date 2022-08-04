<template>
  <!-- :show-array="true"가 기본값 -->
  <v-carousel show-arrows="hover">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <br />
  <v-divider></v-divider>
  <br />
  <v-chip
    v-if="chip"
    closable
    color="red"
    variant="outlined"
    prepend-icon="mdi-account-circle"
    append-icon="mdi-star"
    >여기는 v-chip 공간입니다.</v-chip
  >
</template>

<script setup lang="ts">
const colors: Array<string> = [
  "primary",
  "secondary",
  "yellow darken-2",
  "red",
  "orange",
];
let chip: boolean = true;
</script>

<style scoped></style>
