import { defineStore } from 'pinia';

export const usePublicNav = defineStore('public_nav', {
	state: () => ({
		active: false,
	}),
	actions: {
		setActive(state: boolean) {
			this.active = state;
		},
	},
});
