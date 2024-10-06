<template>
	<section
		class="_home-section-container"
		:style="{ backgroundColor: backgroundColor }"
	>
		<slot></slot>
	</section>
</template>

<script setup lang="ts">
defineProps({
	backgroundColor: {
		type: String,
		default: 'transparent',
	},
});
</script>

<style scoped lang="scss">
._home-section-container {
	width: 100%;
	height: auto;
	padding: 0 12px 36px 12px;

	@include breakpoint(md, min) {
		padding: 0 50px 36px 50px;
	}

	@include breakpoint(lg, min) {
		padding: 0 100px 36px 100px;
	}

	@include breakpoint(xl, min) {
		padding: 0 150px 36px 150px;
	}
}
</style>
