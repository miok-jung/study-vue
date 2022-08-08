<template>
  <h1>Vue Emit Parent</h1>
  <label for="emitV">Emit Input</label>
  <input id="emitV" type="text" :value="inputT" @input="InputC" />
  <p>{{ inputT }}</p>
  <VueEmitVue
    :emitV="inputT"
    @update:modelValue="inputT = $event"
    @customIip="(e) => (inputT = e)"
  />
</template>

<script setup lang="ts">
import VueEmitVue from "@/components/vue/VueEmit.vue";
import { ref } from "vue";

const inputT = ref<string>("");

const InputC = (e: Event) => {
  inputT.value = (e.target as HTMLInputElement).value;
};
</script>

<style scoped lang="scss">
label {
  margin-right: 0.5rem;
}
input {
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: 1px solid $color1;
}
</style>
