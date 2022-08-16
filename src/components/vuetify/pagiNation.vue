<template>
  <div class="wrap">
    <h2>Pagination</h2>
    <p>기본 Pagination</p>
    <div class="text-center">
      <v-pagination v-model="pageNumber1" :length="6"></v-pagination>
      <v-pagination
        v-model="pageNumber2"
        :length="7"
        rounded="0"
      ></v-pagination>
      <v-pagination
        v-model="pageNumber3"
        :length="5"
        rounded="circle"
      ></v-pagination>
      <v-pagination
        v-model="pageNumber4"
        :length="11"
        rounded="circle"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
      <v-container class="max-width">
        <v-pagination
          class="my-4"
          v-model="pageNumber5"
          :length="30"
          :total-visible="10"
        ></v-pagination>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pageNumber1 = ref<number>(1);
const pageNumber2 = ref<number>(1);
const pageNumber3 = ref<number>(1);
const pageNumber4 = ref<number>(1);
const pageNumber5 = ref<number>(1);
</script>

<style scoped></style>
