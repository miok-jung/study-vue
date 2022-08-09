<template>
  <h2>Vue Emit Children</h2>
  <p>props: {{ props.emitV }}</p>
  <label for="emitC">Emit Child</label>
  <input type="text" :value="emitV" @input="onInput" />
  <!-- '(e: { target: HTMLInputElement; }) => void' 형식은 '(payload: Event) => void' 형식에 할당할 수 없습니다.
  'e' 및 'payload' 매개 변수의 형식이 호환되지 않습니다.ts(2322) -->
  <p>- <b>@input</b> : 한국어 바로 바인딩을 위한 메소드</p>
  <p>- <b>:value</b> : 메소드에서 값을 바꾸는 방법</p>
  <p>Child Text: {{ emitV }}</p>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  emitV?: string;
  // Optional chaining : 값이 없는 경우 undefined를 반환
}>();

const emits = defineEmits(["customIip"]);
const emitV = ref<unknown>("");
// 어떤 타입이 전달될지 모를 때 any OR unknown타입을 선택할 수 있다.

// TODO HTMLInputElement?
function onInput(e: Event) {
  // emitV.value = e.target.value; // error ts2531 개체가 null인것 같다.
  // emitV.value = e.currentTarget.value; // error ts2531 개체가 null인것 같다.
  // emitV.value = e.target as HTMLInputElement; // error ts2322 'HTMLInputElement' 형식은 'string' 형식에 할당할 수 없습니다.
  const target = e.target as HTMLInputElement;
  emitV.value = target.value; // 이값이 되야 에러 X
} // 부모 인풋 실시간 반영
// function onInput(e: { target: HTMLInputElement }) {
//   emitV.value = e.target.value;
// }
watch(emitV, (newVal) => {
  emits("customIip", newVal);
});

watch(props, (newVall) => {
  emitV.value = newVall.emitV; // ts2322 -> ref type을 string에서 unknown으로 변경 에러 해결
});
</script>

<style lang="scss">
label {
  margin-right: 0.5rem;
}
input {
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: 1px solid $color1;
}
</style>
