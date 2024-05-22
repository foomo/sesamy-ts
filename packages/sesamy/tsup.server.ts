import { defineConfig, type Options} from "tsup";

export default defineConfig({
	dts: true,
	clean: true,
	platform: "node",
	format: ["cjs"],
	splitting: true,
	entry: ["src/**/!(*.client|*.test|*.stories|*.spec).{ts,tsx}"],
	outDir: "dist/server",
	bundle: true,
	minify: true,
	sourcemap: true,
	external: ["react", "react-dom"],
});
