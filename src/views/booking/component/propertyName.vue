<!-- @format -->

<template>
	<div class="propery-name p-4 rounded-md bg-booking-gray">
		<label class="font-medium text-sm mb-2 block">
			Search by property name
		</label>
		<div class="flex relative">
			<img
				class="absolute top-[5px] left-2"
				src="/src/assets/img/booking/propertyName/search 1.svg"
				alt="search" />
			<input
				v-model="searchPro"
				@input="sendData"
				class="pl-9 py-1 rounded-md shadow-sm w-full"
				type="text"
				name="search-by"
				placeholder="eg. Beach westpalm" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const searchPro = ref('');

	const emit = defineEmits();

	const sendData = () => {
		emit('searchHotelName', searchPro.value);
	};
</script>

<style scoped></style>
