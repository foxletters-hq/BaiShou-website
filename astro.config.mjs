import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { remarkAsides } from './src/plugins/remark-asides.ts';
import { rehypeWrapTables } from './src/plugins/rehype-wrap-tables.ts';

// GitHub Pages + 自定义域名 baishou.foxletters.com
export default defineConfig({
  site: 'https://baishou.foxletters.com',
  base: '/',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkDirective, remarkAsides],
    rehypePlugins: [rehypeWrapTables],
  },
  output: 'static',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
