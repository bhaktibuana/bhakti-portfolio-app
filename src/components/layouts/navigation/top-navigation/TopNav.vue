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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import LeftContent from '@/components/layouts/navigation/top-navigation/LeftContent.vue';
import RightContent from '@/components/layouts/navigation/top-navigation/RightContent.vue';

const thresholdScroll = 200;

const backgroundColor = ref<string>('rgba(255, 255, 255 0)');
const shadow = ref<string>('none');
const filter = ref<string>('none');

const handleScroll = () => {
	const scrollTop = window.scrollY;
	const opacity = Math.min(scrollTop / thresholdScroll, 0.8);
	backgroundColor.value = `rgba(255, 255, 255, ${opacity})`;

	if (scrollTop > 0) {
		shadow.value = 'rgba(146, 161, 176, 0.3) 0px 1px 4px';
		filter.value = 'blur(5px)';
	} else {
		shadow.value = 'none';
		filter.value = 'none';
	}
};

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
	margin: 14px 0 0 0;
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
		width: calc(100% - 200px);
		left: 100px;
		right: 100px;
	}

	@include breakpoint(lg, min) {
		width: calc(100% - 300px);
		left: 150px;
		right: 150px;
	}
}
</style>
