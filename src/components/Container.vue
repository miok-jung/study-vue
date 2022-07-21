<template>
  <div v-if="step == 0">Content1</div>
  <div v-if="step == 1">Content2</div>
  <div v-if="step == 2">Content3</div>
  <div v-if="step == 3">Content4</div>
</template>

<script>
export default {
  name: "study-navigation",
  props: {
    step: Number,
  },
};
</script>

<style lang="scss"></style>
