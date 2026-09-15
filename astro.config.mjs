import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clle37.github.io',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
});
