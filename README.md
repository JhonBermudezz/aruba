# One Happy Picnic Aruba

Sitio web (en inglés) de One Happy Picnic Aruba, picnics privados en la playa en Aruba.

- **Planeación completa y pendientes:** [docs/PLANEACION.md](docs/PLANEACION.md)
- **Stack:** HTML, CSS y JavaScript puros. Sin build ni dependencias.
- **Configurar WhatsApp y email:** objeto `CONFIG` al inicio de `assets/js/main.js`.

## Ver en local

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

Cualquier hosting estático sirve (Netlify, Vercel, Cloudflare Pages o GitHub Pages). Sube la carpeta tal cual. `404.html` ya está lista para los hosts que la usan por defecto.
