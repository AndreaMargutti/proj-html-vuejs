<script>
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
      
    }
  },
  methods:{
    // mi creo una funzione per creare il path delle immagini
    getImgCarousel(rawPath){
      const imgPath = new URL( rawPath, import.meta.url).href;
      return imgPath;
    }
  }
}
</script>

<template>
  <div class="main-carousel">
    <div class="box" v-for="(itemCarousel, index) in imgCarousel" :key="index" >
      <img :src="getImgCarousel(itemCarousel.path)" :alt="itemCarousel.label">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-carousel{
  background-color: pink;
  height: 200px;
  display: flex;
  align-items: center;


  .box{
  height: 100px;
  width: calc(100% / 10);
  border: 1px black;
  background-color: blue;
    img{
      width: 100%;
      height: auto;
    }
  }


}

</style>