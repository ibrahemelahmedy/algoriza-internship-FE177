<!-- @format -->

<template>
	<Listbox
		class="absolute lg:w-[190px] top-[4%] left-[3%]"
		as="div"
		v-model="selected">
		<div class="relative mt-2">
			<slot name="title">
				<ListboxButton
					@click="getId(selected)"
					class="relative top-[-5px] left-[20px] sm:top-[-10px] sm:left-[10px] lg:top-[-3px] lg:left-[-7px] xl:top-0 xl:left-0 w-[110px] sm:w-full cursor-pointer rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
					<span class="flex items-center">
						<span
							class="ml-3 block truncate text-[11px] font-normal hover:overflow-visible"
							>{{ selected }}</span
						>
					</span>
					<span
						class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-6">
						<ChevronDownIcon
							class="h-5 w-5 text-gray-400 hidden xl-block"
							aria-hidden="true" />
					</span>
				</ListboxButton>
			</slot>

			<transition
				class="lg:w-[208px] left-[-15px] absolute"
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
								@click="getId(city.dest_id)"
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
	import { onMounted, ref, watch } from 'vue';
	import {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
	} from '@headlessui/vue';
	import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
	import { useRoute } from 'vue-router';
	const cities = defineProps(['data']);
	const route = useRoute();
	const selected = ref('');
	// set id in local Storage
	const getId = (id) => {
		localStorage.setItem('dest-id', id);
	};

	// check selected value
	onMounted(() => {
		if (route.query.hotelsDetails) {
			selected.value = JSON.parse(localStorage.getItem('citySelected'));
		} else {
			selected.value = 'Where are you going?';
		}
	});

	watch(selected, (newSelect, _) => {
		localStorage.setItem('citySelected', JSON.stringify(newSelect));
	});
</script>
