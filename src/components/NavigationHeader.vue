<template>
  <header>
    <router-link to="/">Main</router-link>
    <router-link to="/vuetify">Vuetify</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 2rem;
  background: $color4;
  a {
    padding: 0 0.5rem;
    line-height: 2rem;
    &:hover {
      background: $color3;
    }
  }
}
</style>
