<template>
  <nav>
    <ul>
      <li><router-link to="/vue">main</router-link></li>
      <li><router-link to="/vue/props">props</router-link></li>
      <li><router-link to="/vue/emit">emit</router-link></li>
      <li><router-link to="/vue/interface">interface</router-link></li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
nav {
  ul {
    display: flex;
    li {
      margin-right: 0.5rem;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-color: $color3;
      }
      a {
        display: block;
        padding: 0.5rem 1rem;
      }
    }
  }
}
</style>
