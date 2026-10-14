import { SITE, EXPERIENCES } from '../data/site.js';
import { routePair, expPair } from '../i18n.js';
import { getPosts, postPair } from '../blog.js';

// Every page with its translation, so search engines can pair the English and Spanish URLs.
export function GET() {
  const pages = ['home', 'picnics'].map(routePair);
  pages.push(...EXPERIENCES.map((e) => expPair(e.slug)));
  pages.push(...['about', 'reviews', 'blog', 'faq', 'contact', 'book', 'privacy', 'terms'].map(routePair));
  pages.push(...getPosts('en').map(postPair));
  const seen = new Set(pages.flatMap((p) => [p.en, p.es]));
  getPosts('es').map(postPair).forEach((p) => { if (!seen.has(p.es)) pages.push(p); });

  const alt = (p) => ['en', 'es'].map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE.url}${p[l]}"/>`).join('\n');
  const urls = pages.flatMap((p) => ['en', 'es'].map((l) => `  <url>\n    <loc>${SITE.url}${p[l]}</loc>\n${alt(p)}\n  </url>`)).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
}
