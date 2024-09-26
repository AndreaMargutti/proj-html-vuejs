<script>
import App from '../App.vue';

export default {
    data() {
        return {

        }
    },
    methods: {
        scrollToTop() {
            this.$emit("scrollToTop");
        }
    }
}
</script>

<template>
    <div class="button" id="scrollButton" @click="scrollToTop()">
        <img src="../assets/img/image (21).svg" alt="Scroll Top">
    </div>
</template>

<style lang="scss" scoped>
.button {
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 1rem;
    color: orange;
    cursor: pointer;

    img {
        filter: invert(68%) sepia(72%) saturate(3975%) hue-rotate(358deg) brightness(99%) contrast(93%);
        border: 2px solid orange;
        padding: 0.5rem;
    }
}
</style>