<template>
	<icon-loader-2
		v-if="name === 'loader-2'"
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
	<icon-ghost-filled
		v-else-if="name === 'ghost-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-brand-linkedin
		v-else-if="name === 'brand-linkedin'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-brand-github
		v-else-if="name === 'brand-github'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-mail
		v-else-if="name === 'mail'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-code-circle-2-filled
		v-else-if="name === 'code-circle-2-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-apps-filled
		v-else-if="name === 'apps-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-stack-2-filled
		v-else-if="name === 'stack-2-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-article-filled
		v-else-if="name === 'article-filled'"
		:size="size"
		:stroke-width="stroke"
	/>
	<icon-mail-filled
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
