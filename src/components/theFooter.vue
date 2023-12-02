<!-- @format -->

<template>
	<footer class="pt-[70px]">
		<section
			class="grid lg:grid-cols-5 text-center lg:text-start lg:gap-3 gap-6">
			<div class="logoPart flex lg:gap-2 justify-center">
				<div class="logo h-[24px]">
					<img
						src="../assets/img/home/logo.png"
						alt="logo" />
				</div>
				<div class="text lg:flex-1 max-w-[160px]">
					<h2 class="font-semibold whitespace-nowrap mb-2 w-fit ml-1"
						>my Dream place</h2
					>
					<p class="text-text-color text-xs lg:mt-0 lg:ml-0 mt-3 ml-[-20px]"
						>Your next goto companion for travel</p
					></div
				>
			</div>
			<div class="companyPart">
				<h3>Company</h3>
				<ul>
					<li>About</li>
					<li>Jobs</li>
					<li>Newsroom</li>
					<li>Advertising</li>
					<li>Contact us</li>
				</ul>
			</div>
			<div class="explorePart">
				<h3>Explore</h3>
				<ul>
					<li>Australia</li>
					<li>New Zealand</li>
					<li class="lg:truncate lg:hover:overflow-visible"
						>United States America (USA)</li
					>
					<li>Greece</li>
					<li>Maldives</li>
					<li>Singapore</li>
					<li>See more</li>
				</ul>
			</div>
			<div class="TermsPart">
				<h3>Terms and Policies</h3>
				<ul>
					<li>Privacy Policy</li>
					<li>Terms of use</li>
					<li>Acessibility</li>
					<li>Reward system policy</li>
				</ul>
			</div>
			<div class="helpPart">
				<h3>Help</h3>
				<ul>
					<li>Support</li>
					<li>Cancel your bookings</li>
					<li>Use Coupon</li>
					<li>Refund Policies</li>
					<li>International Travel Documents</li>
				</ul>
			</div>
		</section>
		<section
			class="copyRight bg-gray-100 text-text-color flex justify-center lg:justify-around">
			<p></p>
			<p class="text-sm py-2">&copy; my Dream Place 2022</p>
		</section>
	</footer>
</template>

<script setup></script>
<style scoped>
	h3 {
		@apply font-semibold mb-4;
	}
	li {
		@apply text-text-color text-xs mb-4 cursor-pointer whitespace-nowrap;
	}
</style>
