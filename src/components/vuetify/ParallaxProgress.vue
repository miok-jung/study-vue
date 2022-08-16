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
    <h2>progress linear</h2>
    <v-row>
      <v-col cols="12" md="6">
        <p>가장 기본 progress linear입니다.</p>
        <v-progress-linear model-value="15"></v-progress-linear>
      </v-col>
      <v-col cols="12" md="6">
        <p>buffer-value</p>
        <v-progress-linear
          color="pink"
          v-model="value2"
          :buffer-value="bufferValue2"
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          우에서 좌로 프로그래스 바가 계속 이동한다. rounded로 좀 더 부드럽게 할
          수 있다.
        </p>
        <v-progress-linear
          reverse
          indeterminate
          height="20"
          rounded
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          steam model-value는 게이지, buffer-value는 배경값, 그 외 나머지는
          진행하고 있다는 의미로 점선이 이동한다.
        </p>
        <v-progress-linear
          :model-value="value3"
          buffer-value="60"
          stream
          height="20"
          rounded
          striped
          >{{ value3 }} %</v-progress-linear
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value1 = ref<number>(0);
const value2 = ref<number>(0);
const value3 = ref<number>(40);
const bufferValue2 = ref<number>(10);

setInterval(() => {
  if (value1.value === 100) return (value1.value = 0);
  value1.value += 10;
}, 1000);
setInterval(() => {
  if (value2.value === 100) {
    value2.value = 0;
  } else {
    value2.value += 10;
  }
}, 1000);
</script>

<style scoped></style>
