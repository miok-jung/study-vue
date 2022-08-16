<template>
  <div class="wrap">
    <h2>Parallax</h2>
    <p>화면이 열리고 이미지는 조금 느리게 열리는 이벤트를 가지고 있다.</p>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      height="500"
    ></v-parallax>
    <br />
    <h2>Progress</h2>
    <v-row>
      <v-col cols="12" md="3" sm="6">
        <p>가장 기본</p>
        <v-progress-circular model-value="20"></v-progress-circular>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <p>칼라를 입힐 수 있다.</p>
        <v-progress-circular
          model-value="80"
          color="deep-orange"
        ></v-progress-circular>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <p>progress를 무한 회전을 할 수 있다.</p>
        <v-progress-circular
          indeterminate
          color="#f929a4"
        ></v-progress-circular>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <p>일정시간에 프로그래스바를 올릴 수 있다.</p>
        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="10"
          :model-value="value1"
          color="deep-blue"
          >{{ value1 }}</v-progress-circular
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value1 = ref<number>(0);

setInterval(() => {
  if (value1.value === 100) return (value1.value = 0);
  value1.value += 10;
}, 1000);
</script>

<style scoped></style>
