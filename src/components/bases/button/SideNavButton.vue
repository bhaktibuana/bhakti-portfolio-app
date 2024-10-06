<template>
	<div
		class="_sidenav-button"
		:class="{ active: publicSectionScroll.activeSection === id }"
	>
		<icon :name="icon" :size="20" :stroke="1.5" />

		<span>{{ label }}</span>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import Icon from '@/shared/libs/icon/Icon.vue';
import { usePublicSectionScroll } from '@/store';
import { T_IconName } from '@/shared/types';

defineProps({
	id: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	icon: {
		type: String as PropType<T_IconName>,
		required: true,
	},
});

const publicSectionScroll = usePublicSectionScroll();
</script>

<style scoped lang="scss">
._sidenav-button {
	width: 100%;
	height: 40px;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 8px;
	gap: 6px;
	color: var(--color-text-001);
	font-weight: 500;
	background-color: transparent;
    cursor: pointer;

	&.active {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
}
</style>
