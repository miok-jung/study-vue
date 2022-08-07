<template>
  <h2>Children Input</h2>
  <label for="children-input">Children Input</label>
  <input
    id="children-input"
    type="text"
    placeholder="자식 인풋"
    :value="props.text"
  />
  <p>parentModel2 props: {{ props.text }}</p>
  <p>:value를 사용하면 부모의 값을 그대로 input에 넣을 수 있다.</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<style scoped lang="scss">
input {
  padding-left: 0.5rem;
  height: 2rem;
  border: 1px solid $color1;
}
</style>
