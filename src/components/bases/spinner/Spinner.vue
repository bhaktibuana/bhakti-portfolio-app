<template>
	<icon class="_spinner" name="loader-2" :size="size" :stroke="stroke" />
</template>

<script setup lang="ts">
import Icon from '@/shared/libs/icon/Icon.vue';

defineProps({
	size: {
		type: Number,
		default: 16,
	},
	stroke: {
		type: Number,
		default: 1,
	},
});
</script>

<style scoped lang="scss">
._spinner {
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
