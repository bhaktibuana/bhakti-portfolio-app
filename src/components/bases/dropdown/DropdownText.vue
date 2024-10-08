<template>
	<a-dropdown :trigger="['click']">
		<div class="_dropdown-text-label" :style="{ color: labelColor }">
			<span>{{ label }}</span>
			<icon name="chevron-down" :stroke="1.5" />
		</div>

		<template #overlay>
			<a-menu>
				<a-menu-item
					v-for="option in options"
					:key="option.key"
					@click="handleSelect(option.key)"
				>
					{{ option.label }}
				</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

import Icon from '@/shared/libs/icon/Icon.vue';

defineProps({
	label: {
		type: String,
		required: true,
	},
	options: {
		type: Array as PropType<{ key: string; label: string }[]>,
		default: [],
	},
	labelColor: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['update:value']);

const selectedKey = ref('');

const handleSelect = (value: string) => {
	selectedKey.value = value;
	emit('update:value', value);
};
</script>

<style scoped lang="scss">
._dropdown-text-label {
	display: flex;
	gap: 4px;
	align-items: center;
	color: var(--color-text-001);
	cursor: pointer;
}
</style>
