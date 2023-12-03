<!-- @format -->

<template>
	<div
		class="avilable-room bg-white rounded-md overflow-hidden"
		v-for="room in rooms"
		:key="room">
		<img
			class="h-[200px] w-full"
			:src="room['photos']['2']['url_original']"
			alt="room1" />
		<div class="details-rom px-5 pb-6">
			<h3 class="my-5 text-md font-[600]">
				{{
					room['bed_configurations']['0']['bed_types']['0']['name_with_count']
				}}-({{
					room['bed_configurations']['0']['bed_types']['0']['description']
				}})
			</h3>
			<ul>
				<!-- <span class="material-icons text-xs">{{ facilitie['icon'] }}</span> -->
				<li
					v-for="facilitie in hotelData['top_ufi_benefits']"
					:key="facilitie"
					class="flex gap-[10px] text-text-color mb-[10px]">
					<img
						src="/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg"
						:alt="facilitie['translated_name']" />
					<p>{{ facilitie['translated_name'] }}</p>
				</li>
			</ul>
			<button
				class="btn mt-6 w-full py-3"
				@click="redirect"
				>Reserve suite
			</button>
		</div>
	</div>
	<!-- <div
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
	</div> -->
</template>

<script setup>
	import { useRouter } from 'vue-router';
	import { ref } from 'vue';
	import { useTaskStore } from '../../../stores/store';
	const taskStore = useTaskStore();
	const rooms = ref(null);
	const hotelData = ref(null);
	const nestedRooms = ref(null);
	// room Data
	const data = JSON.parse(await taskStore.getHotelDetails());

	hotelData.value = await data.data;
	rooms.value = await data.data.rooms;
	nestedRooms.value = Object.values(rooms.value)[0];

	// const roomDetails = ref([
	// 	{
	// 		roomId: '1',
	// 		roomPrice: '20',
	// 		roomImg: '/src/assets/img/booking/hotel/hotelDetails/room1.png',
	// 		roomDetaile: 'Standard twin ben, Multiple beds',
	// 		details: [
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
	// 				desc: '300 sq ft',
	// 			},
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
	// 				desc: 'Sleeps 3',
	// 			},
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
	// 				desc: '1 double bed and 1 twin bed',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		roomId: '2',
	// 		roomPrice: '20',
	// 		roomImg: '/src/assets/img/booking/hotel/hotelDetails/room2.png',
	// 		roomDetaile: 'Standard twin ben, Multiple beds',
	// 		details: [
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
	// 				desc: '300 sq ft',
	// 			},
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
	// 				desc: 'Sleeps 3',
	// 			},
	// 			{
	// 				img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
	// 				desc: '1 double bed and 1 twin bed',
	// 			},
	// 		],
	// 	},
	// ]);

	// redirect To bayment Page
	const router = useRouter();
	const redirect = () => {
		router.push({
			name: 'payment',
		});
	};
</script>

<style scoped></style>
