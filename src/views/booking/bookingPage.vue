<!-- @format -->

<template>
	<theHeader class="header container text-white items-start flex py-5">
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
			<div class="flex gap-4">
				<img
					class="cursor-pointer"
					src="/src/assets/img/booking/header/notification.svg"
					alt="notification" />
				<img
					class="cursor-pointer"
					src="/src/assets/img/booking/header/profile-image.png"
					alt="profileimage" />
			</div>
		</template>
	</theHeader>
	<main class="container">
		<searchBar class="relative top-[-25px] w-[88%]" />
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
					<div class="title flex justify-between mb-5">
						<h2 class="text-xl font-semibold"
							>Melbourne : 2,582 search results found</h2
						>
						<div class="sort-by">
							<select
								name="egypt"
								id="country"
								class="text-[11px] font-normal"
								v-model="sortValue">
								<option
									class=""
									value=""
									disabled
									selected
									hidden>
									<p>Sort by</p>
									<p>Recommended</p>
								</option>
								<option
									:value="sort.id"
									v-for="sort in sortBy"
									:key="sort.id"
									>{{ sort.id }}</option
								>
							</select>
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
	import pagination from '../../components/pagination.vue';
	import worningLetter from '../../components/worningletter.vue';
	import theFooter from '../../components/theFooter.vue';
	import searchBar from '../../components/searchbar.vue';
	import propertyName from './component/propertyName.vue';
	import dailyBadget from './component/dailyBadget.vue';
	import rating from './component/rating.vue';
	import { useRoute } from 'vue-router';
	import { onMounted, ref } from 'vue';
	const sortBy = ref([]);
	const sortValue = ref('');
	const isAuth = ref(false);
	const route = useRoute();
	isAuth.value = route.query.isAuth;
	onMounted(
		// sortby
		async function getSortBy() {
			try {
				const responsive = await fetch(
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy?dest_id=-2092174&search_type=CITY&arrival_date=2023-11-26&departure_date=2023-11-30&adults=1&children_age=1%2C17&room_qty=1',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'7440ff8fc6msh79889f5df260963p18fc19jsn83e5aa6414b2',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
					},
				);
				const data = await responsive.text();

				const FetchSortBy = JSON.parse(data);
				sortBy.value.push(...FetchSortBy.data);
				return sortBy;
			} catch (err) {
				console.log(err);
			}
		},
	);
	const hotels = ref([
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
	]);
</script>

<style scoped>
	.header {
		background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
		min-height: 200px;
	}
</style>
