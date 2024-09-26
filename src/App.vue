<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import ScrollTopButton from "./components/ScrollTopButton.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        ScrollTopButton
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
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
    <ScrollTopButton @scrollToTop="scrollToTop" />
</template>

<style lang="scss">
@use "./style/general.scss";
@use "bootstrap/scss/bootstrap.scss";
</style>