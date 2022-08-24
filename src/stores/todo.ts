// import { defineStore } from "pinia";

// Options API
// export const useTodoStore = defineStore("pinia", {
//   state: () => ({
//     todos: [
//       { id: 0, title: "제목0", content: "내용0" },
//       { id: 1, title: "제목1", content: "내용1" },
//     ] as todoType[],
//   }),
//   getters: {},
//   actions: {
//     addTodoItem(item: todoType) {
//       this.todos.push(item);
//     },
//     removeTodoItem(id: number) {
//       this.todos.splice(id, 1);
//     },
//   },
// });

import { defineStore } from "pinia";
import { ref } from "vue";
// Composition API
export const useTodoStore = defineStore("pinia", () => {
  const todos = ref<todoType[]>([
    { id: 0, title: "제목0", content: "내용0" },
    { id: 1, title: "제목1", content: "내용1" },
  ]);
  const addTodoItem = (item: todoType) => {
    todos.value.push(item);
  };
  const removeTodoItem = (id: number) => {
    todos.value.splice(id, 1);
  };
  return {
    todos,
    addTodoItem,
    removeTodoItem,
  };
});
export default interface todoType {
  id: number;
  title: string;
  content: string;
}
