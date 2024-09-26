<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "gallery1.jpg",
          title: "A ROLL AND BANG THE FLOOR",
        },
        {
          img: "gallery2.jpg",
          title: "YOUR MELODY TO OUR MUSIC",
        },
        {
          img: "gallery3.jpg",
          title: "TOUCHING HEAVEN ON FREQUENCY",
        },
        {
          img: "gallery4.jpg",
          title: "MUSIC MAKES STRONGER BEATS",
        },
        {
          img: "gallery5.jpg",
          title: "SOUND IS THE SPARK OF TIME",
        },
        {
          img: "gallery6.jpg",
          title: "MAKE YOUR NIGHT GROOVY",
        },
      ],
    };
  },
  methods: {
    getImagePath(image) {
      // Percorso dinamico per le immagini con Vite
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="main-jazz d-flex justify-content-center flex-column">
    <div class="jazz-top-text d-flex align-items-center flex-column">
      <h6>WHO WE ARE</h6>
      <h1>SENSE THE JAZZ</h1>
    </div>
    <!-- Contenitore per le card -->
    <div class="music-card d-flex flex-wrap justify-content-center">
      <!-- Ciclo v-for per generare le card -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card text-white d-flex justify-content-center align-items-center"
      >
        <div class="img">
          <img :src="getImagePath(card.img)" :alt="card.title" />
        </div>
        <div class="title">
          <h3>{{ card.title }}</h3>
        </div>
        <div class="stream-on">
          <span class="d-flex gap-4 align-items-center">
            Stream On:
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-music"></i>
            <i class="fa-solid fa-cloud"></i>
            <i class="fa-solid fa-compass"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$black: #000000;
$orange: #f2870c;
$white: white;

.main-jazz {
  background-color: $black;

  h6 {
    color: $orange;
    margin-top: 100px;
  }

  h1 {
    color: $white;
    font-size: 55px;
    margin-bottom: 35px;
  }

  .music-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .card {
      background-color: $black;
      width: calc(33.33% - 40px);
      margin-bottom: 40px;

      .img {
        width: 100%;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        // Effetto zoom-in al passaggio del mouse
        &:hover img {
          transform: scale(1.1);
        }
      }
    }
  }

  h3 {
    font-size: 23px;
    margin: 10px 0;
  }

  .svg-inline--fa {
    color: white;
    display: inline-block; // Aggiunto
    transition: color 0.3s ease; // Aggiunto

    &:hover {
      color: #f2870c;
    }
  }
}
</style>
