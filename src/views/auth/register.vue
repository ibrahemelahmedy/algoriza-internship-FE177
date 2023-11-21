<!-- @format -->

<template>
	<theHeader class="container items-center">
		<template v-slot:logo>
			<img
				class=""
				src="/src/assets/img/home/logo.png"
				alt="logo" />
			<h1 class="font-medium tracking-wide whitespace-nowrap"
				>my Dream place</h1
			>
		</template>
	</theHeader>
	<main class="h-[100vh] mt-[80px]">
		<article class="mx-auto w-[400px]">
			<h1 class="text-2xl font-semibold text-center mb-12">Register</h1>
			<form @submit.prevent>
				<div class="email flex flex-col">
					<label
						for="email"
						class="text-sm font-medium"
						>Email adress</label
					>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email adress"
						v-model="email" />
				</div>
				<div class="password">
					<label
						for="password"
						class="text-sm font-medium"
						>Password</label
					>
					<div class="relative">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							v-model="password" />

						<svg
							class="absolute cursor-pointer top-[25%] right-2"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none">
							<path
								d="M12.9835 10.5C12.9835 12.15 11.6502 13.4833 10.0002 13.4833C8.35018 13.4833 7.01685 12.15 7.01685 10.5C7.01685 8.85 8.35018 7.51666 10.0002 7.51666C11.6502 7.51666 12.9835 8.85 12.9835 10.5Z"
								stroke="#4F4F4F"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M10.0001 17.3917C12.9418 17.3917 15.6834 15.6583 17.5918 12.6583C18.3418 11.4833 18.3418 9.50834 17.5918 8.33334C15.6834 5.33334 12.9418 3.60001 10.0001 3.60001C7.05845 3.60001 4.31678 5.33334 2.40845 8.33334C1.65845 9.50834 1.65845 11.4833 2.40845 12.6583C4.31678 15.6583 7.05845 17.3917 10.0001 17.3917Z"
								stroke="#4F4F4F"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
				</div>
				<div class="Confirm password">
					<label
						for="Cpassword"
						class="text-sm font-medium"
						>Password</label
					>
					<div class="relative">
						<input
							type="password"
							name="Cpassword"
							id="Cpassword"
							placeholder="Confirm password"
							v-model="Cpassword" />

						<svg
							class="absolute cursor-pointer top-[25%] right-2"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none">
							<path
								d="M12.9835 10.5C12.9835 12.15 11.6502 13.4833 10.0002 13.4833C8.35018 13.4833 7.01685 12.15 7.01685 10.5C7.01685 8.85 8.35018 7.51666 10.0002 7.51666C11.6502 7.51666 12.9835 8.85 12.9835 10.5Z"
								stroke="#4F4F4F"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M10.0001 17.3917C12.9418 17.3917 15.6834 15.6583 17.5918 12.6583C18.3418 11.4833 18.3418 9.50834 17.5918 8.33334C15.6834 5.33334 12.9418 3.60001 10.0001 3.60001C7.05845 3.60001 4.31678 5.33334 2.40845 8.33334C1.65845 9.50834 1.65845 11.4833 2.40845 12.6583C4.31678 15.6583 7.05845 17.3917 10.0001 17.3917Z"
								stroke="#4F4F4F"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
				</div>

				<button class="btn w-full py-2 text-center mb-6">submit </button>
			</form>
			<div class="flex justify-center gap-1">
				<p class="">Already have an account? </p>
				<RouterLink
					class="text-main-color"
					:to="{ name: 'signIn' }"
					>Sign in</RouterLink
				>
			</div>
		</article>
	</main>
</template>

<script setup>
	import { ref } from 'vue';
	import theHeader from '../../components/theheader.vue';

	const email = ref('');
	const password = ref('');
</script>

<style scoped>
	form div {
		@apply flex flex-col mb-6;
	}
	form div input {
		@apply bg-gray-100 rounded-sm px-3 py-2 
		focus:outline-main-color focus:placeholder:text-transparent;
	}
</style>
