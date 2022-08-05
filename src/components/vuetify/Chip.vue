<template>
  <v-chip
    v-if="chip"
    closable
    color="red"
    variant="outlined"
    prepend-icon="mdi-account-circle"
    append-icon="mdi-star"
    >여기는 v-chip 공간입니다.</v-chip
  >
</template>

<script setup lang="ts">
let chip: boolean = true;
</script>

<style lang="scss" scoped></style>
