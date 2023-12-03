<!-- @format -->

<template>
	<div
		class="flex items-center justify-between bg-white lg:px-4 lg:py-3 sm:px-6 w-fit mx-auto">
		<!-- <div class="flex flex-1 justify-between sm:hidden">
			<a
				href="#"
				class="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>Previous</a
			>
			<a
				href="#"
				class="relative ml-3 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>Next</a
			>
		</div> -->
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
							class="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-xl"
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

				<!-- <nav
					class="isolate inline-flex -space-x-px rounded-md gap-1"
					aria-label="Pagination">
					<a
						href="#"
						class="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-xl">
						<span class="sr-only">Previous</span>
						<ChevronLeftIcon
							class="h-5 w-5"
							aria-hidden="true" />
					</a>

					<a
						href="#"
						aria-current="page"
						class="relative z-10 inline-flex items-center bg-main-color py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-main-color hover:text-white px-4 rounded-lg focus-visible:outline-indigo-600"
						>1</a
					>
					<a
						href="#"
						class="relative inline-flex items-center py-2 text-sm font-semibold ring-inset ring-gray-300 hover:bg-main-color hover:text-white px-4 rounded-lg text-gray-400 focus:z-20 focus:outline-offset-0"
						>2</a
					>
					<a
						href="#"
						class="relative hidden items-center py-2 text-sm font-semibold ring-inset ring-gray-300 hover:bg-main-color hover:text-white px-4 rounded-lg text-gray-400 focus:z-20 focus:outline-offset-0 md:inline-flex"
						>3</a
					>
					<span
						class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-inset ring-gray-300 focus:outline-offset-0"
						>...</span
					>

					<a
						href="#"
						class="relative inline-flex items-center py-2 text-sm font-semibold ring-inset hover:bg-main-color hover:text-white px-4 rounded-lg text-gray-400 focus:z-20 focus:outline-offset-0"
						>{{ totalPages }}</a
					>
					<a
						href="#"
						class="relative inline-flex items-center rounded-md px-2 py-2 text-main-color ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-lg">
						<span class="sr-only">Next</span>
						<ChevronRightIcon
							class="h-5 w-5"
							aria-hidden="true" />
					</a>
				</nav> -->
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
	import { ref, defineProps, onMounted, computed, watch } from 'vue';

	const props = defineProps({
		totalHotelsNumber: {
			type: Number,
		},
	});
	// const currentPage = ref('1');
	// const items = [
	// 	{
	// 		id: 1,
	// 		title: 'Back End Developer',
	// 		department: 'Engineering',
	// 		type: 'Full-time',
	// 		location: 'Remote',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Front End Developer',
	// 		department: 'Engineering',
	// 		type: 'Full-time',
	// 		location: 'Remote',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'User Interface Designer',
	// 		department: 'Design',
	// 		type: 'Full-time',
	// 		location: 'Remote',
	// 	},
	// ];
	const totalPages = ref(null);
	onMounted(() => {
		if (props.totalHotelsNumber) {
			totalPages.value = Math.ceil(props.totalHotelsNumber / 20);
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
		console.log('Current Page:', newPage);
	});
</script>
