// Language helpers: routes, content and interface strings for English and Spanish.
import * as en from './data/site.js';
import * as es from './data/site.es.js';

export const LANGS = ['en', 'es'];

const ROUTES = {
  home: { en: '/', es: '/es/' },
  picnics: { en: '/picnics/', es: '/es/picnics/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  reviews: { en: '/reviews/', es: '/es/resenas/' },
  faq: { en: '/faq/', es: '/es/preguntas/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
  book: { en: '/book/', es: '/es/reservar/' },
  blog: { en: '/blog/', es: '/es/blog/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
  terms: { en: '/terms/', es: '/es/terminos/' },
};

export const route = (lang, key) => ROUTES[key][lang];
export const routePair = (key) => ROUTES[key];

// Content for a language. Spanish modules only translate words, so English fills the rest.
export const getData = (lang) => ({ ...en, ...(lang === 'es' ? es : {}) });

export const expSlug = (lang, e) => (lang === 'es' ? e.slugEs : e.slug);
export const expHref = (lang, e) => `${route(lang, 'picnics')}${expSlug(lang, e)}/`;
export const expPair = (slug) => {
  const e = es.EXPERIENCES.find((x) => x.slug === slug);
  return { en: `/picnics/${e.slug}/`, es: `/es/picnics/${e.slugEs}/` };
};

const UI = {
  en: {
    skip: 'Skip to content',
    nav: [['picnics', 'Picnics'], ['about', 'About'], ['reviews', 'Reviews'], ['blog', 'Blog'], ['faq', 'FAQ'], ['contact', 'Contact']],
    home: 'Home',
    homeLabel: 'One Happy Picnic Aruba, home',
    book: 'Book a picnic',
    bookYour: 'Book your picnic',
    openMenu: 'Open menu',
    switchLabel: 'Leer en español',
    switchShort: 'ES',
    footerAbout: 'Private beach picnics, proposals and charcuterie boards on One Happy Island.',
    picnics: 'Picnics', company: 'Company', follow: 'Follow', legal: 'Legal',
    aboutZoe: 'About Zoe', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact', blog: 'Blog',
    callUs: 'Call us', call: 'Call',
    privacy: 'Privacy policy', terms: 'Booking terms',
    photoViewer: 'Photo viewer', closePhoto: 'Close photo',
    logoAlt: 'One Happy Picnic Aruba logo',
    ogAlt: 'A bamboo teepee with pink flowers over a low picnic table and cushions on the sand at sunset in Aruba',
    swipe: (n) => `Swipe to see all ${n}`,
    faqHeading: 'Good to know before you book',
    faqLead: 'Message us on Instagram or WhatsApp if your question is not here.',
    faqMore: 'See all questions',
    finalTitle: 'Pick a date and we will set the table',
    finalText: 'Sunset picnics start at $99 per person, with setup and cleanup included.',
    finalSun: "Tonight's sunset in Aruba: 6:22 PM",
    includedHeading: 'Everything is ready before you arrive',
    includedLead: 'Each picnic includes everything below. Extras like a photographer or a cake cost more.',
    includedPhoto: { file: 'included', alt: 'A picnic table at sunset set with gold chargers, pink napkins, flowers and a glowing lantern under a blue flower teepee', caption: 'Table for two', note: 'at golden hour.' },
    addTo: 'Add to your picnic',
    morePicnics: 'More picnics',
    reviewsBefore: 'From our', reviewsAfter: 'Facebook reviews', readAllReviews: 'Read all reviews',
    galleryBefore: 'Recent', galleryAfter: 'setups',
    breadcrumb: 'Breadcrumb',
    howLive: ['The times below follow', 'today’s', 'sunset in Aruba.'],
    touchesHeading: 'The details guests mention in their reviews',
    touches: ['Printed photos of the two of you', 'Your note, copied onto a card', 'Fresh flowers on the table'],
    touchesAlt: [
      'Printed couple photos hanging from a line between two bamboo poles above a red heart rug on the sand',
      'A framed you and me always card beside red roses and a candle on a turquoise table runner',
      'Pink and purple flowers in a glass vase next to a framed wine quote on a wooden picnic table',
    ],
    touchesWho: 'Sunset picnic for a 10 year anniversary',
  },
  es: {
    skip: 'Ir al contenido',
    nav: [['picnics', 'Picnics'], ['about', 'Nosotros'], ['reviews', 'Reseñas'], ['blog', 'Blog'], ['faq', 'Preguntas'], ['contact', 'Contacto']],
    home: 'Inicio',
    homeLabel: 'One Happy Picnic Aruba, inicio',
    book: 'Reservar picnic',
    bookYour: 'Reserva tu picnic',
    openMenu: 'Abrir menú',
    switchLabel: 'Read in English',
    switchShort: 'EN',
    footerAbout: 'Picnics privados en la playa, propuestas de matrimonio y tablas de charcutería en One Happy Island.',
    picnics: 'Picnics', company: 'Empresa', follow: 'Síguenos', legal: 'Legal',
    aboutZoe: 'Sobre Zoe', reviews: 'Reseñas', faq: 'Preguntas', contact: 'Contacto', blog: 'Blog',
    callUs: 'Llámanos', call: 'Llamar',
    privacy: 'Política de privacidad', terms: 'Términos de reserva',
    photoViewer: 'Visor de fotos', closePhoto: 'Cerrar foto',
    logoAlt: 'Logo de One Happy Picnic Aruba',
    ogAlt: 'Tipi de bambú con flores rosadas sobre una mesa baja de picnic y cojines en la arena al atardecer en Aruba',
    swipe: (n) => `Desliza para ver los ${n}`,
    faqHeading: 'Lo que conviene saber antes de reservar',
    faqLead: 'Escríbenos por Instagram o WhatsApp si tu pregunta no está aquí.',
    faqMore: 'Ver todas las preguntas',
    finalTitle: 'Elige una fecha y nosotros ponemos la mesa',
    finalText: 'Los picnics al atardecer desde $99 por persona, con montaje y recogida incluidos.',
    finalSun: 'Atardecer de hoy en Aruba: 6:22 PM',
    includedHeading: 'Todo está listo antes de que llegues',
    includedLead: 'Cada picnic incluye todo lo de abajo. Extras como fotógrafo o pastel tienen costo adicional.',
    includedPhoto: { file: 'included', alt: 'Mesa de picnic al atardecer con platos dorados, servilletas rosadas, flores y un farol bajo un tipi de flores azules', caption: 'Mesa para dos', note: 'en la hora dorada.' },
    addTo: 'Agrega a tu picnic',
    morePicnics: 'Más picnics',
    reviewsBefore: 'Reseñas de', reviewsAfter: 'Facebook', readAllReviews: 'Leer todas las reseñas',
    galleryBefore: 'Montajes', galleryAfter: 'recientes',
    breadcrumb: 'Ruta de navegación',
    howLive: ['Las horas de abajo siguen el atardecer de', 'hoy', 'en Aruba.'],
    touchesHeading: 'Los detalles que los invitados mencionan en sus reseñas',
    touches: ['Fotos impresas de los dos', 'Tu nota, pasada a una tarjeta', 'Flores frescas en la mesa'],
    touchesAlt: [
      'Fotos impresas de una pareja colgadas entre dos palos de bambú sobre una alfombra roja de corazón en la arena',
      'Tarjeta enmarcada que dice you and me always junto a rosas rojas y una vela sobre un camino turquesa',
      'Flores rosadas y moradas en un florero de vidrio junto a una frase enmarcada sobre una mesa de madera',
    ],
    touchesWho: 'Picnic al atardecer por un aniversario de 10 años',
  },
};

export const t = (lang) => UI[lang] || UI.en;
