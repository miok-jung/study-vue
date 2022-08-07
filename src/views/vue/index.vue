<template>
  <div class="wrap">
    <Navigation />
    <router-view></router-view>
    <footer>푸터 준비중입니다.</footer>
  </div>
</template>

<script setup>
import Navigation from "@/components/vue/VueNavigation.vue";
</script>

<style lang="scss" scoped>
.wrap {
  border: 1px solid red;
}
</style>
