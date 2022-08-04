<template>
  <div class="d-flex justify-center align-center">
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      label="primary checkBox"
      color="primary"
      value="primary"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox3"
      label="red checkBox"
      color="#ff0000"
      value="red"
    ></v-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let checkbox1 = ref<boolean>(false);
let checkbox2 = ref<boolean>(false);
let checkbox3 = ref<boolean>(false);
</script>

<style scoped></style>
