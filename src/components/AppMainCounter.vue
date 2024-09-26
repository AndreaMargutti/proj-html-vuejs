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
      hasAnimated: false, // Impedisce che l'animazione parta più volte
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const counterSection = this.$refs.counter;
      if (counterSection) {
        const counterOffset = counterSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Controlla se il div .counter è visibile nella finestra
        if (counterOffset < windowHeight && !this.hasAnimated) {
          this.animateCounters(); // Avvia l'animazione
          this.hasAnimated = true; // Impedisce che venga eseguito più volte
        }
      }
    },
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },
    animateCounters() {
      // Avvia l'animazione per ciascuna card
      this.cards.forEach((card, index) => {
        this.animateValue(this.$refs.valueRefs[index], 0, card.number, 4000);
      });
    },
    animateValue(obj, start = 0, end = null, duration = 3000) {
      if (obj) {
        let textStarting = obj.innerHTML;
        end = end || parseInt(textStarting.replace(/\D/g, ""));
        let range = end - start;
        let minTimer = 50;
        let stepTime = Math.abs(Math.floor(duration / range));
        stepTime = Math.max(stepTime, minTimer);
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        function run() {
          let now = new Date().getTime();
          let remaining = Math.max((endTime - now) / duration, 0);
          let value = Math.round(end - remaining * range);
          obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
          if (value === end) {
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
  <div>
    <!-- Sezione Counter -->
    <div
      class="counter d-flex justify-content-center align-items-center"
      ref="counter"
    >
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="getImagePath(card.img)" :alt="card.text" />
        <div>
          <p ref="valueRefs" class="value text-center">
            {{ card.currentNumber }}
          </p>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

img {
  height: 90px;
  filter: invert(100%) brightness(2);
  &:hover {
    filter: invert(54%) sepia(83%) saturate(537%) hue-rotate(337deg)
      brightness(102%) contrast(101%);
  }
}

.value {
  color: white;
  font-size: 70px;
  font-weight: bold;
}

p {
  color: white;
  font-size: 25px;
  font-weight: bold;
}
</style>
