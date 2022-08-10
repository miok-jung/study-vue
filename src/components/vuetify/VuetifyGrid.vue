<template>
  <h2>Vuetify Grid</h2>
  <v-container class="bg-surface-variant ma-1-auto">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">One of three vcolumn</v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-container
    class="bg-surface-variant mb-6"
    v-for="(item, i) in aligns"
    :key="i"
  >
    <v-row :align="item" no-gutters style="height: 150px">
      <v-col v-for="n in 3" :key="n">
        <v-sheet class="pa-2 ma-2"> .align-{{ item }} </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface-variant">
    <v-row no-gutters style="height: 150px">
      <v-col v-for="(item, i) in aligns" :key="i" :align-self="item">
        <v-sheet class="pa-2 ma-2"> .align-self-{{ item }} </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col order="6">
        <v-sheet class="pa-2 ma-2">
          First in markup, but middle in row
        </v-sheet>
      </v-col>
      <v-col order="12">
        <v-sheet class="pa-2 ma-2"> Second in markup, but last in row </v-sheet>
      </v-col>
      <v-col order="1">
        <v-sheet class="pa-2 ma-2"> Third in markup, but first in row </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const aligns: Array<string> = ["start", "center", "end"];
</script>

<style scoped></style>
