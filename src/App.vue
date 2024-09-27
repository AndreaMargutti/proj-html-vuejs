<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";
import OverlayWindow from "./components/OverlayWindow.vue";

export default {
    data() {
        return {
            scrolledPx: 0,
            showSearchBar: false,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        ScrollTopButton,
        OverlayWindow
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handleScroll() {
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
    <AppHeader @openSearchBar="showSearchBar = true" />
    <!-- Main -->
    <AppMain />
    <!-- Main Footer -->
    <AppFooter />
    <!-- Scroll to Top Button-->
    <Transition>
        <ScrollTopButton @scrollToTop="scrollToTop" v-show="scrolledPx > 200" />
    </Transition>
    <OverlayWindow v-if="showSearchBar" @closeOverlay="this.showSearchBar = false" />
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