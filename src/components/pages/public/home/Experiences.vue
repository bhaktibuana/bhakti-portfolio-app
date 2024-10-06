<template>
	<layout-section-container id="experiences" :background-color="backgroundColor">
		<div class="_home-experiences-container">
			<layout-section-header
				:title="$t('working_experiences')"
				icon-name="apps-filled"
			/>

			<div class="_home-experiences-body"></div>
		</div>
	</layout-section-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import LayoutSectionContainer from '@/components/layouts/public/home/SectionContainer.vue';
import LayoutSectionHeader from '@/components/layouts/public/home/SectionHeader.vue';
import { theme } from '@/assets/styles/theme';
import { useAppTheme } from '@/store';

const appTheme = useAppTheme();

const backgroundColor = ref(theme().color_background_003);

watch(
	() => appTheme.theme,
	() => {
		console.log(theme().color_background_003);
		backgroundColor.value = theme().color_background_003;
	},
);
</script>

<style scoped lang="scss">
._home-experiences-container {
	width: 100%;
	height: 800px;
	display: flex;
	flex-direction: column;
}

._home-experiences-body {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	padding: 14px 20px;
}
</style>
