<!-- @format -->

<template>
	<section
		class="absolute top-[100%] z-50 w-[230px] right-[11%] shadow-md rounded-md bg-white py-[10px]">
		<div class="account box">
			<img
				src="/src/assets/img/userMenu/user-square 2.svg"
				alt="user" />
			<p>Manage account</p>
		</div>
		<div
			@click="redirectMyTrip"
			class="account box">
			<img
				src="/src/assets/img/userMenu/bxs-plane-take-off 1.svg"
				alt="user" />
			<p>My trips</p>
		</div>
		<div class="account box">
			<img
				src="/src/assets/img/userMenu/wallet-3 1.svg"
				alt="user" />
			<p>Reward and wallet</p>
		</div>
		<div
			@click="loginOut"
			class="account box">
			<img
				src="/src/assets/img/userMenu/logout 1.svg"
				alt="user" />
			<p>Sign out</p>
		</div>
	</section>
</template>

<script setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const redirectMyTrip = () => {
		router.push({
			name: 'myTrips',
		});
	};
	const loginOut = () => {
		localStorage.removeItem('userPassword');
		localStorage.removeItem('token');
		localStorage.removeItem('userEmail');
	};
</script>

<style scoped>
	section .box {
		@apply gap-[10px] flex px-[14px] py-[10px] cursor-pointer;
	}
	section .box:not(:last-of-type) {
		@apply border-b;
	}
	section .box p {
		@apply whitespace-nowrap;
	}
</style>
