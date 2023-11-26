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
	<main class="container bg-[#fbfbfb]">
		<article class="py-6">
			<section class="landPart grid gap-5">
				<div class="col-start-1 col-end-9">
					<img
						class="rounded-md"
						src="/src/assets/img/booking/hotel/hotelDetails/1.png"
						alt="firstImg" />
				</div>
				<div class="col-start-9 col-end-13">
					<img
						class="rounded-md mb-4"
						src="/src/assets/img/booking/hotel/hotelDetails/2.png"
						alt="secondImg" />
					<img
						class="rounded-md"
						src="/src/assets/img/booking/hotel/hotelDetails/3.png"
						alt="thirdImg" />
				</div>
			</section>
		</article>
		<article class="hotel-details-part">
			<section class="hotel-details">
				<div class="sections-nav bg-white shadow-sm flex gap-[14px]">
					<p
						class="text-lg font-[500] py-[10px] px-[14px] border-b-main-color border-b-4"
						>Overview</p
					>
					<a
						href="#room-part"
						class="text-lg font-[500] py-[10px] px-[14px] cursor-pointer hover:border-b-main-color hover:border-b-4"
						>Room</a
					>
				</div>
				<div class="details grid gap-[30px]">
					<div class="main-part col-start-1 col-end-9"> </div>
					<div class="side-part col-start-9 col-end-13">
						<img
							class="w-full"
							src="/src/assets/img/booking/hotel/hotelDetails/map.png"
							alt="map" />
					</div>
				</div>
			</section>
			<section class="room-details"></section>
		</article>
		<worningLetter />
		<theFooter />
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';
	import worningLetter from '../../components/worningletter.vue';
	import theFooter from '../../components/theFooter.vue';
	import { useRoute } from 'vue-router';
	import { ref } from 'vue';

	const isAuth = ref(false);
	const hotels = ref([]);
	const route = useRoute();
	isAuth.value = route.query.isAuth;
	hotel.value = route.query.hotel;
</script>

<style scoped></style>
