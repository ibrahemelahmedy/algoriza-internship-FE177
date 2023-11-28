/** @format */

import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		dest_id: '',
		arrival_date: '',
		departure_date: '',
		adults: '',
		room_qty: '',
		page_number: '',
		price_min: '',
		price_max: '',
		sort_by: '',
		hotel_id: '',
	}),

	actions: {
		async egyptCities() {
			try {
				const responsive = await fetch(
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=egypt',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'1118611b46msh7c662ca2709200dp1bdbccjsn03d232bbe5fa',
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
								'1118611b46msh7c662ca2709200dp1bdbccjsn03d232bbe5fa',
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
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2023-12-03&departure_date=2023-12-31&adults=1&children_age=0%2C17&room_qty=1&page_number=1&price_min=100&price_max=50000&sort_by=upsort_bh&languagecode=en-us&currency_code=AED',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'1118611b46msh7c662ca2709200dp1bdbccjsn03d232bbe5fa',
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
					'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=191605&arrival_date=2023-12-03&departure_date=2023-12-31&adults=1&children_age=1%2C17&room_qty=1&languagecode=en-us&currency_code=EUR',
					{
						method: 'GET',
						headers: {
							'X-RapidAPI-Key':
								'1118611b46msh7c662ca2709200dp1bdbccjsn03d232bbe5fa',
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
