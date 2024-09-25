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
        <h3>MUSIC BLOG</h3>
        <h2>BEST MUSIC BLOG</h2>
        <AppMainBottomBlogPost/>
        <AppMainBottomCarousel/>
    </section>
</template>

<style lang="scss" scoped>
#blog{
    background-color: black;
    color: #f2870c;
    height: 200px;
}

</style>