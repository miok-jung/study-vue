<template>
  <v-card width="400" variant="outlined" tonal
    ><v-card-title><v-icon>mdi-home</v-icon>Title</v-card-title>
    <v-card-subtitle>sub title</v-card-subtitle>
    <v-card-text
      >대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 모든 국민은 종교의
      자유를 가진다. 군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
      직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는
      공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수
      없다.</v-card-text
    >
    <v-card-actions>action 1</v-card-actions>
    <v-btn @click="reveal = true">Reveal</v-btn>
    <!-- TODO 내려올 때 카드크기가 같아지게 할 것 -->
    <v-expand-transition>
      <v-card
        v-if="reveal"
        height="100%"
        style="top: 0"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const reveal = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.v-card {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
