<template>
  <h2>Logged in as Eduardo</h2>
  <form>
    <label for="title">title</label>
    <input id="title" type="text" @input="titleEvent" />
    <label for="content">content</label>
    <input id="content" type="text" @input="contentEvent" />
    <button @click="handleAddItem">Add</button>
  </form>
  <hr />
  <div v-for="(list, i) in todos.todos" :key="i">
    <p>Title: {{ list.title }}</p>
    <p>Content: {{ list.content }}</p>
    <button>X</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const todos = useTodoStore();

const titleValue = ref<string>("");
const contentValue = ref<string>("");
const titleEvent = (e: Event) => {
  titleValue.value = (e.target as HTMLInputElement).value;
};
const contentEvent = (e: Event) => {
  contentValue.value = (e.target as HTMLInputElement).value;
};

const handleAddItem = (e: Event) => {
  e.preventDefault();
  if (!titleEvent || !contentEvent) {
    window.confirm("Input title OR Content");
  } else {
    todos.addTodoItem({
      id: todos.todos.length,
      title: titleValue.value,
      content: contentValue.value,
    });
  }
};
// 상태 변경
// todos.$patch({
//   id: 0,
//   title: "222",
//   content: "sdlfijfeij eijfo",
// });
</script>
<!-- TODO CSS작업하기  -->
<style scoped lang="scss">
h2 {
  margin-bottom: 2rem;
}

input {
  border: 1px solid grey;
  height: 2rem;
}
</style>
