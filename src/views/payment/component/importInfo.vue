<!-- @format -->

<template>
	<section class="info bg-white rounded-md overflow-hidden">
		<!-- title -->
		<div class="flex gap-4 bg-[#F2C94C] pl-6 py-[18px]">
			<p class="font-[500] text-lg">Important information about your booking</p>
		</div>
		<div class="content pl-6">
			<ol class="my-8">
				<li>
					This rate is non-refundable. If you change or cancel your booking you
					will not get a refund or credit to use for a future stay.
				</li>
				<li> Stay extensions will require a new reservation. </li>
				<li> Front desk staff will greet guests on arrival </li>
				<li>
					No refunds will be issued for late check-in or early check-out.
				</li>
			</ol>
			<p class="text-lg mb-6"
				>By clicking the button below, I acknowledge that I have reviewed the
				<span class="text-main-color cursor-pointer"> Privacy Statement</span>
				and have reviewd and accept the
				<span class="text-main-color cursor-pointer"
					>Rules and Restrictions</span
				>
				and
				<span class="text-main-color cursor-pointer">Terms of Use.</span></p
			>
			<slot name="button"> </slot>

			<div class="flex gap-2 mb-[35px] items-center"
				><img
					class="w-6"
					src="/src/assets/img/booking/payment/payment-type/lock-circle 1.svg"
					alt="lock" />
				<p class="text-[18px]"
					>We use secure transmission and encrypted storage to protect your
					personal information</p
				></div
			>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
	.content ol.my-8::marker {
		display: none;
	}
	.content ol {
		list-style-type: decimal;
	}
	.content ol li {
		@apply font-[500] text-lg;
		display: list-item;
		list-style-position: inside;
	}
</style>
