<!-- @format -->

<template>
	<div>
		<Switch
			v-model="enabled"
			@click="sendToggleState"
			:class="enabled ? ' bg-green-600' : 'bg-toggle-bg'"
			class="relative inline-flex h-[15px] w-[20px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
			<span class="sr-only top-[50%]">Use setting</span>
			<span
				aria-hidden="true"
				:class="
					enabled
						? 'translate-x-[8px] translate-y-[-2px] '
						: 'translate-x-[-8px] translate-y-[-2px]'
				"
				class="pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
		</Switch>
	</div>
</template>

<script setup>
	import { ref, defineEmits } from 'vue';
	import { Switch } from '@headlessui/vue';
	const emits = defineEmits(['toggleResult']);
	const enabled = ref(false);
	const sendToggleState = () => {
		emits('toggleResult', enabled.value);
	};
</script>
