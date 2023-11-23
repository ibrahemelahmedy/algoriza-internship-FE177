<!-- @format -->

<template>
	<header class="flex justify-between py-4">
		<div class="logo flex gap-1 items-center">
			<slot name="logo"> </slot>
		</div>
		<nav class="">
			<slot name="nav"> </slot>
		</nav>
		<div class="buttons">
			<slot name="button"></slot>
		</div>
	</header>
</template>

<script setup></script>

<style scoped></style>
