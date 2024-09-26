<script>
import SearchBar from './SearchBar.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        SearchBar,
    },
    methods: {
        closeOverlay() {
            this.$emit('closeOverlay')
        }
    }
}
</script>

<template>
    <div class="background">
        <img class="close-button" src="../assets/img/image (22).svg" alt="Close Button" @click="closeOverlay">
        <SearchBar class="content" />
    </div>
</template>

<style lang="scss" scoped>
.background {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    .close-button {
        filter: invert(1);
        position: absolute;
        top: 20px;
        right: 30px;
        cursor: pointer;
    }
}

.content {
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%)
}
</style>