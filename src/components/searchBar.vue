<!-- @format -->

<template>
	<article class="m-auto shadow-md rounded-lg">
		<form
			@submit.prevent="searchHandel"
			class="bg-white grid gap-3 rounded-xl py-3 px-4 grid-cols-[200px_repeat(5,130px)]">
			<div class="search-handel country">
				<label for="country"
					><img
						class="cursor-pointer w-[20px]"
						src="/src/assets/img/searchBar/location 1.svg"
						alt="location" />
				</label>
				<div class="custom-select">
					<!-- :readonly="hotelsDetails" -->
					<selectBoxSearch
						:data="cities"
						v-model="hotelsSearchDetails.cityName"
						class="absolute"></selectBoxSearch>
				</div>
			</div>

			<div class="search-handel time-start">
				<label>
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/calendar 1.svg"
						alt="calender" />
				</label>
				<!-- :readonly="hotelsDetails" -->
				<VueDatePicker
					:format="format"
					@blur="onchang"
					model-type="yyyy-MM-dd"
					:enable-time-picker="false"
					placeholder="Check in date"
					class="datePicher"
					v-model="hotelsSearchDetails.arrival_date"
					hide-input-icon
					auto-apply></VueDatePicker>
			</div>

			<div class="search-handel time-end">
				<label
					><img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/calendar 1.svg"
						alt="calender" />
				</label>
				<!-- :readonly="hotelsDetails" -->
				<VueDatePicker
					:format="format"
					@blur="onchang"
					:enable-time-picker="false"
					model-type="yyyy-MM-dd"
					placeholder="Check out date"
					class="datePicher"
					v-model="hotelsSearchDetails.departure_date"
					auto-apply
					hide-input-icon></VueDatePicker>
			</div>
			<div class="search-handel guests-num">
				<label for="guestsNum">
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/user-square 1.svg"
						alt="calender" />
				</label>
				<!-- :readonly="hotelsDetails" -->
				<input
					@blur="checkGest"
					type="text"
					id="guestsNum"
					name="guestsNum"
					placeholder="Guests"
					v-model.trim="hotelsSearchDetails.adults" />
			</div>
			<div class="search-handel rooms-num">
				<label for="roomsNum">
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/room.svg"
						alt="calender" />
				</label>
				<!-- :readonly="hotelsDetails" -->
				<input
					@blur="checkRoom"
					type="text"
					id="roomsNum"
					name="roomsNum"
					placeholder="Rooms"
					v-model.trim="hotelsSearchDetails.room_qty" />
			</div>
			<button
				class="btn"
				type="submit"
				>Search</button
			>
			<!-- @click="searchHandel" -->
			<div
				class="flex flex-col"
				v-if="!allCheckWell">
				<p
					v-if="!chechDate"
					class="text-[10px] text-red-500 whitespace-nowrap">
					Look at date again (target day after today and the check out after
					previous date )</p
				>
				<p
					v-if="!checkGestNum"
					class="text-[10px] text-red-500 whitespace-nowrap">
					at least 1 Gest
				</p>
				<p
					v-if="!checkRoomNum"
					class="text-[10px] text-red-500 whitespace-nowrap">
					at least 1 Room
				</p>
			</div>
		</form>
	</article>
</template>

<script setup>
	import selectBoxSearch from './selectBoxSearch.vue';
	import { ref, defineProps, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import { useTaskStore } from '../stores/store';
	const taskStore = useTaskStore();

	const { isAuth, hotelsDetails } = defineProps(['isAuth', 'hotelsDetails']);
	// data from search
	const hotelsSearchDetails = ref({
		cityName: '',
		dest_id: '',
		arrival_date: '',
		departure_date: '',
		adults: '',
		room_qty: '',
	});

	const allCheckWell = ref(true);

	// error msg handel
	const chechDate = ref(true);
	const onchang = () => {
		const now = new Date();
		const dateIn = new Date(hotelsSearchDetails.value.arrival_date);
		const dateOut = new Date(hotelsSearchDetails.value.departure_date);
		chechDate.value = true;
		allCheckWell.value = true;

		if (now > dateIn || now > dateOut || dateIn >= dateOut) {
			chechDate.value = false;
			allCheckWell.value = false;
		}
	};
	const checkGestNum = ref(true);
	const checkGest = () => {
		checkGestNum.value = true;
		allCheckWell.value = false;

		if (hotelsSearchDetails.value.adults <= '0') {
			checkGestNum.value = false;
			allCheckWell.value = false;
		}
	};
	const checkRoomNum = ref(true);
	const checkRoom = () => {
		checkRoomNum.value = true;
		allCheckWell.value = true;

		if (hotelsSearchDetails.value.room_qty <= '0') {
			checkRoomNum.value = false;
			allCheckWell.value = false;
		}
	};

	// handel city from api
	const cities = ref([]);
	const dataCities = async () => {
		const data = await taskStore.egyptCities();
		const searchCity = data.egyptCitiesHotel.data.filter(
			(data) => data.search_type === 'city',
		);
		for (let i = 0; i < searchCity.length; i++) {
			cities.value.push(searchCity[i]);
		}
		return cities;
	};
	// handleDate
	// In case of a range picker, you'll receive [Date, Date]
	const format = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day}-${month}-${year}`;
	};

	//  send data with route
	const router = useRouter();
	// getId
	const getId = () => {
		if (localStorage.getItem('dest-id')) {
			hotelsSearchDetails.value.dest_id = localStorage.getItem('dest-id');
		}
	};
	// search action handling
	const searchHandel = () => {
		getId();
		if (
			hotelsSearchDetails.value.cityName !== '' &&
			hotelsSearchDetails.value.arrival_date !== '' &&
			hotelsSearchDetails.value.departure_date !== '' &&
			hotelsSearchDetails.value.adults !== '' &&
			hotelsSearchDetails.value.room_qty !== '' &&
			hotelsSearchDetails.value.adults > '0' &&
			hotelsSearchDetails.value.room_qty > '0' &&
			hotelsSearchDetails.value.dest_id !== '' &&
			isAuth
		) {
			// to params or local storage??
			router.push({
				name: 'booking',
				query: {
					hotelsDetails: JSON.stringify(hotelsSearchDetails.value),

					isAuth: isAuth,
				},
			});
		} else if (!isAuth) {
			router.push({
				name: 'signIn',
			});
		}
	};

	onMounted(() => {
		// dataCities(); //stoped to handel lower api request
		if (hotelsDetails) {
			hotelsSearchDetails.value.arrival_date = hotelsDetails.arrival_date;
			hotelsSearchDetails.value.departure_date = hotelsDetails.departure_date;
			hotelsSearchDetails.value.adults = hotelsDetails.adults;
			hotelsSearchDetails.value.room_qty = hotelsDetails.room_qty;
		}
	});
</script>
<style>
	.search-handel {
		@apply py-1 px-2 flex gap-1 items-center bg-gray-bg rounded-md;
	}
	.search-handel select,
	.search-handel input {
		@apply bg-transparent w-full cursor-pointer border-none text-[11px] font-[400] p-0;
	}

	.search-handel input::placeholder {
		@apply text-xs text-text-color font-semibold;
	}
	.search-handel select:focus,
	.search-handel input:focus {
		@apply outline-none;
	}
</style>
