<script>
import ReadMoreBtn from "./ReadMoreBtn.vue";

export default {
  data() {
    return { buttonText: "READ MORE" };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
    const scrollPosition = window.scrollY;
    const parallaxDiv = this.$el.querySelector(".instrumental-rock");
    
    if (parallaxDiv) {
      parallaxDiv.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
  }
  },
  components: { ReadMoreBtn },
};
</script>

<template>
  <div class="instrumental-rock">
    <div class="content flex-column">
      <h6>INSTRUMENTAL ROCK</h6>
      <h2>ALBUM OUT NOW</h2>
      <ReadMoreBtn :text="buttonText" />
    </div>
  </div>
</template>

<style scoped>
.instrumental-rock {
  height: 800px;
  width: 100%;
  background-image: url("../assets/img/cms_parallax.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
  transition: background-position 0.1s ease-out;
  padding-left: 35px;
}

.content {
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  h6 {
    margin: 0;
    font-size: 30px;
    color: #f2870c;
  }
  h2 {
    font-size: 100px;
    color: white;
    margin: 30px 0;
  }
}
</style>
