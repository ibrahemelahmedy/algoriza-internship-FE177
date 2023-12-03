<!-- @format -->

<template>
	<section class="rounded-md overflow-hidden">
		<h2 class="bg-[#85E0AB] p-5 font-[600]">price Details</h2>
		<div class="price bg-white">
			<div class="border-b px-5 pt-[23px]">
				<p class="flex justify-between mb-3 p-text"
					>1 room X
					{{
						getdateNum(hotelDetails.checkout) - getdateNum(hotelDetails.checkin)
					}}
					nights
					<span
						>${{
							Math.ceil(
								(getdateNum(hotelDetails.checkout) -
									getdateNum(hotelDetails.checkin)) *
									hotelDetails.price,
							)
						}}</span
					>
				</p>
				<p class="flex justify-between mb-5 p-text"
					>Tax and service fees <span>$ 8.32</span>
				</p></div
			>
			<p class="total flex px-5 py-[25px] justify-between text-lg font-[600]"
				>Total
				<span
					>${{
						Math.ceil(
							(getdateNum(hotelDetails.checkout) -
								getdateNum(hotelDetails.checkin)) *
								hotelDetails.price +
								8.32,
						)
					}}</span
				>
			</p>
		</div>
	</section>
</template>

<script setup>
	import { defineProps } from 'vue';

	const { hotelDetails } = defineProps(['hotelDetails']);
	const getdateNum = (data) => {
		const date = new Date(data).getDate();
		return date;
	};
</script>

<style scoped></style>
