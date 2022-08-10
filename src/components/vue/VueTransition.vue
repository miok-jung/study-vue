<template>
  <!-- TODO 고양이도 할 수 있는 Vue.js도서빌린 후 진행 -->
  <!-- LINK https://rintiantta.github.io/jpub-vue/ -->
  <h2>Transition Children</h2>
  <div>
    <button @click="Add">추가</button><button>전체</button
    ><button v-for="n in [3, 5]" :key="n">{{ n }}의 배수</button>
  </div>
  <transition-group tag="ul" class="list">
    <li
      v-for="(item, index) in filteredList"
      :key="item"
      class="item"
      :data-index="index"
      @click="remove(item)"
    >
      {{ item }}
    </li>
  </transition-group>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

const current = 1;
// const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const filteredList = computed(() => {
  return list.filter((el) => el % current === 0);
});
const Add = () => {
  const newNumber = Math.max.apply(null, list) + 1;
  const index = Math.floor(Math.random() * (list.length + 1));
  list.splice(index, 0, newNumber);
};

const remove = (item: number) => {
  console.log("REMOVE", item);
  list.splice(list.indexOf(item), 1);
  return list;
};
</script>

<style scoped lang="scss">
button {
  border: 1px solid $color1;
  padding: 0.5rem 1rem;
}
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  cursor: pointer;
}
/* 트랜지션 전용 스타일 */

.v-enter-active,
.v-leave-active,
.v-move {
  transition: opacity 1s, transform 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
