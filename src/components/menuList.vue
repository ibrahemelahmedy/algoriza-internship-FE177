<!-- @format -->

<template>
	<Popover class="relative w-fit mx-auto border">
		<PopoverButton
			class="inline-flex p-2 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
			<span>menu</span>
			<ChevronDownIcon
				class="h-5 w-5"
				aria-hidden="true" />
		</PopoverButton>

		<transition
			enter-active-class="transition ease-out duration-200"
			enter-from-class="opacity-0 translate-y-1"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition ease-in duration-150"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 translate-y-1">
			<PopoverPanel
				class="absolute left-1/2 z-10 mt-5 flex w-[180px] sm:max-w-[300px] -translate-x-1/2 sm:px-4">
				<div
					class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
					<div class="p-4">
						<div
							v-for="item in solutions"
							:key="item.name"
							class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-gray-50">
							<div
								class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
								<component
									:is="item.icon"
									class="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
									aria-hidden="true" />
							</div>
							<div>
								<a
									:href="item.href"
									class="font-semibold text-gray-900">
									{{ item.name }}
								</a>
							</div>
						</div>
					</div>
					<div class="divide-gray-900/5 bg-gray-50">
						<div
							v-if="!isAuth"
							class="flex gap-2 justify-center mb-3">
							<router-link
								class="btn px-3 py-2"
								:to="{ name: 'register' }"
								>Register</router-link
							>
							<router-link
								class="btn px-3 py-2"
								:to="{ name: 'signIn' }"
								>Sign In</router-link
							>
						</div>
						<div
							class="flex gap-4 justify-center mb-3"
							v-else>
							<img
								class="cursor-pointer"
								src="
									 /src/assets/img/home/notification 1.svg
										
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
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import useresMenu from './useresMenu.vue';

	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
	import {
		ChevronDownIcon,
		PhoneIcon,
		PlayCircleIcon,
	} from '@heroicons/vue/20/solid';
	import {
		ArrowPathIcon,
		ChartPieIcon,
		CursorArrowRaysIcon,
		FingerPrintIcon,
		SquaresPlusIcon,
	} from '@heroicons/vue/24/outline';
	const isAuth = ref(false);
	onMounted(() => {
		if (localStorage.getItem('isAuth')) {
			isAuth.value = localStorage.getItem('isAuth');
			return isAuth.value;
		}
	});
	const hidMenu = ref(false);
	const menuVisib = () => {
		hidMenu.value = !hidMenu.value;
	};
	const solutions = [
		{
			name: 'Home',
			href: '/',
			icon: ArrowPathIcon,
		},
		{
			name: 'Disciver',
			href: '#',
			icon: ChartPieIcon,
		},
		{
			name: 'Activities',
			href: '#',
			icon: CursorArrowRaysIcon,
		},
		{
			name: 'About',
			href: '#',
			icon: FingerPrintIcon,
		},
	];
	const callsToAction = [
		{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
		{ name: 'Contact sales', href: '#', icon: PhoneIcon },
	];
</script>
