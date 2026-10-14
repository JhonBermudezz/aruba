import { SITE, FAQS } from './site.js';
import { FAQS as FAQS_ES } from './site.es.js';

export const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  description: 'Private, styled beach picnics in Aruba for sunsets, proposals, birthdays, anniversaries and groups, plus charcuterie boards to go.',
  url: `${SITE.url}/`,
  image: `${SITE.url}${SITE.ogImage}`,
  logo: `${SITE.url}/assets/img/icon-512.png`,
  address: { '@type': 'PostalAddress', addressCountry: 'AW', addressLocality: 'Oranjestad' },
  areaServed: 'Aruba',
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Zoe' },
  sameAs: [SITE.instagram],
};

export const faqSchema = (keys, lang = 'en') => {
  const faqs = lang === 'es' ? FAQS_ES : FAQS;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: keys.map((k) => ({ '@type': 'Question', name: faqs[k].q, acceptedAnswer: { '@type': 'Answer', text: faqs[k].a.join(' ') } })),
  };
};

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE.url}${c.href}` })),
});

export const serviceSchema = (e, url = `${SITE.url}/picnics/${e.slug}/`) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: e.h1,
  serviceType: e.name,
  description: e.seo.description,
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: 'Aruba',
  url,
  image: `${SITE.url}/assets/img/${e.card.img}-960.webp`,
});

export const articleSchema = (post, url, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  inLanguage: lang,
  datePublished: post.date,
  dateModified: post.updated || post.date,
  author: { '@type': 'Person', name: post.author || 'Zoe' },
  publisher: { '@id': `${SITE.url}/#business` },
  image: `${SITE.url}/assets/img/${post.image}-1000.webp`,
  mainEntityOfPage: url,
});
