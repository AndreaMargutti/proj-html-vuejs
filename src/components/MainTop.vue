<script>
import MainTopJumbo from "./MainTopJumbo.vue"
import MainTopCard from "./MainTopCard.vue";
export default {
  data() {
    return {
      cardsInfo: {
        speakerCard: {
            title: "Original Ideas",
            text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
            icon: "../assets/img/image (10).svg"
        },
        discCard: {
          title: "Music Studio",
          text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
          icon: "../assets/img/image (11).svg"
        },
        headsetCard: {
          title: "Acoustic Cover",
          text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
          icon: "../assets/img/image (12).svg"
        }
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