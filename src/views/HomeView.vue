<template>
  <div class="main">
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
      <div>
        <p>person1: {{ person1.name }}, {{ person1.age }}</p>
        <p>person2: {{ person2.name }}, {{ person2.age }}</p>
        <button @click="handleClick">Change person</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRef } from "vue";

// ref : 나머지 자료형
const count = ref(); // ref == useState 변할 수 있는 값
const changeColor = ref("");
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
const test = reactive({ name: "Jung", age: "30" });
const changeName = () => {
  if (test.name === "Jung") return (test.name = "Lee");
  else return (test.name = "Jung");
};

// toRef : reactive에서 array 혹은 object를 받아서 하나의 객체로 나누는?
const toRefTest = reactive({
  foo: 1,
  bar: 2,
});
const fooRef = toRef(toRefTest, "foo");
const barRef = toRef(toRefTest, "bar");

const person1 = ref({ name: "miok", age: 30 });
const person2 = reactive({ name: "miyoung", age: 35 });

const handleClick = () => {
  // ref로 감싼 값을 변경할 때는 value로 한번 들어가주고 값을 바꿉니다.
  person1.value.age = 29;
  // reactive는 바로 값을 바꿉니다
  person2.age = 30;
};
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
