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
  <div class="wrap">
    <h2>Menu</h2>
    <p>
      select에서 선택시 해당하는 위치에 네비게이션을 보여주며, 호버 이벤트를
      진행할 수 있다.
    </p>
    <v-select
      v-model="location"
      :items="locations"
      label="Selection to Locations"
    ></v-select>
    <v-menu class="mx-auto" :location="location" open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn dark v-bind="props"> Dropdown</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in 10" :key="i">{{ item }}</v-list-item>
      </v-list>
    </v-menu>

    <h3>My Profile</h3>
    <v-menu location="end" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">My Profile</v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            title="John Leider"
            subtitle="Founder of Vuetify"
          >
            <template v-slot:append>
              <!-- variant="text" : 버튼외부 그림자 삭제 -->
              <v-btn
                icon="mdi-heart"
                variant="text"
                :class="likeClick ? 'text-red' : ''"
                @click="likeClick = !likeClick"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="n in 6" :key="n">{{ n }}</v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

export type locationType = "top" | "bottom" | "start" | "end" | "center";
// NOTE export type은 최상단에 위치해야 한다.

interface people {
  name: string;
}
const model1 = ref<boolean>(false);
const model2 = ref<boolean>(false);
const model3 = ref<boolean>(false);
const model4 = ref<people[]>([]);
const model5 = ref<string>("니오");
const model6 = ref<boolean>(false);

const location = ref<locationType>("top");
const locations: Array<locationType> = [
  "top",
  "bottom",
  "start",
  "end",
  "center",
];
const likeClick = ref<boolean>(false);
</script>

<style lang="scss">
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
