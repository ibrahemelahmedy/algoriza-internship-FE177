/** @format */

import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
	state: () => {},
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
	},
});
