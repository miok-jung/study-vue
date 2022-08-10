import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    // = ref
    counter: 0,
    length: 0,
  }),
  getters: {
    // = computed
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // = function
    increment() {
      this.counter++;
    },
  },
});
