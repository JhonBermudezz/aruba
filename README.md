# One Happy Picnic Aruba

Sitio web (en inglés, español en camino) de One Happy Picnic Aruba, picnics privados en la playa en Aruba. Hecho con [Astro](https://astro.build): genera HTML estático y funciona en cualquier hosting.

- **Planeación, alcance del Plan 2 y pendientes:** [docs/PLANEACION.md](docs/PLANEACION.md)
- **Contenido** (experiencias, reseñas, preguntas, fotos): `src/data/site.js`
- **WhatsApp, llamada y email:** objeto `CONFIG` al inicio de `public/assets/js/main.js`

## Comandos

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # sitio final en dist/
npm run build:preview  # versión con enlaces relativos en dist-preview/
```

## Estructura

```
src/pages/               Una página por archivo (inicio, picnics, about, reviews, faq, contact, book, legales, 404)
src/pages/picnics/[slug].astro   Plantilla de las 6 páginas de picnic
src/components/          Secciones reutilizables (hero, tarjetas, línea de tiempo, reseñas, polaroids, FAQ, reserva)
src/layouts/Base.astro   Cabecera, menú, pie de página, SEO y barra de contacto
src/data/                Contenido y datos estructurados (schema.org)
public/assets/           CSS, JS e imágenes optimizadas
scripts/                 Ayudas de compilación
```
