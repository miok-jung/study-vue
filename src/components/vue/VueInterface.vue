<template>
  <h2>변수와 인터페이스</h2>
  <div>
    <button @click="onClick()">Add Todo</button>
    <div :key="i" v-for="(test, i) in todos">
      <p>{{ test.id }}</p>
      <p>{{ test.content }}</p>
      <p>{{ test.completed }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
const todos = ref<Todo[]>([]);
function addTodo(todo: Todo) {
  todos.value.push(todo);
}
const newTodo: Todo = { id: 0, content: "typescript", completed: false };
addTodo(newTodo);
const count = ref<number>(0);
const onClick = () => {
  count.value += 1;
  const clickTodo: Todo = {
    id: count.value,
    content: "javascript",
    completed: true,
  };
  addTodo(clickTodo);
};
</script>

<style lang="scss" scoped></style>
