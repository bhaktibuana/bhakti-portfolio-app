<template>
	<div class="_topnav-right-content">
		<base-top-nav-button v-for="menu in menus" :label="menu.label" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import BaseTopNavButton from '@/components/bases/button/TopNavButton.vue';

const { t } = useI18n();

const menus = ref([
	{
		key: 'about',
		label: t('about'),
	},
	{
		key: 'skills',
		label: t('skills'),
	},
	{
		key: 'expreiences',
		label: t('expreiences'),
	},
	{
		key: 'projects',
		label: t('projects'),
	},
	{
		key: 'blogs',
		label: t('blogs'),
	},
	{
		key: 'contact',
		label: t('contact'),
	},
]);
</script>

<style scoped lang="scss">
._topnav-right-content {
	width: auto;
	height: 65%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 12px;
}
</style>
