<script>
import ReadMoreBtn from './ReadMoreBtn.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        ReadMoreBtn,
    }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-4">
            NEWSLETTER
        </h2>
        <input class="mb-4" type="text" placeholder="Email">
        <input class="mb-4" type="text" placeholder="Message">
        <div class="btn">
            <ReadMoreBtn />
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    .btn {
        align-self: flex-start;
    }
}
</style>