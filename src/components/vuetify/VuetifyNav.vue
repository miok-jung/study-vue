<template>
  <!-- TODO 버튼 클릭시 화면이 줄어들지 않는 원인 찾기 -->
  <v-app-bar color="surface">
    <v-app-bar-nav-icon @click.stop="toggle = !toggle"></v-app-bar-nav-icon>
    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="toggle" temporary>
    <v-list nav>
      <router-link to="/vuetify">Vuetify Main</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/slide">Vuetify Slide</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/switch">Vuetify Switch</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/chip">Vuetify Chip</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/textarea">Vuetify Textarea</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/textfield">Vuetify TextField</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/grid">Vuetify Grid</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/item">Vuetify Item & Overlay</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/window">Vuetify Window & Hover</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/img">Vuetify Image</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/rating">Rating, Snackbars</router-link>
    </v-list>
    <v-list nav>
      <router-link to="/vuetify/system">system-bar</router-link>
    </v-list>
    <!-- temporary : 뒷배경 반투명검정 -->
    <v-list-item>
      <v-list-item-title class="text-h6">Application</v-list-item-title>
      <v-list-item-subtitle>I'm Application</v-list-item-subtitle>
      <v-avatar color="purple"><v-icon>alarm</v-icon></v-avatar>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John image"
          style="width: 100%"
        />
      </v-avatar>
      <v-badge
        bordered
        bottom
        color="pink lighten-1 accent-4"
        dot
        offset-x="0"
        offset-y="30"
      >
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
    </v-list-item>
    <v-divider></v-divider
    ><!-- 선 -->
    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-icon :icon="item.icon"></v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-banner icon="people">
      <v-banner-text>Hello Banner?</v-banner-text>
      <v-btn>Action</v-btn>
    </v-banner>
    <v-banner>
      <v-banner-text>load</v-banner-text>
      <v-btn :loading="loading[0]" :disabled="loading[0]" @click="load(0)"
        >111</v-btn
      >
      <v-btn :loading="loading[1]" :disabled="loading[1]" @click="load(1)"
        >222</v-btn
      >
      <p>ref Number: {{ count }}</p>
    </v-banner>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Item {
  title: string;
  icon: string;
}

const items = ref<Item[]>([
  { title: "Dashboard", icon: "mdi-view-dashboard" },
  { title: "Photos", icon: "mdi-image" },
  { title: "About", icon: "mdi-help-box" },
]);

const loading = ref<boolean[]>([]);
const count = ref<number | string[]>(0);
const toggle = ref<boolean>(false);

const load = (i: number) => {
  loading.value[i] = true;
  setTimeout(() => {
    loading.value[i] = false;
  }, 3000);
};
</script>

<style lang="scss" scoped></style>
