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
	<header>
		<img src="../assets/img/Logo.png" alt="Logo">
		<Navbar :list="list" />
	</header>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	background-color: #000;
	padding: 0 2rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

img {
	height: 35px;
}
</style>