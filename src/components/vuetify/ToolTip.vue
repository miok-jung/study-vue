<template>
  <div class="wrap">
    <h2>ToolTip</h2>
    <v-row>
      <v-col cols="12" md="3" sm="6">
        <v-tooltip location="end">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">HOVER END</v-btn>
          </template>
          <v-icon>mdi-information-outline</v-icon>
          <p>호버가 되었을 때 안내를 할 수 있다.</p>
          <p>줄바꿈은 자유롭게 가능하다.</p>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-tooltip location="start">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">HOVER START</v-btn>
          </template>
          <v-icon>mdi-information-outline</v-icon>
          <p>호버가 되었을 때 안내를 할 수 있다.</p>
          <p>줄바꿈은 자유롭게 가능하다.</p>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">HOVER TOP</v-btn>
          </template>
          <v-icon>mdi-information-outline</v-icon>
          <p>호버가 되었을 때 안내를 할 수 있다.</p>
          <p>줄바꿈은 자유롭게 가능하다.</p>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">HOVER BOTTOM</v-btn>
          </template>
          <v-icon>mdi-information-outline</v-icon>
          <p>호버가 되었을 때 안내를 할 수 있다.</p>
          <p>줄바꿈은 자유롭게 가능하다.</p>
        </v-tooltip>
      </v-col>
    </v-row>
    <p>v-model을 통해서 클릭이벤트로 다른 태그에 tooltip을 넣을 수 있다.</p>

    <v-btn @click="showTooltip = !showTooltip">Toogle Click</v-btn>
    <v-tooltip v-model="showTooltip" top>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props"><v-icon>mdi-cart</v-icon></v-btn>
      </template>
      <p>가방에 넣었습니다.</p>
    </v-tooltip>
    <p>{{ showTooltip }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showTooltip = ref<boolean>(false);
</script>

<style scoped></style>
