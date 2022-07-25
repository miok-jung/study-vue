<template>
  <div class="list-wrap">
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

<style lang="scss">
.list-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 0;
  padding: 2vh 0;
  h2 {
    margin-bottom: 2vh;
  }
  img {
    width: 50vw;
    margin-bottom: 2vh;
  }
  p {
    margin: 1vh 0;
  }
}
@include tablet {
  .list-wrap {
    img {
      width: 70vw;
    }
  }
}
@include mobile {
  .list-wrap {
    img {
      width: 90vw;
    }
  }
}
</style>
