<template>
  <header>
    <router-link to="/">{{ myApplicationName }}</router-link>
    <router-link to="/vue">Vue</router-link>
    <router-link to="/vuetify">Vuetify</router-link>
    <p>{{ printCoord({ x: 6, y: 3 }) }}</p>
  </header>
</template>

<script setup lang="ts">
// 인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용
let myApplicationName: string = "NAMES";

const printCoord = (pt: { x: number; y: number }) => {
  // console.log("X: ", pt.x);
  // console.log("Y: ", pt.y);
  return `${pt.x}, ${pt.y}`;
};
// printCoord({ x: 3, y: "string" }); // 나오기는 하나 잘못된 형식이라고 나옴
// printCoord({ x: 3, y: 8 });
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 2rem;
  background: $color4;
  a {
    padding: 0 0.5rem;
    line-height: 2rem;
    &:hover {
      background: $color3;
    }
  }
}
</style>
