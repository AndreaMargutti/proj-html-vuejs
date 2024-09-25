<script>
import TopFooterBookings from './TopFooterBookings.vue';
import TopFooterLinks from './TopFooterLinks.vue';
import TopFooterNewstletter from './TopFooterNewstletter.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        TopFooterBookings,
        TopFooterLinks,
        TopFooterNewstletter,
    }
}
</script>

<template>
    <h1>TOP FOOTER</h1>
    <div class="container">
        <TopFooterBookings />
        <TopFooterLinks />
        <TopFooterLinks />
        <TopFooterNewstletter />

    </div>

</template>

<style scoped>
.container {
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-around;
}
</style>