<template>
  <h2>Todo Home view</h2>
  <button class="btn_Add">Add</button>
  <TodoListVue />
</template>
<script setup lang="ts">
import TodoListVue from "@/components/TodoList.vue";
</script>
<style scoped lang="scss">
h2 {
  margin: 1.5rem 0;
}
.btn_Add {
  padding: 0.5rem 1rem;
  background-color: $color4;
  color: $color1;
  &:hover {
    background-color: $color1;
    color: $color4;
  }
}
</style>
