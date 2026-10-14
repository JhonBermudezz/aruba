# One Happy Picnic Aruba

Sitio web bilingüe (inglés en `/`, español en `/es/`) de One Happy Picnic Aruba, picnics privados en la playa en Aruba. Hecho con [Astro](https://astro.build): genera HTML estático y funciona en cualquier hosting.

- **Planeación, alcance del Plan 2 y pendientes:** [docs/PLANEACION.md](docs/PLANEACION.md)
- **Contenido** (experiencias, reseñas, preguntas, fotos): `src/data/site.js` (inglés) y `src/data/site.es.js` (español)
- **Rutas en cada idioma y textos de la interfaz:** `src/i18n.js`
- **Blog:** un archivo Markdown por artículo en `src/content/blog/en/` y `src/content/blog/es/`
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
src/views/               Cada página una sola vez, con su texto en inglés y español
src/pages/               Rutas en inglés (/, /picnics/, /about/, /blog/ ...) que cargan la vista con lang="en"
src/pages/es/            Rutas en español (/es/, /es/nosotros/, /es/blog/ ...) con lang="es"
src/content/blog/        Artículos del blog en Markdown (en/ y es/)
src/components/          Secciones reutilizables (hero, tarjetas, línea de tiempo, reseñas, polaroids, FAQ, reserva)
src/layouts/Base.astro   Cabecera, selector de idioma, menú, pie de página, SEO y hreflang
src/data/                Contenido y datos estructurados (schema.org)
src/i18n.js, src/blog.js Rutas por idioma, textos de la interfaz y lectura del blog
public/assets/           CSS, JS e imágenes optimizadas
scripts/                 Ayudas de compilación
```

## Publicar un artículo del blog

1. Crea `src/content/blog/en/mi-articulo.md` y su versión en `src/content/blog/es/`.
2. Copia el encabezado de un artículo existente y cambia `title`, `description`, `date`, `slug`, `image` e `imageAlt`.
3. En `translation` pon el `slug` del mismo artículo en el otro idioma. Así el selector de idioma y el hreflang los enlazan.
4. Haz push: GitHub Actions publica el sitio y el artículo aparece en `/blog/`, `/es/blog/` y en el sitemap.

## Publicar en GitHub Pages

El flujo `.github/workflows/deploy-pages.yml` compila y publica el sitio en cada push a esta rama o a `main`.

1. Una sola vez: en GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Haz push (o corre el flujo a mano desde la pestaña **Actions**).
3. El sitio queda en `https://<usuario>.github.io/<repo>/`.

Mientras sea un borrador, esa copia lleva `noindex` para que Google no la indexe (`STAGING=1` en el flujo). Cuando el dominio final esté listo, se quita `STAGING`, se cambia `SITE_URL` y `BASE_PATH` pasa a `/`.
