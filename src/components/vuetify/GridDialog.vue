<template>
  <div class="wrap">
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
          <v-sheet class="pa-2 ma-2">
            Second in markup, but last in row
          </v-sheet>
        </v-col>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            Third in markup, but first in row
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <h2>Dialogs</h2>
    <p>
      특정한 정보를 포함하거나 결정을 요구할 때 사용한다. 모달과 매우 유사한거
      같다.
    </p>
    <v-dialog v-model="dialog1">
      <template v-slot:activator="{ props }">
        <v-btn color="purple" v-bind="props">기본</v-btn>
      </template>
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="#f1f2f3" block @click="dialog1 = false"
            >Close Btn</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" transition="dialog-top-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="purple" v-bind="props">위에서 모달</v-btn>
      </template>
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="#f1f2f3" block @click="dialog2 = false"
            >Close Btn</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog3" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="purple" v-bind="props">아래에서 모달</v-btn>
      </template>
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="#f1f2f3" block @click="dialog3 = false"
            >Close Btn</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog4"
      transition="dialog-bottom-transition"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn color="purple" v-bind="props">외부클릭막기</v-btn>
      </template>
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="#f1f2f3" block @click="dialog4 = false"
            >Close Btn</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      :disabled="dialog5"
      :loading="dialog5"
      class="text-white"
      color="purple-darken-2"
      @click="dialog5 = true"
    >
      Start loading
    </v-btn>
    <v-dialog v-model="dialog5" hide-overlay persistent>
      <v-card color="primary">
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-btn @click="dialog6 = true">중첩1</v-btn>
    <v-dialog v-model="dialog6">
      <v-card>
        <v-card-title>Dialog1</v-card-title>
        <v-card-text>
          <v-btn @click="dialog7 = true">중첩2</v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog6 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog7">
      <v-card>
        <v-card-title>Dialog2</v-card-title>
        <v-card-text>
          <v-btn @click="dialog8 = true">중첩3</v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog7 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog8">
      <v-card>
        <v-card-title>Dialog3</v-card-title>
        <v-card-actions>
          <v-btn @click="dialog8 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const aligns: Array<string> = ["start", "center", "end"];
const dialog1 = ref<boolean>(false);
const dialog2 = ref<boolean>(false);
const dialog3 = ref<boolean>(false);
const dialog4 = ref<boolean>(false);
const dialog5 = ref<boolean>(false);
const dialog6 = ref<boolean>(false);
const dialog7 = ref<boolean>(false);
const dialog8 = ref<boolean>(false);

watch(dialog5, (val) => {
  if (!val) return;
  setTimeout(() => {
    dialog5.value = false;
  }, 5000);
});
</script>

<style scoped></style>
