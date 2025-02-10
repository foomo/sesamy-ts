import type { Event } from './types';

export * from './components';
export type * from "./types";

// https://developers.google.com/tag-platform/gtagjs/reference
export const collect = (event: Event) => {
	gtag('event', event.name, event.params);
};

export const measure = (clientId: string, event: Event, endpoint: string = '/mp/collect') => {
	const params = new URLSearchParams(window.location.search);
	const headers = new Headers();
	headers.append("Content-Type", 'application/json');
	headers.append("X-Page-Title", document.title);
	headers.append("X-Page-Referrer", document.referrer);
	headers.append("X-Page-Id", window['dataLayer']?.[0]?.['gtm.start']);
	return fetch(endpoint, {
		method: 'POST',
		headers: headers,
		signal: AbortSignal.timeout(1000),
		body: JSON.stringify({
			client_id: clientId,
			timestamp_micros: Date.now() * 1000,
			events: [
				{
					name: event.name,
					params: {
						...event.params,
						// engagement_time_msec and session_id must be set for the activity to display in standard reports like Realtime.
						// https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#optional_parameters_for_reports

						// https://support.google.com/analytics/answer/11109416?hl=en
						// Additional engagement time since last event, in microseconds.
						// session_id: ''
						engagement_time_msec: 1,
						debug_mode: params.has("gtm_debug"),
					},
				},
			],
		}),
	});
}
