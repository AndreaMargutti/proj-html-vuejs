<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";

export default {
    data() {
        return {
            scrolledPx: 0,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        ScrollTopButton
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handleScroll() {
            console.log('gestico lo scroll');
            this.scrolledPx = window.scrollY;

        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<template>
    <!-- Main Header -->
    <AppHeader />
    <!-- Main -->
    <AppMain />
    <!-- Main Footer -->
    <AppFooter />
    <!-- Scroll to Top Button-->
    <Transition>
        <ScrollTopButton @scrollToTop="scrollToTop" v-show="scrolledPx > 200" />
    </Transition>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss";
@use "./style/general.scss";

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>