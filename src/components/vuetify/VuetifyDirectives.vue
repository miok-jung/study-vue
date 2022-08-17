<template>
  <div class="wrap">
    <h2>Directive</h2>
    <v-card
      class="mx-auto"
      width="256"
      height="256"
      rounded="xl"
      v-click-outside="onClickOutside"
      @click="active = true"
    >
      <div class="d-flex justify-center align-center fill-height">
        {{ active ? "Click Outside" : "Click Me" }}
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref<boolean>(false);
const onClickOutside = () => {
  active.value = false;
};
</script>

<style scoped></style>
