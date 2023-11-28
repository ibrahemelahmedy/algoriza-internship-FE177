<!-- @format -->

<template>
	<Listbox
		class="absolute w-[190px] top-[2px] right-[10%]"
		as="div"
		v-model="selected">
		<div class="relative mt-2">
			<slot name="title">
				<ListboxButton
					class="relative w-[190px] h-[50px] cursor-pointer border border-gray-300 rounded-md py-2 px-3 text-left shadow-sm ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
					<div
						v-if="!selected"
						class="flex flex-col">
						<p class="text-xs text-text-color font-[400] h-fit">Sort by</p>
						<p class="text-md font-[normal]h-fit">Recommended</p>
					</div>
					<div
						v-else
						class="flex items-center w-fit mx-auto overflow-hidden">
						<span
							:class="[
								selected ? 'font-semibold' : 'font-normal',
								' block w-[185px]  ',
							]"
							>{{ selected }}</span
						>
					</div>
					<span
						class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
						<ChevronDownIcon
							class="h-5 w-5 text-gray-400"
							aria-hidden="true" />
					</span>
				</ListboxButton>
			</slot>

			<transition
				class="w-[200px] left-[0px] absolute"
				leave-active-class="transition ease-in duration-100"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0">
				<slot name="content">
					<ListboxOptions
						class="absolute z-10 mt-1 max-h-56 w-full overflow-y-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<ListboxOption
							as="template"
							v-for="sort in sortByReco.data"
							:key="sort.id"
							:value="sort.title"
							v-slot="{ active, selected }">
							<li
								:class="[
									active ? 'bg-indigo-600 text-white' : 'text-gray-900',
									'relative cursor-pointer select-none  border-b  last:border-none   ',
								]">
								<div class="flex w-fit mx-auto">
									<span
										class="text-ellipsis"
										:class="[
											selected ? 'font-semibold' : 'font-normal',
											'block truncate ',
										]"
										>{{ sort.title }}</span
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
	const sortByReco = defineProps(['data']);
	const selected = ref('');
</script>
