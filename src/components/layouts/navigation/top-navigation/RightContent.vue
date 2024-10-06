<template>
	<div class="_topnav-right-content">
		<base-top-nav-button
			v-for="menu in menus"
			:key="menu.id"
			:id="menu.id"
			:label="menu.label"
			@click="handleScrollToSectionId(menu.id)"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import BaseTopNavButton from '@/components/bases/button/TopNavButton.vue';
import { PUBLIC_NAV_MENU } from '@/shared/constants';
import { usePublicSectionScroll } from '@/store';

const { t } = useI18n();
const publicSectionScroll = usePublicSectionScroll();

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
