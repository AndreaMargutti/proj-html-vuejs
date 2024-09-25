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
    <div class="box">
        <h1>
            newsletter
        </h1>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Message">
        <ReadMoreBtn />
    </div>

</template>

<style lang="scss" scoped>
.box {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>