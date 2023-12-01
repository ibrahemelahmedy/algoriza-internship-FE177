<!-- @format -->

<template>
	<div
		class="avilable-room bg-white rounded-md overflow-hidden"
		v-for="roomDetail in roomDetails"
		:key="roomDetail.roomId">
		<img
			class="h-[200px] w-full"
			:src="roomDetail.roomImg"
			alt="room1" />
		<div class="details-rom px-5 pb-6">
			<h3 class="my-5 text-md font-[600]">
				{{ roomDetail.roomDetaile }}
			</h3>
			<ul>
				<li
					v-for="room in roomDetails[0].details"
					:key="room"
					class="flex gap-[10px] text-text-color mb-[10px]">
					<img
						:src="room.img"
						:alt="room.desc" />
					<p>{{ room.desc }}</p>
				</li>
			</ul>
			<button
				class="btn mt-6 w-full py-3"
				@click="redirect"
				>Reserve suite
			</button>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router';
	import { ref } from 'vue';

	// room Data

	const roomDetails = ref([
		{
			roomId: '1',
			roomPrice: '20',
			roomImg: '/src/assets/img/booking/hotel/hotelDetails/room1.png',
			roomDetaile: 'Standard twin ben, Multiple beds',
			details: [
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
					desc: '300 sq ft',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
					desc: 'Sleeps 3',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
					desc: '1 double bed and 1 twin bed',
				},
			],
		},
		{
			roomId: '1',
			roomPrice: '20',
			roomImg: '/src/assets/img/booking/hotel/hotelDetails/room2.png',
			roomDetaile: 'Standard twin ben, Multiple beds',
			details: [
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
					desc: '300 sq ft',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
					desc: 'Sleeps 3',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
					desc: '1 double bed and 1 twin bed',
				},
			],
		},
	]);

	// redirect To bayment Page
	const router = useRouter();
	const redirect = () => {
		router.push({
			name: 'payment',
		});
	};
</script>

<style scoped></style>
