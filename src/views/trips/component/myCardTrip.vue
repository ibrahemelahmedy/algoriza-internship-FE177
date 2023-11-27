<!-- @format -->

<template>
	<article class="max-w-[1030px] mx-auto pt-[60px]">
		<h1 class="mb-7 text-5xl font-[600]">My trips</h1>
		<section
			v-for="hotel in hotels"
			:key="hotel.id"
			class="card flex max-h-[240px] bg-white border gap-6 p-5 rounded-md mb-[24px]">
			<div class="image"
				><img
					class="rounded-md h-[200px] max-w-[285px]"
					src="/src/assets/img/booking/payment/hotelDetails/hotel-img.png"
					alt="hotel image"
			/></div>

			<div class="content flex-1">
				<div class="first-part flex justify-between items-center mb-[10px]">
					<h3 class="font-[600] text-lg mt-1">{{ hotel.name }}</h3>
				</div>
				<div class="rate-part flex items-center gap-3 mb-[17px]">
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
					<p class="font-[400]">4.5 ({{ hotel.review }} Reviews)</p>
				</div>

				<div class="last-part flex justify-between mt-[20px] items-end">
					<div class="description flex gap-2 flex-col justify-between">
						<p class="text-red-text text-sm">Non refundable</p>
						<p class="w-[350px]">check in : {{ hotel.checkIn }}</p>
						<p class="w-[350px]">check Out : {{ hotel.checkOut }}</p>
						<p>2 night stay</p>
					</div>
					<div class="prices">
						<div
							class="price text-end mb-[6px] flex-col flex justify-end items-end gap-2">
							<div class="flex gap-2 justify-end items-center"
								><p
									v-if="hotel.priceAfterDes && hotel.priceBefDes !== ''"
									class="sale text-red-text text-md line-through font-[500]"
									>{{ hotel.priceBefDes }}</p
								>
								<p class="text-xl font-[600]">{{ hotel.priceAfterDes }}</p></div
							>
						</div>
						<div class="packge text-end text-sm font-[500] mb-4">
							Includes taxes and fees
						</div>
						<button
							@click="redirectHotelDetails(hotel.id, hotel)"
							class="btn px-[18px] py-[10px] h-fit"
							>View trip details
						</button>
					</div>
				</div>
			</div>
		</section>
	</article>
</template>

<script setup>
	import { inject, ref } from 'vue';
	const hotels = ref([]);
	const data = inject('data');
	hotels.value = data.value;
</script>

<style scoped></style>
