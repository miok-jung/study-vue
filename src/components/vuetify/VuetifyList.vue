<template>
  <h2>Vuetify List</h2>
  <h3>Default</h3>
  <v-list>Lorem ipsum dolor sitmet consectetur adipiscing 엘리트</v-list>
  <h3>v-list item</h3>
  <p>
    object에 title/value이 있으면 자동으로 입력이 된다. 혹은 item-title과
    item-value값을 사용하여 지정할 수 있다.
  </p>
  <p>object 안에 아이콘을 넣어 설정할 수 있다.</p>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-card class="ma-3" max-width="300">
        <v-list :items="listA"></v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card class="ma-3" max-width="300">
        <v-list :items="listB" item-title="name" item-value="id"></v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card class="ma-3" max-width="300">
        <v-list density="compact">
          <v-list-subheader>REPORTS</v-list-subheader>

          <v-list-item
            rounded="xl"
            v-for="(item, i) in listC"
            :key="i"
            :value="item"
            active-color="orange"
            variant="plain"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const listA: Array<object> = [
  { type: "subheader", title: "Group #1" },
  {
    title: "Item 1",
    value: 1,
    props: {
      prependIcon: "mdi-home",
    },
  },
  {
    title: "Item 2",
    value: 2,
    props: {
      appendIcon: "mdi-close",
    },
  },
  { type: "divider" },
  { type: "subheader", title: "Group #2" },
  {
    title: "Item 3",
    value: 3,
    props: {
      color: "orange",
    },
  },
  { title: "Item 4", value: 4 },
];
const listB: Array<object> = [
  { name: "Item 1", id: 1 },
  { name: "Item 2", id: 2 },
  { name: "Item 3", id: 3 },
  { name: "Item 4", id: 4 },
];
interface ListC {
  text: string;
  icon: string;
}
const listC: ListC[] = [
  { text: "Real-Time", icon: "mdi-clock" },
  { text: "Audience", icon: "mdi-account" },
  { text: "Conversions", icon: "mdi-flag" },
];
</script>

<style scoped></style>
