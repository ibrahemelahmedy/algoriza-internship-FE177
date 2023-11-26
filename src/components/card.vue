<!-- @format -->

<template>
	<section
		v-for="hotel in hotels"
		:key="hotel"
		class="card flex max-h-[240px] w-full border gap-6 p-3 rounded-md mb-[24px]">
		<div class="image"
			><img
				class="rounded-md h-[200px] max-w-[285px]"
				:src="hotel.img"
				alt="hotel image"
		/></div>

		<div class="content flex-1">
			<div class="first-part flex justify-between items-center mb-[10px]">
				<h3 class="font-medium text-md">{{ hotel.name }}</h3>
				<p
					v-if="hotel.sale && hotel.sale !== ''"
					:class="`bg-${hotel.salecolor}-text`"
					class="text-white py-[3px] px-[8px] rounded-lg text-xs"
					>{{ hotel.saleMsg }}</p
				>
			</div>
			<div class="rate-part flex gap-2 mb-[17px]">
				<ul class="flex">
					<li
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li
						><img
							src="/src/assets/img/booking/rating/star-full.svg"
							alt="full-star"
					/></li>
					<li
						><img
							src="/src/assets/img/booking/rating/half-star.svg"
							alt="half-star"
					/></li>
				</ul>
				<p class="p-text">4.5 ({{ hotel.reviewNumber }} Reviews)</p>
			</div>
			<p class="p-text mb-2 font-[600]">{{ hotel.title }}</p>
			<div class="description flex mb-[18px] justify-between">
				<p class="text-[10px] w-[350px]">{{ hotel.desc }}</p>
				<p
					v-if="hotel.sale && hotel.salePrice !== ''"
					class="over bg-green-text text-white text-xs py-[4px] px-[8px] text-start h-fit rounded-md">
					5% off
				</p>
			</div>
			<div class="last-part flex justify-between items-center">
				<button
					@click="redirectHotelDetails(hotel.id, hotel)"
					class="btn px-4 py-[6px] h-fit"
					>See availability
				</button>

				<div class="prices">
					<div
						class="price text-end mb-[6px] flex justify-end items-center gap-2">
						<p
							v-if="hotel.sale && hotel.salePrice !== ''"
							class="sale text-red-text text-sm line-through font-[500]"
							>{{ hotel.salePrice }}</p
						>
						<p class="text-lg font-[500]">{{ hotel.price }}</p>
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
	const redirectHotelDetails = (id, hotel) => {
		console.log(hotel);
		router.push({
			name: 'hotelDetails',
			params: { id: id },
			query: {
				id: hotel.id,
				img: hotel.img,
				name: hotel.name,
				title: hotel.title,
				desc: hotel.desc,
				reviewNumber: hotel.reviewNumber,
				price: hotel.price,
				salePrice: hotel.salePrice,
				sale: hotel.sale,
				saleMsg: hotel.saleMsg,

				salecolor: hotel.salecolor,

				isAuth,
			},
		});
	};
</script>

<style scoped></style>
