<!-- @format -->

<template>
	<article class="m-auto shadow-md rounded-lg">
		<form
			@click.prevent
			class="bg-white grid gap-3 rounded-xl py-3 px-4 grid-cols-[200px_repeat(5,130px)]">
			<div class="search-handel country">
				<label for="country"
					><img
						class="cursor-pointer w-[20px]"
						src="/src/assets/img/searchBar/location 1.svg"
						alt="location" />
				</label>
				<div class="custom-select">
					<select
						name="egypt"
						id="country"
						class="text-[11px] font-normal"
						v-model="cityName">
						<option
							value=""
							disabled
							selected
							hidden>
							Where are you going?</option
						>
						<option
							:value="city"
							v-for="city in cities"
							:key="city"
							>{{ city.name }}</option
						>
					</select>
				</div>
			</div>

			<div class="search-handel time-start">
				<label>
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/calendar 1.svg"
						alt="calender" />
				</label>
				<VueDatePicker
					:format="format"
					@blur="onchang"
					placeholder="Check in date"
					class="datePicher"
					v-model="arrival_date"
					hide-input-icon></VueDatePicker>
			</div>

			<div class="search-handel time-end">
				<label
					><img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/calendar 1.svg"
						alt="calender" />
				</label>
				<VueDatePicker
					:format="format"
					@blur="onchang"
					placeholder="Check out date"
					class="datePicher"
					v-model="departure_date"
					hide-input-icon></VueDatePicker>
			</div>
			<div class="search-handel guests-num">
				<label for="guestsNum">
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/user-square 1.svg"
						alt="calender" />
				</label>
				<input
					@blur="checkGest"
					type="text"
					id="guestsNum"
					name="guestsNum"
					placeholder="Guests"
					v-model.trim="guestNum" />
			</div>
			<div class="search-handel rooms-num">
				<label for="roomsNum">
					<img
						class="cursor-pointer w-[25px]"
						src="/src/assets/img/searchBar/room.svg"
						alt="calender" />
				</label>
				<input
					@blur="checkRoom"
					type="text"
					id="roomsNum"
					name="roomsNum"
					placeholder="Rooms"
					v-model.trim="roomNum" />
			</div>
			<button
				class="btn"
				@click="searchHandel"
				>Search</button
			>
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
	import { computed, ref, defineProps } from 'vue';
	import { useRouter } from 'vue-router';
	import { useTaskStore } from '../stores/store';
	const taskStore = useTaskStore();
	const roomNum = ref('');
	const guestNum = ref('');
	const cityName = ref('');
	const arrival_date = ref('');
	const departure_date = ref('');
	const allCheckWell = ref(true);

	// error msg handel
	const chechDate = ref(true);
	const onchang = computed(() => {
		const now = new Date();
		const dateIn = new Date(arrival_date.value);
		const dateOut = new Date(departure_date.value);
		chechDate.value = true;
		allCheckWell.value = true;

		if (now > dateIn || now > dateOut || dateIn > dateOut) {
			chechDate.value = false;
			allCheckWell.value = false;
		}
	});
	const checkGestNum = ref(true);
	const checkGest = computed(() => {
		checkGestNum.value = true;
		allCheckWell.value = false;

		if (guestNum.value <= '0') {
			checkGestNum.value = false;
			allCheckWell.value = false;
		}
	});
	const checkRoomNum = ref(true);
	const checkRoom = computed(() => {
		checkRoomNum.value = true;
		allCheckWell.value = true;

		if (roomNum.value <= '0') {
			checkRoomNum.value = false;
			allCheckWell.value = false;
		}
	});

	// handel city from api
	const cities = ref([]);
	const dataCities = async () => {
		const data = await taskStore.egyptCities();
		const searchCity = data.egyptCitiesHotel.data.filter(
			(data) => data.search_type !== 'country',
		);
		for (let i = 0; i < searchCity.length; i++) {
			cities.value.push(searchCity[i]);
		}
		return cities;
	};

	dataCities();

	// handleDate
	// In case of a range picker, you'll receive [Date, Date]
	const format = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	//  send data with route
	const router = useRouter();
	const { isAuth } = defineProps(['isAuth']);
	const searchHandel = () => {
		if (
			cityName.value !== '' &&
			arrival_date.value !== '' &&
			departure_date.value !== '' &&
			guestNum.value !== '' &&
			roomNum.value !== '' &&
			guestNum.value > '0' &&
			roomNum.value > '0' &&
			isAuth
		) {
			router.push({
				name: 'booking',
				query: {
					cityName: cityName.value,
					arrival_date: arrival_date.value,
					departure_date: departure_date.value,
					guestNum: guestNum.value,
					roomNum: roomNum.value,
					isAuth: isAuth,
				},
			});
		} else if (!isAuth) {
			router.push({
				name: 'signIn',
			});
		}
	};

	// const chosenCity = () => {
	// 	console.log(cityName.value);
	// 	console.log(arrival_date.value);
	// 	console.log(departure_date.value);
	// 	console.log(`${guestNum.value} gest`);
	// 	console.log(`${roomNum.value} room`);
	// };
</script>
<style>
	.search-handel {
		@apply py-1 px-2 flex gap-1 items-center bg-gray-bg rounded-md;
	}
	.search-handel select,
	.search-handel input {
		@apply bg-transparent w-full cursor-pointer border-none text-[11px] font-normal p-0;
	}

	.search-handel input::placeholder {
		@apply text-xs text-text-color font-semibold;
	}
	.search-handel select:focus,
	.search-handel input:focus {
		@apply outline-none;
	}

	/* select box style */
</style>
