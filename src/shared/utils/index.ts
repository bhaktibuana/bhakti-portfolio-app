import { APP_THEME } from '@/shared/constants';
import { T_AppTheme } from '@/shared/types';

/**
 * Window Scroll to Top
 *
 * @returns (void)
 */
export const scrollTopTop = (): void => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

/**
 * Set App Theme
 *
 * @param theme (T_AppTheme)
 */
export const setAppTheme = (theme: T_AppTheme): void => {
	const themeValue = APP_THEME.map((item) => item.value);
	const selectedTheme = APP_THEME.find((item) => item.key === theme);
	document.body.classList.remove(...themeValue);
	document.body.classList.add(selectedTheme?.value || 'theme-light');
};

/**
 * Truncate Account Address
 *
 * @param address
 * @returns
 */
export const truncateAddress = (address: string) => {
	if (typeof address !== 'string' || address.length < 14) {
		throw new Error('Invalid Ethereum address');
	}

	const start = address.slice(0, 5);
	const end = address.slice(-5);
	return `${start}...${end}`;
};

/**
 * Get System Default Theme
 *
 * @returns
 */
export const getSystemTheme = () => {
	const systemPrefersDark = window.matchMedia(
		'(prefers-color-scheme: dark)',
	).matches;

	if (systemPrefersDark) {
		return 'dark';
	} else {
		return 'light';
	}
};
