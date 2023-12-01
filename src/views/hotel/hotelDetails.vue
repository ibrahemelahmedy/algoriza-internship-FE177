<!-- @format -->

<template>
	<theHeader
		:isAuth="isAuth"
		:notWColor="notWColor"
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
		<template v-slot:nav>
			<navLink />
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
		<!-- landing -->
		<article class="landing py-6">
			<section class="landPart grid gap-5">
				<div class="col-start-1 col-end-9">
					<img
						class="rounded-md w-[820px] h-[835px]"
						:src="hotelDetails.img"
						alt="firstImg" />
				</div>
				<div class="col-start-9 col-end-13">
					<img
						class="rounded-md mb-4"
						src="/src/assets/img/booking/hotel/hotelDetails/2.png"
						alt="secondImg" />
					<img
						class="rounded-md"
						src="/src/assets/img/booking/hotel/hotelDetails/3.png"
						alt="thirdImg" />
				</div>
			</section>
		</article>
		<!-- hotelDetails -->
		<article class="hotel-details-part">
			<section class="hotel-details">
				<div class="sections-nav bg-white shadow-sm flex gap-[14px] mb-10">
					<p
						class="text-lg font-[500] py-[10px] px-[14px] border-b-main-color border-b-4"
						>Overview</p
					>
					<a
						href="#room-part"
						class="text-lg font-[500] py-[10px] px-[14px] cursor-pointer hover:border-b-main-color hover:border-b-4"
						>Room</a
					>
				</div>
				<div class="details grid gap-[30px] mb-10">
					<div class="main-part col-start-1 col-end-9">
						<h2 class="w-full text-2xl font-bold">{{ hotelDetails.name }}</h2>
						<div class="rate-part flex gap-2 mb-[17px]">
							<ul class="flex">
								<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 0"
									><img
										src="/src/assets/img/booking/rating/star-full.svg"
										alt="full-star"
								/></li>
								<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 1"
									><img
										src="/src/assets/img/booking/rating/star-full.svg"
										alt="full-star"
								/></li>
								<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 2"
									><img
										src="/src/assets/img/booking/rating/star-full.svg"
										alt="full-star"
								/></li>
								<li v-if="intNum(getScore(hotelDetails.reviewscore)) > 3"
									><img
										src="/src/assets/img/booking/rating/star-full.svg"
										alt="full-star"
								/></li>
								<li v-if="intNum(getScore(hotelDetails.reviewscore)) == 5"
									><img
										src="/src/assets/img/booking/rating/star-full.svg"
										alt="half-star"
								/></li>
							</ul>
							<p class="p-text"
								>{{ intNum(getScore(hotelDetails.reviewscore)) }} ({{
									hotelDetails.reviewNumber
								}}
								Reviews)</p
							>
						</div>
						<!-- location -->
						<div class="location flex gap-2 items-center">
							<img
								src="/src/assets/img/booking/hotel/hotelDetails/location 1.svg"
								alt="" />
							<p>Lorem ipsum road, Tantruim-2322, Melbourne, Australia</p>
						</div>
						<!-- description -->
						<div class="bg-white mt-[30px] mb rounded-md">
							<overView :hotelDetails="hotelDetails" />
						</div>
					</div>
					<div class="side-part col-start-9 col-end-13">
						<sidePart :hotelDetails="hotelDetails" />
					</div>
				</div>
			</section>
			<!-- roomchoose -->
			<section
				id="room-part"
				class="room-details mb-[170px]">
				<h2 class="w-full text-2xl font-bold">Available rooms</h2>
				<div class="roomchose grid grid-cols-3 gap-[15px]">
					<div class="coupone-code relative rounded-md text-white h-[340px]">
						<div class="content pt-[65px] pl-[28px]">
							<div class="logo flex mb-[30px] gap-2">
								<img
									src="/src/assets/img/booking/hotel/hotelDetails/logo.svg"
									alt="Logo" />
								<p class="text-xl font-[500]">my Dream Place</p>
							</div>
							<p class="font-[600] text-2xl">20% off </p>
							<p class="font-[600] text-2xl w-[200px]"
								>Use Promotional Coupon Code:
							</p>
							<p class="font-[600] text-2xl text-[#FFD723]">Orlando</p>
						</div>
						<div class="image absolute top-[-10%] right-[-10%] ]">
							<img
								class="w-[350px] h-[420px]"
								src="/src/assets/img/booking/hotel/hotelDetails/man-edit.png"
								alt="man" />
						</div>
					</div>
					<roomCard />
				</div>
			</section>
		</article>
		<worningLetter />
		<theFooter />
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import worningLetter from '../../components/worningletter.vue';
	import navLink from '../../components/navLink.vue';
	import overView from './component/overView.vue';
	import sidePart from './component/sidePart.vue';
	import roomCard from './component/roomCard.vue';
	import theFooter from '../../components/theFooter.vue';
	import { useRoute, useRouter } from 'vue-router';
	import { ref, onMounted } from 'vue';
	import { useTaskStore } from '../../stores/store';

	const isAuth = localStorage.getItem('isAuth');

	// get hotel data from api
	const hotelData = ref({});
	const taskStore = useTaskStore();

	const getdatahotel = async () => {
		const data = JSON.parse(await taskStore.getHotelDetails());
		hotelData.value.push(data.data);

		return hotelData.value;
	};

	console.log(hotelData.value);

	// const dataForRoom = { ...taskStore.gethotelsRoomdata };
	// const rooms = { ...dataForRoom };
	// console.log(rooms);
	onMounted(() => {
		getdatahotel();
		taskStore.storeHotelDatawithroom(hotelData.value);
	});

	// restore data from query
	const hotelDetails = ref({
		id: '',
		img: '',
		name: '',
		title: '',
		desc: '',
		reviewNumber: '',
		reviewscore: '',
		lon: '',
		lat: '',
		price: '',
		priceBeforeSale: '',
		sale: '',
		saleMsg: '',
	});
	const route = useRoute();

	hotelDetails.value.name = route.query.name;
	hotelDetails.value.img = route.query.img;
	hotelDetails.value.reviewNumber = route.query.reviewNumber;
	hotelDetails.value.id = route.query.id;
	hotelDetails.value.reviewscore = route.query.reviewscore;
	hotelDetails.value.desc = route.query.desc;
	hotelDetails.value.lon = route.query.lon;
	hotelDetails.value.lat = route.query.lat;

	// handel int value
	const intNum = (num) => {
		num = Math.ceil(num);
		return num;
	};

	const getScore = (num) => {
		num = (5 * num) / 10;
		return num;
	};
	// Notification icon handel
	const notWColor = ref(true);
</script>

<style scoped>
	.coupone-code {
		background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
	}
</style>
