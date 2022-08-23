import { defineStore, mapState, storeToRefs } from "pinia";

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
// 읽기 전용 계산 속성 매핑
// export default {
//   getComputedStyle: {
//     ...mapState(useCounterStore, ["counter"]),
//     ...mapState(useCounterStore, {
//       myOwnName: "counter",
//     }),
// 위 두개는 같지만 작성방법이 다르다.
//     double: (store) => store.counter * 2,
//     magicValue(store) {
//       return store.someGetter + this.counter + this.length;
//     },
//   },
// };
