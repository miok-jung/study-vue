<template>
  <Navigation />
  <div class="wrap">
    <router-view></router-view>
    <footer>푸터 준비중입니다.</footer>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/vue/VueNavigation.vue";
</script>
<style lang="scss">
.wrap {
  width: 90%;
  margin: 0 auto;
}
</style>
