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
    }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-4">
            BOOKINGS
        </h2>
        <ul>
            <li>
                <p>
                    {{ contacts.address }}
                </p>
            </li>
            <li class="mb-2"><span>T: {{ contacts.phoneNumber }}</span></li>
            <li class="mb-2"><span>Email: <a :href="contacts.email.link">{{ contacts.email.text }}</a></span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container {}

ul {
    list-style-type: none;
    padding-left: 0;
}

a {
    text-decoration: none;
    color: white;
}
</style>