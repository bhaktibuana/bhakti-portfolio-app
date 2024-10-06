<template>
	<div class="_topnav-right-content">
		<base-top-nav-button
			v-if="screenType === 'desktop'"
			v-for="menu in menus"
			:key="menu.id"
			:id="menu.id"
			:label="menu.label"
			@click="handleScrollToSectionId(menu.id)"
		/>

		<base-hamburger-button v-else />
	</div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { useI18n } from 'vue-i18n';

import BaseTopNavButton from '@/components/bases/button/TopNavButton.vue';
import BaseHamburgerButton from '@/components/bases/button/HamburgerButton.vue';
import { PUBLIC_NAV_MENU } from '@/shared/constants';
import { usePublicSectionScroll, usePublicNav } from '@/store';
import { T_ScreenType } from '@/shared/types';
import { watch } from 'vue';

const { t } = useI18n();
const publicSectionScroll = usePublicSectionScroll();
const publicNav = usePublicNav();

const screenType = inject<T_ScreenType>('screenType', 'desktop');

const menus = computed(() =>
	PUBLIC_NAV_MENU.map((item) => ({
		id: item.id,
		label: t(item.id),
		icon: item.icon,
	})),
);

const handleScrollToSectionId = (sectionId: string) => {
	publicSectionScroll.setTargetSectionId(sectionId);
};

watch(
	() => screenType,
	(newValue) => {
		const screenType = newValue as never as { value: T_ScreenType };
		if (screenType.value === 'desktop') publicNav.setActive(false);
	},
	{ deep: true },
);
</script>

<style scoped lang="scss">
._topnav-right-content {
	width: auto;
	height: 65%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 2px;
}
</style>
