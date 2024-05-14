import {defineConfig} from "tsup";
// import { sync } from 'resolve-glob';



export default defineConfig({
	dts: true,
	clean: true,
	target: "esnext",
	format: "esm",
	splitting: false,
	// entry: ["src/components/GTMScript.tsx"],
	entry: ["src/**/!(*.server|*.test|*.stories|*.spec).{ts,tsx}"],
	outDir: "dist/client",
	bundle: true,
	minify: true,
	sourcemap: true,
	external: ["react", "react-dom"]
})
