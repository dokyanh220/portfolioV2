import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        sitemap({
            hostname: 'https://anhdo.io.vn',
            routes: ['/', '/about', '/projects', '/contact'],
            changefreq: 'weekly',
            priority: 1.0,
        }),
    ],
    build: {
        target: 'es2017',
    },
});
