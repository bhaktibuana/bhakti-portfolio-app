<template>
	<IconLoader2
		v-if="name === 'loader-2'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconSettings2
		v-else-if="name === 'settings-2'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconCircleChevronRight
		v-else-if="name === 'circle-chevron-right'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconChevronDown
		v-else-if="name === 'chevron-down'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconGhostFilled
		v-else-if="name === 'ghost-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconBrandLinkedin
		v-else-if="name === 'brand-linkedin'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconBrandGithub
		v-else-if="name === 'brand-github'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconMail
		v-else-if="name === 'mail'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconCodeCircle2Filled
		v-else-if="name === 'code-circle-2-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconAppsFilled
		v-else-if="name === 'apps-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconStack2Filled
		v-else-if="name === 'stack-2-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconArticleFilled
		v-else-if="name === 'article-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<IconMailFilled
		v-else-if="name === 'mail-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import {
	IconLoader2,
	IconSettings2,
	IconCircleChevronRight,
	IconChevronDown,
	IconGhostFilled,
	IconBrandLinkedin,
	IconBrandGithub,
	IconMail,
	IconCodeCircle2Filled,
	IconAppsFilled,
	IconStack2Filled,
	IconArticleFilled,
	IconMailFilled,
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
