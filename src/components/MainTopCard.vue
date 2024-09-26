<script>
export default {
  data() {
    return {
      
    }
  },

  props: {
    cardInfo: {
      type: Array,
      required: true
  }
},

methods: {
  getImgPaths: function(imgPath){
        return new URL(imgPath, import.meta.url).href;
    }
}
}
</script>

<template>
  <section>
    <div class="card text-center w-100" v-for="(card, i) in cardInfo" :key="i">
      <div class="card-body">
        <img :src="getImgPaths(card.icon)" class="card-img-top">
        <h2 class="card-title">{{ card.title }}</h2>
        <p class="card-text">{{ card.text }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  background-color: #121212;
  color: #ffffff;
  border-radius: 0;
  padding: 30px;
  img {
    filter: invert(100%);
    height: 200px;
  }
}
.card-body {
  * {
    margin-bottom: 40px;
  }
  .card-title {
    text-transform: uppercase;
  }
  .card-text {
    font-weight: 100;
    font-size: 1.3rem;
  }
}

section {
  display: flex;
  max-width: 75%;
  margin: 0 auto;
  position: relative;
  top: -10rem;
}
</style>