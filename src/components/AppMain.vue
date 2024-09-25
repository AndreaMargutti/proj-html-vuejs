<script>
import AppMainSenseTheJazz from "./AppMainSenseTheJazz.vue";
import ReadMoreBtn from "./ReadMoreBtn.vue";
import AppMainInstrumentalRock from "./AppMainInstrumentalRock.vue";
import AppMainCounter from "./AppMainCounter.vue";
import MainTop from "./MainTop.vue"
export default {
  data() {
    return {};
  },
  components: {
    AppMainSenseTheJazz,
    ReadMoreBtn,
    AppMainInstrumentalRock,
    AppMainCounter,
    MainTop,
  },
};
</script>

<template>
  <MainTop />
  <AppMainSenseTheJazz />
  <AppMainInstrumentalRock />
  <AppMainCounter />
</template>

<style scoped></style>
