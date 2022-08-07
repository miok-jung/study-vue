<template>
  <h1>Parent Vue</h1>
  <label for="parent-input">Parent Vue</label>
  <input
    id="parent-input"
    type="text"
    placeholder="부모 인풋"
    v-model="parentModel1"
  />
  <p>Parent Model : {{ parentModel1 }}</p>
  <p>
    v-model은 한국어, 일본어, 중국어 등 일부 언어에 반응이 느린 이유로 좋은
    방식이 아니다.
  </p>
  <br />
  <label for="parent-input2">Parent2 Vue</label>
  <input type="text" @input="parentModel2 = $event.target.value" />
  <p>@input을 이용하면 한국어도 실시간 반영이 가능하다.</p>
  <p>parent Model2 :{{ parentModel2 }}</p>
  <p>update를 통해서 실시간 반영이 가능하다.</p>
  <VueEmit :text="parentModel2" @update:modelValue="parentModel2 = $event" />
</template>

<script setup lang="ts">
import VueEmit from "@/components/vue/VueEmit.vue";
import { ref } from "vue";
const parentModel1 = ref<string>("");
const parentModel2 = ref<string>("");
</script>

<style lang="scss" scoped>
input {
  padding-left: 0.5rem;
  height: 2rem;
  border: 1px solid $color1;
}
</style>
