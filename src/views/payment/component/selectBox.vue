<!-- @format -->

<template>
	<Listbox
		as="div"
		v-model="selected">
		<div class="relative mt-2 w-[150px]">
			<ListboxButton
				class="relative cursor-pointer w-full rounded-md pl-3 pr-10 text-left py-[8px] px-3text-gray-900 shadow-sm ring-gray-300 bg-gray-bg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
				<span class="flex items-center">
					<img
						src="/src/assets/img/booking/payment/flage-1.png"
						alt="flage"
						class="h-6 w-6 flex-shrink-0 rounded-md" />
					<span class="ml-3 block truncate text-lg">+61</span>
				</span>
				<span
					class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6">
						<path
							fill-rule="evenodd"
							d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
							clip-rule="evenodd" />
					</svg>
				</span>
			</ListboxButton>

			<transition
				leave-active-class="transition ease-in duration-100"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0">
				<ListboxOptions
					class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script setup>
	import { ref } from 'vue';
	import {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
	} from '@headlessui/vue';
	import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';

	const people = [
		{
			id: 1,
			name: 'Wade Cooper',
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 2,
			name: 'Arlene Mccoy',
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 3,
			name: 'Devon Webb',
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		},
		{
			id: 4,
			name: 'Tom Cook',
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 5,
			name: 'Tanya Fox',
			avatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 6,
			name: 'Hellen Schmidt',
			avatar:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 7,
			name: 'Caroline Schultz',
			avatar:
				'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 8,
			name: 'Mason Heaney',
			avatar:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 9,
			name: 'Claudie Smitham',
			avatar:
				'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 10,
			name: 'Emil Schaefer',
			avatar:
				'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	];

	const selected = ref(people[3]);
</script>
