<script>
import MainTopJumbo from "./MainTopJumbo.vue"
import MainTopCard from "./MainTopCard.vue";
export default {
  data() {
    return {
      cardsInfo: {
        
      }
    }
  },
  components: {
    MainTopJumbo,
    MainTopCard
  }
}
</script>

<template>
    <MainTopJumbo />
    <MainTopCard />
</template>

<style lang="scss" scoped>
</style>