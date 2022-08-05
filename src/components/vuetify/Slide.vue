<template>
  <div class="wrap">
    <h2>Slide</h2>
    <p>Vuetify 슬라이드 입니다.</p>
  </div>
  <v-carousel show-arrows="hover">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <div class="wrap">
    <h2>Range Slider</h2>
  </div>
  <div class="wrap">
    <h3>v-range-slider 기본</h3>
    <p>가장 기본 range-slider 0 부터 100까지 자유롭게 움직일 수 있다.</p>
    <v-range-slider></v-range-slider>
  </div>
  <div class="wrap">
    <h3>v-range-slider Value</h3>
    <p>range-slider에 Value를 추가하면 값을 고정할 수 있다.</p>
    <v-range-slider v-model="range1"></v-range-slider>
  </div>
  <div class="wrap">
    <h3>v-range-slider disabled</h3>
    <p>range-slider에 disabled를 추가하면 비활성화가 된다.</p>
    <v-range-slider v-model="range2" disabled></v-range-slider>
  </div>
  <div class="wrap">
    <h3>Min & Max</h3>
    <p>max, min값을 넣어 최대값과 최소값을 설정할 수 있다.</p>
    <v-range-slider v-model="range3" :max="10" :min="-10"></v-range-slider>
  </div>
  <div class="wrap">
    <h3>Step</h3>
    <p>
      원하는 숫자만큼 단계적으로 상승이 가능하다. thumb-label="always"일 경우
      숫자를 확인할 수 있다.
    </p>
    <v-range-slider
      v-model="range4"
      step="10"
      thumb-label="always"
    ></v-range-slider>
  </div>
  <div class="wrap">
    <h3>Vertical</h3>
    <p>수직 슬라이더로 전환할 수 있다. 높이는 CSS로 변경하면 된다.</p>
    <v-range-slider
      v-model="range5"
      direction="vertical"
      thumb-label="always"
    ></v-range-slider>
  </div>
  <div class="wrap">
    <h3>Slot</h3>
    <p>
      <li>show-ticks : 스텝별 위치가 어디인지 보여줌</li>
      <li>ticks-size : 스텝별 원형의 크기를 조절</li>
    </p>
    <v-range-slider
      :value="[0, 1]"
      min="0"
      max="3"
      :step="1"
      show-ticks="always"
      thumb-label="always"
      tick-size="5"
      ><template v-slot:thumb-label="{ modelValue }">
        <v-icon theme="dark" :icon="season(modelValue)"></v-icon> </template
    ></v-range-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const colors: Array<string> = [
  "primary",
  "secondary",
  "yellow darken-2",
  "red",
  "orange",
];
let range1 = ref<number[]>([20, 40]);
const range2: Array<number> = [30, 50];
let range3 = ref<number[]>([-5, 5]);
let range4 = ref<number[]>([50, 50]);
let range5 = ref<number[]>([10, 20]);

const seasons: Array<string> = ["Winter", "Spring", "Summer", "Fall"];
const seasonsIcons: Array<string> = [
  "mdi-snowflake",
  "mdi-leaf",
  "mdi-fire",
  "mdi-water",
];
const season = (val) => {
  return seasonsIcons[val];
};
</script>

<style lang="scss">
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
