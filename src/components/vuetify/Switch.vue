<template>
  <div class="wrap">
    <h2>Switch</h2>
    <p>사용자에게 두 가지 고유한 값 중에서 선택할 수 있는 기능을 제공한다.</p>
  </div>
  <div class="wrap">
    <h3>Default</h3>
    <p>
      가장 기본적인 Switch로 참/거짓을 내보낸다. value값이 있다면 해당하는 값을
      내보낸다.
    </p>
    <v-switch
      v-model="model1"
      :label="`Switch: ${model1.toString()}`"
    ></v-switch>
  </div>
  <div class="wrap">
    <h3>Color</h3>
    <p>스위치가 true일 때 칼라를 변환시킨다.</p>
    <div class="d-flex">
      <v-switch v-model="model2" color="red" value="red" label="red"></v-switch>
      <v-switch
        v-model="model2"
        color="indigo"
        value="indigo"
        label="indigo"
      ></v-switch>
      <v-switch
        v-model="model2"
        color="orange"
        value="orange"
        label="orange"
      ></v-switch>
    </div>
  </div>
  <div class="wrap">
    <h3>Inset</h3>
    <p>스위치를 감싸는 배경이 커진다.</p>
    <v-switch
      v-model="model3"
      :label="`Switch3: ${model3.toString()}`"
      inset
    ></v-switch>
  </div>
  <div class="wrap">
    <h3>Array Modeling</h3>
    <p>
      여러개의 배열을 사용하여 v-model을 공유할 수 있으며, 값을 원하는 값으로
      내보낼 수 있다.
    </p>
    <div class="d-flex">
      <v-switch v-model="model4" label="Jung" value="Jung"></v-switch>
      <v-switch v-model="model4" label="Kim" value="Kim"></v-switch>
    </div>
    <p>{{ model4 }}</p>
  </div>
  <div class="wrap">
    <h3>Customer true & false</h3>
    <p>
      true-value와 false-value값을 통해 참과 거짓에 원하는 값을 넣을 수 있다.
    </p>
    <v-switch
      v-model="model5"
      true-value="네"
      false-value="니오"
      :label="`Switch: ${model5}`"
    ></v-switch>
  </div>
  <div class="wrap">
    <h3>Loading</h3>
    <p>loading값을 통해서 대기중을 알려줄 수 있다.</p>
    <v-switch v-model="model6" loading="warning"></v-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface people {
  name: string;
}
const model1 = ref<boolean>(false);
const model2 = ref<boolean>(false);
const model3 = ref<boolean>(false);
const model4 = ref<people[]>([]);
const model5 = ref<string>("니오");
const model6 = ref<boolean>(false);
</script>

<style lang="scss">
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
