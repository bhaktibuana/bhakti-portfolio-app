<template>
	<div class="_base-divider" :class="orientation"></div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
	orientation: {
		type: String as PropType<'vertical' | 'horizontal'>,
		default: 'horizontal',
	},
});
</script>

<style scoped lang="scss">
._base-divider {
	border: 0.5px solid var(--color-stroke-001);

	&.vertical {
		height: 100%;
		width: auto;
	}

	&.horizontal {
		width: 100%;
		height: auto;
	}
}
</style>
