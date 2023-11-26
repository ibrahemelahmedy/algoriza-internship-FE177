<!-- @format -->

<template>
	<theHeader class="container items-center">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1"
				:to="{ name: 'home' }">
				<img
					src="/src/assets/img/home/logo.png"
					alt="logo" />
				<h1 class="font-medium tracking-wide whitespace-nowrap"
					>my Dream place</h1
				>
			</RouterLink>
		</template>
		<template v-slot:button>
			<div
				v-if="!isAuth"
				class="flex gap-4">
				<router-link
					class="btn px-3 py-2"
					:to="{ name: 'register' }"
					>Register</router-link
				>
				<router-link
					class="btn px-3 py-2"
					:to="{ name: 'signIn' }"
					>Sign In</router-link
				>
			</div>

			<div
				v-else
				class="flex gap-4">
				<img
					class="cursor-pointer"
					src="/src/assets/img/home/notification 1.svg"
					alt="notification" />
				<img
					class="cursor-pointer"
					src="/src/assets/img/booking/header/profile-image.png"
					alt="profileimage" />
			</div>
		</template>
	</theHeader>
	<main class="container bg-[#f4f4f4]">
		<article class="title pt-[60px]">
			<h1 class="text-3xl font-[600] mb-[30px]">Secure your reservation</h1>
			<worningLetter class="mb-[30px]" />
			<section class="main grid gap-[30px]">
				<section class="payment-part col-start-1 col-end-9">
					<!-- bookingDetails -->
					<section
						class="booking bg-white rounded-md overflow-hidden mb-[30px]">
						<!-- title -->
						<div
							class="flex gap-4 pl-6 py-[18px] text-white text-lg font-[500] bg-main-color">
							<img
								class="w-[32px]"
								src="/src/assets/img/booking/payment/security-user 1.svg"
								alt="roomSafe" />
							<p>Room 1</p>
							<p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
						</div>
						<!-- content -->
						<div class="content pl-6">
							<div class="first-p flex gap-5 mt-8 mb-5">
								<label
									class="label"
									for="fName "
									><p>First name</p>
									<input
										class="border-main-color border"
										type="text"
										value="Juilis"
										id="fName" />
								</label>
								<label
									class="label"
									for="lName "
									><p>Last name</p>
									<input
										type="text"
										value="Lorenzo"
										id="lName" />
								</label>
							</div>
							<div class="second-p mb-5">
								<div class="flex gap-3"
									><label for="phone"
										><p>Mobile number</p>
										<select
											name=""
											id="phone">
											<option value="">
												<img
													src="/src/assets/img/booking/payment/flage-1.png"
													alt="flag" />
												<p>+61</p>
											</option>
										</select>
									</label>
									<label class="label"
										><input
											class="w-[338px]"
											type="text"
											value="88672778"
									/></label>
								</div>
							</div>
							<label
								for="txtalert "
								class="flex gap-2 text-2xl mb-10">
								<input
									class="w-[30px] rounded-2xl"
									type="checkbox"
									id="txtalert" />
								<p class="font-[500]">Receive text alerts about this trip.</p>
							</label>
						</div>
					</section>
					<!-- paymentDetails -->
					<section
						class="payment bg-white rounded-md overflow-hidden mb-[30px]">
						<!-- title -->
						<div
							class="flex gap-4 pl-6 py-[18px] text-white text-lg font-[500] bg-main-color">
							<img
								src="/src/assets/img/booking/payment/card-tick 1.svg"
								alt="roomSafe" />
							<p>Payment options</p>
						</div>
						<!-- content -->
						<p>Debit/Credit Card</p>
						<div class="paymentComp flex">
							<img
								src="/src/assets/img/booking/payment/payment-type/1.png"
								alt="1" />
							<img
								src="/src/assets/img/booking/payment/payment-type/visa-2.png"
								alt="2" />
							<img
								src="/src/assets/img/booking/payment/payment-type/3.png"
								alt="3" />
							<img
								src="/src/assets/img/booking/payment/payment-type/4.png"
								alt="4" />
						</div>
						<div class="cardName">
							<label for="cardN">
								Name on card
								<input
									type="text"
									value="Julius Lorenzo"
									id="cardN" />
							</label>
							<img
								src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
								alt="accept" />
						</div>
						<div class="cardNum">
							<label for="cardNum">
								Debit/Credit card number
								<input
									type="text"
									value="9923464374822293"
									id="cardNum" />
							</label>
							<img
								src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
								alt="accept" />
						</div>
						<div class="expirDate">
							<label for="exMonth">
								Debit/Credit card number
								<input
									type="date"
									id="exMonth" />
							</label>
							<input type="date" />
							<img
								src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
								alt="accept" />
						</div>
						<div class="code flex">
							<label
								for="secCode "
								class="flex-col flex">
								Security Code
								<input
									type="text"
									value="543"
									id="secCode" />
							</label>
							<label for="zipCode">
								Billing Zip code
								<input
									type="text"
									value="203846"
									id="zipCode" />
							</label>
							<img
								src="/src/assets/img/booking/payment/payment-type/tick-circle 1.svg"
								alt="accept" />
						</div>
					</section>
					<!-- important Infotrmation -->
					<section class="info bg-white rounded-md overflow-hidden">
						<!-- title -->
						<div
							class="flex gap-4 bg-[#F2C94C] pl-6 py-[18px] text-lg font-[500]">
							<p>Important information about your booking</p>
						</div>
						<div class="content">
							<ol>
								<li>
									This rate is non-refundable. If you change or cancel your
									booking you will not get a refund or credit to use for a
									future stay.
								</li>
								<li> Stay extensions will require a new reservation. </li>
								<li> Front desk staff will greet guests on arrival </li>
								<li>
									No refunds will be issued for late check-in or early
									check-out.
								</li>
							</ol>
							<p
								>By clicking the button below, I acknowledge that I have
								reviewed the
								<span class="text-main-color cursor-pointer">
									Privacy Statement</span
								>
								and have reviewd and accept the
								<span class="text-main-color cursor-pointer"
									>Rules and Restrictions</span
								>
								and
								<span class="text-main-color cursor-pointer"
									>Terms of Use.</span
								></p
							>
							<button class="btn">Complete Booking</button>
							<div
								><img
									src="/src/assets/img/booking/payment/payment-type/lock-circle 1.svg"
									alt="lock" />
								<p
									>We use secure transmission and encrypted storage to protect
									your personal information</p
								></div
							>
						</div>
					</section>
				</section>
				<section class="side-section col-start-9 col-end-13"> </section>
			</section>
		</article>
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import worningLetter from '../../components/worningletter.vue';
</script>

<style scoped>
	.label {
		@apply flex flex-col;
	}
	.label p {
		@apply font-[600] text-lg;
	}
	.label input[type='text'] {
		@apply p-3 font-[500] text-lg bg-gray-bg rounded-md;
	}
</style>
