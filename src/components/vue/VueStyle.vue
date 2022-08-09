<template>
  <div :class="{ dark: isActive }">
    <h2>Vue Style Children</h2>
    <div>
      <h3>Div Header</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <button
      class="btn"
      @click="darkClick"
      :style="isActive ? lightTeme : darkTeme"
    >
      Dark
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type CSSProperties } from "vue";
const isActive = ref<boolean>(false);

const darkClick = () => {
  isActive.value = !isActive.value;
};

const lightTeme: CSSProperties = {
  backgroundColor: "white",
  border: "1px solid $color1",
  color: "black",
};
const darkTeme: CSSProperties = {
  backgroundColor: "black",
  border: "1px solid $color2",
  color: "white",
};
watch;
</script>

<style scoped lang="scss">
.btn {
  padding: 0.5rem 1rem;
  border: 1px solid $color3;
  margin-right: 0.5rem;
  border-radius: 2rem;
  &:hover {
    background-color: $color1;
    color: $color4;
  }
}
.dark {
  background-color: black;
  color: white;
}
</style>
