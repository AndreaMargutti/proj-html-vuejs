<script>
import AppMainBottomBlogPost from './AppMainBottomBlogPost.vue';
import AppMainBottomCarousel from './AppMainBottomCarousel.vue';
export default {
  data() {
    return {
      
    }
  },
  components:{
    AppMainBottomBlogPost,
    AppMainBottomCarousel
  }
}
</script>

<template>
    <section id="blog">
        <h4>MUSIC BLOG</h4>
        <h2>BEST MUSIC BLOG</h2>
        <AppMainBottomBlogPost/>
        <AppMainBottomCarousel/>
    </section>
</template>

<style lang="scss" scoped>
#blog{
  background-color: black;
  color: #f2870c;
  height: 1000px;

  h4{
    text-align: center;
    padding-top: 50px;
  }
  h2{
    color: white;
    text-align: center;
    font-size: 3.5rem;
  }
}
</style>