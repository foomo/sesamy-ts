import { defineConfig } from "tsup";
export default defineConfig((options) => (Object.assign({ treeshake: true, splitting: true, entry: ['src/**/*.ts', 'src/**/*.tsx'], format: ["esm"], dts: true, minify: true, clean: true, external: ["react"] }, options)));
//# sourceMappingURL=tsub.config.js.map