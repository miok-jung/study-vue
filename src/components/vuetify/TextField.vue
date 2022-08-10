<template>
  <div class="wrap">
    <h2>Text Fields</h2>
    <p>사용자 정보를 수집하는데 사용하는 컴포넌트이다.</p>
  </div>
  <div class="wrap">
    <h3>Default</h3>
    <ul>
      <li>label: 필드의 제목을 주로 입력</li>
      <li>placeholder: 입력할 값에 대한 설명을 정리</li>
      <li>
        variant: regular(기본), solo(밑줄 실종), filed(), outlined(외각라인),
        plain(투명), underlined(밑줄만)
      </li>
    </ul>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(list, i) in variants" :key="i">
        <v-text-field
          :label="list"
          placeholder="입력해보기"
          :variant="list"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
  <v-row class="wrap">
    <v-col cols="12" sm="6" md="4">
      <h3>Regular</h3>
      <p>
        :rules를 사용하여 일정글자수가 넘어가면 경고 발생하지만, 작성은 가능
      </p>
      <v-text-field
        label="Counter25"
        counter="25"
        v-model="countValue"
        :rules="rules"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <h3>Limit exceeded</h3>
      <p>maxlength : 정해진 글자수가 넘어가면, 방금 작성한 값이 사라진다.</p>
      <v-text-field
        label="Limit exceded"
        counter
        maxlength="25"
        v-model="maxlengthValue"
        :rules="rules"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <h3>단어수 제한</h3>
      <p>
        단어수를 제한할 수 있다. counter값만 설정시 글자수를 넣지만,
        :counter-value값을 사용하여 공백이 들어갈 때마다 단어를 카운팅 할 수
        있다.
      </p>
      <v-text-field
        v-model="wordsRulesValue"
        label="Custom counter from prop"
        counter="5"
        :rules="wordsRules"
        :counter-value="(v: string) => v.trim().split(' ').length"
      ></v-text-field
    ></v-col>
    <v-col cols="12" sm="6" md="4">
      <h3>아이콘 추가</h3>
      <p>clear-icon을 클릭시 텍스트 내용을 지울 수 있다.</p>
      <p>color을 통해 text-field의 메인컬러를 설정할 수 있다.</p>
      <v-text-field clear-icon="mdi-delete" color="primary"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <h3>density</h3>
      <p>
        density: default, comfortable, compact<br />아래 default 클릭시
        density를 변경할 수 있다.
      </p>
      <select name="density" id="density" @change="selectValue">
        <option value="default">Default</option>
        <option value="comfortable">Comfortable</option>
        <option value="compact">Compact</option>
      </select>
      <!-- TODO select와 type을 지정해보기  -->
      <v-text-field
        clear-icon="mdi-delete"
        color="primary"
        :density="densityValue"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-col cols="12" sm="6" md="4">
    <h3></h3>
    <p></p>
    <v-text-field></v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { ref } from "vue";

export type variantType =
  | "filled"
  | "solo"
  | "outlined"
  | "plain"
  | "underlined"
  | undefined;

const variants: Array<variantType> = [
  "filled",
  "solo",
  "outlined",
  "plain",
  "underlined",
];
const countValue = ref<string>("");
const maxlengthValue = ref<string>("");
const wordsRulesValue = ref<string>("");
const densityValue = ref<string>("default");

const rules = ref([(v: string) => v.length <= 25 || "Max 25 characters"]);
const wordsRules = ref([
  (v: string) => v.trim().split(" ").length <= 5 || "Max 5 words",
]);

const selectValue = (e: Event) => {
  // densityValue = e.target.value;
  const target = e.target as HTMLOptionElement;
  densityValue.value = target.value;
};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
select {
  border: 1px solid $color1;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
