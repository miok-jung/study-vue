<template>
  <v-app-bar color="surface">
    <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>
    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer permanent v-if="toggle == true">
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
        <!-- <v-icon>{{ item.icon }}</v-icon> -->
        <!-- TODO 대시 원인이 무언인가? -->
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
    <router-link to="/vuetify/study1">Study1</router-link>
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

let loading = ref<boolean[]>([]);
let count = ref<number | string[]>(0);
let toggle = ref<boolean>(false);

const load = (i) => {
  loading.value[i] = true;
  setTimeout(() => {
    loading.value[i] = false;
  }, 3000);
};
</script>

<style lang="scss" scoped></style>
