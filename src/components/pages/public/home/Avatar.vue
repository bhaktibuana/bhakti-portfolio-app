<template>
	<div class="_avatar-wrapper">
		<div class="_avatar-card">
			<!-- <img
				src="https://cloud.bhaktibuana.com/bhaktibuana/f26b13c52e7358efbbbdb5f18d1f040f-pixelverse-nft.jpg"
				alt="avatar-image"
				class="_avatar-image"
			/> -->
			<img
				:src="PixelverseNFT"
				alt="avatar-image"
				class="_avatar-image"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import PixelverseNFT from '@/assets/pixelverse-nft.jpg';
</script>

<style scoped lang="scss">
._avatar-wrapper {
	width: 70%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
}

._avatar-card {
	width: 100%;
	max-width: 300px;
	height: auto;
	aspect-ratio: 1;
	position: relative;
	display: flex;
	place-content: center;
	place-items: center;
	overflow: hidden;
	border-radius: 100%;
	user-select: none;
	-webkit-tap-highlight-color: transparent;

	&::before {
		content: '';
		position: absolute;
		width: 50%;
		background-image: linear-gradient(
			180deg,
			var(--color-primary),
			var(--color-primary)
		);
		height: 130%;
		animation: rotBGimg 7s linear infinite;
		transition: all 0.2s linear;
	}

	@keyframes rotBGimg {
		0% {
			transform: rotate(0deg);
			opacity: 70%;
			box-shadow: 0 0 5px var(--color-primary),
				0 0 10px var(--color-primary), 0 0 15px var(--color-primary),
				0 0 20px var(--color-primary), 0 0 35px var(--color-primary),
				0 0 40px var(--color-primary), 0 0 50px var(--color-primary),
				0 0 75px var(--color-primary);
		}

		50% {
			opacity: 100%;
			box-shadow: 0 0 10px var(--color-primary),
				0 0 20px var(--color-primary), 0 0 30px var(--color-primary),
				0 0 40px var(--color-primary), 0 0 70px var(--color-primary),
				0 0 80px var(--color-primary), 0 0 100px var(--color-primary),
				0 0 150px var(--color-primary);
		}

		100% {
			transform: rotate(360deg);
			opacity: 70%;
			box-shadow: 0 0 5px var(--color-primary),
				0 0 10px var(--color-primary), 0 0 15px var(--color-primary),
				0 0 20px var(--color-primary), 0 0 35px var(--color-primary),
				0 0 40px var(--color-primary), 0 0 50px var(--color-primary),
				0 0 75px var(--color-primary);
		}
	}

	&::after {
		content: '';
		position: absolute;
		inset: 5px;
		border-radius: 100%;
	}
}

img._avatar-image {
	width: 98%;
	height: auto;
	aspect-ratio: 1;
	border-radius: inherit;
	z-index: 1;
	box-shadow: var(--color-shadow-001);
	user-select: none;
	-webkit-tap-highlight-color: transparent;
}
</style>
