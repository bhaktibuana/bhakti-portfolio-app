<template>
	<icon-wallet v-if="name === 'wallet'" :size="size" :stroke-width="stroke" />
	<icon-loader-2
		v-else-if="name === 'loader-2'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-settings-2
		v-else-if="name === 'settings-2'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-circle-chevron-right
		v-else-if="name === 'circle-chevron-right'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-chevron-down
		v-else-if="name === 'chevron-down'"
		:size="size"
		:stroke-width="stroke"
	/>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import {
	IconWallet,
	IconLoader2,
	IconSettings2,
	IconCircleChevronRight,
	IconChevronDown
} from '@tabler/icons-vue';

import { T_IconName } from '@/shared/types';

defineProps({
	name: {
		type: String as PropType<T_IconName>,
		required: true,
	},
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
