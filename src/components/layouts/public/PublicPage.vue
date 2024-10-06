<template>
	<layout-screen>
		<div class="_page-container">
			<layout-topnav />
			<layout-sidenav />
			<slot></slot>
		</div>
	</layout-screen>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import LayoutScreen from '@/components/layouts/Screen.vue';
import LayoutTopnav from '@/components/layouts/navigation/top-navigation/TopNav.vue';
import LayoutSidenav from '@/components/layouts/navigation/side-navigation/SideNav.vue';
import { scrollTopTop } from '@/shared/utils';

onMounted(() => {
	scrollTopTop();
});
</script>
