import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://caitlin-le.github.io',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
});
