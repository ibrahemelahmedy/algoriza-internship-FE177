<!-- @format -->

<template>
	<section
		v-for="hotel in hotels"
		:key="hotel"
		class="card flex max-h-[240px] w-full border gap-6 p-3 rounded-md mb-[24px]">
		<div class="image"
			><img
				class="rounded-md h-[200px] max-w-[285px]"
				:src="hotel.property.photoUrls[0]"
				alt="hotel image"
		/></div>

		<div class="content flex-1">
			<div class="first-part flex justify-between items-center mb-[10px]">
				<h3
					class="font-medium text-md truncate hover:overflow-visible max-w-[300px]"
					>{{ hotel.property.name }}</h3
				>
				<p
					v-if="hotel.property.priceBreakdown.strikethroughPrice"
					class="text-white bg-red-text py-[3px] px-[8px] rounded-lg text-xs"
					>Book now and receive
					{{
						intNum(
							degOfSal(
								intNum(hotel.property.priceBreakdown.strikethroughPrice.value),
								intNum(hotel.property.priceBreakdown.grossPrice.value),
							),
						)
					}}
					% off</p
				>
			</div>
			<div class="rate-part flex gap-2 mb-[17px]">
				<ul class="flex">
					<li v-if="intNum(getScore(hotel.property.reviewScore)) > 0"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotel.property.reviewScore)) > 1"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotel.property.reviewScore)) > 2"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotel.property.reviewScore)) > 3"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li v-if="intNum(getScore(hotel.property.reviewScore)) == 5"
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="half-star"
					/></li>
				</ul>
				<p class="p-text"
					>{{ intNum(getScore(hotel.property.reviewScore)) }} ({{
						hotel.property.reviewCount
					}}
					Reviews)</p
				>
			</div>
			<p class="p-text mb-2 font-[600]">{{ hotel.title }}</p>
			<div class="description flex mb-[18px] justify-between">
				<p class="text-[10px] w-[350px]">{{ hotel.accessibilityLabel }}</p>
				<p
					v-if="hotel.property.priceBreakdown.strikethroughPrice"
					class="over bg-green-text text-white text-xs py-[4px] px-[8px] text-start h-fit rounded-md">
					{{
						intNum(
							degOfSal(
								intNum(hotel.property.priceBreakdown.strikethroughPrice.value),
								intNum(hotel.property.priceBreakdown.grossPrice.value),
							),
						)
					}}
					% off
				</p>
			</div>
			<div class="last-part flex justify-between items-center">
				<button
					@click="redirectHotelDetails(hotel.hotel_id, hotel)"
					class="btn px-4 py-[6px] h-fit"
					>See availability
				</button>

				<div class="prices">
					<div
						class="price text-end mb-[6px] flex justify-end items-center gap-2">
						<p
							v-if="hotel.property.priceBreakdown.strikethroughPrice"
							class="sale text-red-text text-sm line-through font-[500]"
							>{{
								intNum(hotel.property.priceBreakdown.strikethroughPrice.value)
							}}</p
						>
						<p class="text-lg font-[500]">{{
							intNum(hotel.property.priceBreakdown.grossPrice.value)
						}}</p>
					</div>
					<div class="packge p-text font-[500]"> Includes taxes and fees </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { defineProps } from 'vue';
	import { useRouter } from 'vue-router';

	const { hotels, isAuth } = defineProps(['hotels', 'isAuth']);
	const router = useRouter();
	// console.log(hotels[0].property.photoUrls);

	// return integer number
	const intNum = (num) => {
		num = Math.ceil(num);
		return num;
	};

	const degOfSal = (realPrice, total) => {
		const sale = (realPrice - total) / 100;
		return sale;
	};

	const getScore = (num) => {
		num = (5 * num) / 10;
		return num;
	};

	const redirectHotelDetails = (id, hotel) => {
		router.push({
			name: 'hotelDetails',
			params: { id: id },
			query: {
				id: hotel.hotel_id,
				img: hotel.property.photoUrls[0],
				name: hotel.property.name,
				title: hotel.title,
				desc: hotel.accessibilityLabel,
				reviewNumber: hotel.property.reviewCount,
				reviewscore: hotel.property.reviewScore,
				price: hotel.property.priceBreakdown.grossPrice.value,
				// priceBeforeSale:
				// 	hotel.property.priceBreakdown.strikethroughPrice.value || '0',
				lon: hotel.property.longitude,
				lat: hotel.property.latitude,

				sale: hotel.sale,
				saleMsg: hotel.saleMsg,

				isAuth,
			},
		});
	};
</script>

<style scoped></style>
