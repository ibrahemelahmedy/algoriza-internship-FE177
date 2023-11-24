<!-- @format -->

<template>
	<article v-if="dialogOpen">
		<section
			@click="closeDialog"
			class="absolute top-0 left-0 bg-black opacity-10 h-[2600px] w-full"></section>
		<section
			class="bg-white absolute top-[13%] left-[35%] w-[400px] justify-center items-center flex flex-col rounded-xl">
			<div class="head relative flex my-11">
				<div
					class="w-full h-full absolute bg-[#C1D9FA] z-0 rounded-tl-[150px] rounded-bl-[150px] rounded-tr-[150px] rounded-br-[150px]"></div>
				<div class="img z-10 flex">
					<img
						src="../assets/img/dialog/man pic.svg"
						alt="" />
					<img
						src="../assets/img/dialog/woman pic.svg"
						alt="" />
				</div>
			</div>
			<div class="msg text-center mb-11">
				<h2 class="mb-3">Welcome to My Dream Place</h2>
				<p
					>You can now enjoy your travel experience with easy access to
					resources and more</p
				>
			</div>
			<button
				@click="closeDialog"
				class="btn w-[90%] py-[6px] mb-7"
				>Get Start</button
			>
		</section>
	</article>
</template>

<script setup>
	import { ref, defineProps } from 'vue';

	const { isAuth } = defineProps(['isAuth']);
	const dialogOpen = ref(false);

	const checkAuth = () => {
		dialogOpen.value = isAuth;
		return dialogOpen.value;
	};
	checkAuth();
	const closeDialog = () => {
		dialogOpen.value = false;
	};
</script>

<style scoped></style>
