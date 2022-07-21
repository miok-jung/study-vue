<template>
  <Header msg="Welcome to Your Vue.js App" />
  <hr />
  <Container :step="step" />
  <hr />
  <footer>
    <li @click="step = 0">Tab1</li>
    <li @click="step = 1">Tab2</li>
    <li @click="step = 2">Tab3</li>
    <li @click="step = 3">Tab4</li>
  </footer>
</template>

<script>
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      step: 0,
    };
  },
  components: {
    Header,
    Container,
  },
};
</script>

<style>
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
</style>
