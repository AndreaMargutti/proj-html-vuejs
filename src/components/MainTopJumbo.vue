<script>
import ReadMoreBtn from "./ReadMoreBtn.vue"
export default {
  data() {
    return {
      
    }
  },
  components: {
    ReadMoreBtn
  }
}
</script>

<template>
    <section id="jumbo">
            <button class="slide-btn left"> < </button>
            <h2>Instrumental Rock</h2>
            <h1>Music in this video</h1>
            <h1>Music of the spirit</h1>
            <ReadMoreBtn :style="{ fontSize: 14 + 'px' }"/>
            <button class="slide-btn right"> > </button>
        </section>
</template>

<style lang="scss" scoped>
    #jumbo {
        min-height: 50rem;
        background-image: url('../assets/img/image.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        //Inizio stile h3
        h2 {
            color: #F2870C;
            font-size: 2rem;
        }
        //Inizio stile h1
        h1 {
            color: #FFFFFF;
            font-size: 4rem;
            padding: 50px 0; 
        }
        //bottoni
        .slide-btn {
            position: absolute;
            top: 50%;
            //stile dei bottoni
            color: #FFFFFF;
            padding: 20px;
            margin: 0 10px;
            background-color: #000000;
            opacity: 0.5;
            border: none;
        }
        .left {
            left: 0;
        }
        .right {
            right: 0;
        }
    }
    //sezione bottoni
</style>