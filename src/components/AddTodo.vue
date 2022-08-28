<template>
  <form>
    <label for="title">Title</label>
    <input id="title" type="text" placeholder="제목을 입력해주세요." />
    <label>Content</label>
    <textarea placeholder="내용을 입력해주세요."></textarea>
    <button class="btn_add">추가하기</button>
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss">
form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  label {
    margin: 0.5rem 0;
    width: 20%;
    line-height: 2.5rem;
  }
  input,
  textarea {
    border: 1px solid grey;
    width: 80%;
    line-height: 2.5rem;
  }
}
</style>
