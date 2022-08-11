<template>
  <div class="wrap">
    <h2>v-chip</h2>
    <v-chip
      v-if="chip"
      closable
      color="red"
      variant="plain"
      prepend-icon="mdi-account-circle"
      append-icon="mdi-star"
      >여기는 v-chip 공간입니다.</v-chip
    >
    <!-- 1 chip List group -->
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-sheet color="blue-lighten-5">
          <v-chip-group active-class="primary--text" column>
            <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
      <!-- 2 chip List group -->
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <p>클릭시 체크표시로 확인이 가능하다.</p>
        <v-chip-group active-class="primary--text" column multiple>
          <v-chip v-for="tag in tags" filter :key="tag">{{ tag }}</v-chip>
        </v-chip-group>
      </v-col>
      <!-- 3 chip List group -->
      <v-card class="mx-auto" width="50%">
        <v-card-title
          >Shirt Blouse<v-spacer></v-spacer> <span>$44.50</span></v-card-title
        >
        <v-card-text
          >Our blouses are available in 8 colors. You can custom order a
          built-in arch support for any of the models.</v-card-text
        >
        <v-divider class="mx-4"></v-divider>
        <v-chip-group class="mx-4">
          <v-chip v-for="(size, i) in sizes" :key="i" filter>{{ size }}</v-chip>
        </v-chip-group>
      </v-card>
    </v-row>
  </div>
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
const sizes: Array<string> = ["s", "m", "l", "lx", "xxl", "xxxl"];
</script>

<style lang="scss" scoped></style>
