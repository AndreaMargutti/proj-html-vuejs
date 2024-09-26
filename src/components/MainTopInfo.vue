<script>
import ReadMoreBtn from './ReadMoreBtn.vue';
export default {
  components: {
    ReadMoreBtn,
  },

  data() {
    return {
      
    }
  }
}
</script>

<template>
    <section>
      <h6>WHO WE ARE</h6>
      <h1>SENSE THE JAZZ</h1>
      <p>The story of Jazz and Blues Society 
        is the story of determination, passion, idealism, community, and of course, music. 
        Founded in 1985 and incorporated in 1986, as a community based, not-for-profit, charitable 
        arts organization located in Vancouver, British Columbia, the society, from the very beginning, 
        has worked diligently to establish Vancouver as a centre for the creation and exchange of sounds 
        and ideas between the local, national and international music communities.</p>
        <ReadMoreBtn />
    </section>
</template>

<style lang="scss" scoped>
section {
    min-height: 50rem;
    background-color: #000000;
    padding-top: 300px;
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
  color: white;
  font-weight: 100;
  font-size: 2.5rem;
}
</style>