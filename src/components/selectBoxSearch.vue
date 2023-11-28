<!-- @format -->

<template>
	<Listbox
		class="absolute top-[4%] left-[3%] w-[190px]"
		as="div"
		v-model="selected">
		<div class="relative mt-2">
			<slot name="title">
				<ListboxButton
					class="relative w-full cursor-pointer rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
					<span class="flex items-center">
						<span class="ml-3 block truncate text-[11px] font-normal">{{
							selected
						}}</span>
					</span>
					<span
						class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
						<ChevronDownIcon
							class="h-5 w-5 text-gray-400"
							aria-hidden="true" />
					</span>
				</ListboxButton>
			</slot>

			<transition
				class="w-[208px] left-[-15px] absolute"
				leave-active-class="transition ease-in duration-100"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0">
				<slot name="content">
					<ListboxOptions
						class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<ListboxOption
							as="template"
							v-for="city in cities.data"
							:key="city.dest_id"
							:value="city.name"
							v-slot="{ active, selected }">
							<li
								:class="[
									active ? 'bg-indigo-600 text-white' : 'text-gray-900',
									'relative cursor-pointer select-none py-[10px] border-b pl-3 pr-9 last:border-none   ',
								]">
								<div class="flex items-center w-fit mx-auto">
									<span
										:class="[
											selected ? 'font-semibold' : 'font-normal',
											'ml-3 block truncate ',
										]"
										>{{ city.name }}</span
									>
								</div>
							</li>
						</ListboxOption>
					</ListboxOptions>
				</slot>
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
	import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
	const cities = defineProps(['data']);
	const selected = ref('Where are you going?');
</script>
