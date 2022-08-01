<template>
  <!-- 일부예제는 v-app대신 v-layout으로 대체하는 경우가 있다. -->
  <v-app>
    <!-- app-bar는 말그대로 어플의 헤더같은 바 -->
    <v-app-bar color="grey-lighten-2">
      <h1>Name</h1>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <li>list1</li>
      <li>list2</li>
      <li>list3</li>
    </v-navigation-drawer>
    <v-main>
      <v-card height="200px">
        <h1>test</h1>
        <p>tag</p>
      </v-card>
      <v-card height="300px">
        <h2>card2</h2>
      </v-card>
      <!-- label: 선택전 문구, items: 선택할 리스트 -->
      <v-select
        label="Select Fruite"
        :items="['Apple', 'Banana', 'Cherry']"
      ></v-select>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>
<style lang="scss"></style>
