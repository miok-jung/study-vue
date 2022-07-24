<template>
  <header>
    <h1>BUDONGSAN APP</h1>
  </header>
  <section>
    <List :data="data[i]" v-for="(list, i) in data" :key="i" />
  </section>
</template>

<script>
import data from "./assets/dummy/budongsan";
import List from "./components/List.vue";

export default {
  // .uve 마다 이름 필수 두개의 단어와 하이폰으로 이어지게 작성
  name: "App",
  // 데이터 저장공간
  data() {
    return {
      data: data,
    };
  },

  components: { List },
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
@include tablet {
  body {
    background-color: $light_sky;
  }
}
@include mobile {
  body {
    background-color: $blue;
  }
}
</style>
