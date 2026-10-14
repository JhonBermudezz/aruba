// Rewrites root links ("/about/", "/assets/...") after a build.
//   node scripts/rewrite-links.mjs dist --base /aruba/   -> "/aruba/about/" (GitHub Pages project site)
//   node scripts/rewrite-links.mjs dist-preview --relative -> "about.html", "../assets/..." (private preview, any folder)
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const [root = 'dist', ...flags] = process.argv.slice(2);
const relativeMode = flags.includes('--relative');
const baseIndex = flags.indexOf('--base');
const base = baseIndex >= 0 ? `/${(flags[baseIndex + 1] || '/').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/') : '/';

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
  const prefix = relativeMode ? '../'.repeat(depth) : base;
  const map = (url) => (relativeMode ? prefix + toFile(url) : prefix + url.slice(1));
  let html = readFileSync(file, 'utf8');
  html = html.replace(/(\s(?:href|src|data-full))="(\/(?!\/)[^"]*)"/g, (_, attr, url) => `${attr}="${map(url)}"`);
  html = html.replace(/(\ssrcset)="([^"]+)"/g, (_, attr, list) => `${attr}="${list.replace(/(^|,\s*)\/(?!\/)/g, `$1${prefix}`)}"`);
  html = html.replace(/url\((['"]?)\/(?!\/)/g, (_, q) => `url(${q}${prefix}`);
  writeFileSync(file, html);
}
console.log(`links rewritten in ${root} (${relativeMode ? 'relative files' : `base ${base}`})`);
