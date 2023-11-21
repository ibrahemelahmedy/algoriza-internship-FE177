<!-- @format -->

<template>
	<footer class="mt-[70px]">
		<section class="grid grid-cols-5 gap-3">
			<div class="logoPart">
				<div class="logo flex items-center gap-2">
					<img
						src="/src/assets/img/home/logo.png"
						alt="loho" />
					<h3>my Dream Place</h3>
				</div>
				<p>Your next goto companion for travel</p>
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
					<li>United States America (USA)</li>
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
		<section class="copyRight flex justify-end">
			<p>&copy; my Dream Place 2022</p>
		</section>
	</footer>
</template>

<script setup></script>
<style scoped>
	h3 {
		@apply font-semibold mb-6;
	}
	li {
		@apply text-text-color text-xs mb-4;
		white-space: nowrap;
	}
</style>
