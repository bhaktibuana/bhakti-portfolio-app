<template>
	<div class="_sidenav-container" :class="{ active: publicNav.active }">
		<div
			class="_sidenav-backdrop"
			:class="{ active: publicNav.active, inactive: !publicNav.active }"
			@click="publicNav.setActive(false)"
		></div>

		<div class="_sidenav-wrapper" :class="{ active: publicNav.active }">
			<base-sidenav-button
				v-for="menu in menus"
				:key="menu.id"
				:id="menu.id"
				:label="menu.label"
				:icon="menu.icon"
				@click="handleScrollToSectionId(menu.id)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import BaseSidenavButton from '@/components/bases/button/SideNavButton.vue';
import { usePublicNav, usePublicSectionScroll } from '@/store';
import { PUBLIC_NAV_MENU } from '@/shared/constants';

const safeDocument: Document | Object =
	typeof document !== 'undefined' ? document : {};

const { t } = useI18n();
const publicNav = usePublicNav();
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

watch(
	() => publicNav.active,
	(newValue) => {
		const html = (safeDocument as Document).documentElement;
		html.style.overflow = newValue ? 'hidden' : '';
	},
);
</script>

<style scoped lang="scss">
._sidenav-container {
	width: 100%;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: flex-end;
	left: -300%;
	z-index: 49;

	&.active {
		left: 0;
	}
}

._sidenav-backdrop {
	width: 100%;
	height: 100%;
	background-color: var(--color-backdrop);
	display: flex;
	position: fixed;

	&.active {
		animation: backdrop-open 0.3s ease-in-out forwards;

		@keyframes backdrop-open {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}

	&.inactive {
		animation: backdrop-close 0.3s ease-in-out forwards;

		@keyframes backdrop-close {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	}
}

._sidenav-wrapper {
	width: calc(100% - 24px);
	max-width: 280px;
	height: auto;
	background-color: var(--color-background-002);
	position: fixed;
	top: 82px;
	right: 12px;
	left: -300%;
	border-radius: 16px;
	transition: all 0.3s ease-in-out;
	backdrop-filter: blur(5px);
	box-shadow: var(--color-shadow-001);
	padding: 20px;
	display: flex;
	flex-direction: column;

	&.active {
		left: 12px;

		@include breakpoint(md, min) {
			width: calc(100% - 100px);
			left: 50px;
			right: 50px;
		}
	}
}
</style>
