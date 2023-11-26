<!-- @format -->

<template>
	<Teleport
		v-if="isAuth"
		to="body">
		<theDialog :isAuth="isAuth" />
	</Teleport>
	<theHeader class="container items-center">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1"
				:to="{ name: 'home' }">
				<img
					src="/src/assets/img/home/logo.png"
					alt="logo" />
				<h1 class="font-medium tracking-wide whitespace-nowrap"
					>my Dream place</h1
				>
			</RouterLink>
		</template>
		<template v-slot:nav>
			<navLink />
		</template>
		<template v-slot:button>
			<div
				v-if="!isAuth"
				class="flex gap-4">
				<router-link
					class="btn px-3 py-2"
					:to="{ name: 'register' }"
					>Register</router-link
				>
				<router-link
					class="btn px-3 py-2"
					:to="{ name: 'signIn' }"
					>Sign In</router-link
				>
			</div>

			<div
				v-else
				class="flex gap-4">
				<img
					class="cursor-pointer"
					src="/src/assets/img/home/notification 1.svg"
					alt="notification" />
				<img
					class="cursor-pointer"
					src="/src/assets/img/booking/header/profile-image.png"
					alt="profileimage" />
			</div>
		</template>
	</theHeader>

	<main class="container">
		<div class="landing relative py-2">
			<div class="image"
				><img
					class="w-full"
					src="../../assets/img/home/landScap.png"
					alt=""
			/></div>
			<div
				class="welcomeMsg flex flex-col absolute-center max-w-2xl text-center">
				<h2 class="whitespace-nowrap text-white font-bold text-3xl pb-6"
					>Enjoy Your Dream Vacation</h2
				>
				<p class="text-white text-lg tracking-wider"
					>Plan and book our perfect trip with expert advice, travel tips,
					destination information and inspiration from us</p
				>
			</div>
		</div>
		<searchBar
			:isAuth="isAuth"
			class="relative top-[-50px] w-[89%]" />
		<worningLetter />
		<yourVacation />
		<nextTrip />
		<popularHotels />
		<appDowenload />
		<section class="mt-[50px] mb-[10px] text-center">
			<h2 class="text-3xl font-semibold mb-5"
				>Explore the world with My Dream place</h2
			>
			<p class="text-main-color text-lg">Discover new places and experiences</p>
		</section>
	</main>
	<theFooter class="container" />
</template>
<script setup>
	import { ref } from 'vue';
	import theDialog from '../../components/theDialog.vue';
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';

	import searchBar from '../../components/searchBar.vue';
	import worningLetter from '../../components/worningLetter.vue';
	import yourVacation from './component/yourVacation.vue';
	import nextTrip from './component/nextTrip.vue';
	import popularHotels from './component/popularHotels.vue';
	import appDowenload from './component/appDowenload.vue';
	import theFooter from '../../components/theFooter.vue';
	import { useRoute } from 'vue-router';
	const route = useRoute();
	const isAuth = ref(false);
	isAuth.value = route.query.isAuth || false;
</script>
