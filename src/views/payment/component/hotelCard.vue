<!-- @format -->

<template>
	<section class="rounded-md overflow-hidden">
		<div class="w-[400px]">
			<img
				class="w-full h-[180px] rounded-md"
				:src="hotelDetails.img"
				alt="hotelDetails" />
		</div>
		<div class="explore-area pt-[35px] bg-white px-5">
			<h3
				class="font-medium text-md truncate hover:overflow-visible max-w-[300px]"
				>{{ hotelDetails.name }}</h3
			>
			<!-- <h3 class="text-md font-[600] mb-[10px]">Lakeside Motel Warefront</h3> -->
			<div class="rate-part flex gap-2 mb-[17px]">
				<ul class="flex">
					<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 0"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 1"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 2"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 3"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotelDetails.reviewscore)) == 5"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="half-star"
					/></li>
				</ul>
				<p class="p-text"
					>{{ intNum(getScore(hotelDetails.reviewscore)) }} ({{
						hotelDetails.reviewNumber
					}}
					Reviews)</p
				>
			</div>
			<div class="flex flex-col gap-2 mt-[25px] pb-5">
				<p class="stat text-red-text">Non refundable</p>

				<p class="checkIn"
					>Check in: {{ dayS(hotelDetails.checkin) }},{{
						monthS(hotelDetails.checkin)
					}}
					{{ getdateNum(hotelDetails.checkin) }},{{
						getYearNum(hotelDetails.checkin)
					}}
				</p>
				<p class="checkOut"
					>Check out: {{ dayS(hotelDetails.checkout) }},{{
						monthS(hotelDetails.checkout)
					}}
					{{ getdateNum(hotelDetails.checkout) }},{{
						getYearNum(hotelDetails.checkout)
					}}</p
				>
				<p
					>{{
						getdateNum(hotelDetails.checkout) - getdateNum(hotelDetails.checkin)
					}}
					night stay</p
				>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { defineProps, onMounted, ref } from 'vue';

	// const hotelDetails = ref(null);
	const { hotelDetails } = defineProps(['hotelDetails']);
	// return integer number
	const intNum = (num) => {
		num = Math.ceil(num);
		return num;
	};

	const getScore = (num) => {
		num = (5 * num) / 10;
		return num;
	};

	// date handle
	const dayS = (data) => {
		const date = new Date(data);

		return date.toLocaleDateString('en-US', { weekday: 'long' });
	};

	const monthS = (data) => {
		const date = new Date(data);
		return date.toLocaleDateString('en-US', { month: 'long' });
	};
	const getdateNum = (data) => {
		const date = new Date(data).getDate();
		return date;
	};
	const getYearNum = (data) => {
		const date = new Date(data).getFullYear();
		return date;
	};
</script>

<style scoped></style>
