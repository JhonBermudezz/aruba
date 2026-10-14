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

## Publicar en GitHub Pages

El flujo `.github/workflows/deploy-pages.yml` compila y publica el sitio en cada push a esta rama o a `main`.

1. Una sola vez: en GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Haz push (o corre el flujo a mano desde la pestaña **Actions**).
3. El sitio queda en `https://<usuario>.github.io/<repo>/`.

Mientras sea un borrador, esa copia lleva `noindex` para que Google no la indexe (`STAGING=1` en el flujo). Cuando el dominio final esté listo, se quita `STAGING`, se cambia `SITE_URL` y `BASE_PATH` pasa a `/`.
