<script>
import ReadMoreBtn from "./ReadMoreBtn.vue";
export default {
  components: {
    ReadMoreBtn,
  },

  data() {
    return {
      //creo l'array per le img per l'immagine di sfondo
      imageList: ["../assets/img/image.png", "../assets/img/image (1).png"],
      //creo l'indice per girare nell'array
      activeIndex: 0,
      buttonText: "READ MORE",
    };
  },

  methods: {
    changeImg() {
      if (this.activeIndex === 0) {
        this.activeIndex++;
      } else {
        this.activeIndex--;
      }
    },

    getImgPaths: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  },

  created() {
    setInterval(this.changeImg, 3500);
  },
};
</script>

<template>
  <section id="jumbo">
    <img :src="getImgPaths(this.imageList[this.activeIndex])" alt="" />
    <button class="slide-btn left" @click="changeImg"><i
      class="fa-solid fa-angle-left"></i></button>
    <div class="centered">
      <h2 v-if="this.activeIndex === 0">Instrumental Rock</h2>
      <h2 v-else="this.activeIndex === 1">Instrumental Rock</h2>
      <h1 v-if="this.activeIndex === 0">Music in this video</h1>
      <h1 v-else="this.activeIndex === 1">Music of the spirit</h1>
      <ReadMoreBtn :text="buttonText" />
    </div>
    <button class="slide-btn right" @click="changeImg"><i
      class="fa-solid fa-angle-right"></i></button>
  </section>
</template>

<style lang="scss" scoped>
#jumbo {
  //styling img
  img {
    width: 100%;
  }
  height: 43rem;
  margin-bottom: -95px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  //Inizio stile h3
  h2 {
    color: #f2870c;
    font-size: 2rem;
    animation: fadeIn 1s;
  }
  //Inizio stile h1
  h1 {
    color: #ffffff;
    font-size: 4rem;
    margin: 40px 0px 20px 0px;
    animation: fadeIn 1s;
  }
  //bottoni
  .slide-btn {
    display: none;
    position: absolute;
    top: 50%;
    //stile dei bottoni
    color: #ffffff;
    padding: 10px 15px;
    margin: 0 10px;
    background-color: #000000;
    opacity: 0.5;
    border: none;

    &:hover {
      opacity: 1;
      box-shadow: 0px 0px 2px #777;
    }
  }

  &:hover .slide-btn {
    display: block;
  }

  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
