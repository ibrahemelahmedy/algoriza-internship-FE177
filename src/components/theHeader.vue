<!-- @format -->

<template>
	<header class="flex justify-between py-4">
		<div class="logo flex gap-1 items-center">
			<slot name="logo"> </slot>
		</div>
		<nav class="">
			<slot name="nav"> </slot>
		</nav>
		<div class="buttons">
			<slot name="button">
				<div
					class="flex gap-4"
					v-if="valid">
					<img
						class="cursor-pointer"
						:src="
							notWColor
								? '/src/assets/img/home/notification 1.svg'
								: '/src/assets/img/booking/header/notification.svg'
						"
						alt="notification" />
					<div class="relative">
						<img
							@click="menuVisib"
							class="cursor-pointer"
							src="/src/assets/img/booking/header/profile-image.png"
							alt="profileimage" />
						<useresMenu v-if="hidMenu" />
					</div>
				</div>
			</slot>
		</div>
	</header>
</template>

<script setup>
	import useresMenu from './useresMenu.vue';

	import { ref, defineProps } from 'vue';
	const hidMenu = ref(false);
	const valid = ref(false);
	const { isAuth, notWColor } = defineProps(['isAuth', 'notWColor']);
	valid.value = isAuth;
	const menuVisib = () => {
		hidMenu.value = !hidMenu.value;
	};
</script>

<style scoped></style>
