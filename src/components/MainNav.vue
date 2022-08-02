<template>
  <v-app-bar><h1>Name</h1></v-app-bar>
  <v-navigation-drawer permanent expand-on-hover>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">Application</v-list-item-title>
        <v-list-item-subtitle>I'm Application</v-list-item-subtitle>
        <v-avatar tile color="purple"><v-icon dark>mdi-alarm</v-icon></v-avatar>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John image" style="width: 100%;" />
        </v-avatar>
        <v-badge bordered bottom color="pink lighten-1 accent-4" dot offset-x="0" offset-y="30">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
        </v-badge>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider><!-- 선 -->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  setup(){
    const items= [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ];
    return {items}
  }
}
</script>

<style lang="scss" scoped>
</style>
