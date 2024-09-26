<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "image (13).svg",
          number: 900,
          text: "CONCERTS",
          currentNumber: 0,
        },
        {
          img: "image (14).svg",
          number: 800,
          text: "HAPPY CLIENTS",
          currentNumber: 0,
        },
        {
          img: "image (15).svg",
          number: 400,
          text: "MUSIC AWARDS",
          currentNumber: 0,
        },
        {
          img: "image (16).svg",
          number: 1001,
          text: "TOTAL SONGS",
          currentNumber: 0,
        },
      ],
    };
  },
  mounted() {
    this.cards.forEach((card, index) => {
      this.animateValue(this.$refs.valueRefs[index], 0, card.number, 20000);
    });
  },
  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },
    animateValue(obj, start = 0, end = null, duration = 3000) {
      if (obj) {
        // save starting text for later (and as a fallback text if JS not running and/or google)
        var textStarting = obj.innerHTML;

        // remove non-numeric from starting text if not specified
        end = end || parseInt(textStarting.replace(/\D/g, ""));

        var range = end - start;

        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;

        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
          var now = new Date().getTime();
          var remaining = Math.max((endTime - now) / duration, 0);
          var value = Math.round(end - remaining * range);
          // replace numeric digits only in the original string
          obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
          if (value == end) {
            clearInterval(timer);
          }
        }

        timer = setInterval(run, stepTime);
        run();
      }
    },
  },
};
</script>

<template>
  <div class="counter d-flex justify-content-center align-items-center">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <img :src="getImagePath(card.img)" :alt="card.text" />
      <div>
        <p id="card-text">{{ card.text }}</p>
        <p id="card-number" ref="valueRefs" class="value">
          {{ card.currentNumber }}
        </p>
      </div>
    </div>
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
