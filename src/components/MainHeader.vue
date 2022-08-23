<template>
  <header>
    <h1><router-link to="/">Home</router-link></h1>
    <ul>
      <li><router-link to="/vue2">vue2</router-link></li>
      <li><router-link to="/vue3">vue3</router-link></li>
      <li><router-link to="/vuetify">vuetify</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background-color: #f1f2f3;
  h1 {
    margin-left: 0.5rem;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 0.5rem;
    }
  }
}
</style>
