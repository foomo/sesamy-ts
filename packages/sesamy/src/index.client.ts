import type { Event } from './types';

export * from './components';
export type * from "./types";

// https://developers.google.com/tag-platform/gtagjs/reference
export const collect = (event: Event) => {
	gtag('event', event.name, event.params);
};
