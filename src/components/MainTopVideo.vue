<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <section id="video"> 
        <img src="../assets/img/Video.jpg" alt="">
        <div>
            <i class="fa-regular fa-circle-play">
            </i>
            <h2>NEW MUSIC VIDEO</h2>
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    position: relative;
}

img {
    width: 100%;
}

div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #f2870c;
    font-size: 15rem;
    text-align: center;
    h2 {
        color: white;
    }
}

</style>