<!-- @format -->

<template>
	<section class="card flex max-h-[240px] w-full border gap-6 p-3 rounded-md">
		<div class="image"
			><img
				class="rounded-sm h-[200px] max-w-[285px]"
				src="/src/assets/img/booking/hotel/img/1.png"
				alt="hotel image"
		/></div>

		<div class="content flex-1">
			<div class="first-part flex justify-between items-center mb-[10px]">
				<h3 class="font-medium text-md">Julia Dens Resort</h3>
				<p class="bg-red-text text-white py-[3px] px-[8px] rounded-lg text-xs"
					>Book now and receive 15% off</p
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
				<p class="p-text">4.5 (1200 Reviews)</p>
			</div>
			<p class="p-text mb-2 font-[600]"
				>Live a little and celbrate with champagne</p
			>
			<div class="description flex mb-[18px] justify-between">
				<p class="text-[10px] w-[350px]"
					>Reats include a glass of French champagne, parking and a late
					checkout. Gym included. Flexible cancellation applies</p
				>
				<p
					class="over bg-green-text text-white text-xs py-[4px] px-[8px] text-start h-fit rounded-md">
					5% off
				</p>
			</div>
			<div class="last-part flex justify-between items-center">
				<button class="btn px-4 py-[6px] h-fit">See availability</button>
				<div class="prices">
					<div
						class="price text-end mb-[6px] flex justify-end items-center gap-2">
						<p class="sale text-red-text text-md line-through font-[500]"></p>
						<p class="text-lg font-[500]">$240</p>
					</div>
					<div class="packge p-text font-[500]"> Includes taxes and fees </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped></style>
