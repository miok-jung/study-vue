<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/realestate">Go to Real-Estate App</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
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
