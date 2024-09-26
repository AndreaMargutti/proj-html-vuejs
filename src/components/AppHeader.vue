<script>
import Navbar from "./Navbar.vue";

export default {
	components: {
		Navbar
	},
	data: () => ({
		// Struttura dati
		list: [
			{
				id: 1,
				section: "Home",
				href: "#",
				sublist: []
			},

			{
				id: 2,
				section: "Blog",
				href: "#",
				sublist: []
			},

			{
				id: 3,
				section: "Events",
				href: "#",
				sublist: [
					{
						name: "Choral Music",
						href: "#"
					},

					{
						name: "Concert Band",
						href: "#"
					},

					{
						name: "Opera Concerts",
						href: "#"
					},

					{
						name: "Symphony Orchestra",
						href: "#"
					},

					{
						name: "Family Concerts",
						href: "#"
					}
				]
			},

			{
				id: 4,
				section: "Gallery",
				href: "#",
				sublist: []
			},

			{
				id: 5,
				section: "About Us",
				href: "#",
				sublist: []
			},

			{
				id: 6,
				section: "Contact Us",
				href: "#",
				sublist: []
			},

			{
				id: 7,
				section: "Shop",
				href: "#",
				sublist: [
					{
						name: "Product Type",
						href: "#"
					},

					{
						name: "Shop Page",
						href: "#"
					}
				]
			}
		]
	})
}
</script>

<template>
	<h1>AppHeader</h1>
</template>

<style scoped></style>