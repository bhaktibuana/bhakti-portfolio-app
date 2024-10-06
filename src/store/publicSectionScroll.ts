import { defineStore } from 'pinia';

export const usePublicSectionScroll = defineStore('public_section_scroll', {
	state: () => ({
		activeSection: '',
		targetSectionId: '',
	}),
	actions: {
		setActiveSection(value: string) {
			this.activeSection = value;
		},
        setTargetSectionId(value: string) {
			this.targetSectionId = value;
		},
	},
});
