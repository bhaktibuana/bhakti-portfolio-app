<template>
	<button
		class="_topnav-button"
		:class="{ active: publicSectionScroll.activeSection === id }"
	>
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { usePublicSectionScroll } from '@/store';

defineProps({
	label: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
});

const publicSectionScroll = usePublicSectionScroll();
</script>

<style scoped lang="scss">
._topnav-button {
	border: none;
	background-color: transparent;
	font-size: 16px;
	color: var(--color-text-001);
	transition: 0.2s all ease;
	cursor: pointer;
	padding: 6px 12px;
	border-radius: 24px;
	font-weight: 500;
	border: 1.5px solid transparent;

	&:hover {
		background-color: var(--color-primary-opacity);
		color: var(--color-text-003);
	}

	&.active {
		color: var(--color-primary);
		border: 1.5px solid var(--color-primary);
		background-color: transparent;
	}
}
</style>
