<template>
	<a-tooltip :placement="placement">
		<template #title>
			<span>{{ title }}</span>
		</template>
		<slot></slot>
	</a-tooltip>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import { T_TooltipPlacement } from '@/shared/types';

defineProps({
	placement: {
		type: String as PropType<T_TooltipPlacement>,
		default: 'top' as T_TooltipPlacement,
	},
	title: {
		type: String,
		required: true,
	},
});
</script>
