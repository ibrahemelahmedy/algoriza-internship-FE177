<!-- @format -->

<template>
	<div
		class="flex items-center justify-between bg-white px-4 py-3 sm:px-6 w-fit mx-auto">
		<div class="flex flex-1 justify-between sm:hidden">
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
		</div>
		<div>
			<div class="flex justify-center">
				<nav
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
					<!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900  ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
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
						>{{ Math.ceil(props.meta / 20) }}</a
					>
					<a
						href="#"
						class="relative inline-flex items-center rounded-md px-2 py-2 text-main-color ring-inset ring-gray-300 hover:bg-main-color hover:text-white focus:z-20 focus:outline-offset-0 shadow-lg">
						<span class="sr-only">Next</span>
						<ChevronRightIcon
							class="h-5 w-5"
							aria-hidden="true" />
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
	const props = defineProps(['meta']);
	const items = [
		{
			id: 1,
			title: 'Back End Developer',
			department: 'Engineering',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			id: 2,
			title: 'Front End Developer',
			department: 'Engineering',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			id: 3,
			title: 'User Interface Designer',
			department: 'Design',
			type: 'Full-time',
			location: 'Remote',
		},
	];
</script>
