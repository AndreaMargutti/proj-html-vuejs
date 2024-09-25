<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <section id="jumbo">
        <h2>Instrumental Rock</h2>
        <h1>Music in this video</h1>
        <h1>Music of the spirit</h1>
    </section>
</template>

<style lang="scss" scoped>
    #jumbo {
        // Da togliere in seguito
        min-height: 50rem;
        background-image: url('../assets/img/image.png');
        background-repeat: no-repeat;
        background-size: cover;
        
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
        }
    }
</style>