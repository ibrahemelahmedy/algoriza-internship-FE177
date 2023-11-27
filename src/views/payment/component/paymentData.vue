<!-- @format -->

<template>
	<section class="payment bg-white rounded-md mb-[30px]">
		<!-- title -->
		<div
			class="flex gap-4 pl-6 py-[18px] items-center text-white bg-main-color">
			<img
				src="/src/assets/img/booking/payment/card-tick 1.svg"
				alt="roomSafe" />
			<p class="font-[500] text-lg">Payment options</p>
		</div>
		<!-- content -->
		<div class="border-b pl-6">
			<p
				class="border-b-main-color border-b-4 py-[10px] font-[500] text-lg w-fit"
				>Debit/Credit Card</p
			>
		</div>
		<div class="pl-6 pb-10">
			<div class="paymentComp flex gap-[6px] mb-[26px] mt-[20pxpx]">
				<div>
					<img
						src="/src/assets/img/booking/payment/payment-type/1.png"
						alt="1" />
				</div>
				<div>
					<img
						src="/src/assets/img/booking/payment/payment-type/visa-2.png"
						alt="2" />
				</div>
				<div>
					<img
						src="/src/assets/img/booking/payment/payment-type/3.png"
						alt="3" />
				</div>
				<div>
					<img
						src="/src/assets/img/booking/payment/payment-type/4.png"
						alt="4" />
				</div>
			</div>
			<div class="cardName flex gap-3 mb-10 items-center">
				<label
					class="label1"
					for="cardN">
					Name on card
					<input
						class="lg:w-[500px]"
						type="text"
						value="Julius Lorenzo"
						id="cardN" />
				</label>
				<img
					class="w-7 mt-5"
					src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
					alt="accept" />
			</div>
			<div class="cardNum flex items-center gap-3 mb-[20px]">
				<label
					class="label1"
					for="cardNum">
					Debit/Credit card number
					<input
						class="lg:w-[500px]"
						type="text"
						value="9923464374822293"
						id="cardNum" />
				</label>
				<img
					class="w-7 mt-5"
					src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
					alt="accept" />
			</div>
			<div class="expirDate flex items-center gap-3 mb-[20px]">
				<label
					class="label1"
					for="exMonth">
					Expiration Date

					<VueDatePicker
						class="max-w-[150px]"
						v-model="month"
						model-type="MMMM"
						month-picker
						hide-input-icon
						auto-apply
						disable-year-select
						placeholder="month" />
				</label>
				<VueDatePicker
					v-model="year"
					class="max-w-[150px] mt-[23px]"
					year-picker
					hide-input-icon
					auto-apply />

				<img
					class="w-7 mt-5 ml-1"
					src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
					alt="accept" />
			</div>
			<div class="code flex gap-[20px] items-center">
				<label
					for="secCode "
					class="flex-col flex label1">
					Security Code
					<input
						class="lg:w-[240px]"
						type="text"
						value="543"
						id="secCode" />
				</label>
				<label
					class="label1"
					for="zipCode">
					Billing Zip code
					<input
						class="lg:w-[240px]"
						type="text"
						value="203846"
						id="zipCode" />
				</label>
				<img
					class="w-7 mt-5"
					src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
					alt="accept" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	const monthNames = ref([
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]);

	const month = ref(monthNames.value[new Date().getMonth()]);

	const year = ref(new Date().getFullYear());
	console.log(month.value);
	// const flow = ref(['month']);
</script>

<style>
	.paymentComp div {
		@apply mt-8 bg-gray-bg py-[13px] px-[16px] rounded-md w-[60px];
	}
	.label1 {
		@apply flex flex-col font-[600];
	}
	.label1 p {
		@apply font-[600] text-lg;
	}
	.label1 input[type='text'] {
		@apply p-2 font-[400] text-lg bg-gray-bg rounded-md;
	}
	.expirDate input.dp__pointer.dp__input_readonly {
		@apply border-none bg-gray-bg text-lg font-[500] py-[10px] px-3;
	}
</style>
