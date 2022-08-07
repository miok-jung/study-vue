<template>
  <h1>Parent Vue</h1>
  <label for="parent-input">Parent Vue</label>
  <input
    id="parent-input"
    type="text"
    placeholder="부모 인풋"
    v-model="parentModel"
  />
  <p>Parent Model : {{ parentModel }}</p>
  <p>
    v-model은 한국어, 일본어, 중국어 등 일부 언어에 반응이 느린 이유로 좋은
    방식이 아니다.
  </p>
  <label for="parent-input2">Parent2 Vue</label>
  <input type="text" />
  <VueEmit />
</template>

<script setup lang="ts">
import VueEmit from "@/components/vue/VueEmit.vue";
import { ref } from "vue";
const parentModel = ref("");
</script>

<style lang="scss" scoped>
input {
  padding-left: 0.5rem;
  height: 2rem;
  border: 1px solid $color1;
}
</style>
