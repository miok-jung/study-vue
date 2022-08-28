<template>
  <div class="wrap">
    <h3>Todo List</h3>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>Content</th>
          <th>View</th>
          <th>Modify</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, i) in todos.todos" :key="i">
          <td>{{ list.id }}</td>
          <td>{{ list.title }}</td>
          <td>{{ list.content }}</td>
          <td>
            <button><v-icon>mdi-note-multiple-outline</v-icon></button>
          </td>
          <td>
            <button>
              <v-icon>mdi-pencil-outline</v-icon>
            </button>
          </td>
          <td>
            <button @click="handleRemoveItem">
              <v-icon>mdi-delete</v-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";

const todos = useTodoStore();
const handleRemoveItem = (e: Event) => {
  e.preventDefault();
  const removeId: string = (e.target as HTMLButtonElement).value;
  todos.removeTodoItem(parseInt(removeId));
};
</script>

<style scoped lang="scss">
// TODO LIST CSS 만들기
.wrap {
  margin: 0 auto;
  width: 70vw;
  text-align: center;
  h3 {
    margin: 2rem 0;
  }
  table {
    margin: 0 auto;
    width: 100%;
    border-spacing: 0;
    thead {
      line-height: 3rem;
      background-color: #f1f2f3;
      tr {
        th {
          border-right: 1px solid grey;
          &:first-child,
          &:nth-child(4),
          &:nth-child(5) {
            width: 5rem;
          }
          &:last-child {
            width: 5rem;
            border-right: 0;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          line-height: 2.5rem;
          border-right: 1px solid grey;
          border-top: 1px solid grey;
          &:last-child {
            border-right: 0;
          }
        }
      }
    }
  }
}
</style>
