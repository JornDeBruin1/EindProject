import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue(), legacy()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, './src/main.js'), // Adjust the entry point here
			},
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
