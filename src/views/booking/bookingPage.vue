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
						<div class="sort-by relative">
							<selectBoxSearch
								v-model="sortValue"
								class="absolute top-[-50px] left-[-200px]">
								<template v-slot:title>
									<ListboxButton
										class="relative w-[190px] cursor-pointer border border-gray-300 rounded-md py-2 px-3 text-left shadow-sm ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
										<div class="flex flex-col">
											<p class="text-xs text-text-color font-[400] h-fit"
												>Sort by</p
											>
											<p class="text-md font-[normal]h-fit">Recommended</p>
										</div>
										<span
											class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
											<ChevronDownIcon
												class="h-5 w-5 text-gray-400"
												aria-hidden="true" />
										</span>
									</ListboxButton>
								</template>
								<template v-slot:content>
									<ListboxOptions
										class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										<ListboxOption
											as="template"
											v-for="sort in sortBy"
											:key="sort.id"
											:value="sort.title"
											v-slot="{ active, selected }">
											<li
												:class="[
													active ? 'bg-indigo-600 text-white' : 'text-gray-900',
													'relative cursor-pointer select-none py-[10px] border-b pl-3 pr-9 last:border-none   ',
												]">
												<div class="flex items-center w-fit mx-auto">
													<span
														:class="[
															selected ? 'font-semibold' : 'font-normal',
															'ml-3 block truncate ',
														]"
														>{{ sort.title }}</span
													>
												</div>
											</li>
										</ListboxOption>
									</ListboxOptions>
								</template>
							</selectBoxSearch>
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
	import selectBoxSearch from '../../components/selectboxsearch.vue';
	import pagination from '../../components/pagination.vue';
	import worningLetter from '../../components/worningletter.vue';
	import theFooter from '../../components/theFooter.vue';
	import searchBar from '../../components/searchbar.vue';
	import propertyName from './component/propertyName.vue';
	import dailyBadget from './component/dailyBadget.vue';
	import rating from './component/rating.vue';

	import {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
	} from '@headlessui/vue';
	import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';

	import { useRoute } from 'vue-router';
	import { ref } from 'vue';
	import { useTaskStore } from '../../stores/store';
	const taskStore = useTaskStore();
	// sortBy

	const sortValue = ref('');
	const isAuth = ref(false);
	const route = useRoute();
	isAuth.value = route.query.isAuth;
	// sortby
	const sortBy = ref([]);
	const dataSortBy = async () => {
		const data = JSON.parse(await taskStore.getSortBy());

		for (let i = 0; i < data.data.length; i++) {
			sortBy.value.push(data.data[i]);
		}
		return sortBy;
	};
	dataSortBy();
	console.log(sortBy.value);
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
