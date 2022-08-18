<template>
  <v-navigation-drawer
    permanent
    v-model="navToggle"
    :rail="navRail"
    @click="navRail = false"
  >
    <v-list-item :prepend-avatar="Logo">
      <template v-slot:append>
        <P
          class="nav_logo"
          :style="navRail == true ? `display: none;` : `display: block;`"
          ><strong>VMD</strong> FREE</P
        >
        <v-btn
          variant="text"
          icon="mdi-arrow-left"
          @click.stop="navRail = !navRail"
        ></v-btn>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <router-link v-for="list in listItems" :key="list.value" :to="list.url">
        <v-list-item
          active-color="#e91e63"
          nav
          :prepend-icon="`mdi-${list.prependIcon}`"
          :title="list.title"
          :value="list.value"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Logo from "@/assets/images/logo.svg";

const navToggle = ref<boolean>(true);
const navRail = ref<boolean>(true);

interface listItemType {
  url: string;
  prependIcon: string;
  title: string;
  value: string;
}

const listItems: Array<listItemType> = [
  {
    url: "/",
    prependIcon: "view-dashboard",
    title: "DashBoard",
    value: "dashboard",
  },
  {
    url: "/",
    prependIcon: "account",
    title: "User Profile",
    value: "userprofile",
  },
  {
    url: "/",
    prependIcon: "calendar-range",
    title: "Reguler Table",
    value: "regulertable",
  },
  {
    url: "/",
    prependIcon: "alphabetical-variant",
    title: "Typography",
    value: "typography",
  },
  { url: "/", prependIcon: "auto-fix", title: "Icons", value: "icons" },
  {
    url: "/",
    prependIcon: "map-marker-check-outline",
    title: "Google Maps",
    value: "googlemaps",
  },
  {
    url: "/",
    prependIcon: "bell",
    title: "Notifications",
    value: "notifications",
  },
];
</script>

<style scoped lang="scss">
.nav_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: red;
  strong {
    color: black;
  }
}
</style>
