<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
        AppFooter
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
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "./style/general.scss";
@use "bootstrap/scss/bootstrap.scss";
</style>