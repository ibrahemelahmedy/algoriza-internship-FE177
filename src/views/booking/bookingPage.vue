<!-- @format -->

<template>
	<theHeader
		:isAuth="isAuth"
		:notWColor="notWColor"
		class="header container md:flex text-white items-start py-5">
		<template v-slot:logo>
			<RouterLink
				class="cursor-pointer flex gap-1 w-fit mx-auto md:mx-0 transition-all"
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
		<article class="grid gap-[30px] mt-[30px] ml-[-50px] lg:ml-o">
			<section class="side-section max-w-[300px] lg:col-start-1 lg:col-end-2">
				<propertyName @searchHotelName="searchHotelName" />
				<div class="filter-by">
					<dailyBadget @maxMinValue="maxMinValue" />
					<rating @searchRate="searchRate" />
				</div>
			</section>
			<section class="main-section lg:col-start-2 lg:col-end-13">
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
		<!-- <paginationTemplate :totalHotelsNumber="totalHotelsNumber" /> -->
		<Pagination @getPage="getPage"></Pagination>
		<worningLetter />
		<theFooter />
	</main>
</template>

<script setup>
	import Pagination from './component/pagination.vue';

	import theHeader from '../../components/theHeader.vue';
	import navLink from '../../components/navLink.vue';
	import card from '../../components/card.vue';
	import sortBy from './component/sortBy.vue';
	// import pagination from '../../components/pagination.vue';
	import worningLetter from '../../components/worningletter.vue';
	import theFooter from '../../components/theFooter.vue';
	import searchBar from '../../components/searchbar.vue';
	import propertyName from './component/propertyName.vue';
	import dailyBadget from './component/dailyBadget.vue';
	import rating from './component/rating.vue';

	import { useRoute } from 'vue-router';
	import { onMounted, onUpdated, ref, watch, watchEffect } from 'vue';
	import { useTaskStore } from '../../stores/store';
	const taskStore = useTaskStore();
	const route = useRoute();
	const hotelsSearchDetails = ref({});
	const sortValue = ref('');
	const isAuth = localStorage.getItem('isAuth');
	//functionality to handle number
	const intNum = (num) => {
		num = Math.ceil(num);
		return num;
	};
	const getScore = (num) => {
		num = (5 * num) / 10;
		return num;
	};
	// Notification icon color handel
	const notWColor = ref(false);

	// padination
	const totalHotelsNumber = ref(null);

	const getPage = () => {
		if (localStorage.getItem('currentPage')) {
			currentPage.value = JSON.parse(localStorage.getItem('currentPage'));
			taskStore.getPageNumber(currentPage.value);
		}
	};
	// sortby
	const sortByReco = ref([]);
	const dataSortBy = async () => {
		const data = JSON.parse(await taskStore.getSortBy());

		for (let i = 0; i < data.data.length; i++) {
			sortByReco.value.push(data.data[i]);
		}
		return sortByReco;
	};
	// get id when onUpdated
	const sortById = ref('');

	// get hotelData
	const hotels = ref([]);
	const hotelsBase = ref([]);

	const meta = ref([]);

	const dataHotels = async () => {
		const data = JSON.parse(await taskStore.getHotels());
		if (data.data?.meta) {
			meta.value.push(data.data.meta[0]?.title);
			totalHotelsNumber.value = +data.data.meta[0]?.title.split(' ')[0];
			localStorage.setItem('totalHotels', totalHotelsNumber.value);
		}

		if (data.data) {
			hotelsBase.value = data.data.hotels;
			hotels.value = data.data.hotels;
			if (hotelsBase.value) {
				taskStore.getAllHotels(hotelsBase.value);
			}
		}
	};

	// get data from search bar
	hotelsSearchDetails.value = { ...JSON.parse(route.query.hotelsDetails) };

	// handel sortBy select
	watch(sortValue, (_) => {
		sortById.value = localStorage.getItem('sort-id');
		taskStore.sortId(sortById.value);
		dataHotels();
	});
	// search with Hotel Name
	const searchHotelName = (input) => {
		hotels.value = hotelsBase.value;

		hotels.value = hotels.value.filter((hotel) =>
			hotel.property.name.toLowerCase().includes(input.toLowerCase()),
		);
	};

	// filtration for rate

	const searchRate = (rate) => {
		hotels.value = hotelsBase.value;

		hotels.value = hotels.value.filter(
			(hotel) => intNum(getScore(hotel.property.reviewScore)) === rate,
		);
	};

	onMounted(() => {
		// reset sortBy
		localStorage.removeItem('sort-id');

		// store hotels data
		taskStore.storeHotelData(hotels.value);
		taskStore.storeCityHotelData(hotelsSearchDetails.value);

		// call hotel storage
		dataHotels(); //stoped to handel lower api request
		// get sort data
		dataSortBy(); //stoped to handel lower api request
	});

	const maxPrice = ref(null);
	const minPrice = ref(null);
	const maxMinValue = (min, max) => {
		maxPrice.value = max;
		minPrice.value = min;
		taskStore.getPriceRang(minPrice.value, maxPrice.value);
		dataHotels();
	};
</script>

<style scoped>
	.header {
		background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
		min-height: 200px;
	}
</style>
