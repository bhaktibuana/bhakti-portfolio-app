<template>
	<div
		class="_floating-setting-container"
		:class="{ expanded: isExpanded }"
		ref="containerElement"
	>
		<div class="_floating-setting-wrapper">
			<div class="_floating-setting-header">
				<div class="icon-wrapper" @click="isExpanded = false">
					<icon
						name="circle-chevron-right"
						:size="20"
						:stroke="1.5"
					/>
				</div>
				<span>{{ $t('settings') }}</span>
			</div>

			<div class="_floating-setting-divider">
				<base-divider />
			</div>

			<div class="_floating-setting-body">
				<div class="_floating-setting-item">
					<span>{{ $t('theme') }}</span>
					<base-dropdown-text
						:label-color="theme().color_text_002"
						:label="$t(selectedTheme)"
						:options="themeOptions"
						v-model:value="selectedTheme"
					/>
				</div>

				<div class="_floating-setting-item">
					<span>{{ $t('language') }}</span>
					<base-dropdown-text
						:label-color="theme().color_text_002"
						:label="$t(selectedLang)"
						:options="langOptions"
						v-model:value="selectedLang"
					/>
				</div>
			</div>
		</div>

		<div
			class="_floating-setting-toggle"
			:class="{ expanded: isExpanded }"
			@click="isExpanded = true"
		>
			<icon name="settings-2" :size="22" :stroke="1.5" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

import Icon from '@/shared/libs/icon/Icon.vue';
import BaseDivider from '@/components/bases/divider/Divider.vue';
import BaseDropdownText from '@/components/bases/dropdown/DropdownText.vue';
import { APP_THEME, APP_LANGUAGE } from '@/shared/constants';
import { theme } from '@/assets/styles/theme';
import { useAppTheme, useAppLanguage } from '@/store';

const { t } = useI18n();
const appTheme = useAppTheme();
const appLanguage = useAppLanguage();

const isExpanded = ref(false);
const selectedTheme = ref(appTheme.theme);
const selectedLang = ref(appLanguage.language);
const containerElement = ref<HTMLDivElement | null>(null);

const themeOptions = computed(() => {
	const defaultOptions = [
		{
			key: 'system_default',
			label: t('system_default'),
		},
	];
	defaultOptions.push(
		...APP_THEME.map((item) => ({
			key: item.key,
			label: t(item.key),
		})),
	);
	return defaultOptions;
});
const langOptions = computed(() =>
	APP_LANGUAGE.map((item) => ({
		key: item.value,
		label: t(item.value),
	})),
);

const handleClickOutside = (event: MouseEvent) => {
	if (
		containerElement.value &&
		!containerElement.value.contains(event.target as Node)
	) {
		isExpanded.value = false;
	}
};

watch(selectedTheme, (newValue) => {
	appTheme.setAppTheme(newValue);
});

watch(selectedLang, (newValue) => {
	appLanguage.setAppLanguage(newValue);
	location.reload();
});

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
	document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
._floating-setting-container {
	position: fixed;
	width: 270px;
	height: auto;
	right: -234px;
	top: 120px;
	display: flex;
	flex-direction: row-reverse;
	color: var(--color-text-001);
	transition: 0.3s all ease;
	z-index: 10;

	&.expanded {
		right: 0;
	}
}

._floating-setting-toggle {
	width: 36px;
	height: 60px;
	margin-top: 20px;
	border-radius: 10px 0 0 10px;
	background-color: var(--color-background-002);
	box-shadow: var(--color-shadow-001);
	backdrop-filter: blur(5px);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&.expanded {
		display: none;
	}
}

._floating-setting-wrapper {
	width: 234px;
	height: 100%;
	border-radius: 10px 0 0 10px;
	background-color: var(--color-background-002);
	box-shadow: var(--color-shadow-001);
	backdrop-filter: blur(5px);
	display: flex;
	flex-direction: column;
}

._floating-setting-header {
	width: 100%;
	height: 50px;
	padding: 8px 14px;
	display: flex;
	gap: 6px;
	align-items: center;

	& > .icon-wrapper {
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
}

._floating-setting-divider {
	width: 100%;
	height: auto;
	padding: 0 8px;
}

._floating-setting-body {
	width: 100%;
	height: auto;
	padding: 16px 14px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 14px;
	line-height: 18px;
}

._floating-setting-item {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
}
</style>
