<template>
	<layout-screen>
		<div class="_page-container">
			<layout-topnav />
			<slot></slot>
		</div>
	</layout-screen>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import LayoutScreen from '@/components/layouts/Screen.vue';
import LayoutTopnav from '@/components/layouts/navigation/top-navigation/TopNav.vue';
import { scrollTopTop } from '@/shared/utils';

onMounted(() => {
	scrollTopTop();
});
</script>
