<!-- @format -->

<template>
	<theHeader
		:isAuth="isAuth"
		class="header container text-white items-start flex py-5">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1"
				:to="{ name: 'home' }">
				<img
					src="/src/assets/img/booking/header/logo.svg"
					alt="logo" />
				<h1 class="font-medium tracking-wide whitespace-nowrap"
					>my Dream place</h1
				>
			</RouterLink>
		</template>
		<template v-slot:nav>
			<navLink class="text-white" />
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
	<main class="container">
		<searchBar
			:isAuth="isAuth"
			:hotelsDetails="hotelsSearchDetails"
			class="relative top-[-25px] w-[88%]" />
		<article class="grid gap-[30px] mt-[30px]">
			<section class="side-section max-w-[300px] col-start-1 col-end-2">
				<propertyName />
				<div class="filter-by">
					<dailyBadget />
					<rating />
				</div>
			</section>
			<section class="main-section col-start-2 col-end-13">
				<div class="hotel-result">
					<div class="title flex justify-between mb-12">
						<h2 class="text-xl font-semibold"
							>Melbourne : {{ parseInt(meta) || '0' }} search results found</h2
						>
						<div class="sort-by relative">
							<sortBy
								:data="sortByReco"
								v-model="sortValue"
								class="absolute">
							</sortBy>
						</div>
					</div>
					<div class="hotel-cards">
						<card
							:hotels="hotels"
							:isAuth="isAuth"></card>
					</div>
				</div>
			</section>
		</article>
		<pagination />
		<worningLetter />
		<theFooter />
	</main>
</template>

<script setup>
	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';
	import card from '../../components/card.vue';
	import sortBy from './component/sortBy.vue';
	import pagination from '../../components/pagination.vue';
	import worningLetter from '../../components/worningletter.vue';
	import theFooter from '../../components/theFooter.vue';
	import searchBar from '../../components/searchbar.vue';
	import propertyName from './component/propertyName.vue';
	import dailyBadget from './component/dailyBadget.vue';
	import rating from './component/rating.vue';

	import { useRoute } from 'vue-router';
	import { onMounted, ref, watch } from 'vue';
	import { useTaskStore } from '../../stores/store';
	const taskStore = useTaskStore();
	const hotelsSearchDetails = ref({});
	const sortValue = ref('');
	const isAuth = localStorage.getItem('isAuth');

	const route = useRoute();

	// sortby
	const sortByReco = ref([]);
	const dataSortBy = async () => {
		const data = JSON.parse(await taskStore.getSortBy());

		for (let i = 0; i < data.data.length; i++) {
			sortByReco.value.push(data.data[i]);
		}
		return sortByReco;
	};
	dataSortBy();

	watch(sortValue, (newSortValue) => {
		console.log(newSortValue);
	});

	// get hotelData
	const hotels = ref([]);
	const meta = ref([]);
	// const page_number = ref(null);

	const dataHotels = async () => {
		const data = JSON.parse(await taskStore.getHotels());
		if (data.data.meta) {
			meta.value.push(data.data.meta[0].title);
		} else {
			meta.value = '1200';
		}
		for (let i = 0; i < data.data.hotels.length; i++) {
			hotels.value.push(data.data.hotels[i]);
		}

		return hotels, meta;
	};

	// get data from search bar
	hotelsSearchDetails.value = { ...JSON.parse(route.query.hotelsDetails) };

	onMounted(() => {
		// call hotel storage
		dataHotels();
		// store hotels data
		taskStore.storeHotelData(hotels.value);
		taskStore.storeCityHotelData(hotelsSearchDetails.value);
	});
</script>

<style scoped>
	.header {
		background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
		min-height: 200px;
	}
</style>
<!-- const hotels = ref([
		{
			id: '1',
			img: '/src/assets/img/booking/hotel/img/1.png',
			name: 'Julia Dens Resort',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$130',
			salePrice: '$150',
			sale: true,
			saleMsg: 'Book now and receive 15% off',

			salecolor: 'red',
		},
		{
			id: '2',
			img: '/src/assets/img/booking/hotel/img/2.png',
			name: 'Julia Dens Resort',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$240',
			salePrice: '',
			sale: false,
			saleMsg: '',
			salecolor: '',
		},
		{
			id: '3',
			img: '/src/assets/img/booking/hotel/img/3.png',
			name: 'Julia Dens Resort',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$300',
			salePrice: '',
			sale: true,
			saleMsg: 'Receive 30% discount on a restaurant',
			salecolor: 'orang',
		},
		{
			id: '4',
			img: '/src/assets/img/booking/hotel/img/4.png',
			name: 'Julia Dens Resort',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$120',
			salePrice: '',
			sale: false,
		},
		{
			id: '5',
			img: '/src/assets/img/booking/hotel/img/5.png',
			name: 'Shanghai Open House',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$145',
			salePrice: '',
			sale: false,
			saleMsg: '',
			salecolor: '',
		},
		{
			id: '6',
			img: '/src/assets/img/booking/hotel/img/6.png',
			name: 'Ocean Waves Resort',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$310',
			salePrice: '',
			sale: false,
			saleMsg: '',
			salecolor: '',
		},
		{
			id: '7',
			img: '/src/assets/img/booking/hotel/img/7.png',
			name: 'Maimi City frontier',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$190',
			salePrice: '$200',
			sale: true,
			saleMsg: 'Receive 30% discount on a restaurant',
			salecolor: 'orang',
		},
		{
			id: '8',
			img: '/src/assets/img/booking/hotel/img/8.png',
			name: 'Lakeside Motel Warefront',
			title: 'Live a little and celbrate with champagne',
			desc: 'Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies',
			reviewNumber: '1200',
			price: '$300',
			salePrice: '$320',
			sale: true,
			saleMsg: '',
			salecolor: '',
		},
	]); -->
