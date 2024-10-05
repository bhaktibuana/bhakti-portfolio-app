import { getSystemTheme } from '@/shared/utils';

const light = {
	color_primary: '#14b8a6',
	color_white: '#ffffff',
	color_background_001: '#ffffff',
	color_background_002: '#ffffffcc',
	color_text_001: '#131313',
	color_text_002: '#6f7183',
	color_stroke_001: 'rgba(0, 0, 0, 0.06)',
};

const dark = {
	color_primary: '#14b8a6',
	color_white: '#ffffff',
	color_background_001: 'rgba(255, 255, 255, 1)',
	color_background_002: '#ffffffcc',
	color_text_001: '#ffffff',
	color_text_002: '#bcbed5',
	color_stroke_001: 'rgba(0, 0, 0, 0.06)',
};

export const theme = () => {
	let localTheme = localStorage.getItem('theme');
	if (localTheme === 'system_default') {
		localTheme = getSystemTheme();
	}
	if (localTheme === 'dark') return dark;
	return light;
};
