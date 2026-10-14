import { SITE, FAQS } from './site.js';

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

export const faqSchema = (keys) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: keys.map((k) => ({ '@type': 'Question', name: FAQS[k].q, acceptedAnswer: { '@type': 'Answer', text: FAQS[k].a.join(' ') } })),
});

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE.url}${c.href}` })),
});

export const serviceSchema = (e) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: e.h1,
  serviceType: e.name,
  description: e.seo.description,
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: 'Aruba',
  url: `${SITE.url}/picnics/${e.slug}/`,
  image: `${SITE.url}/assets/img/${e.card.img}-960.webp`,
});
