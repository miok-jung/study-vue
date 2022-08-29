<template>
  <h2>Todo Home view</h2>
  <button class="btn_toggle" @click="toggleAdd = !toggleAdd">Add</button>
  <AddTodo v-if="toggleAdd == true" />
  <TodoListVue />
</template>

<script setup lang="ts">
import AddTodo from "../components/AddTodo.vue";
import TodoListVue from "@/components/TodoList.vue";
import { ref } from "vue";
const toggleAdd = ref<boolean>(false);
</script>

<style scoped lang="scss">
h2 {
  margin: 1.5rem 0;
}
.btn_toggle {
  padding: 0.5rem 1rem;
  background-color: $color4;
  color: $color1;
  &:hover {
    background-color: $color1;
    color: $color4;
  }
}
</style>
