/** @format */

import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		cityHotels: {
			dest_id: '',
			arrival_date: '',
			departure_date: '',
			adults: '',
			room_qty: '',
		},
		page_number: '',
		price_min: '',
		price_max: '',
		sort_by: '',
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
						headers: {
							'X-RapidAPI-Key':
								'ba60441698msh381a20fe52f110ep14de89jsnfc3f616c1144',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
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
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy?dest_id=-2092174&search_type=CITY&arrival_date=2023-12-03&departure_date=2023-12-31&adults=1&children_age=1%2C17&room_qty=1',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'ba60441698msh381a20fe52f110ep14de89jsnfc3f616c1144',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
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
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-290692&search_type=CITY&arrival_date=2023-12-06&departure_date=2023-12-26&adults=1&children_age=0%2C17&room_qty=1&page_number=1&price_max=50000&languagecode=en-us&currency_code=AED',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'ba60441698msh381a20fe52f110ep14de89jsnfc3f616c1144',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
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
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=11025265&arrival_date=2023-12-06&departure_date=2023-12-26&adults=1&children_age=1%2C17&room_qty=1&languagecode=en-us&currency_code=EUR',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'ba60441698msh381a20fe52f110ep14de89jsnfc3f616c1144',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
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

// `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${this.cityHotels.dest_id}&search_type=CITY&arrival_date=${this.cityHotels.arrival_date}&departure_date=${this.cityHotels.departure_date}&adults=${this.cityHotels.adults}&children_age=0%2C17&room_qty=${this.cityHotels.room_qty}&page_number=1&price_min=0&price_max=500000&sort_by=upsort_bh&languagecode=en-us&currency_code=AED`;
