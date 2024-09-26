<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <button><strong>{{ text }}</strong></button>
</template>

<style scoped>
button {
  color: white;
  padding: 10px 30px;
  background-color: transparent;
  border: 1px solid #f2870c;
  transition-property: background-color;
  /* Ritarda l'applicazione del background-color in :hover */
  transition-duration: 0.5s;

  &:hover {
    background-color: #f2870c;
  }
}
</style>
