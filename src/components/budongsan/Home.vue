<template>
  <header>
    <h1>BUDONGSAN APP</h1>
  </header>
  <section>
    <List :data="data[i]" v-for="(list, i) in data" :key="i" />
  </section>
</template>

<script>
import data from "../../assets/dummy/budongsan";
import List from "../../components/List.vue";

export default {
  name: "budongsan-app",
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
h1 {
  text-align: center;
  margin: 2vh 0;
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
