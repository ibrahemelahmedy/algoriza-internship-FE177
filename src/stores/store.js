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
								'7440ff8fc6msh79889f5df260963p18fc19jsn83e5aa6414b2',
							'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
						},
					},
				);
				const resp = await responsive.text();

				const egyptCitiesHotel = JSON.parse(resp);
				// console.log(egyptCitiesHotel);
				return { egyptCitiesHotel };
			} catch (err) {
				console.log(err);
			}
		},
	},
});
