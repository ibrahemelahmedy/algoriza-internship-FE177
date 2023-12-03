<!-- @format -->

<template>
	<div
		class="flex items-center justify-between bg-white lg:px-4 lg:py-3 sm:px-6 w-fit mx-auto">
		<div>
			<div class="flex justify-center">
				<div class="isolate inline-flex -space-x-px rounded-md gap-1">
					<button
						class="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-xl"
						@click="previousPage"
						:disabled="currentPage === 1"
						><span class="sr-only">Previous</span>
						<ChevronLeftIcon
							class="h-5 w-5"
							aria-hidden="true"
					/></button>

					<template
						v-for="page in displayedPages"
						:key="page">
						<button
							class="relative inline-flex items-center rounded-md px-4 py- text-gray-400 ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-xl"
							@click="goToPage(page)"
							:class="{ active: currentPage === page }"
							>{{ page }}</button
						>
					</template>

					<button
						class="relative inline-flex items-center rounded-md px-2 py-2 text-main-color ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-lg"
						@click="nextPage"
						:disabled="currentPage === totalPages"
						><span class="sr-only">Next</span>
						<ChevronRightIcon
							class="h-5 w-5"
							aria-hidden="true"
					/></button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
	import { ref, onMounted, computed, watch } from 'vue';
	import { useTaskStore } from '../../../stores/store';
	const taskStore = useTaskStore();
	const totalPages = ref(null);
	const emits = defineEmits('getPage');

	onMounted(() => {
		if (localStorage.getItem('totalHotels')) {
			totalPages.value = Math.ceil(
				JSON.parse(localStorage.getItem('totalHotels')) / 20,
			);
			return totalPages.value;
		}
	});
	const currentPage = ref(1);

	const displayedPages = computed(() => {
		const pages = [];
		const pageCountToShow = 3; // Adjust as needed

		let startPage = Math.max(
			1,
			currentPage.value - Math.floor(pageCountToShow / 2),
		);
		let endPage = Math.min(totalPages.value, startPage + pageCountToShow - 1);

		if (endPage - startPage + 1 < pageCountToShow) {
			startPage = Math.max(1, endPage - pageCountToShow + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}
		return pages;
	});

	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages.value) {
			currentPage.value = page;
		}
	};

	const nextPage = () => {
		if (currentPage.value < totalPages.value) {
			currentPage.value++;
		}
	};

	const previousPage = () => {
		if (currentPage.value > 1) {
			currentPage.value--;
		}
	};

	// Watch for changes in current page and update your data accordingly
	watch(currentPage, (newPage) => {
		// Fetch data, update component state, etc.
		localStorage.setItem('currentPage', newPage || 1);
		taskStore.getPageNumber(newPage || currentPage.value);
		emits('getPage', currentPage);
	});
</script>
