<template>
  <h2>Logged in as Eduardo</h2>
  <form>
    <label for="title">title</label>
    <input id="title" type="text" @input="titleEvent" :value="titleValue" />
    <label for="content">content</label>
    <input
      id="content"
      type="text"
      @input="contentEvent"
      :value="contentValue"
    />
    <button @click="handleAddItem">Add</button>
  </form>
  <hr />
  <div v-for="(list, i) in renderTodoList" :key="i">
    <p>Title: {{ list.title }}</p>
    <p>Content: {{ list.content }}</p>
    <button @click="handleRemoveItem" :value="i">X</button>
  </div>
  <div>{{ renderTodoList }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";
import type todoType from "@/stores/todo";

const todos = useTodoStore();
// generic 데이터 타입을 일반화
const renderTodoList = ref<Array[todoType]>(todos.todos);
const counter = ref<number>(renderTodoList.value.length);

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
      id: counter.value,
      title: titleValue.value,
      content: contentValue.value,
    });
    titleValue.value = "";
    contentValue.value = "";
    counter.value++;
  }
};

const handleRemoveItem = (e: Event) => {
  e.preventDefault();
  const removeId: string = (e.target as HTMLButtonElement).value;
  todos.removeTodoItem(parseInt(removeId));
};
</script>
<!-- TODO CSS작업하기  -->
<style scoped lang="scss">
* {
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
  label {
    margin-right: 0.5rem;
  }
  input {
    display: block;
    border: 1px solid grey;
    height: 2rem;
  }
}
</style>
