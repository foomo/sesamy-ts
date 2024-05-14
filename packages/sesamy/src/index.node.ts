import type { Event } from './types';

export * from './components';

// https://developers.google.com/tag-platform/gtagjs/reference
export const collect = (event: Event) => {
	console.log('------->', event);
};
