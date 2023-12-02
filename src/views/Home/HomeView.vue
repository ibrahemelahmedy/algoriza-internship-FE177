<!-- @format -->

<template>
	<Teleport
		v-if="isAuth"
		to="body">
		<theDialog
			:isAuth="isAuth"
			:deg="deg"></theDialog>
	</Teleport>
	<theHeader
		:isAuth="isAuth"
		:notWColor="notWColor"
		class="container items-center">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1 w-fit mx-auto md:mx-0 transition-all"
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
				class="flex lg:gap-4 gap-2 transition-all">
				<router-link
					class="transition-all lg:btn lg:px-3 lg:py-2 px-1 py-1 w-fit bg-main-color font-[500] text-sm whitespace-nowrap text-white"
					:to="{ name: 'register' }"
					>Register</router-link
				>
				<router-link
					class="transition-all lg:btn lg:px-3 lg:py-2 px-1 py-1 w-fit bg-main-color font-[500] text-sm whitespace-nowrap text-white"
					:to="{ name: 'signIn' }"
					>Sign In</router-link
				>
			</div>
		</template>
	</theHeader>

	<main class="container h-[300px]">
		<div class="landing relative py-2">
			<div class="image"
				><img
					class="w-full bg-cover"
					src="../../assets/img/home/landScap.png"
					alt=""
			/></div>
			<div
				class="welcomeMsg flex flex-col absolute-center md:max-w-2xl text-center transition-all">
				<h2
					class="whitespace-nowrap text-white md:font-bold text-xs md:text-3xl md:pb-6 font-[500] transition-all"
					>Enjoy Your Dream Vacation</h2
				>
				<p
					class="text-white hidden md:block md:text-lg tracking-wider transition-all"
					>Plan and book our perfect trip with expert advice, travel tips,
					destination information and inspiration from us</p
				>
			</div>
		</div>
		<searchBar
			:hotelsDetails="hotelsDetails"
			:isAuth="isAuth"
			class="relative md:top-[-50px] top-[-25px] w-[89%]" />
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
		<theFooter class="" />
	</main>
</template>
<script setup>
	import theDialog from '../../components/theDialog.vue';
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';

	import searchBar from '../../components/searchBar.vue';
	import worningLetter from '../../components/worningLetter.vue';
	import theFooter from '../../components/theFooter.vue';
	import yourVacation from './component/yourVacation.vue';
	import nextTrip from './component/nextTrip.vue';
	import popularHotels from './component/popularHotels.vue';
	import appDowenload from './component/appDowenload.vue';
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';

	const deg = ref(false);

	const isAuth = ref(false);
	// const isAuth = localStorage.getItem('isAuth');
	const hotelsDetails = ref(null);
	const route = useRoute();
	if (route.query) {
		isAuth.value = route.query.isAuth;
	}
	// Notification icon handel
	const notWColor = ref(true);
</script>
