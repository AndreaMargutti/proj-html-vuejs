<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        openSearchBar() {
            this.$emit('openSearchBar');
        }
    }
}
</script>

<template>
    <div @click="openSearchBar()">
        <img src="../assets/img/image (8).svg" alt="Search">
    </div>
</template>

<style lang="scss" scoped>
div {
    cursor: pointer;

    img {
        filter: invert(1);
        height: 100%;

        &:hover {
            filter: invert(68%) sepia(72%) saturate(3975%) hue-rotate(358deg) brightness(99%) contrast(93%);
        }
    }
}
</style>