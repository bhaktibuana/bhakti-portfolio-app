<template>
	<div class="_home-section-header">
		<icon :name="iconName" :size="32" :stroke="2" />

		<div class="title-wrapper">
			<span class="t1">{{ t1 }}</span>
			<span class="t2">{{ t2 }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

import Icon from '@/shared/libs/icon/Icon.vue';
import { T_IconName } from '@/shared/types';
import { computed } from 'vue';

const props = defineProps({
	iconName: {
		type: String as PropType<T_IconName>,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

const t1 = computed(() => {
	const text = props.title.split(' ');
	const textLen = text.length;
	if (textLen <= 1) return text[0];
	text.pop();
	return text.join(' ');
});

const t2 = computed(() => {
	const text = props.title.split(' ');
	const textLen = text.length;
	if (textLen <= 1) return '';

	return text[textLen - 1];
});
</script>

<style scoped lang="scss">
._home-section-header {
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin: 100px 0 24px 0;
	color: var(--color-text-001);

	& > .title-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;

		& > .t1,
		.t2 {
			font-family: 'Poppins', sans-serif !important;
			font-size: 28px;
			font-weight: 600;
		}

		& > .t2 {
			color: var(--color-primary);
		}
	}
}
</style>
