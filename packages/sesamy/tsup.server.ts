import { defineConfig, type Options} from "tsup";

export default defineConfig({
	dts: true,
	clean: true,
	platform: "node",
	format: "esm",
	splitting: true,
	// entry: ["src/components/GTMScript.tsx"],
	entry: ["src/**/!(*.client|*.test|*.stories|*.spec).{ts,tsx}"],
	outDir: "dist/server",
	bundle: true,
	minify: true,
	sourcemap: true,
	external: ["react", "react-dom"],
});
