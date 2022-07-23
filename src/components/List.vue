<template>
  <div>
    <h2>{{ data.title }}</h2>
    <img :src="`${data.image}`" :alt="`${data.title} 이미지`" />
    <p>{{ data.content }}</p>
    <p>{{ comma(data.price) }} 원</p>
  </div>
</template>

<script>
export default {
  name: "vue-list",
  props: {
    data: Object,
  },
  // 함수를 만드는 공간 반복이 가능
  // FIXME 이 메소드를 props?
  methods: {
    comma(v) {
      return String(v)
        .replace(/[^0-9]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
