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
						class="rounded-md w-[820px] h-[575px]"
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
							<!-- overview -->

							<div class="overview border-b pb-11 px-10 flex flex-col gap-7">
								<h3 class="text-xl font-[500]">OverView</h3>
								<p>{{ hotelDetails.desc }} </p>
								<p
									>Featuring free WiFi throughout the property, Lakeside Motel
									Waterfront offers accommodations in Lakes Entrance, 19 mi from
									Bairnsdale. Free private parking is available on site.
								</p>
								<p
									>Each room at this motel is air conditioned and comes with a
									flat-screen TV. You will find a kettle, toaster and a
									microwave in the room. Each room is fitted with a private
									bathroom. Guests have access to barbecue facilities and a
									lovely large lawn area. Metung is 6.8 mi from Lakeside Motel
									Waterfront, while Paynesville is 14 mi from the property.
								</p>
								<p
									>Couples in particular like the location – they rated it 9.2
									for a two-person trip.</p
								>
							</div>
							<!-- facilities -->
							<div
								class="top-facilities pb-11 flex flex-col px-10 gap-7 mt-[26px]">
								<h3 class="text-xl font-[500]">Top facilities</h3>
								<ul class="grid grid-cols-2">
									<li
										class="mb-[13px]"
										v-for="facilitie in facilities"
										:key="facilitie">
										<div class="flex gap-3 items-center">
											<img
												:src="facilitie.img"
												:alt="facilitie.decs" />
											<p>{{ facilitie.decs }}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="side-part col-start-9 col-end-13">
						<div class="w-full">
							<iframe
								class="w-full rounded-md"
								:src="`//maps.google.com/maps?q=${hotelDetails.lon},${hotelDetails.lon}&output=embed`"></iframe>
						</div>
						<div class="explore-area mt-[35px]">
							<h3 class="text-xl font-[500] mb-[22px]">Explore the area</h3>
							<ul>
								<li
									class="flex items-center mb-3 gap-2"
									v-for="explore in explorearea"
									:key="explore">
									<img
										class="w-6"
										:src="explore.img"
										:alt="explore.decs" />
									<p>{{ explore.decs }}</p>
								</li>
							</ul>
						</div>
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
					<div
						class="avilable-room bg-white rounded-md overflow-hidden"
						v-for="roomDetail in roomDetails"
						:key="roomDetail.roomId">
						<img
							class="h-[200px] w-full"
							:src="roomDetail.roomImg"
							alt="room1" />
						<div class="details-rom px-5 pb-6">
							<h3 class="my-5 text-md font-[600]">
								{{ roomDetail.roomDetaile }}
							</h3>
							<ul>
								<li
									v-for="room in roomDetails[0].details"
									:key="room"
									class="flex gap-[10px] text-text-color mb-[10px]">
									<img
										:src="room.img"
										:alt="room.desc" />
									<p>{{ room.desc }}</p>
								</li>
							</ul>
							<button
								class="btn mt-6 w-full py-3"
								@click="redirect(hotelDetails.id)"
								>Reserve suite
							</button>
						</div>
					</div>
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
	import theFooter from '../../components/theFooter.vue';
	import { useRoute, useRouter } from 'vue-router';
	import { ref } from 'vue';
	import { useTaskStore } from '../../stores/store';

	const isAuth = localStorage.getItem('isAuth');

	const hotelName = ref('');
	const hotelImg = ref('');
	const hotelReviewNum = ref('');
	const hotelId = ref('');
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

	// get hotel data from api
	const hotelData = ref([]);
	const taskStore = useTaskStore();

	const getdatahotel = async () => {
		const data = JSON.parse(await taskStore.getHotelDetails());

		hotelData.value.push(data.data);

		return hotelData;
	};

	// const dataForRoom = { ...taskStore.gethotelsRoomdata };
	// const rooms = { ...dataForRoom[0][0].rooms };
	// console.log(rooms[1102526520]);
	// onMounted(() => {
	// 	getdatahotel();
	// 	taskStore.storeHotelDatawithroom(hotelData.value);
	// });

	const route = useRoute();

	hotelDetails.value.name = route.query.name;
	hotelDetails.value.img = route.query.img;
	hotelDetails.value.reviewNumber = route.query.reviewNumber;
	hotelDetails.value.id = route.query.id;
	hotelDetails.value.reviewscore = route.query.reviewscore;
	hotelDetails.value.desc = route.query.desc;
	hotelDetails.value.lon = route.query.lon;
	hotelDetails.value.lat = route.query.lat;

	const facilities = ref([
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/home-wifi 1.svg',
			decs: 'Free wifi',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/wind 1.svg',
			decs: 'Air Conditioning',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Parking available',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/bag-tick-2 1.svg',
			decs: 'Business Services',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/lifebuoy 1.svg',
			decs: 'Swimming pool',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/topFacilities/like-1 1.svg',
			decs: 'Top rated in area',
		},
	]);
	const explorearea = ref([
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/plane.svg',
			decs: 'Hotel Penselvenyia',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Travis Bakery store house',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Olivia Johnson Garden',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Norman Opera Circus',
		},
		{
			img: '/src/assets/img/booking/hotel/hotelDetails/explore/location.svg',

			decs: 'Rockdeset hotel',
		},
	]);
	const roomDetails = ref([
		{
			roomId: '1',
			roomPrice: '20',
			roomImg: '/src/assets/img/booking/hotel/hotelDetails/room1.png',
			roomDetaile: 'Standard twin ben, Multiple beds',
			details: [
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
					desc: '300 sq ft',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
					desc: 'Sleeps 3',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
					desc: '1 double bed and 1 twin bed',
				},
			],
		},
		{
			roomId: '1',
			roomPrice: '20',
			roomImg: '/src/assets/img/booking/hotel/hotelDetails/room2.png',
			roomDetaile: 'Standard twin ben, Multiple beds',
			details: [
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/bag-tick-2 1.svg',
					desc: '300 sq ft',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/lifebuoy 1.svg',
					desc: 'Sleeps 3',
				},
				{
					img: '/src/assets/img/booking/hotel/hotelDetails/roomDetails/like-1 1.svg',
					desc: '1 double bed and 1 twin bed',
				},
			],
		},
	]);

	const router = useRouter();
	const redirect = () => {
		router.push({
			name: 'payment',
		});
	};
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
