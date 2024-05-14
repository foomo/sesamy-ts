export * from './components';
export const event = (event) => {
    gtag('event', event.name, event.params);
};
//# sourceMappingURL=index.edge.js.map