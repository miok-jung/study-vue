<template>
  <h2>Vue Emit Children</h2>
  <p>props: {{ props.emitV }}</p>
  <label for="emitC">Emit Child</label>
  <input type="text" :value="text" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  emitV: string;
}>();
const text = ref<string>(props.emitV);
</script>

<style scoped></style>
