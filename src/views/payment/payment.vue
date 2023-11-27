<!-- @format -->

<template>
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
	<main class="container bg-[#f4f4f4]">
		<article class="title pt-[60px]">
			<h1 class="text-3xl font-[600] mb-[30px]">Secure your reservation</h1>
			<worningLetter class="mb-[30px]" />
			<section class="main grid gap-[30px]">
				<section class="payment-part col-start-1 col-end-7 max-w-[910px]">
					<!-- bookingDetails -->
					<bookingData />
					<!-- paymentDetails -->
					<paymentData />
					<!-- important Infotrmation -->
					<importInfo />
				</section>
				<section class="side-section col-start-7 col-end-13">
					<hotelcard />
					<priceDetails class="mt-[30px]" />
				</section>
			</section>
		</article>
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import worningLetter from '../../components/worningletter.vue';
	import bookingData from './component/bookingData.vue';
	import paymentData from './component/paymentData.vue';
	import importInfo from './component/importInfo.vue';
	import hotelcard from './component/hotelCard.vue';
	import priceDetails from './component/priceDetails.vue';
</script>

<style scoped></style>
