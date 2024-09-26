<script>
import AppMainSenseTheJazz from "./AppMainSenseTheJazz.vue";
import ReadMoreBtn from "./ReadMoreBtn.vue";
import AppMainInstrumentalRock from "./AppMainInstrumentalRock.vue";
import AppMainCounter from "./AppMainCounter.vue";
import MainTop from "./MainTop.vue"

import AppMainBottom from './AppMainBottom.vue'
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
    AppMainBottom
  },
};
</script>

<template>
  <MainTop />
  <AppMainSenseTheJazz />
  <AppMainInstrumentalRock />
  <AppMainCounter />
  <AppMainBottom />
</template>

<style scoped></style>