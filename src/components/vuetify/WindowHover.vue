<template>
  <div class="wrap">
    <h2>Vuetify Window</h2>
    <v-window v-model="window" show-arrows="hover" direction="vertical">
      <v-window-item v-for="n in slideCount" :key="n">
        <v-card
          height="200px"
          class="d-flex justify-center align-center flex-column"
        >
          <v-card-title>{{ n }} page</v-card-title>
          <v-card-subtitle>{{ n }}번째 서브제목 입니다.</v-card-subtitle>
          <v-card-text class="ma-1"
            >누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다.
            대통령은 취임에 즈음하여 다음의 선서를 한다. 국군의 조직과 편성은
            법률로 정한다.</v-card-text
          >
        </v-card></v-window-item
      ></v-window
    >
    <!-- TODO 아래 점버튼 마들어 보기 -->
    <!-- LINK https://next.vuetifyjs.com/en/components/windows/ -->
    <h2>Vuetify Hover</h2>
    <p>hover로 이벤트를 줄 수 있다.</p>
    <p>open-delay, close-delay에 대한 특별한 기능은 보이지 않는 상태</p>
    <div class="d-flex">
      <v-hover v-slot="{ isHovering, props }"
        ><v-card
          :elevation="isHovering ? 20 : 2"
          class="d-flex justify-center align-center"
          width="200"
          height="200"
          v-bind="props"
          >Card1</v-card
        ></v-hover
      >
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="d-flex justify-center align-center"
          width="200"
          height="200"
          :elevation="isHovering ? 20 : 2"
          open-delay="1200"
          close-delay="200"
          v-bind="props"
          >Card2</v-card
        >
      </v-hover>
    </div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props"
        ><v-img
          src="https://picsum.photos/1600/800"
          cover
          :aspect-ratio="16 / 9"
          ><v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex justify-center align-center transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2 text-white"
              style="height: 100%"
            >
              $14.99
            </div>
          </v-expand-transition></v-img
        >
        <v-card-text class="pt-6" style="position: relative">
          <div class="font-weight-light text-grey text-h6 mb-2">
            For the perfect meal
          </div>
          <h3 class="text-h4 font-weight-light text-orange mb-2">
            QW cooking utensils
          </h3>
          <div class="font-weight-light text-h6 mb-2">
            Our Vintage kitchen utensils delight any chef.<br />
            Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const window = ref<number>(0);
const slideCount = 3;
</script>
