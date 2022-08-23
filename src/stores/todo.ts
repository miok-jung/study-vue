import { defineStore } from "pinia";

interface State {
  todos: todoType[];
}
export const useTodoStore = defineStore("pinia", {
  state: (): State => ({
    todos: [
      { id: 0, title: "제목0", content: "내용0" },
      { id: 1, title: "제목1", content: "내용1" },
    ],
  }),
  getters: {},
  actions: {
    addTodoItem(item: todoType) {
      this.todos.push(item);
    },
    removeTodoItem(id: number) {
      this.todos.splice(id, 1);
    },
  },
});
export default interface todoType {
  id: number;
  title: string;
  content: string;
}
