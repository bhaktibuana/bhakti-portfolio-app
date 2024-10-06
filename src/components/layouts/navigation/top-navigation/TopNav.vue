<template>
	<div
		class="_topnav-container"
		:style="{
			background: backgroundColor,
			boxShadow: shadow,
			backdropFilter: filter,
		}"
	>
		<left-content />
		<right-content />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import LeftContent from '@/components/layouts/navigation/top-navigation/LeftContent.vue';
import RightContent from '@/components/layouts/navigation/top-navigation/RightContent.vue';
import { useAppTheme, usePublicSectionScroll, usePublicNav } from '@/store';
import { themeParser } from '@/shared/helpers';
import { theme } from '@/assets/styles/theme';
import { PUBLIC_NAV_MENU } from '@/shared/constants';

const appTheme = useAppTheme();
const publicSectionScroll = usePublicSectionScroll();
const publicNav = usePublicNav();

const thresholdScroll = 200;

const backgroundColor = ref<string>('rgba(255, 255, 255 0)');
const shadow = ref<string>('none');
const filter = ref<string>('none');

const handleScroll = () => {
	if (publicNav.active) {
		handleSidenavActive();
	} else {
		const scrollTop = window.scrollY;
		const opacity = Math.min(scrollTop / thresholdScroll, 0.8);
		backgroundColor.value =
			themeParser(appTheme.theme) === 'dark'
				? `rgba(52, 54, 84, ${opacity})`
				: `rgba(248, 248, 248, ${opacity})`;

		if (scrollTop > 0) {
			shadow.value = theme().color_shadow_001;
			filter.value = 'blur(5px)';
		} else {
			shadow.value = 'none';
			filter.value = 'none';
		}
	}

	const sections = PUBLIC_NAV_MENU.map((item) => item.id);
	for (const sectionId of sections) {
		const section = document.getElementById(sectionId);
		if (section) {
			const rect = section.getBoundingClientRect();
			if (rect.top <= 0 && rect.bottom > 0) {
				publicSectionScroll.setTargetSectionId('');
				if (rect.bottom <= 1) {
					publicSectionScroll.setActiveSection(
						sections[sections.indexOf(sectionId) + 1],
					);
				} else {
					publicSectionScroll.setActiveSection(sectionId);
				}
			}
		}
	}
};

const handleSidenavActive = () => {
	backgroundColor.value = theme().color_background_002;
	shadow.value = theme().color_shadow_001;
	filter.value = 'blur(5px)';
};

watch(
	() => publicNav.active,
	(newValue) => {
		if (newValue) {
			handleSidenavActive();
		} else {
			handleScroll();
		}
	},
);

watch(
	() => appTheme.theme,
	() => {
		if (publicNav.active) {
			handleSidenavActive();
		} else {
			handleScroll();
		}
	},
);

onMounted(() => {
	handleScroll();
	window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
._topnav-container {
	width: calc(100% - 24px);
	height: 54px;
	position: fixed;
	top: 14px;
	left: 12px;
	right: 12px;
	border-radius: 16px;
	transition: 0.3s all ease-in-out;
	z-index: 50;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	@include breakpoint(md, min) {
		width: calc(100% - 100px);
		left: 50px;
		right: 50px;
	}

	@include breakpoint(lg, min) {
		width: calc(100% - 160px);
		left: 80px;
		right: 80px;
	}

	@include breakpoint(xl, min) {
		width: calc(100% - 260px);
		left: 130px;
		right: 130px;
	}
}
</style>
