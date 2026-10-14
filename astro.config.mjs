import { defineConfig } from 'astro/config';

// PREVIEW=1 builds flat .html files with relative links for the private preview link.
const preview = Boolean(process.env.PREVIEW);

export default defineConfig({
  site: process.env.SITE_URL || 'https://onehappypicnicaruba.com',
  trailingSlash: preview ? 'ignore' : 'always',
  build: { format: preview ? 'file' : 'directory', inlineStylesheets: 'never' },
  compressHTML: true,
});
