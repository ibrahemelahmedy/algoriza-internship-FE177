/** @format */

import { defineStore } from 'pinia';

export const useSortBy = defineStore('SortBy', {
	state: () => {},
	actions: {
		async SortBy() {
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
				// console.log(egyptCitiesHotel);
				return { FetchSortBy };
			} catch (err) {
				console.log(err);
			}
		},
	},
});
