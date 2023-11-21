<!-- @format -->

<template>
	<section class="flex flex-col my-[50px]">
		<div class="start-msg mb-8 w-3/5">
			<h2 class="text-2xl font-semibold">Popular hotels</h2>
		</div>
		<div class="popularHotel">
			<ul class="flex gap-4">
				<li
					v-for="popularHotel in popularHotels"
					:key="popularHotel">
					<img
						class="mb-3"
						:src="popularHotel.image"
						:alt="popularHotel.name" />
					<p class="text-md font-medium my-1 cursor-pointer">{{
						popularHotel.name
					}}</p>
					<p class="text-text-color text-xs">{{ popularHotel.num }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';

	const popularHotels = ref({
		LakesideMotelWarefront: {
			name: 'Lakeside Motel Warefront',
			image: '/src/assets/img/home/popularHotel/Lakeside Motel Warefront.png',
			num: '2246 properties',
		},
		RecceGrahamResort: {
			name: 'Recce Graham resort',
			image: '/src/assets/img/home/popularHotel/Recce Graham resort.png',
			num: '1278 properties',
		},
		FiresideDinners: {
			name: 'Fireside Dinners',
			image: '/src/assets/img/home/popularHotel/Fireside Dinners.png',
			num: '480 properties',
		},
		OculousInnStay: {
			name: 'Oculous Inn Stay',
			image: '/src/assets/img/home/popularHotel/Oculous Inn Stay.png',
			num: '320 properties',
		},
	});
</script>
