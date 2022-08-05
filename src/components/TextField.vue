<template>
  <div class="ipac-text-field" v-show="isShow">
    <input
      class="ipac-text-field-input"
      type="text"
      @input="onInput"
      :value="text"
    />
    {{ text }}
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  text?: string;
}>();

const emits = defineEmits(["customInput"]);

const text = ref("");
const isShow = ref(true);
const show = () => (isShow.value = true);
const hide = () => (isShow.value = false);

function onInput(e: InputEvent) {
  text.value = e.target.value;
}

watch(text, (newValue) => {
  emits("customInput", newValue);
});

watch(props, (newValue) => {
  text.value = newValue.text;
});

defineExpose({
  isShow,
  show,
  hide,
});
</script>
<style lang="scss">
.ipac-text-field-input {
  padding: 20px;
  height: 40px;
  margin: 20px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
}
</style>
