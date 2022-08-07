<template>
  <!-- <TextFieldVue /> -->
  <TextField ref="inputRef" :text="text" @customInput="(e) => (text = e)">
  </TextField>
  <input v-model="text" />
  <v-btn
    :style="[
      {
        color: test ? 'red' : 'black',
      },
    ]"
    @click="inputRef?.hide()"
  >
    안보여
  </v-btn>
  <!-- LINK https://pusha.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%BC%EC%9D%8C%ED%91%9C-%EC%84%A0%ED%83%9D%EC%A0%81-%EC%97%B0%EC%82%B0%EC%9E%90-Optional-chaining -->
  <!-- NOTE 데이터가 undefined가 나올 때 에러를 방지해주는데 거의 문제가 발생하지 않지만, 많이 쓰인다. -->
  <v-btn @click="inputRef?.show()"> 보여 </v-btn>
</template>

<script setup lang="ts">
// import TextFieldVue from "@/components/vuetify/TextField.vue";
// import TextField from "@/components/TextField.vue";
import { onMounted, ref, CSSProperties } from "vue";
// import { cpuUsage } from "process";
const text = ref("fdsa");
interface ICustomInput {
  show?: () => void;
  hide: () => void;
}

// fdsa

const redbuto: CSSProperties = {
  border: "1px solid black",
};
// const black;

function temp1(test: string, test2?: string) {
  if (test2) console.log("test2가 있다");
}

temp1("a");

const temp = undefined;

if (temp) console.log(temp);

const inputRef = ref<ICustomInput>();
onMounted(() => {
  console.log(inputRef.value);
});
</script>
