<!-- @format -->

<template>
	<theHeader
		:notWColor="notWColor"
		:isAuth="isAuth"
		class="header container items-start flex py-5">
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
		</template>
	</theHeader>
	<main class="container bg-gray-bg">
		<myCardTrip> </myCardTrip>
		<worningLetter />
	</main>

	<theFooter class="container bg-gray-bg" />
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';
	import myCardTrip from './component/myCardTrip.vue';
	import worningLetter from '../../components/worningLetter.vue';

	import theFooter from '../../components/theFooter.vue';
	import { onMounted, provide, ref } from 'vue';
	import { useRoute } from 'vue-router';
	const isAuth = localStorage.getItem('isAuth');

	const route = useRoute();
	const hotels = ref([
		{
			id: '1',
			name: 'Lakeside Motel Warefront',
			img: '/src/assets/img/booking/hotel/hotelDetails/2.png',

			reviewscore: '0',
			reviewNumber: '1200',

			checkin: ' Sunday, March 18, 2022',
			checkout: 'Tuesday, March 20, 2022',
			priceBefDes: '$150',
			price: '130',
		},
	]);
	const hotel = ref({
		id: route.query.id,
		name: route.query.name,
		rate: route.query.rate,
		review: route.query.review,
		checkIn: route.query.checkIn,
		checkOut: route.query.checkOut,
		priceBefDes: route.query.priceBefDes,
		priceAfterDes: route.query.priceAfterDes,
	});
	onMounted(function () {
		hotels.value.push(hotel.value);
	});
	provide('data', hotels);
	// Notification icon handel
	const notWColor = ref(true);
</script>

<style scoped></style>
