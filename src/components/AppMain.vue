<script>
import AppMainSenseTheJazz from "./AppMainSenseTheJazz.vue";
import ReadMoreBtn from "./ReadMoreBtn.vue";
import AppMainInstrumentalRock from "./AppMainInstrumentalRock.vue";
import AppMainCounter from "./AppMainCounter.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppMainSenseTheJazz,
    ReadMoreBtn,
    AppMainInstrumentalRock,
    AppMainCounter,
  },
};
</script>

<template>
  <h1>AppMain</h1>

  <AppMainSenseTheJazz />
  <AppMainInstrumentalRock />
  <AppMainCounter />
</template>

<style scoped></style>
