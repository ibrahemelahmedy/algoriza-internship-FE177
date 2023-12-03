/** @format */

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import bookingPage from '../views/booking/bookingPage.vue';
import hotelDetails from '../views/hotel/hotelDetails.vue';
import payment from '../views/payment/payment.vue';
import myTrips from '../views/trips/myTrips.vue';
import signIn from '../views/auth/signIn.vue';
import register from '../views/auth/register.vue';
let Auth = localStorage.getItem('isAuth');
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/booking',
			name: 'booking',
			component: bookingPage,
			beforeEnter: (to, _, next) => {
				const isAuth = Auth;
				if (!isAuth && to.name !== 'signIn') {
					next({ name: 'signIn' });
				} else {
					next();
				}
			},
		},
		{
			path: '/booking/:hotelId',
			name: 'hotelDetails',
			component: hotelDetails,

			beforeEnter: (to, _, next) => {
				const isAuth = Auth;
				if (!isAuth && to.name !== 'signIn') {
					next({ name: 'signIn' });
				} else {
					next();
				}
			},
		},
		{
			path: '/payment',
			name: 'payment',
			component: payment,
			props: true,
			beforeEnter: (to, _, next) => {
				const isAuth = Auth;
				if (!isAuth && to.name !== 'signIn') {
					next({ name: 'signIn' });
				} else {
					next();
				}
			},
		},

		{
			path: '/myTrips',
			name: 'myTrips',
			component: myTrips,
			beforeEnter: (to, _, next) => {
				const isAuth = Auth;
				if (!isAuth && to.name !== 'signIn') {
					next({ name: 'signIn' });
				} else {
					next();
				}
			},
		},
		{
			path: '/signIn',
			name: 'signIn',
			component: signIn,
		},
		{
			path: '/register',
			name: 'register',
			component: register,
		},
	],
});

export default router;
