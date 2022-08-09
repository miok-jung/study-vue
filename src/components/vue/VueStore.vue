<template>
  <h2>store</h2>
  <p>{{ counter }}</p>
  <button @click="onclick">Increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
const onclick = () => {
  counter.increment();
};
</script>

<style scoped></style>
