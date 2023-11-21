/** @format */

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import boockingPage from '../views/booking/bookingPage.vue';
import signIn from '../views/auth/signIn.vue';
import register from '../views/auth/register.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/booking',
			name: 'booking',
			component: boockingPage,
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
