<!-- @format -->

<template>
	<div class="rating-part my-5 rounded-md border overflow-hidden">
		<div class="text-sm mb-2 bg-booking-gray p-[18px]">
			<label class="font-medium block">Rating</label>
		</div>
		<div class="rate-content bg-white px-[18px] py-1 mt-3">
			<p class="p-text mb-2">Show only ratings more than</p>
			<div class="flex">
				<div
					class="relative flex gap-1 items-center p-2 border cursor-pointer"
					v-for="numberOfRating in numbersOfRating"
					:key="numberOfRating">
					<label
						class="containers block p-text cursor-pointer"
						:for="numberOfRating.num">
						<input
							class="absolute opacity-0 cursor-pointer"
							type="radio"
							value="rate"
							name="rate"
							:id="numberOfRating.num" />
						{{ numberOfRating.num }}
						<span
							class="checkmark absolute top-0 left-0 h-full w-full bg-transparent border cursor-pointer"></span>
					</label>
					<img
						class="w-[18px]"
						src="/src/assets/img/booking/rating/star-full.svg"
						alt="full-star"
				/></div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';

	const numbersOfRating = ref([
		{
			num: '1',
		},
		{
			num: '2',
		},
		{
			num: '3',
		},
		{
			num: '4',
		},
		{
			num: '5',
		},
	]);
</script>

<style scoped>
	/* The container */
	.containers {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* When the radio button is checked, add a blue background */
	.container input:checked ~ .checkmark {
		border-color: #2196f3;
	}
</style>
