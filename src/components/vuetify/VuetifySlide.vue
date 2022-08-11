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
    <ul>
      <li>show-ticks : 스텝별 위치가 어디인지 보여줌</li>
      <li>ticks-size : 스텝별 원형의 크기를 조절</li>
    </ul>
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
  <div class="wrap">
    <h3>v-slide-group</h3>
    <ul>
      <li>v-slide-group를 묶어 화살표클릭이벤트를 추가할 수 있다.</li>
    </ul>
  </div>
  <v-sheet class="mx-auto">
    <v-slide-group show-arrows
      ><v-slide-group-item
        v-for="n in 25"
        :key="n"
        v-slot="{ isSelected, toggle }"
        ><v-btn
          class="ma-2"
          rounded
          :color="isSelected ? 'orange' : undefined"
          @click="toggle"
          >option {{ n }}</v-btn
        ></v-slide-group-item
      ></v-slide-group
    >
  </v-sheet>

  <div class="wrap">
    <h3>acitve-class</h3>
    <ul>
      <li>클래스 전달 활성 항목 사용자 지정</li>
      <li>선택시 가운데로 올 수 있게 지정</li>
      <li>아이콘을 자유롭게 변경 가능</li>
    </ul>
  </div>
  <v-sheet>
    <v-slide-group
      v-model="model"
      selected-class="bg-error"
      show-arrows
      center-active
      prev-icon="mdi-minus"
      next-icon="mdi-plus"
      multiple
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
        ><v-card
          :class="['ma-1', selectedClass]"
          width="100"
          height="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="yellow"
                size="48"
                icon="mdi-airplane-plus"
              ></v-icon>
            </v-scale-transition>
          </div> </v-card
      ></v-slide-group-item>
    </v-slide-group>
  </v-sheet>

  <!-- TODO 뉴스형 카드 만들어보기 -->
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
const range1 = ref<number[]>([20, 40]);
const range2: Array<number> = [30, 50];
const range3 = ref<number[]>([-5, 5]);
const range4 = ref<number[]>([50, 50]);
const range5 = ref<number[]>([10, 20]);

const seasonsIcons: Array<string> = [
  "mdi-snowflake",
  "mdi-leaf",
  "mdi-fire",
  "mdi-water",
];
const season = (val: any) => {
  return seasonsIcons[val];
};

const model = ref<number>(0);
</script>

<style lang="scss">
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
