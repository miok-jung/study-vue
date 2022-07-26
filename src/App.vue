<template>
  <router-link to="/study-vue">budongsan</router-link>
</template>

<script>
export default {
  // .uve 마다 이름 필수 두개의 단어와 하이폰으로 이어지게 작성
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
body {
  background-color: $sky;
}
</style>
