<template>
  <div class="wrap">
    <h2>VuetifyItem</h2>
    <h3>선택 item BOX</h3>
    <p>하나의 선택만을 할 수 있다.</p>
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="200"
                @click="toggle"
              >
                <div class="text-h3 flex-grow-1 text-center">
                  {{ isSelected ? "Selected" : "Click Me!" }}
                </div></v-card
              ></v-item
            >
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <h3>멀티 선택</h3>
    <v-item-group selected-class="bg-primary" multiple>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="200"
                @click="toggle"
              >
                <div class="text-h3 flex-grow-1 text-center">
                  {{ isSelected ? "Selected" : "Click Me!" }}
                </div></v-card
              ></v-item
            >
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <h2>Vuetify Overlay</h2>
    <p>hover하면 다른 내용이 덮어진다.</p>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-auto" max-width="344" v-bind="props">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        ></v-img>
        <v-card-text>
          <h2 class="text-h6 primary--text">Magento Forests</h2>
          Travel to the best outdoor experience on planet Earth. A vacation you
          will never forget!
        </v-card-text>
        <v-overlay
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-center justify-center"
        >
          <v-btn flat>See more info</v-btn>
        </v-overlay>
      </v-card>
    </v-hover>
    <p>이미지를 클릭하면 검정반투명 바탕과 함께 로딩이 약 5초간 지속됩니다.</p>
    <v-img
      src="https://picsum.photos/1600/800"
      cover
      :aspect-ratio="16 / 9"
      @click="overlay1 = !overlay1"
    ></v-img>
    <v-overlay :model-value="overlay1" class="align-center justify-center">
      <v-progress-circular indeterminate size="64"></v-progress-circular
    ></v-overlay>
  </div>
</template>
<!-- TODO 여기서 해볼 수 있는 것 들 
    1. 인스타그램 업데이트할 때 태그 모양 만들어 업데이트하는 화면
    2. 인스타그램 메인 페이지 하트 표기해보기
 -->
<script setup lang="ts">
import { ref, watch } from "vue";

const overlay1 = ref<boolean>(false);

watch(overlay1, (val: unknown) => {
  val &&
    setTimeout(() => {
      overlay1.value = !overlay1.value;
    }, 5000);
});
</script>
<style scoped lang="scss"></style>
