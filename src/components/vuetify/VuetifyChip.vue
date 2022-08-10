<template>
  <v-chip
    v-if="chip"
    closable
    color="red"
    variant="outlined"
    prepend-icon="mdi-account-circle"
    append-icon="mdi-star"
    >여기는 v-chip 공간입니다.</v-chip
  >
  <v-col cols="12" sm="7" md="6" lg="5">
    <v-sheet color="blue-lighten-5">
      <v-chip-group active-class="primary--text" column>
        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
      </v-chip-group>
    </v-sheet>
  </v-col>
  <v-chip-group active-class="primary--text" column multiple>
    <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
  </v-chip-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const chip = ref<boolean>(true);
const tags: Array<string> = [
  "Work",
  "Home Improvement",
  "Vacation",
  "Food",
  "Drawers",
  "Shopping",
  "Art",
  "Tech",
  "Creative Writing",
];
</script>

<style lang="scss" scoped></style>
