<!-- @format -->

<template>
	<!-- overview -->

	<div class="overview border-b pb-11 pt-6 px-10 flex flex-col gap-7">
		<h3 class="text-xl font-[500]">OverView</h3>
		<p>{{ hotelDetails.desc }} </p>
		<p
			>Featuring free WiFi throughout the property, Lakeside Motel Waterfront
			offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free
			private parking is available on site.
		</p>
		<p
			>Each room at this motel is air conditioned and comes with a flat-screen
			TV. You will find a kettle, toaster and a microwave in the room. Each room
			is fitted with a private bathroom. Guests have access to barbecue
			facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside
			Motel Waterfront, while Paynesville is 14 mi from the property.
		</p>
		<p
			>Couples in particular like the location – they rated it 9.2 for a
			two-person trip.</p
		>
	</div>
	<!-- facilities -->
	<div class="top-facilities pb-11 flex flex-col px-10 gap-7 mt-[26px]">
		<h3 class="text-xl font-[500]">Top facilities</h3>
		<ul class="grid grid-cols-2">
			<!-- <p>{{ hotelData.facilities_block.facilities }}</p> -->
			<li
				class="mb-[13px]"
				v-for="facilitie in hotelData.facilities_block.facilities"
				:key="facilitie">
				<div class="flex gap-3 items-center">
					<img
						src="/src/assets/img/booking/hotel/hotelDetails/topFacilities/home-wifi 1.svg"
						alt="Free wifi" />
					<p>{{ facilitie.name }}</p>
				</div>
			</li>
			<!-- <span class="material-icons w-6">{{ facilitie.icon }}</span> -->
			<!-- <span>{{ hotelData }}</span> -->
			<!-- <li
				class="mb-[13px]"
				v-for="facilitie in facilities"
				:key="facilitie">
				<div class="flex gap-3 items-center">
					<img
						:src="facilitie.img"
						:alt="facilitie.decs" />
					<p>{{ facilitie.decs }}</p>
				</div>
			</li> -->
		</ul>
	</div>
</template>

<script setup>
	import { useTaskStore } from '../../../stores/store';
	const taskStore = useTaskStore();
	import { ref, defineProps } from 'vue';
	const props = defineProps(['hotelDetails']);
	const hotelDetails = props.hotelDetails;
	const data = JSON.parse(await taskStore.getHotelDetails());
	const hotelData = await data.data;

	// const faciliti = ref([
	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/home-wifi 1.svg',
	// 		decs: 'Free wifi',
	// 	},

	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/bag-tick-2 1.svg',
	// 		decs: 'Business Services',
	// 	},
	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/wind 1.svg',
	// 		decs: 'Air Conditioning',
	// 	},
	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/lifebuoy 1.svg',
	// 		decs: 'Swimming pool',
	// 	},
	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/car 1.svg',

	// 		decs: 'Parking available',
	// 	},

	// 	{
	// 		img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/like-1 1.svg',
	// 		decs: 'Top rated in area',
	// 	},
	// ]);
</script>

<style scoped></style>
