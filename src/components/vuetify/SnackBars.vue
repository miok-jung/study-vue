<template>
  <div class="wrap">
    <h2>SnacBars</h2>

    <v-row>
      <v-col cols="12" md="6">
        <p>가장 기본 snackbars입니다.</p>
        <v-btn @click="snackbar1 = true">Open Snackbar</v-btn>
        <v-snackbar v-model="snackbar1"
          >Hello I'm a snackbar<br />Is this OK multi line?
          <template v-slot:actions>
            <v-btn @click="snackbar1 = false">Close</v-btn>
          </template>
        </v-snackbar>
      </v-col>
      <v-col cols="12" md="6">
        <p>색상을 자유롭게 넣을 수 있다.</p>
        <v-btn @click="snackbar2 = true" color="orange-darken-2"
          >Open Snackbar</v-btn
        >
        <v-snackbar v-model="snackbar2" :timeout="timeout"
          >Is this sure Timeout?
          <template v-slot:actions>
            <v-btn @click="snackbar2 = false" color="red">Close</v-btn>
          </template>
        </v-snackbar>
      </v-col>
      <v-col cols="12" md="6">
        <p>timeout을 넣어 일정시간 사라지게 할 수 있다.</p>
        <v-snackbar :timeout="3000">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">open</v-btn>
          </template>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </v-snackbar>
      </v-col>
      <v-col cols="12" md="6">
        <p>rounded를 통해 스낵바의 모양을 꾸밀 수 있다.</p>
        <v-snackbar :timeout="2000" color="blue-grey" variant="plain">
          <template v-slot:activator="{ props }">
            <v-btn
              rounded="pill"
              color="blue-grey"
              class="ma-2"
              v-bind="props"
              variant="tonal"
              >open</v-btn
            >
            <!-- "elevated(default) | outlined | tonal | flat | text | plain” -->
          </template>
          <p class="text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const snackbar1 = ref<boolean>(false);
const snackbar2 = ref<boolean>(false);
const timeout = 2000;
</script>

<style scoped></style>
