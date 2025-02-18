import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['@rocket.chat/ui-contexts'],
	},
	build: {
		commonjsOptions: {
			include: [/ui-contexts/, /node_modules/],
		},
	},
});
