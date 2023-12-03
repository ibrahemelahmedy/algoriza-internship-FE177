<!-- @format -->

<template>
	<Teleport
		v-if="bookingSuc"
		to="body">
		<theDialog
			:isAuth="isAuth"
			:deg="deg">
			<template v-slot:layer>
				<section
					@click="closeDialog"
					class="absolute top-0 left-0 bg-black opacity-10 h-[1820px] w-full"></section>
			</template>
			<template v-slot:land>
				<div class="mt-[60px] p-5 mb-[45px] bg-[#e2f5ea] rounded-md">
					<img
						class="w-[160px]"
						src="/src/assets/img/dialog/succes.png"
						alt="" />
				</div>
			</template>
			<template v-slot:content>
				<h2 class="mb-3 text-md font-[600]">Booking Successful</h2>
				<p class="max-w-[352px] text-text-color text-sm leading-6"
					>Congratulations your reservation has been made. You will be notified
					2 days prior the date.</p
				>
			</template>
			<template v-slot:button>
				<button
					@click="redirect"
					class="btn w-[90%] py-[6px] mb-7"
					>View Trip</button
				>
			</template>
		</theDialog>
	</Teleport>

	<theHeader
		:notWColor="notWColor"
		:isAuth="isAuth"
		class="container items-center">
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
		</template>
	</theHeader>
	<main class="container bg-[#f4f4f4]">
		<article class="title pt-[60px]">
			<h1 class="text-3xl font-[600] mb-[30px]">Secure your reservation</h1>
			<worningLetter class="mb-[30px]" />
			<section class="main grid gap-[30px]">
				<section class="payment-part col-start-1 col-end-7 max-w-[910px]">
					<!-- bookingDetails -->
					<bookingData />
					<!-- paymentDetails -->
					<paymentData />
					<!-- important Infotrmation -->
					<importInfo>
						<template v-slot:button>
							<button
								class="btn py-3 px-[18px] mb-[21px]"
								@click="bookingDone"
								>Complete Booking</button
							>
						</template>
					</importInfo>
				</section>
				<section class="side-section col-start-7 col-end-13">
					<hotelcard :hotelDetails="hotelDetails" />
					<priceDetails
						:hotelDetails="hotelDetails"
						class="mt-[30px]" />
				</section>
			</section>
		</article>
	</main>
</template>

<script setup>
	import theDialog from '../../components/theDialog.vue';
	import theHeader from '../../components/theHeader.vue';
	import worningLetter from '../../components/worningletter.vue';
	import bookingData from './component/bookingData.vue';
	import paymentData from './component/paymentData.vue';
	import importInfo from './component/importInfo.vue';
	import hotelcard from './component/hotelCard.vue';
	import priceDetails from './component/priceDetails.vue';
	import { onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';
	const deg = ref('150');
	const bookingSuc = ref(false);
	const isAuth = localStorage.getItem('isAuth');
	const bookingDone = () => {
		bookingSuc.value = !bookingSuc.value;
		return bookingSuc.value;
	};
	const closeDialog = () => {
		bookingSuc.value = false;
	};

	const hotelDetails = ref({});

	// const hotelDetails = ref({
	// 	id: '2',
	// 	name: 'Lakeside Motel Warefront',
	// 	img: '/src/assets/img/booking/payment/hotelDetails/hotel-img.png',
	// 	rate: '5',
	// 	review: '1200',
	// 	checkIn: ' Sunday, March 18, 2022',
	// 	checkOut: 'Tuesday, March 20, 2022',
	// 	priceBefDes: '$150',
	// 	priceAfterDes: '$130',
	// });
	const router = useRouter();
	const redirect = () => {
		router.push({
			name: 'myTrips',
			query: {
				id: hotelDetails.value.id,
				img: hotelDetails.value.img,
				name: hotelDetails.value.name,
				rate: hotelDetails.value.rate,
				review: hotelDetails.value.review,
				checkIn: hotelDetails.value.checkIn,
				checkOut: hotelDetails.value.checkOut,
				priceBefDes: hotelDetails.value.priceBefDes,
				priceAfterDes: hotelDetails.value.priceAfterDes,
			},
		});
	};
	onMounted(() => {
		hotelDetails.value = JSON.parse(localStorage.getItem('hotelDetails'));
	});
	// Notification icon handel
	const notWColor = ref(true);
</script>

<style scoped></style>
