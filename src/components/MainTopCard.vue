<script>
export default {
  data() {
    return {};
  },

  props: {
    cardInfo: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getImgPaths: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div id="container">
    <section>
      <div
        class="card text-center w-100"
        v-for="(card, i) in cardInfo"
        :key="i"
      >
        <div class="card-body">
          <img :src="getImgPaths(card.icon)" class="card-img-top" />
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-text">{{ card.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #121212;
  color: #ffffff;
  border-radius: 0;
  padding: 30px;
  img {
    filter: invert(100%);
    height: 95px;
  }
}
.card-body {
  .card-title {
    text-transform: uppercase;
    margin: 30px;
  }
  .card-text {
    font-weight: 100;
    font-size: 1.3rem;
  }
}

#container {
  position: relative;
  width: 100%;
}

section {
  width: 95%;
  gap: 1%;
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -15%);
}
</style>
