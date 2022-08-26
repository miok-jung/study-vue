<template>
  <h3>Todo Update</h3>
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
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";

const titleValue = ref<string>("");
const contentValue = ref<string>("");

const todos = useTodoStore();
// const renderTodoList = ref<Array[todoType]>(todos.todos);
const counter = ref<number>(todos.todos.values.length);

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
</script>

<style scoped lang="scss">
// TODO CSS 입히기
* {
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
