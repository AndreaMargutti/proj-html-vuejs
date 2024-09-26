<script>
export default {
    data() {
        return {
        }
    },
    props: {
        contacts: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-4">
            BOOKINGS
        </h2>
        <ul>
            <li class="address">
                <span> {{ contacts.address }} </span>
            </li>
            <li class="mb-2"><span>T: {{ contacts.phoneNumber }}</span></li>
            <li class="mb-2"><span>Email: <a :href="contacts.email.link">{{ contacts.email.text }}</a></span></li>
        </ul>
        <ul class="socials d-flex">
            <li v-for="(social, index) in contacts.socials" :key="index">
                <a :href="social.link">
                    <img :src="getImageUrl(social.url)" :alt="social.name">
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding-left: 0;

    li {
        padding-bottom: 1rem;
    }
}

span {
    font-weight: 300;
    color: lightgray;
}

.address {
    max-width: 200px;
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

.socials {
    gap: 1rem;

    li {
        a {
            img {
                height: 0.9rem;
                filter: invert(1);

                &:hover {
                    //Credits: MultiplyByZer0 "https://stackoverflow.com/a/43960991/604861"
                    filter: invert(68%) sepia(72%) saturate(3975%) hue-rotate(358deg) brightness(99%) contrast(93%);
                }
            }
        }
    }
}
</style>