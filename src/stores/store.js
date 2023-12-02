/** @format */

import { defineStore } from 'pinia';
const headerKey = {
	'X-RapidAPI-Key': 'f17592ae15mshe99f08d9ed5bec8p16677bjsneb10997c1e34',
	'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
};
export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		cityHotels: {
			dest_id: '',
			arrival_date: '',
			departure_date: '',
			adults: '',
			room_qty: '',
			sort_id: null,
			page_number: '',
			price_min: '',
			price_max: '',
		},
		hotel_id: '',
		hotels: [],
		hotelsRoomData: [],
	}),

	getters: {
		getcityHotelsdata(state) {
			state.cityHotels = {
				dest_id: '',
				arrival_date: '',
				departure_date: '',
				adults: '',
				room_qty: '',
			};
			return state.cityHotels;
		},
		getHotelsdata(state) {
			state.hotels = [];
			return state.hotels;
		},
		gethotelsRoomdata(state) {
			state.hotelsRoomData = [];
			return state.hotelsRoomData;
		},
	},

	actions: {
		storeCityHotelData(data) {
			this.cityHotels = data;
			return this.cityHotels;
		},
		storeHotelData(data) {
			this.hotels.push(data);
			return this.hotels;
		},
		sortId(data) {
			this.cityHotels.sort_id = data;

			return this.cityHotels.sort_id;
		},
		storeHotelDatawithroom(data) {
			this.hotelsRoomData.push(data);
			return this.hotelsRoomData;
		},

		async egyptCities() {
			try {
				const responsive = await fetch(
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=egypt',
					{
						method: 'GET',
						headers: headerKey,
					},
				);
				const resp = await responsive.text();

				const egyptCitiesHotel = JSON.parse(resp);
				return { egyptCitiesHotel };
			} catch (err) {
				console.log(err);
			}
		},
		async getSortBy() {
			try {
				const responsive = await fetch(
					`	https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy?dest_id=${this.cityHotels.dest_id}&search_type=CITY&arrival_date=${this.cityHotels.arrival_date}&departure_date=${this.cityHotels.departure_date}&adults=${this.cityHotels.adults}&children_age=1%2C17&room_qty=${this.cityHotels.room_qty}`,
					{
						method: 'GET',
						headers: headerKey,
					},
				);
				const data = await responsive.text();

				return data;
			} catch (err) {
				console.log(err);
			}
		},
		async getHotels() {
			try {
				const responsive = await fetch(
					`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${this.cityHotels.dest_id}&search_type=CITY&arrival_date=${this.cityHotels.arrival_date}&departure_date=${this.cityHotels.departure_date}&adults=${this.cityHotels.adults}&children_age=0%2C17&room_qty=${this.cityHotels.room_qty}&page_number=1&price_min=${this.cityHotels.price_min}&price_max=${this.cityHotels.price_max}&sort_by=${this.cityHotels.sort_id}&languagecode=en-us&currency_code=AED`,
					{
						method: 'GET',
						headers: headerKey,
					},
				);
				const data = await responsive.text();
				return data;
			} catch (err) {
				console.log(err);
			}
		},
		async getHotelDetails() {
			try {
				const responsive = await fetch(
					`https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=11025265&arrival_date=${this.cityHotels.arrival_date}&departure_date=${this.cityHotels.departure_date}&adults=${this.cityHotels.adults}&children_age=1%2C17&room_qty=${this.cityHotels.room_qty}&languagecode=en-us&currency_code=EUR`,
					{
						method: 'GET',
						headers: headerKey,
					},
				);
				const data = await responsive.text();

				return data;
			} catch (err) {
				console.log(err);
			}
		},
	},
});
