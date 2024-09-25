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
        <h3>Instrumental Rock</h3>
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
        //Inizio stile h3
        h3 {
            color: #F2870C;
        }
        //Inizio stile h1
        h1 {
            color: #FFFFFF;
        }
    }
</style>