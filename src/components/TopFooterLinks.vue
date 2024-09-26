<script>
export default {
    data() {
        return {

        }
    },
    props: {
        footerLinks: {
            type: Object,
            required: true,
        }
    }

}
</script>

<template>
    <div class="container">
        <h2 class="mb-4">{{ footerLinks.title }}</h2>
        <ul>
            <li class="mb-1" v-for="(link, index) in footerLinks.links" :key="index">
                <a :href="link.link">{{ link.text }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container {
    h2 {
        text-transform: uppercase;
    }
}

ul {
    list-style-type: none;
    padding-left: 0;

    li {
        padding-bottom: 1rem;
    }
}

a {
    text-decoration: none;
    font-weight: 300;
    color: lightgray;
    transition: color 0.2s ease;

    &:hover {
        color: orange;
    }
}
</style>