// Rewrites root links ("/about/", "/assets/...") in a PREVIEW build to relative
// file links ("about.html", "../assets/...") so the site opens from any folder.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const root = process.argv[2] || 'dist-preview';

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  return statSync(full).isDirectory() ? walk(full) : full.endsWith('.html') ? [full] : [];
});

// "/picnics/sunset-picnic/#x" -> "picnics/sunset-picnic.html#x", "/" -> "index.html"
const toFile = (url) => {
  const [pathPart, hash = ''] = url.split('#');
  const [path, query = ''] = pathPart.split('?');
  let out;
  if (path.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(path)) out = path.slice(1);
  else if (path === '/' || path === '') out = 'index.html';
  else out = `${path.replace(/^\/|\/$/g, '')}.html`;
  return out + (query ? `?${query}` : '') + (hash ? `#${hash}` : '');
};

for (const file of walk(root)) {
  const depth = relative(root, dirname(file)).split(sep).filter(Boolean).length;
  const prefix = '../'.repeat(depth);
  let html = readFileSync(file, 'utf8');
  html = html.replace(/(\s(?:href|src|data-full))="(\/(?!\/)[^"]*)"/g, (_, attr, url) => `${attr}="${prefix}${toFile(url)}"`);
  html = html.replace(/(\ssrcset)="([^"]+)"/g, (_, attr, list) => `${attr}="${list.replace(/(^|,\s*)\/(?!\/)/g, `$1${prefix}`)}"`);
  html = html.replace(/url\((['"]?)\/(?!\/)/g, (_, q) => `url(${q}${prefix}`);
  writeFileSync(file, html);
}
console.log(`relative links written in ${root}`);
