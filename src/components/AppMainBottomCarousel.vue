<script>
// stabilisco come inizio il primo indice della seconda copia dell'array
const startIndex = 10;
// stabilisco come minimo,l'indice iniziale della prima copia dell'array
const minIndex = 0;
//stabilisco come max, l'indice iniziale della terza copia dell'array 
const maxIndex = 20;

// in millisecondi
const autoIncrementDuration = 3000;

// dove salvo l'id del setInterval
let intervalId = null;

export default {
  data() {
    return {
      imgCarousel:[
        {path:'../assets/img/instagram_img1.jpg', label:'instagram-img1'},
        {path:'../assets/img/instagram_img2.jpg', label:'instagram-img2'},
        {path:'../assets/img/instagram_img3.jpg', label:'instagram-img3'},
        {path:'../assets/img/instagram_img4.jpg', label:'instagram-img4'},
        {path:'../assets/img/instagram_img5.jpg', label:'instagram-img5'},
        {path:'../assets/img/instagram_img6.jpg', label:'instagram-img6'},
        {path:'../assets/img/instagram_img7.jpg', label:'instagram-img7'},
        {path:'../assets/img/instagram_img8.jpg', label:'instagram-img8'},
        {path:'../assets/img/instagram_img9.jpg', label:'instagram-img9'},
        {path:'../assets/img/instagram_img10.jpg', label:'instagram-img10'},
      ],
      currentIndex: startIndex,
    }
  },
  methods:{
    // mi creo una funzione per creare il path delle immagini
    getImgCarousel(rawPath){
      const imgPath = new URL( rawPath, import.meta.url).href;
      return imgPath;
    },
    // vado a gestire lo slide che scorre a destra
    toNextBox() {
      this.currentIndex++;
      // vado a mettere una condizione di controllo fino a quando
      // deve andare avanti
      if (this.currentIndex > maxIndex) {
        this.currentIndex = startIndex + 1;
      }
      console.log("arrowRight", this.currentIndex);
    },
    // vado a gestire lo slide che scorre a sinistra
    toPreviousBox() {
      this.currentIndex--;
      if (this.currentIndex < minIndex) {
        this.currentIndex = startIndex - 1;
      }
      console.log("arrowLeft", this.currentIndex);
    },
    // vado a clonare il mio array di img in modo da poter
    // scorrere diverse immagini continuamente nel carousel
    getImageCarousel() {
      return [
        ...this.imgCarousel,
        ...this.imgCarousel,
        ...this.imgCarousel
      ]
    },
    getPositionLeft() {
      // vado a calcolare le misure dello schermo
      const windowSize = document.querySelector("body").offsetWidth;
      // creo la variabile del numero di box img visibili in pagina
      const boxesPerPage = 8;
      // mi calcolo la width delle box  in base alla width 
      // dello schermo e arrotodono per eccesso
      const boxWidth = Math.ceil(windowSize / boxesPerPage);
      return `-${boxWidth * this.currentIndex}px`; 
    }
  },
  created(){
    intervalId = setInterval(() => {
      this.toNextBox();
    }, autoIncrementDuration);
  },
  unmounted(){
    clearInterval(intervalId);
  }
}
</script>

<template>
  <!-- provo inizialmente con gli eventi al click per scorrere a destra e a sinistra -->
  <div class="main-carousel" @click.exact="toNextBox" @click.ctrl="toPreviousBox">

    <div class="box" 
       v-for="(itemCarousel, index) in getImageCarousel()" 
       :key="index" 
       :style="{ left: getPositionLeft()}" 
       >
      <img :src="getImgCarousel(itemCarousel.path)" :alt="itemCarousel.label">
    </div>

  </div>
</template>

<style lang="scss" scoped>

// nell'ipotesi che il carousel abbia design vada da una estremità all'altra
// dello schermo e che le box delle immagini siano quadrate
// l'altezza dei box sarà la stessa della larghezza ovvero 100vw/numero dei box
// delle immagini in questo caso 9

$boxes_per_page: 8;
$height: calc(100vw / $boxes_per_page);

.main-carousel{
  height: $height;
  overflow: hidden;
  white-space: nowrap;
  .box{
  height:$height;
  width: calc(100% / $boxes_per_page);
  position: relative;
  transition: all .5s ease-in-out;
  display: inline-block;
    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>