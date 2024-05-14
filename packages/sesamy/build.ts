import { build } from "esbuild";

async function buildAll(): Promise<void> {
	await Promise.all([
		build({
			platform: "node",
			format: "esm",
			splitting: true,
			entryPoints: ["src/index.ts"],
			outdir: "dist/node",
			bundle: true,
			minify: MINIFY,
			sourcemap: SOURCEMAP,
			banner: esmNodeSupportBanner,
			external: ["@opentelemetry/api"],
			plugins: [externalCjsToEsmPlugin(peerDependencies)],
		}),
		build({
			target: "esnext",
			format: "esm",
			splitting: false,
			entryPoints: ["src/index.ts"],
			outdir: "dist/edge",
			bundle: true,
			minify: MINIFY,
			sourcemap: SOURCEMAP,
			banner: edgeSupportBanner,
			external: ["@opentelemetry/api"],
			plugins: [
				externalCjsToEsmPlugin(["async_hooks", "events", ...peerDependencies]),
				stripEvalEdge,
			],
		}),
	]);

	// Check max size.
	const errors: string[] = [];
	for (const [file, maxSize] of Object.entries(MAX_SIZES)) {
		// eslint-disable-next-line no-await-in-loop
		const s = await stat(file);
		if (s.size > maxSize) {
			errors.push(
				`${file}: the size of ${s.size} is over the maximum allowed size of ${maxSize}`
			);
		}
	}
	if (errors.length > 0) {
		for (const error of errors) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
		process.exit(1);
	}
}

void buildAll();
