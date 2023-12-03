<!-- @format -->

<template>
	<div class="daily-badget my-5 rounded-md border overflow-hidden">
		<div class="text-sm mb-2 bg-booking-gray p-[18px]">
			<label class="font-medium block">Your budget per day</label>
		</div>
		<div class="badget-part bg-white px-[18px] py-1">
			<div
				class="badgets flex justify-between mb-1"
				v-for="badget in badgets"
				:key="badget.id">
				<div class="badget flex gap-1">
					<label
						class="containers block relative pl-8 p-text mb-3 cursor-pointer"
						:for="badget.id"
						>{{ badget.value }}

						<input
							v-model="badgetResult"
							@click="maxMinValue(badget.min, badget.max)"
							class="absolute opacity-0"
							type="radio"
							:value="badget.value"
							name="budget"
							:id="badget.id" />
						<span
							class="checkmark absolute top-0 left-0 h-5 w-5 rounded-md bg-white border cursor-pointer"></span>
					</label>
				</div>
				<div class="numb p-text">
					<p>{{ badget.num }}</p>
				</div>
			</div>
			<div class="create-badget">
				<div class="toggle-badget-paet flex items-center justify-between my-3">
					<p class="p-text">Set your own budget</p>
					<!-- want to handle toggle when use upper range to disable -->
					<toggle @toggleResult="toggleResult"></toggle>
				</div>
				<div class="max-min flex justify-between gap-3 mb-[19px]">
					<input
						:readonly="!enable"
						v-model.trim="minInput"
						@blur="checkMin"
						class="border w-[90px] pl-3 pt-[11px] pb-3"
						type="number"
						placeholder="Min budget" />
					<input
						:readonly="!enable"
						v-model.trim="maxInput"
						@blur="checkMax"
						class="border w-[90px] pl-3 pt-[11px] pb-3"
						type="number"
						placeholder="Max budget" />
					<button
						class="btn p-1"
						@click="sendPrice"
						>search</button
					>
				</div>
				<p
					class="text-[10px] text-red-500 whitespace-nowrap"
					v-if="noteMsg"
					>right Max budget and it's must be begger than min budget</p
				>
				<p
					class="text-[10px] text-red-500 whitespace-nowrap"
					v-if="!PriceValid"
					>this Value not valid</p
				>
			</div>
		</div>
	</div>
</template>

<script setup>
	import toggle from '../../../components/toggle.vue';
	import { ref } from 'vue';

	const badgetResult = ref('');
	const badgets = ref([
		{ value: '$ 0- $ 200', min: 0, max: 200, num: '200', id: '1' },
		{ value: '$ 200 - $ 500', min: 200, max: 500, num: '100', id: '2' },
		{ value: '$ 500 - $ 1,000', min: 500, max: 1000, num: '15', id: '3' },
		{ value: '$ 1,000 - $ 2,000', min: 1000, max: 2000, num: '12', id: '4' },
		{ value: '$ 2,000 - $ 5,000', min: 2000, max: 5000, num: '230', id: '5' },
	]);
	const PriceValid = ref(true);
	const noteMsg = ref(false);
	const maxInput = ref('');
	const minInput = ref('');
	const checkMin = () => {
		noteMsg.value = false;
		PriceValid.value = true;

		if (+minInput.value > +maxInput.value) {
			PriceValid.value = true;
			noteMsg.value = true;
		} else {
			PriceValid.value = false;
		}
	};

	const checkMax = () => {
		noteMsg.value = false;
		PriceValid.value = true;

		if (+minInput.value < +maxInput.value) {
			PriceValid.value = true;
			noteMsg.value = false;
		} else {
			PriceValid.value = false;
		}
	};
	const sendPrice = () => {
		if (+minInput.value < +maxInput.value) {
			maxMinValue(minInput.value, maxInput.value);
		} else {
			PriceValid.value = false;
		}
	};

	// get togle action
	const enable = ref(false);

	const toggleResult = (result) => {
		enable.value = result;
	};
	const emits = defineEmits(['maxMinValue']);
	const maxMinValue = (min, max) => {
		enable.value = false;
		emits('maxMinValue', min, max);
	};
</script>

<style scoped>
	/* The container */
	.containers {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* When the radio button is checked, add a blue background */
	.container input:checked ~ .checkmark {
		background-color: #2196f3;
	}
</style>
