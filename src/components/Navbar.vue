<script>
export default {
  name: "Navbar",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    currentPage: 0,
  }),
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar p-0">
    <ul class="navbar-list m-0 h-100">
      <li class="navbar-list-item h-100" v-for="(item, i) in list" :key="item.id"
        :class="{ 'shop-item': item.name === 'Shop' }">
        <!-- Aggiungi classe "shop-item" -->

        <a v-if="!item.dropList[0]" :href="item.url" :class="{ active: i === currentPage }" v-text="item.name"></a>

        <div v-else class="drop-menu">
          <a :href="item.url" :class="{ active: i === currentPage }">{{ item.name }} <i
              class="fa-solid fa-angle-down"></i></a>

          <ul class="drop-list m-0 p-0">
            <li class="drop-list-item" v-for="(dropItem, j) in item.dropList" :key="j">
              <a :href="dropItem.url" v-text="dropItem.name"></a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/color-variables.scss" as *;
@use "../style/partials/mixins.scss" as *;

.navbar {
  height: 100%;

  .navbar-list {
    @include flex(row, nowrap);
    align-items: center;
    gap: 2rem;

    .drop-list {
      display: none;
      width: 250px;
      background-color: #1f1f1f;
      position: absolute;
      top: 50px;
      list-style: none;

      li {
        padding: 1rem;
      }

      li:not(:last-child) {
        border-bottom: 1px solid #333;
      }
    }

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;

      .active {
        color: $primary-color;
      }

      &:hover {
        color: $primary-color;
      }
    }
  }

  .navbar-list-item:hover .drop-list {
    display: block;
  }

  .navbar-list-item:hover .drop-menu>a {
    color: orange;
  }

  .navbar-list-item {
    display: flex;
    align-items: center;
  }

  .navbar-list-item:first-child a:first-child {
    color: orange;
  }

  .shop-item .drop-list {
    right: 0;
    left: auto;
  }
}
</style>
