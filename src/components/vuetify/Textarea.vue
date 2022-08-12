<template>
  <div class="wrap">
    <h2>Textarea</h2>
    <p>대량의 텍스트를 수집할 수 있는 영역이다</p>
  </div>
  <div class="wrap">
    <h3>label</h3>
    <p>label을 통해 해당 영역의 어떤 값을 넣을지 안내해준다.</p>
    <v-textarea label="Default style"></v-textarea>
  </div>
  <div class="wrap">
    <h3>color</h3>
    <p>색상을 넣어 칼라와 하단의 라인색상의 변화를 준다.</p>
    <v-textarea label="TextArea2" color="cyan"></v-textarea>
  </div>
  <div class="wrap">
    <h3>Counter</h3>
    <p>counter을 통해 글자수를 계산할 수 있다.</p>
    <v-textarea counter label="Counter" v-model="countValue"></v-textarea>
  </div>
  <div class="wrap">
    <h3>Icon</h3>
    <p>
      아이콘은 앞(prepend-icon)과 뒤(append-icon)으로 표현할 수 있다. 또한
      textarea내부 앞(prepend-inner-icon)과 뒤(append-inner-icon)에도 넣을 수
      있다.
    </p>
    <v-textarea
      label="Add Icon"
      prepend-icon="mdi-bag-personal-tag"
      prepend-inner-icon="mdi-comment"
      append-icon="mdi-arm-flex-outline"
      append-inner-icon="mdi-battery-check-outline"
    ></v-textarea>
  </div>
  <div class="wrap">
    <h3>No Resize</h3>
    <p>textarea의 크기 조절을 막을 수 있다.</p>
    <v-textarea label="NO-Resize" no-resize></v-textarea>
  </div>
  <div class="wrap">
    <h3>Rows</h3>
    <p>rows를 통해 크기를 조절할 수 있다.</p>
    <v-textarea label="Row1" rows="5"></v-textarea>
  </div>

  <!-- TODO Signup form 에서 비밀번호 인증관련 공부 필요 선공부는 reactive, ref, watch -->
  <!-- LINK https://next.vuetifyjs.com/en/components/textareas/ -->
  <div class="wrap">
    <h3></h3>
    <p></p>
    <v-textarea></v-textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const countValue = ref<string>("");
</script>

<style lang="scss" scoped>
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
