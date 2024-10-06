<template>
	<layout-section-container id="skills" :background-color="backgroundColor">
		<div class="_home-skills-container">
			<layout-section-header
				:title="$t('skills_abilities')"
				icon-name="code-circle-2-filled"
			/>

			<div class="_home-skills-body"></div>
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
._home-skills-container {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
}

._home-skills-body {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	padding: 14px 20px;
}
</style>
