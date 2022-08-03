<template>
  <div class="main">
    <!-- <p>현재 공부중인 것을 보여주기 위해 다양한 페이지로 준비중입니다.</p>
    <li>
      <router-link to="/vuetify"><b>Vuetify</b></router-link>
      : Vuetify를 적용하여 레이아웃 만들기
    </li> -->
    <div>
      <h2>Ref</h2>
      <p :style="changeColor">{{ count }}</p>
      <button @click="up()">Up</button>
      &nbsp;
      <button @click="down()">Down</button>
      <h2>reactive</h2>
      <p>Hi {{ test.name }}, age: {{ test.age }}</p>
      <button @click="changeName()">Change Name</button>
      <h2>to Ref</h2>
      <p>reactive 객체의 속성에서 하나의 단일 ref객체로 만들 때 사용</p>
      <p>toRefFoo: {{ fooRef }}, toRefBar: {{ barRef }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, toRef } from "vue";

// ref : 나머지 자료형
let count = ref(); // ref == useState 변할 수 있는 값
let changeColor = ref("");
// onMounted : 컴포넌트가 실행시 한번만 실행
onMounted(() => {
  count.value = 5;
});
const up = () => {
  count.value++;
  changeColor.value = "color: #00ff";
};
const down = () => {
  count.value--;
  changeColor.value = "color: #ff0000";
};

// reactive : array -> [], object -> {}
let test = reactive({ name: "Jung", age: "30" });
const changeName = () => {
  if (test.name === "Jung") return (test.name = "Lee");
  else return (test.name = "Jung");
};

// toRef : reactive에서 array 혹은 object를 받아서 하나의 객체로 나누는?
let toRefTest = reactive({
  foo: 1,
  bar: 2,
});
const fooRef = toRef(toRefTest, "foo");
const barRef = toRef(toRefTest, "bar");
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
