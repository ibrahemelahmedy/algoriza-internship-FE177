<!-- @format -->

<template>
	<section class="booking bg-white rounded-md overflow-hidden mb-[30px]">
		<!-- title -->

		<div
			class="flex gap-4 pl-6 py-[18px] text-white text-xl items-center bg-main-color">
			<img
				src="/src/assets/img/booking/payment/security-user 1.svg"
				alt="roomSafe" />
			<p class="font-[500] text-lg">Room 1</p>
			<p class="font-[500] text-lg"
				>2 adults, 1 double bed and 1 twin bed, Non-smoking</p
			>
		</div>
		<!-- content -->
		<div class="content pl-6">
			<div class="first-p flex gap-5 mt-8 mb-5">
				<label
					class="label"
					for="fName "
					><p>First name</p>
					<input
						class="border-main-color border"
						type="text"
						value="Juilis"
						id="fName" />
				</label>
				<label
					class="label"
					for="lName "
					><p>Last name</p>
					<input
						type="text"
						value="Lorenzo"
						id="lName" />
				</label>
			</div>
			<div class="second-p mb-5">
				<!-- mobile -->
				<div class="flex gap-3 items-center mb-5"
					><label
						for="phone"
						class="label"
						><p>Mobile number</p>
						<selectBox />
					</label>
					<label class="label"
						><input
							class="w-[338px] mt-9"
							type="text"
							value="88672778"
					/></label>
				</div>
			</div>
			<div class="control items-center flex gap-2 text-2xl mb-10">
				<input
					class="appearance-none"
					type="checkbox"
					id="txtalert" />
				<label
					class="font-[400] relative pl-[40px] cursor-pointer"
					for="txtalert"
					>Receive text alerts about this trip.</label
				>
			</div>
		</div>
	</section>
</template>

<script setup>
	import selectBox from './selectBox.vue';
</script>

<style scoped>
	.label {
		@apply flex flex-col font-[500];
	}
	.label p {
		@apply font-[500] text-lg;
	}
	.label input[type='text'] {
		@apply p-2 font-[400] text-lg bg-gray-bg rounded-md;
	}

	.control label:hover::before {
		border-color: blue;
	}

	.control label::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 30px;
		top: 0;
		left: 0px;
		transition: 0.3s;
		border: 2px solid rgb(175, 175, 175);
		border-radius: 8px;
	}

	.control label::after {
		content: '';
		font-weight: 900;
		width: 30px;
		/* w-[30px] rounded-2xl */
		height: 30px;
		top: 0;
		left: 0;
		position: absolute;

		border-radius: 8px;
		background-color: blue;
		color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
		transform: scale(0) rotate(360deg);
	}

	.control input:checked + label::after {
		transform: scale(1);
	}
</style>
