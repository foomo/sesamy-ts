import { defineConfig } from 'tsup';
// import { sync } from 'resolve-glob';

export default defineConfig({
	dts: true,
	clean: true,
	target: 'esnext',
	format: ['cjs'],
	splitting: false,
	entry: ['src/**/!(*.server|*.test|*.stories|*.spec).{ts,tsx}'],
	outDir: 'dist/client',
	bundle: true,
	minify: true,
	sourcemap: true,
	external: ['react', 'react-dom'],
});
