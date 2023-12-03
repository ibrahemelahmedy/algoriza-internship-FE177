<!-- @format -->

<template>
	<article class="max-w-[1030px] mx-auto pt-[60px] pb-2">
		<h1 class="mb-7 text-5xl font-[600]">My trips</h1>
		<section
			v-for="hotel in hotels"
			:key="hotel.id"
			class="card flex max-h-[255px] bg-white border gap-6 p-5 rounded-md mb-[24px]">
			<div class="image"
				><img
					class="rounded-md h-[200px] w-[243px] max-w-[285px]"
					:src="hotel.img || '/src/assets/img/booking/hotel/hotelDetails/2.png'"
					alt="hotel image"
			/></div>

			<div class="content flex-1">
				<div class="first-part flex justify-between items-center mb-[10px]">
					<h3 class="font-[600] text-lg mt-1">{{ hotel.name }}</h3>
				</div>
				<div class="rate-part flex items-center gap-3 mb-[17px]">
					<div class="rate-part flex gap-2 mb-[17px]">
						<ul class="flex">
							<li v-if="intNum(getScore(hotels.reviewscore)) > 0"
								><img
									src="/src/assets/img/booking/rating/star-full.svg"
									alt="full-star"
							/></li>
							<li v-if="intNum(getScore(hotels.reviewscore)) > 1"
								><img
									src="/src/assets/img/booking/rating/star-full.svg"
									alt="full-star"
							/></li>
							<li v-if="intNum(getScore(hotel.reviewscore)) > 2"
								><img
									src="/src/assets/img/booking/rating/star-full.svg"
									alt="full-star"
							/></li>
							<li v-if="intNum(getScore(hotel.reviewscore)) > 3"
								><img
									src="/src/assets/img/booking/rating/star-full.svg"
									alt="full-star"
							/></li>
							<li v-if="intNum(getScore(hotel.reviewscore)) == 5"
								><img
									src="/src/assets/img/booking/rating/star-full.svg"
									alt="half-star"
							/></li>
						</ul>
						<p class="p-text"
							>{{ intNum(getScore(hotel.reviewscore)) || '0' }} ({{
								hotel['reviewNumber'] || '0'
							}}
							Reviews)</p
						>
					</div>
				</div>

				<div class="last-part flex justify-between mt-[20px] items-end">
					<div class="description flex gap-2 flex-col justify-between">
						<p class="text-red-text text-sm">Non refundable</p>
						<p
							class="w-[350px]"
							v-if="hotel.checkin"
							>check in :{{ dayS(hotel.checkin) }},{{ monthS(hotel.checkin) }}
							{{ getdateNum(hotel.checkin) }},{{ getYearNum(hotel.checkin) }}</p
						>
						<p
							class="w-[350px]"
							v-else
							>check in :{{ hotel.checkIn }}</p
						>
						<p
							v-if="hotel.checkout"
							class="w-[350px]"
							>check Out : {{ dayS(hotel.checkout) }},{{
								monthS(hotel.checkout)
							}}
							{{ getdateNum(hotel.checkout) }},{{
								getYearNum(hotel.checkout)
							}}</p
						>
						<p
							class="w-[350px]"
							v-else
							>check in :{{ hotel.checkOut }}</p
						>
						<p
							>{{
								getdateNum(hotel.checkout) - getdateNum(hotel.checkin) ||
								getdateNum(hotel.checkOut) - getdateNum(hotel.checkIn)
							}}
							night stay</p
						>
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
								<p class="text-xl font-[600]"
									>$
									{{
										Math.ceil(
											(getdateNum(hotel.checkout) - getdateNum(hotel.checkin)) *
												hotel.price,
										) || '130'
									}}</p
								>
							</div>
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
	import { inject, onMounted, ref } from 'vue';

	const hotels = ref([]);
	const data = inject('data');
	hotels.value = data.value;
	const hoteldetails = ref(null);
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
	const getdateNum = (data = 0) => {
		const date = new Date(data).getDate();
		return date;
	};
	const getYearNum = (data) => {
		const date = new Date(data).getFullYear();
		return date;
	};
	onMounted(() => {
		if (localStorage.getItem('hotelDetails')) {
			hoteldetails.value = JSON.parse(localStorage.getItem('hotelDetails'));

			for (let i = 0; i < hotels.value.length; i++) {
				if (hotels.value[i].id === hoteldetails.value.id) {
					hotels.value = data.value;
				} else {
					hotels.value = data.value;
					hotels.value.push(hoteldetails.value);
				}
			}
		}
	});
</script>

<style scoped></style>
