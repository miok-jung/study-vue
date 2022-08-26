<template>
  <h2>Todo Home view</h2>
  <p>{{ todoLists }}</p>
  <TodoListVue :lists="todoLists.todos" />
</template>

<script setup lang="ts">
import TodoListVue from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todo";
import { reactive } from "vue";

const todoStore = useTodoStore();
const todoLists = reactive(todoStore);
</script>

<style scoped></style>
