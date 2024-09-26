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
<div class="card text-center w-25" v-for="(card, i) in cardInfo" :key="i">
  <div class="card-body">
    <img :src="getImgPaths(card.icon)" class="card-img-top">
    <h5 class="card-title">{{ card.title }}</h5>
    <p class="card-text">{{ card.text }}</p>
  </div>
</div>
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
</style>