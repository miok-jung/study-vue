<template>
  <h3>Todo List</h3>
  <table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Content</th>
        <th>Modify / Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, i) in props.lists" :key="i">
        <td>{{ list.id }}</td>
        <td>{{ list.title }}</td>
        <td>{{ list.content }}</td>
        <td>
          <button>Modify</button>
          <button @click="handleRemoveItem">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";

const props = defineProps<{
  // FIXME 해결법 찾기 아래 주석이 정말 좋은 해석법인지? 지우면 해당 에러내역 확인 가능
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lists: Array<any>;
}>();

const todos = useTodoStore();
const handleRemoveItem = (e: Event) => {
  e.preventDefault();
  const removeId: string = (e.target as HTMLButtonElement).value;
  todos.removeTodoItem(parseInt(removeId));
};
</script>

<style scoped lang="scss">
// TODO LIST CSS 만들기
</style>
