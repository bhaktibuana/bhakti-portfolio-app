<template>
	<div class="home-container">
		<base-floating-setting />
		<home-about />
		<home-skills />
		<home-experiences />
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

import BaseFloatingSetting from '@/components/bases/setting/FloatingSetting.vue';
import HomeAbout from '@/components/pages/public/home/About.vue';
import HomeSkills from '@/components/pages/public/home/Skills.vue';
import HomeExperiences from '@/components/pages/public/home/Experiences.vue';
import { usePublicSectionScroll } from '@/store';

const publicSectionScroll = usePublicSectionScroll();

watch(
	() => publicSectionScroll.targetSectionId,
	(newValue) => {
		if (newValue === '') return;
		const section = document.getElementById(newValue);
		if (section) {
			const sectionRect = section.getBoundingClientRect();
			const absoluteTop = sectionRect.top + window.pageYOffset;

			window.scrollTo({
				top: absoluteTop,
				behavior: 'smooth',
			});
		}
	},
);
</script>

<style scoped lang="scss">
.home-container {
	position: relative;
}
</style>
