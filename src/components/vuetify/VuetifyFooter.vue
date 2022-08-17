<template>
  <v-row v-resize="onResize">
    <v-footer>
      <v-card elevation="0" rounded="0" width="100%" class="text-center">
        <v-card-text>
          <v-btn
            class="mx-4"
            icon="mdi-home"
            variant="plain"
            @click="overlay = !overlay"
          ></v-btn>
          <v-btn class="mx-4" icon="mdi-email" variant="plain"></v-btn>
          <v-btn class="mx-4" icon="mdi-calendar" variant="plain"></v-btn>
        </v-card-text>

        <v-divider></v-divider>
        <v-overlay
          class="d-flex justify-center align-center text-white"
          v-model="overlay"
        >
          <v-btn color="success" @click="overlay = false"
            >클릭하면 닫기가 됩니다.</v-btn
          ></v-overlay
        >
        <v-card-text class="text-white">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          <p>{{ windowSizeX }}, {{ windowSizeY }}</p>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";

const overlay = ref<boolean>(false);
const windowSizeX = ref<number>(0);
const windowSizeY = ref<number>(0);
const onResize = () => {
  windowSizeX.value = window.innerWidth;
  windowSizeY.value = window.innerHeight;
};
</script>

<style scoped></style>
