<template>
  <header>
    <router-link to="/">NAMES</router-link>
    <router-link to="/vue">Vue</router-link>
    <router-link to="/vuetify">Vuetify</router-link>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $color2;
  height: 2rem;
  a {
    padding: 0 0.5rem;
    line-height: 2rem;
    &:hover {
      background: $color3;
    }
  }
}
</style>
