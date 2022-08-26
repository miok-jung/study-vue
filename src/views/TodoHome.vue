<template>
  <h2>Todo Home view</h2>
  <TodoUpdateVue />
  <TodoListVue :lists="todoLists.todos" />
</template>

<script setup lang="ts">
import TodoListVue from "@/components/TodoList.vue";
import TodoUpdateVue from "@/components/TodoUpdate.vue";
import { useTodoStore } from "@/stores/todo";
import { reactive } from "vue";

const todoStore = useTodoStore();
const todoLists = reactive(todoStore);
</script>
