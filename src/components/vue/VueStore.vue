<template>
  <h2>store</h2>
  <p>$id : {{ counter.$id }}</p>
  <p>$state : {{ counter.$state }}</p>
  <p>counter : {{ counter.counter }}</p>
  <p>length : {{ counter.length }}</p>
  <p>doubleCount : {{ counter.doubleCount }}</p>
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
