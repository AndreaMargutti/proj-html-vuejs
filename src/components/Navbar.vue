<script>
export default {
    props: {
        list: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        currentPage: 0
    })
}
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar">
        <ul class="navbar-list m-0">
            <li v-for="(item, i) in list" :key="item.id" class="navbar-list-item">
                <a :class="{ active: i === currentPage }" v-if="!item.sublist[0]" href="#" v-text="item.section"></a>
                <div v-else class="dropdowns">
                    <a class="dropdowns" href="#" v-text="item.section">
                    </a>
                    <ul class="dropdown-menus">
                        <li class="" v-for="item in list[i].sublist"><a href="#" v-text="item.name"></a>
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

* {
    color: white;
}

.active {
    color: $primary-color;
}

.navbar {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.navbar-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 2rem;
    list-style-type: none;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
}

a:hover {
    color: $primary-color;
}

ul {
    list-style-type: none;
}

.dropdown-menus {
    width: 250px;
    background-color: #1F1F1F;
    position: absolute;
    top: 100px;
    padding: 0;
}

.dropdown-menus li {
    padding: 1rem;
    border-bottom: 1px solid lightgray;
}
</style>