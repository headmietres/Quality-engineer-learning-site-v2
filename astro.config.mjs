import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://https://headmietres.github.io/',
  base: '/Quality-engineer-learning-site-v2',
  output: 'static',
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});
