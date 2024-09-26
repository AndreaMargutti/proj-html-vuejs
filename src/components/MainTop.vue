<script>
import MainTopJumbo from "./MainTopJumbo.vue"
import MainTopCard from "./MainTopCard.vue";
import MainTopInfo from "./MainTopInfo.vue";
import MainTopVideo from "./MainTopVideo.vue";
export default {
  data() {
    return {
      cardsInfo: [
        {
            title: "Original Ideas",
            text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
            icon: "../assets/img/image (10).svg"
      },
      {
          title: "Music Studio",
          text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
          icon: "../assets/img/image (11).svg"
      },
      {
          title: "Acoustic Covers",
          text: "Contrary popular belief, Lorem Ipsum not simply ipsum random text.",
          icon: "../assets/img/image (12).svg"
      }
      ]
    }
  },
  components: {
    MainTopJumbo,
    MainTopCard,
    MainTopInfo,
    MainTopVideo
  }
}
</script>

<template>
    <MainTopJumbo />
    <MainTopCard :cardInfo="cardsInfo" />
    <MainTopInfo />
    <MainTopVideo />
</template>

<style lang="scss" scoped>

</style>