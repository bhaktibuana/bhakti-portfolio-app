import { APP_LANGUAGE } from '@/shared/constants';

/**
 * Language Key Parser
 *
 * @param value
 * @returns
 */
export const langParser = (value: string) => {
	const lang = APP_LANGUAGE.filter((item) => item.value === value)[0];
	return lang ? lang.key : 'en';
};
