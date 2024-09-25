<script>
import TopFooterBookings from './TopFooterBookings.vue';
import TopFooterLinks from './TopFooterLinks.vue';
import TopFooterNewstletter from './TopFooterNewstletter.vue';

export default {
    data() {
        return {
            bookingsContacts: {
                address: '502 New Design Str, Melbourne, San Francisco, CA 94110, United States of America​ Australia',
                phoneNumber: '1 123-456-789',
                email: 'demo@example.com',
                socials: [
                    {
                        name: 'instagram',
                        link: '#'
                    },
                    {
                        name: 'facebook',
                        link: '#'
                    },
                    {
                        name: 'twitter',
                        link: '#'
                    },
                    {
                        name: 'youtube',
                        link: '#'
                    }
                ]
            },
            InformationLinks: {
                title: 'Information',
                links: [
                    {
                        text: 'Product Support',
                        link: '#'
                    },
                    {
                        text: 'Checkout',
                        link: '#'
                    },
                    {
                        text: 'Report Abuse',
                        link: '#'
                    },
                    {
                        text: 'Redeem Voucher',
                        link: '#'
                    },
                    {
                        text: 'Order Status',
                        link: '#'
                    }
                ]
            },
            SupportLink: {
                title: 'Support',
                links: [
                    {
                        text: 'Policies & Rules',
                        link: '#'
                    },
                    {
                        text: 'Privacy Policy',
                        link: '#'
                    },
                    {
                        text: 'License Policy',
                        link: '#'
                    },
                    {
                        text: 'My Account',
                        link: '#'
                    },
                    {
                        text: 'Locality',
                        link: '#'
                    },
                ]
            }
        }
    },
    components: {
        TopFooterBookings,
        TopFooterLinks,
        TopFooterNewstletter,
    }
}
</script>

<template>
    <div class="container">
        <TopFooterBookings :contacts="bookingsContacts" />
        <TopFooterLinks />
        <TopFooterLinks />
        <TopFooterNewstletter />

    </div>

</template>

<style scoped>
.container {
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}
</style>