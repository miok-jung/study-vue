<template>
  <v-app>
    <v-main>
      <NavigationHeader />
      <router-view />
      <div class="main">
        현재 공부중인 것을 보여주기 위해 다양한 페이지로 준비중입니다.
        <li>
          <router-link to="/vuetify"><b>Vuetify</b></router-link>
          : Vuetify를 적용하여 레이아웃 만들기
        </li>
      </div>
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
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
