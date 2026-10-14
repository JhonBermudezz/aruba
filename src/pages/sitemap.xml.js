import { EXPERIENCES, SITE } from '../data/site.js';

export function GET() {
  const paths = ['/', '/picnics/', ...EXPERIENCES.map((e) => `/picnics/${e.slug}/`), '/about/', '/reviews/', '/faq/', '/contact/', '/book/', '/privacy/', '/terms/'];
  const urls = paths.map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
}
