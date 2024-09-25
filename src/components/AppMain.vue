<script>
import AppMainSenseTheJazz from "./AppMainSenseTheJazz.vue";
import ReadMoreBtn from "./ReadMoreBtn.vue";
import AppMainInstrumentalRock from "./AppMainInstrumentalRock.vue";
export default {
  data() {
    return {};
  },
  components: { AppMainSenseTheJazz, ReadMoreBtn, AppMainInstrumentalRock },
};
</script>

<template>
  <h1>AppMain</h1>

  <AppMainSenseTheJazz />
  <AppMainInstrumentalRock />
</template>

<style scoped></style>
