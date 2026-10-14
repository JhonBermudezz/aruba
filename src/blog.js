// Blog posts live as Markdown in src/content/blog/<lang>/. Frontmatter: title, description, date,
// slug, translation (slug of the same post in the other language), image, imageAlt, category, readMinutes.
import { route } from './i18n.js';

const modules = import.meta.glob('./content/blog/*/*.md', { eager: true });

const all = Object.entries(modules).map(([file, mod]) => {
  const lang = file.split('/').at(-2);
  return { lang, ...mod.frontmatter, Content: mod.Content };
});

export const postHref = (lang, slug) => `${route(lang, 'blog')}${slug}/`;

export const getPosts = (lang) =>
  all.filter((p) => p.lang === lang).sort((a, b) => String(b.date).localeCompare(String(a.date)));

// Same post in both languages, for the switcher and hreflang. Falls back to the blog index.
export const postPair = (post) => {
  const other = post.lang === 'es' ? 'en' : 'es';
  const twin = all.find((p) => p.lang === other && p.slug === post.translation);
  return {
    [post.lang]: postHref(post.lang, post.slug),
    [other]: twin ? postHref(other, twin.slug) : route(other, 'blog'),
  };
};

export const formatDate = (lang, date) =>
  new Date(`${String(date).slice(0, 10)}T12:00:00Z`).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
