<!-- @format -->

<template>
	<article v-if="dialogOpen">
		<slot name="layer">
			<section
				@click="closeDialog"
				class="absolute top-0 left-0 bg-black opacity-10 h-[1820px] w-full"></section>
		</slot>
		<section
			:class="deg ? `top-[${deg}%]` : ''"
			class="bg-white absolute left-[35%] w-[400px] justify-center items-center flex flex-col rounded-xl">
			<slot name="land">
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
			</slot>
			<div class="msg text-center mb-11">
				<slot name="content">
					<h2 class="mb-3">Welcome to My Dream Place</h2>
					<p
						>You can now enjoy your travel experience with easy access to
						resources and more</p
					>
				</slot>
			</div>
			<slot name="button">
				<button
					@click="closeDialog"
					class="btn w-[90%] py-[6px] mb-7"
					>Get Start</button
				>
			</slot>
		</section>
	</article>
</template>

<script setup>
	import { ref, defineProps } from 'vue';

	const { isAuth, deg } = defineProps(['isAuth', 'deg']);
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
