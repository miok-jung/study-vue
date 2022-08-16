<template>
  <div class="wrap">
    <h2>Rating</h2>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <p>Compact</p>
        <v-rating
          v-model="rating1"
          color="#ff0000"
          density="compact"
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>Comfortable</p>
        <v-rating
          v-model="rating2"
          color="deep-orange"
          density="comfortable"
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>Default</p>
        <v-rating
          v-model="rating3"
          color="light-blue"
          density="default"
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>선택된 별의 갯수에서 다시 클릭시 초기화된다.</p>
        <v-rating
          v-model="rating4"
          color="deep-purple"
          density="default"
          clearable
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>
          마우스를 올릴 때 해당 칸까지 이동, 클릭을 해야지만 선택 유지가 된다.
        </p>
        <v-rating
          v-model="rating5"
          color="teal lighten-3"
          density="default"
          hover
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>별마다 라벨을 붙일 수 있다.</p>
        <v-rating
          v-model="rating6"
          color="teal lighten-3"
          density="default"
          hover
          :item-labels="['매우나쁨', '나쁨', '보통', '좋음', '매우좋음']"
          item-label-position="top"
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>
          직접 내가 원하는 커스텀 아이콘을 넣을 수 있다. 또한, 절반만 선택이
          가능하게 할 수 있다.
        </p>
        <v-rating
          v-model="rating7"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-half-full"
          half-increments
          hover
        ></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>5개 뿐만 아니라 임의로 갯수를 선정할 수 있다.</p>
        <v-rating v-model="rating8" length="10" hover size="x-small"></v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>색상을 칼라를 다 다르게 설정이 가능하다.</p>
        <v-rating v-model="rating9" length="7" hover half-increments>
          <template v-slot:item="props">
            <v-icon
              :color="props.isFilled ? colors[props.index] : 'grey-lighten-1'"
              large
              @click="props.onClick"
            >
              {{
                props.isFilled ? "mdi-star-circle" : "mdi-star-circle-outline"
              }}
            </v-icon>
          </template>
        </v-rating>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <p>색상을 칼라를 다 다르게 설정이 가능하다.</p>
        <v-rating v-model="rating10" :item-labels="labels5">
          <template v-slot:item-label="props">
            <span :class="`text-${colors5[props.index]}`">
              {{ props.label }}</span
            >
          </template>
        </v-rating>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const rating1 = ref<number>(Math.floor(Math.random() * 5));
const rating2 = ref<number>(Math.floor(Math.random() * 5));
const rating3 = ref<number>(Math.floor(Math.random() * 5));
const rating4 = ref<number>(Math.floor(Math.random() * 5));
const rating5 = ref<number>(Math.floor(Math.random() * 5));
const rating6 = ref<number>(Math.floor(Math.random() * 5));
const rating7 = ref<number>(1.5);
const rating8 = ref<number>(Math.floor(Math.random() * 10));
const rating9 = ref<number>(Math.floor(Math.random() * 7));
const rating10 = ref<number>(Math.floor(Math.random() * 5));
const colors: Array<string> = [
  "pink",
  "pink",
  "red",
  "red",
  "orange",
  "orange",
  "yellow",
  "yellow",
  "green",
  "green",
  "blue",
  "blue",
  "purple",
  "purple",
];
const labels5: Array<string> = ["bad", "so so", "ok", "good", "great"];
const colors5: Array<string> = ["red", "orange", "grey", "cyan", "green"];
</script>

<style scoped></style>
