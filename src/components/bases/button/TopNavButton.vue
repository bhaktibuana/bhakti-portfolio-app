<template>
	<button class="_topnav-button" :class="{ active: active }">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
._topnav-button {
	border: none;
	background-color: transparent;
	font-size: 16px;
	color: var(--color-text-001);
	transition: 0.2s all ease;
	cursor: pointer;

	&:hover {
		color: var(--color-primary);
	}

	&.active {
		color: var(--color-primary);
	}
}
</style>
