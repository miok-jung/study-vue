<!-- <template>
  <TextFieldVue />
  <TextField ref="inputRef" :text="text" @customInput="(e) => (text = e)">
  </TextField>
  <input v-model="text" />
  <v-btn
    :style="[
      {
        color: text ? 'red' : 'black',
      },
    ]"
    @click="inputRef?.hide()"
  >
    안보여
  </v-btn>
  <v-btn @click="inputRef?.show()"> 보여 </v-btn>
</template> -->

<!-- <script setup lang="ts">
// import TextFieldVue from "@/components/vuetify/TextField.vue";
// import TextField from "@/components/TextField.vue";
// import { onMounted, ref, CSSProperties } from "vue";
import { onMounted, ref } from "vue";
const text = ref("fdsa");
interface ICustomInput {
  show?: () => void;
  hide: () => void;
}

// fdsa

// const redbuto: CSSProperties = {
//   border: "1px solid black",
// };
// // const black;

function temp1(test: string, test2?: string) {
  if (test2) console.log("test2가 있다");
}

temp1("a");

const temp = undefined;

if (temp) console.log(temp);

const inputRef = ref<ICustomInput>();
onMounted(() => {
  console.log(inputRef.value);
});
</script> -->
<template>
  <TextFieldVue />
</template>

<script setup lang="ts">
import TextFieldVue from "@/components/vuetify/TextField.vue";
</script>

<style scoped></style>
