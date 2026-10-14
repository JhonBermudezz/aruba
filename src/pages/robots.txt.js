import { SITE } from '../data/site.js';

// Staging copies (GitHub Pages while content is a draft) ask search engines to stay away.
export function GET() {
  const body = SITE.staging
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
