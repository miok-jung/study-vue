<template>
  <v-app>
    <v-main>
      <NavigationHeader />
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  components: { NavigationHeader },
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
</style>
