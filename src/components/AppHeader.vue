<script>
import Navbar from "./Navbar.vue";

export default {
  name: "AppHeader",
  components: {
    Navbar,
  },
  data: () => ({
    // Struttura dati
    pagesList: [
      {
        id: 1,
        name: "Home",
        url: "#",
        dropList: [],
      },
      {
        id: 2,
        name: "Blog",
        url: "#",
        dropList: [],
      },
      {
        id: 3,
        name: "Events",
        url: "#",
        dropList: [
          {
            name: "Choral Music",
            url: "#",
          },
          {
            name: "Concert Band",
            url: "#",
          },
          {
            name: "Opera Concerts",
            url: "#",
          },
          {
            name: "Symphony Orchestra",
            url: "#",
          },
          {
            name: "Family Concerts",
            url: "#",
          },
        ],
      },
      {
        id: 4,
        name: "Gallery",
        url: "#",
        dropList: [],
      },
      {
        id: 5,
        name: "About Us",
        url: "#",
        dropList: [],
      },
      {
        id: 6,
        name: "Contact Us",
        url: "#",
        dropList: [],
      },
      {
        id: 7,
        name: "Shop",
        url: "#",
        dropList: [
          {
            name: "Product Type",
            url: "#",
          },
          {
            name: "Shop Page",
            url: "#",
          },
        ],
      },
    ],
  }),
};
</script>

<template>
  <!-- Header -->
  <header>
    <a href="#"><img src="../assets/img/Logo.png" alt="Lyricsmus" /></a>
    <!-- Navbar -->
    <Navbar :list="pagesList" />
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/color-variables" as *;
@use "../style/partials/mixins" as *;

header {
  height: 100px;
  background-color: #000;
  @include flex(row, nowrap);
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  img {
    display: block;
    max-width: 100%;
    height: 35px;
  }
}
</style>
