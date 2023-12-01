<!-- @format -->

<template>
	<div class="w-full">
		<iframe
			class="w-full rounded-md"
			:src="`//maps.google.com/maps?q=${hotelDetails.lat},${hotelDetails.lon}&output=embed`"></iframe>
	</div>
	<div class="explore-area mt-[35px]">
		<h3 class="text-xl font-[500] mb-[22px]">Explore the area</h3>
		<ul>
			<li
				class="flex items-center mb-3 gap-2"
				v-for="explore in explorearea"
				:key="explore">
				<img
					class="w-6"
					:src="explore.img"
					:alt="explore.decs" />
				<p>{{ explore.decs }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { ref, defineProps } from 'vue';
	const props = defineProps(['hotelDetails']);
	const hotelDetails = props.hotelDetails;
	const explorearea = ref([
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/plane.svg',
			decs: 'Hotel Penselvenyia',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Travis Bakery store house',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Olivia Johnson Garden',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Norman Opera Circus',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Rockdeset hotel',
		},
	]);
</script>

<style scoped></style>
