<script>
import ReadMoreBtn from "./ReadMoreBtn.vue";
export default {
  components: {
    ReadMoreBtn,
  },

  data() {
    return { buttonText: "READ MORE" };
  },
};
</script>

<template>
  <section>
    <h6>WHO WE ARE</h6>
    <h1>SENSE THE JAZZ</h1>
    <p>
      The story of Jazz and Blues Society is the story of determination,
      passion, idealism, community, and of course, music. Founded in 1985 and
      incorporated in 1986, as a community based, not-for-profit, charitable
      arts organization located in Vancouver, British Columbia, the society,
      from the very beginning, has worked diligently to establish Vancouver as a
      centre for the creation and exchange of sounds and ideas between the
      local, national and international music communities.
    </p>
    <ReadMoreBtn :text="buttonText" />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #000000;
  padding-top: 400px;
  padding-bottom: 100px;
  text-align: center;
}
h6 {
  color: #f2870c;
}
h1 {
  color: white;
  font-size: 55px;
}

p {
  margin: 50px 0;
  padding: 0 300px;
  color: #cccccc;
  font-weight: 100;
  font-size: 20px;
}
</style>
