<template>
  <div class="wrap">
    <h2>Vuetify Image</h2>
    <v-row>
      <v-col cols="12" md="3" sm="6" v-for="n in 4" :key="n">
        <v-img src="https://picsum.photos/1600/800" :aspect-ratio="16 / 9" cover
          ><template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                indeterminate
                color="grey-lighten-4"
              ></v-progress-circular></div
          ></template>
          <v-btn small icon="mdi-heart-multiple-outline"></v-btn>
        </v-img>
      </v-col>
    </v-row>
    <h2>Lazy</h2>
    <v-responsive class="overflow-y-auto" max-height="400">
      <div class="pa-6 text-center position-sticky">Scroll down</div>
      <v-responsive min-height="50vh"></v-responsive>
      <div class="text-center text-body-2 mb-12">
        The card will appear below:
      </div>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card class="mx-auto" max-width="336">
          <v-card-title>Card title</v-card-title>
          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque
            laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a,
            commodo mollis, magna. In turpis. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus
            hendrerit tortor. Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>
    <v-img :src="testImg"></v-img>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import testImg from "@/assets/butterfly.jpg";

const isActive = ref<boolean>(false);
</script>

<style scoped></style>
