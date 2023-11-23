<!-- @format -->

<template>
	<theHeader class="header container text-white items-start flex py-5">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1"
				:to="{ name: 'home' }">
				<img
					src="/src/assets/img/booking/header/logo.svg"
					alt="logo" />
				<h1 class="font-medium tracking-wide whitespace-nowrap"
					>my Dream place</h1
				>
			</RouterLink>
		</template>
		<template v-slot:nav>
			<navLink class="text-white" />
		</template>
		<template v-slot:button>
			<img
				class="cursor-pointer"
				src="/src/assets/img/booking/header/notification.svg"
				alt="notification" />
			<img
				class="cursor-pointer"
				src="/src/assets/img/booking/header/profile-image.png"
				alt="profileimage" />
		</template>
	</theHeader>
	<main class="container">
		<searchBar class="relative top-[-25px] w-[80%]" />
		<article>
			<section class="side-section">
				<div class="property-name"></div>
				<div class="filter-by">
					<div class="pudget"></div>
					<div class="rating"></div>
				</div>
			</section>
			<section class="main-section">
				<div class="hotel-result">
					<div class="title">
						<h2>Melbourne : 2,582 search results found</h2>
						<div class="sort-by"></div>
					</div>
					<div class="hotel-cards">
						<div class="hotel-card"></div>
					</div>
				</div>
			</section>
		</article>
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';
	import searchBar from '../../components/searchbar.vue';
</script>

<style scoped>
	.header {
		background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
		min-height: 200px;
	}
</style>
