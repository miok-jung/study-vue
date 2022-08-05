<template>
  <div class="wrap">
    <h2>Text Fields</h2>
    <p>사용자 정보를 수집하는데 사용하는 컴포넌트이다.</p>
  </div>
  <div class="wrap">
    <h3>Default</h3>
    <p>
        <ul>
            <li>label: 필드의 제목을 주로 입력</li>
            <li>placeholder: 입력할 값에 대한 설명을 정리</li>
            <li>variant: regular(기본), solo(밑줄 실종), filed(), outlined(외각라인), plain(투명), underlined(밑줄만)</li>
        </ul>
    </p>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Regular"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Regular" placeholder="Placeholder"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Solo" variant="solo"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Solo"
          variant="solo"
          placeholder="Placeholder"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Filled" variant="filled"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Filled"
          placeholder="Placeholder"
          variant="filled"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Outlined" variant="outlined"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Outlined"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Plain" variant="plain"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Plain"
          placeholder="Placeholder"
          variant="plain"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Underlined" variant="underlined"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Underlined"
          placeholder="Placeholder"
          variant="underlined"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
  <div class="wrap">
    <h3></h3>
    <p></p>
    <v-text-field></v-text-field>
  </div>
  <div class="wrap">
    <h3></h3>
    <p></p>
    <v-text-field label="Counter25" counter="25" v-model="countValue" :rules="rules"></v-text-field>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const countValue = ref<string>("");
const rules = ref<string>("");
watch(countValue, (newCountValue, oldCountValue) => {
    console.log("Old: ", oldCountValue);
    console.log("New: ", newCountValue);
    if(newCountValue.length <= 25) return rules.value = "25자 이상을 넘길 수 없습니다.";
    
})
</script>

<style lang="scss" scoped>
.wrap {
  margin: 1rem;
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
