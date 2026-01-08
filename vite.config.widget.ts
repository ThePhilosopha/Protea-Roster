import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
    ],
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    build: {
        minify: true,
        lib: {
            entry: './widget.tsx',
            name: 'ProteaRoster',
            fileName: 'protea-roster',
            formats: ['es'],
        },
        outDir: 'dist-widget',
        rollupOptions: {
            external: [],
        },
    },
});
