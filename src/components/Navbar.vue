<script>
export default {
    name: "Navbar",
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
    <nav class="navbar p-0">
        <ul class="navbar-list m-0 h-100">
            <li class="navbar-list-item h-100" v-for="(item, i) in list" :key="item.id">
                <a v-if="!item.dropList[0]" :href="item.url" :class="{ active: i === currentPage }"
                    v-text="item.name"></a>
                <div v-else class="drop-menu">
                    <a :href="item.url" :class="{ active: i === currentPage }">{{ item.name }} <i
                            class="fa-solid fa-angle-down"></i></a>
                    <ul class="drop-list m-0 p-0">
                        <li class="drop-list-item" v-for="(item, i) in list[i].dropList" :key="i"><a :href="item.url"
                                v-text="item.name"></a></li>
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
            background-color: #1F1F1F;
            position: absolute;
            top: 100px;

            li {
                padding: 1rem;
            }

            li:not(:last-child) {
                border-bottom: 1px solid #333;
            }
        }

        a {
            color: #FFF;
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

ul>li:first-child {
    color: $primary-color;
}
</style>