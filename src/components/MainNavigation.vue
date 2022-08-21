<template>
  <v-navigation-drawer
    permanent
    v-model="navDrawer"
    :rail="navRail"
    @click="navRail = false"
  >
    <v-list-item nav :prepend-avatar="Logo" title="VND FREE">
      <!-- prepend Front, append Back -->
      <template v-slot:append>
        <!-- variant="text" : 버튼 섀도우를 없애주는 기능 -->
        <v-icon
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="navRail = !navRail"
        ></v-icon>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <router-link
        v-for="list in navListArray"
        :key="list.value"
        :to="list.url"
        style="text-decoration: none; color: black"
      >
        <v-list-item
          active-color="#80558C"
          nav
          style="overflow: hidden"
          :prepend-icon="`mdi-${list.icon}`"
          :value="list.value"
          :title="list.text"
        >
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/logo.svg";
import { ref } from "vue";

interface navLists {
  url: string;
  icon: string;
  text: string;
  value: string;
}

const navListArray: Array<navLists> = [
  {
    url: "/dashboard",
    icon: "view-dashboard",
    text: "Dashboard",
    value: "dashboard",
  },
  {
    url: "/profile",
    icon: "account",
    text: "User Profile",
    value: "profile",
  },
  {
    url: "/table",
    icon: "clipboard-outline",
    text: "Regular Table",
    value: "table",
  },
  {
    url: "/translate",
    icon: "translate",
    text: "Typography",
    value: "typography",
  },
  { url: "/icon", icon: "chart-bubble", text: "Icon", value: "icon" },
  { url: "/map", icon: "map-marker", text: "Google Maps", value: "map" },
  {
    url: "/notifications",
    icon: "bell",
    text: "Notifications",
    value: "notification",
  },
];
// rail : 네비게이션의 크기를 확대/축소하는 기능
const navRail = ref<boolean>(true);
const navDrawer = ref<boolean>(true);
</script>

<style lang="scss"></style>
