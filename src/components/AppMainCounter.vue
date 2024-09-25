<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "image (13).svg",
          number: 900,
          text: "CONCERTS",
          currentNumber: 900,
        },
        {
          img: "image (14).svg",
          number: 800,
          text: "HAPPY CLIENTS",
          currentNumber: 800,
        },
        {
          img: "image (15).svg",
          number: 400,
          text: "MUSIC AWARDS",
          currentNumber: 400,
        },
        {
          img: "image (16).svg",
          number: 1001,
          text: "TOTAL SONGS",
          currentNumber: 1001,
        },
      ],
    };
  },

  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="counter d-flex justify-content-center align-items-center">
    <section v-for="(card, index) in cards" :key="index" class="card">
      <img :src="getImagePath(card.img)" :alt="card.text" />
      <span id="card-number">{{ card.currentNumber }}</span>
      <span id="card-text">{{ card.text }}</span>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  position: relative;
  height: 500px;
  width: 100%;
  background-image: url("../assets/img/counter_parallax.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
  transition: background-position 0.1s ease-out;
}

.card {
  position: relative;
  z-index: 1;
  background-color: transparent;
  padding: 20px;
  margin: 20px;
  border: none;
  flex: 1;
  align-items: center;

  img {
    height: 90px;
    filter: invert(100%) brightness(2);

    &:hover {
      filter: invert(54%) sepia(83%) saturate(537%) hue-rotate(337deg)
        brightness(102%) contrast(101%);
    }
  }
}

#card-number {
  color: white;
  font-size: 70px;
  font-weight: bold;
}

#card-text {
  color: white;
  font-size: 25px;
  font-weight: bold;
}
</style>
