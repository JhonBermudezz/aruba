# Planeación: sitio web de One Happy Picnic Aruba

| | |
|---|---|
| **Cliente** | Zoe, One Happy Picnic Aruba (@onehappypicnic.aruba) |
| **Proveedor** | JhonDev |
| **Plan contratado** | Plan 2, Recomendado: **USD 500**, pago único |
| **Entrega** | 4 semanas (hasta 8 si el contenido se demora) |
| **Estado** | Sitio bilingüe (inglés y español) con 35 páginas en Astro, selector de idioma y blog con su primer artículo. Faltan 3 blogs, el calendario y el pago |
| **Actualizado** | 14 de octubre de 2026 |

---

## 1. Resumen

- **Ya construido:** la página de inicio en inglés (diseño v2 con los ajustes pedidos), privacidad, términos y 404, y la vista previa privada.
- **Lo que falta del Plan 2:** 3 de los 4 blogs SEO, el panel para que Zoe publique, el agendamiento con Google Calendar y el link de pago por reserva.
- **Hallazgo importante:** Google Calendar puede cobrar al reservar, pero solo con **Stripe**, y **Stripe no acepta negocios con sede en Aruba**. Por eso el cobro va con un link aparte, que es justo lo que promete el PDF ("link de pago dinámico"). Detalle en la sección 4.
- **Decisiones que necesitamos de Zoe:** en qué banco tiene la cuenta (para elegir pasarela), su cuenta de Google para el calendario, el porcentaje del abono y los precios (sección 9).

---

## 2. Alcance del Plan 2 y cómo lo resolvemos

| Lo que dice el PDF | Cómo lo hacemos | Estado |
|---|---|---|
| Diseño 100% responsive | Móvil primero, probado en celular, tablet y escritorio | ✅ Hecho |
| Botón directo a WhatsApp | Barra fija abajo en el celular y botón flotante en escritorio | ✅ Hecho (aparece al poner el número) |
| Botón de llamada rápida | En la misma barra fija, junto a WhatsApp | ✅ Hecho (aparece al poner el número) |
| Identidad visual aplicada | Colores del logo, tipografía Manrope y fotos reales | ✅ Hecho |
| Páginas: Inicio, Paquetes/Servicios, Sobre nosotros, Contacto | Inicio, índice de picnics, **una página por tipo de picnic (6)**, Sobre nosotros, Reseñas (con formulario), FAQ, Contacto y Reservar | ✅ Hecho (inglés) |
| Sección de blog lista para publicar | Blog con listado y plantilla de artículo en inglés y español ✅. Falta el panel para que Zoe publique sin código | ✅ / ⏳ panel |
| Carga inicial de 4 blogs SEO (E-E-A-T) | Los escribimos en inglés y español (sección 7). 1 de 4 publicado | ⏳ 1/4 |
| Sitio multidioma: inglés + español | Rutas separadas `/` y `/es/`, con selector de idioma y `hreflang` para Google | ✅ |
| Agendamiento por enlace de Google Calendar | Página de reservas de Google Calendar embebida en la web (sección 3) | ⏳ Semana 3, necesita la cuenta de Zoe |
| Link de pago dinámico por reserva | La web calcula el abono y genera el link de pago (sección 4) | ⏳ Semana 3, necesita la pasarela |

---

## 3. Google Calendar: cómo lo hacemos

**Qué es:** Google Calendar tiene "Agendas de citas" (*appointment schedules*). Zoe crea una agenda, define horarios y duración, y Google genera una página de reservas. Esa página se **embebe dentro de nuestra web** y el cliente elige día y hora sin salir del sitio.

**Lo que resuelve solo:**
- El cliente ve solo los horarios libres, así que no hay dobles reservas.
- La reserva entra directo al calendario de Zoe.
- Google manda el correo de confirmación al cliente y a Zoe.

**Cómo lo configuramos para picnics:**
1. Una agenda llamada "Beach picnic", de **2 horas**.
2. Horarios por temporada que siguen al atardecer, porque el sunset en Aruba va de 6:15 PM (diciembre) a 7:10 PM (junio). Por ejemplo, de octubre a marzo a las 4:15 PM y de abril a septiembre a las 5:00 PM, más un horario nocturno. **Hay que ajustarlo con Zoe.**
3. Las preguntas del formulario de Google piden experiencia, invitados y ocasión.

**Cuenta gratis o de pago:**

| | Cuenta Google gratis | Google One Premium o Workspace Individual |
|---|---|---|
| Páginas de reserva | 1 | Ilimitadas (una por experiencia) |
| Recordatorios por email | No | Sí |
| Revisar varios calendarios a la vez | No | Sí |
| Cobro con Stripe | No | Sí, pero **no sirve en Aruba** |

**Recomendación:** empezar con la cuenta gratis y una sola agenda. Si Zoe quiere una agenda por experiencia o recordatorios automáticos, se sube a Google One Premium (pago mensual que cubre ella).

**Importante:** la página de reservas de Google **no se puede rediseñar**. Va dentro de un marco limpio con nuestra marca alrededor.

---

## 4. Link de pago del abono: cómo lo hacemos

**Por qué no se cobra dentro de Google Calendar:** Google solo cobra con Stripe, y Stripe no acepta negocios de Aruba, Curazao ni Sint Maarten.

**Opciones reales para Aruba:**

| Opción | Cómo cobra | Sirve para turistas | Costos conocidos | Comentario |
|---|---|---|---|---|
| **CX Pay** (pasarela de Aruba Bank) | Página de pago con tarjeta: Visa, Mastercard, Amex, Discover | ✅ Sí | USD 50 de activación + USD 75 por la página de pago (tarifas desde junio 2026) | Es la "pasarela de tu banco" que menciona el PDF. Hay que confirmar con ellos si el monto se puede pasar por link (o API) para hacerlo dinámico |
| **PayPal Business** | Link `paypal.me/usuario/monto`, con tarjeta o cuenta PayPal | ✅ Sí | Comisión por transacción (más alta) | El monto va en el link, así que es dinámico sin servidor. Hay que confirmar que la cuenta de Aruba pueda recibir y retirar |
| **Sentoo** (Aruba Bank y otros) | Transferencia de banco a banco con link o QR | ❌ Solo clientes de bancos locales | Máx. 1% (tope USD 1.50), sin mensualidad | Muy barato. Útil para residentes que celebran cumpleaños |

**Recomendación:** si Zoe tiene cuenta en **Aruba Bank**, usar **CX Pay** para tarjetas y Sentoo para locales. Si no, o mientras se activa, **PayPal** como opción rápida.

**Cómo es "dinámico":** en la web, el cliente elige experiencia e invitados y la página calcula el abono. Por ejemplo, Sunset × 2 personas × 50% = USD 99. El botón "Pay deposit" abre el link con **ese monto exacto**. Con PayPal es directo. Con CX Pay depende de lo que permita su API: si no deja pasar el monto, usamos un link fijo por paquete.

**Conciliación:** en el Plan 2, Zoe ve la reserva en su calendario y el pago en su banco o PayPal, y confirma por WhatsApp. Cruzar las dos cosas automáticamente es parte del Plan 3 (checkout integrado y mini CRM).

---

## 5. Nuevo flujo de reserva (Plan 2)

1. **Choose:** el cliente elige la experiencia y los invitados y ve el precio y el abono.
2. **Pick a time:** elige día y hora en el calendario de Google, embebido en la web. La hora del atardecer de esa fecha sigue visible como ayuda.
3. **Pay deposit:** paga el abono con el link (tarjeta, PayPal o Sentoo).
4. **Confirm:** recibe el correo de Google y Zoe le escribe por WhatsApp con los detalles y el pin de ubicación.

La sección "How it works" de la página ya cuenta este flujo, con los horarios calculados según el atardecer real del día.

---

## 6. Arquitectura técnica recomendada

**Ya migrado a [Astro](https://astro.build)** (v3). Con dos idiomas, 16 páginas y un blog, mantener archivos duplicados a mano se vuelve frágil, por eso se hizo el cambio:

- Genera un sitio **estático** igual de rápido que el actual y se aloja gratis (Netlify o Cloudflare Pages).
- Trae **rutas por idioma** (`/` y `/es/`), así que cada página existe en los dos idiomas con su URL propia. Google indexa ambas versiones y el `hreflang` le dice cuál mostrar a cada visitante.
- El **blog** se escribe en archivos Markdown. Para que Zoe publique sola, se suma un **panel de edición** (Decap CMS o Keystatic, ambos gratis) en `/admin`.
- El diseño actual se pasa tal cual: el CSS no cambia y cada sección se vuelve un componente.

**Mapa del sitio:**

| Inglés | Español | Contenido | Estado |
|---|---|---|---|
| `/` | `/es/` | Inicio (la landing) | ✅ |
| `/picnics/` | `/es/picnics/` | Índice con las 6 experiencias | ✅ |
| `/picnics/golden-hour-picnic/` | `/es/picnics/picnic-en-la-hora-dorada/` | Golden hour picnic | ✅ |
| `/picnics/weddings-vow-renewals/` | `/es/picnics/bodas-y-renovacion-de-votos/` | Bodas y renovación de votos (hasta 30) | ✅ |
| `/picnics/picnic-under-the-stars/` | `/es/picnics/picnic-bajo-las-estrellas/` | Picnic under the stars | ✅ |
| `/picnics/proposal-setup/` | `/es/picnics/propuesta-de-matrimonio/` | Propuestas | ✅ |
| `/picnics/birthday-anniversary-picnic/` | `/es/picnics/cumpleanos-y-aniversarios/` | Cumpleaños y aniversarios | ✅ |
| `/picnics/group-bachelorette-picnic/` | `/es/picnics/grupos-y-despedidas/` | Grupos y despedidas | ✅ |
| `/picnics/charcuterie-boards/` | `/es/picnics/tablas-de-charcuteria/` | Tablas de charcutería | ✅ |
| `/about/` | `/es/nosotros/` | Historia de Zoe, compromisos con reseñas, fotos | ✅ |
| `/reviews/` | `/es/resenas/` | Las 4 reseñas completas + **formulario para dejar reseña** | ✅ |
| `/faq/` | `/es/preguntas/` | 24 preguntas en 6 grupos | ✅ |
| `/contact/` | `/es/contacto/` | Canales, formulario, playas con mapa | ✅ |
| `/book/` | `/es/reservar/` | Formulario de reserva (luego Google Calendar + abono) | ✅ / ⏳ calendario |
| `/blog/` y `/blog/[artículo]/` | `/es/blog/` y `/es/blog/[artículo]/` | Listado y artículos (Markdown) | ✅ |
| `/privacy/`, `/terms/` | `/es/privacidad/`, `/es/terminos/` | Legales | ✅ |

**Cómo está hecho cada página de picnic (SEO):** título y descripción propios con la palabra clave ("Proposal setup in Aruba with MARRY ME letters"), H1 único, migas de pan, datos estructurados `Service` + `BreadcrumbList` + `FAQPage`, fotos reales de esa categoría, reseñas, preguntas propias y enlaces a las otras 5 (enlazado interno). El botón "Book this picnic" llega al formulario con la experiencia ya elegida.

**El contenido vive en `src/data/site.js` (inglés) y `src/data/site.es.js` (español):** experiencias, reseñas, preguntas, fotos y líneas de tiempo. Las rutas de cada idioma y los textos de la interfaz están en `src/i18n.js`. Las reseñas de los invitados se dejan en inglés, tal como las escribieron.

> **Pendiente:** el panel para que Zoe publique el blog (Decap CMS o Keystatic) se agrega junto con el blog.

---

## 7. Los 4 blogs SEO (carga inicial)

| Pilar E-E-A-T | Título en inglés | Título en español | Palabra clave | Qué lleva |
|---|---|---|---|---|
| Experiencia ✅ publicado | How to plan a sunset picnic on Eagle Beach | Cómo planear un picnic al atardecer en Eagle Beach | sunset picnic Eagle Beach | El montaje paso a paso con fotos reales y los tiempos según el atardecer |
| Conocimiento | The best time and beach in Aruba for a picnic | Guía: la mejor hora y playa en Aruba para tu picnic | best beach for a picnic in Aruba | Tabla de atardeceres por mes, viento, playas (Eagle, Surfside, Palm) y consejos |
| Autoridad | What couples say after a picnic with us | Lo que dicen las parejas que ya reservaron con nosotros | beach picnic Aruba reviews | Las 4 reseñas reales con su historia (luna de miel, aniversario) y sus fotos |
| Confianza | What each package includes and how to book without surprises | Qué incluye cada paquete y cómo reservar sin sorpresas | Aruba picnic packages prices | Paquetes, precios, abono, cancelación, clima y pasos para reservar |

Cada artículo lleva fotos reales, enlaces a Paquetes y Reservar, datos estructurados `Article` y autora visible (Zoe).

---

## 8. Cambios de diseño v2 (según los comentarios)

| Comentario | Cambio |
|---|---|
| "La foto del hero tiene un recorte raro en el mar" | Volví a la imagen que te gustó (`hero35_preview`). Para que el panel no tape el teepee, agregué arena a la izquierda y pegué encima los píxeles originales, así que no hay costura |
| "Los iconos con esos colores se ven muy IA" | Iconos de línea fina en un solo color (tinta), sin círculos de colores. En "What's included" quedan separados por líneas finas |
| "Los tres pasos de cómo trabajamos no me gustan, más dinámico" | "How it works" ahora es una **línea de tiempo** que avanza con el scroll: la foto cambia en cada paso, un sol recorre la línea y las horas se calculan con el atardecer real del día (ej. 4:30 PM llegas, 6:22 PM brindis, 6:30 PM recogemos) |
| "La estrellita que dice BOOK, GALLERY no me gusta" | Quité todas las etiquetas con estrella. Algunos títulos llevan una **mini foto en forma de píldora** que se abre al hacer scroll ("Pick your [foto] moment") |
| Revisión anti-IA (v3): "los punticos se ven muy IA" | Quité todos los puntos animados, la etiqueta tipo píldora del hero, el texto con degradado en los títulos, los círculos de colores con iniciales en las reseñas, los chips con iconos de las tarjetas y las etiquetas repetidas. Reescribí los textos con las reglas de *stop-slop*: sin adverbios de relleno, sin listas de tres por costumbre, sin frases tipo eslogan ni "no X, no Y". Ahora el texto nombra a Zoe y a las playas reales |
| "Las fotos de la galería estilo Polaroid" | La galería son Polaroids: marco blanco con borde inferior más ancho, pie de foto corto, leve inclinación y fondo laguna para que resalten. Al pasar el mouse se enderezan |
| Plan 2: botones de WhatsApp y llamada siempre visibles | Barra fija abajo en el celular y botón flotante en escritorio. Aparecen solos al poner los números en `CONFIG` |

---

## 9. Plan de acción de la reunión del 14 de octubre de 2026

Zoe e Iraly Villegas son la misma persona: en la web se queda el nombre **Zoe**.

**Hecho (16 de octubre)**

| Cambio | Dónde |
|---|---|
| Planes renombrados: **Golden hour picnic / Picnic en la hora dorada** y **Picnic under the stars / Picnic bajo las estrellas** (ya no chocan "atardecer" y "puesta de sol") | Nombres, URLs, formulario, FAQ, blog |
| Propuesta en dos opciones: **sencilla** (1 hora, arco de flores y letrero LED) y **con picnic** (2 horas, charcutería y bebidas), cada una con su botón al formulario | `/picnics/proposal-setup/` |
| **Fotógrafo profesional** de USD 250 a 300 como extra, con su pregunta en el FAQ | Propuestas, bodas, formulario |
| **Chef privado** como extra seleccionable en todos los servicios, con su pregunta en el FAQ | Formulario y lista de extras |
| Página nueva de **bodas pequeñas y renovación de votos**, hasta 30 invitados, solo con cotización | `/picnics/weddings-vow-renewals/`, `/es/picnics/bodas-y-renovacion-de-votos/` |
| Formulario: **extras seleccionables**, campo obligatorio de **alergias** y número de invitados hasta 30 | Formulario de reserva |
| **Paleta rosado pastel y turquesa** tomada del logo y del mar; los botones y textos quedan en tonos oscuros para que se lean | `styles.css` |
| **Foto aérea de Eagle Beach** de fondo en la frase "We set your table…", con el logo encima | Inicio |

**Pendiente de Zoe**

- [ ] Tarifas para residentes en florines: base de 175 AWG por persona y la tarifa exacta para grupos de más de 5 (135 o 125). Con eso armamos la casilla "Vivo en Aruba" y el aviso de documento de identidad.
- [ ] Menú de charcutería de 15 artículos para el selector "arma tu tabla" (el cliente elige 5).
- [ ] Fotos de eventos y del chef privado, foto de Zoe para Sobre nosotros y el logo en alta resolución.
- [ ] Revisión de todo el contenido: preguntas frecuentes, horarios, precios y política de clima.
- [ ] Pago pendiente de USD 300.

**En pausa**

- Migración al dominio en Wix: queda en pausa hasta que Zoe confirme el dominio. Mientras tanto el sitio sigue en el link temporal de GitHub Pages, sin indexar en Google.

## 9b. Lo que necesitamos de Zoe

**Para la semana 2 (bloquea el avance):**
- [ ] Número de **WhatsApp** y número para **llamadas**
- [ ] **Precios** de cada paquete, mínimo y máximo de invitados, y **% de abono**
- [ ] **Banco** donde tiene la cuenta del negocio (para decidir entre CX Pay, PayPal y Sentoo)
- [ ] **Cuenta de Google** para el calendario (que cree la agenda con nosotros en una videollamada, o que nos dé acceso)
- [ ] Horarios que quiere ofrecer (tarde y noche) y días que no trabaja
- [ ] **Logo original** (SVG o PNG grande) y **dominio** (si ya tiene uno)

**Para el contenido (semana 2 y 3):**
- [ ] Fotos y videos originales en alta resolución (las del celular, no las descargadas de Instagram)
- [ ] Su historia y una foto suya para "Sobre nosotros"
- [ ] Textos de cada paquete: qué comida lleva, extras (fotógrafo, letras MARRY ME, pastel, números) y sus precios
- [ ] Charcutería: tamaños, precios, delivery o recogida
- [ ] Políticas: abono, cancelación y clima (hoy usamos 24 h, sacado de su ficha anterior)
- [ ] Permiso para usar las reseñas con nombre e inicial
- [ ] Revisión del español (lo traducimos nosotros, ella valida el tono)

---

## 10. Datos que asumí (hay que confirmarlos)

| Dato en la web | De dónde salió | Estado |
|---|---|---|
| "Desde $99 por persona" | Ficha de One Happy Picnic en My Aruba Guide | Confirmar |
| 2 horas por picnic | Misma ficha | Confirmar |
| Cancelación gratis hasta 24 h | Misma ficha | Confirmar |
| Qué incluye (teepee, mesa, cojines, flores, comida, refrescos, agua, Prosecco o vino, parlante, letrero, permiso) | Misma ficha | Confirmar |
| Eagle Beach y Surfside | Listados de búsqueda | Confirmar |
| "2 to 8 guests" en Sunset | Supuesto | Confirmar |
| Delivery de charcutería y "order a day ahead" | Supuesto | Confirmar |
| Fotógrafo bajo pedido | Reseña de Susan ("they even did a photo shoot") | Confirmar precio |
| Abono por link seguro | Plan 2 | Confirmar el % |
| Política de clima (reprogramar o reembolsar) | Supuesto | Confirmar |
| Dominio `onehappypicnicaruba.com` | Supuesto | Por comprar o verificar |

---

## 11. Cronograma (4 semanas)

| Semana | Entregable | Depende de |
|---|---|---|
| **1** | Diseño de inicio aprobado (v2) y recolección de contenido | Aprobación de Jhon y Zoe ✅ / contenido |
| **2** | ✅ Migración a Astro y todas las páginas en inglés (adelantado). Falta: estructura bilingüe y activar la barra de WhatsApp y llamada | Números, precios, logo |
| **3** | Reservas: Google Calendar embebido y link de abono. Blog con panel de edición y los 4 artículos en EN y ES | Cuenta de Google, pasarela de pago |
| **4** | QA en celulares reales, SEO técnico (Search Console, sitemap, `hreflang`), dominio, lanzamiento y una sesión con Zoe para enseñarle a publicar en el blog y ajustar horarios | Dominio |

Si el contenido se demora, la entrega se extiende hasta 8 semanas, como dice la oferta.

**Fuera del Plan 2** (para ofrecer después): checkout integrado, mini CRM y contabilidad (Plan 3), gift cards "Send a picnic" y analítica con aviso de cookies.

---

## 12. Estrategia y hallazgos (de la v1)

### Instagram (60 imágenes analizadas)

| Lo que hay | Cómo lo usé |
|---|---|
| Teepee de bambú con flores, mesa baja, cojines, atardecer. Es la foto insignia | Hero y tarjeta "Sunset picnic" |
| Picnic nocturno con luces ("Under the moonlight") | Tarjeta "Moonlight picnic" |
| Propuestas con letras "MARRY ME" iluminadas | Tarjeta "Proposal setup" y FAQ |
| Cumpleaños con números gigantes y aniversarios | Tarjeta "Birthdays and anniversaries" |
| Grupos de amigas y mesas largas | Tarjeta "Friends and bachelorettes" y galería |
| Tablas de charcutería (el origen del negocio) | Tarjeta "Charcuterie boards to go" |
| Fotos impresas, tarjetas con mensajes, flores | Sección "The little things" |
| 4 reseñas de Facebook | Hero, reseñas y cita destacada |

### Competencia

| Competidor | Lo que ofrece | Lo que aprendimos |
|---|---|---|
| **Picnic Aruba** (picnicaruba.com) | De $67 a $150, Surfside, reservas con FareHarbor | Una reseña suya se queja de lo difícil que fue encontrar el lugar. Nosotros mandamos el pin |
| **Cabana Sunsets** | Cabana en Eagle Beach con fotógrafo, $340 | Hay mercado premium con fotos |
| **Resorts y Boardwalk** | Picnics para huéspedes y canastas para llevar | La charcutería para llevar tiene demanda |

**Oportunidades:** lo personal (notas a mano, fotos impresas), el pin de ubicación, regalar a distancia (Susan lo hizo para su hija, así que las gift cards tienen sentido) y el precio accesible ("very affordable").

### Audiencia
Viajeros de EE. UU. (el mercado #1 de Aruba): parejas, propuestas, viajes de amigas y familias. En segundo lugar, residentes que celebran cumpleaños. **El español abre el mercado latino y local.**

---

## 13. Sistema visual

- **Colores del logo:** concha `#FFFAF6`, arena `#F7EEE6`, laguna `#E8F5F4`, tinta `#1D1719`, hibisco `#C92F65` (botones, contraste AA), sol `#F5B323`, noche `#131209`.
- **Tipografía:** Manrope (400 a 700). Geist Mono solo para horas y números.
- **Iconos:** Phosphor en peso *light*, un solo color.
- **Movimiento:** entradas suaves con el scroll, títulos con mini foto que se abre, frase que se ilumina palabra por palabra y línea de tiempo con el sol. Respeta "reducir movimiento".
- **Galería:** fotos tipo Polaroid con pie de foto.
- **Anti-IA:** títulos en color sólido, sin puntos animados, sin badges ni avatares de colores.

---

## 14. Uso de IA (Kie) y transparencia

Solo se adaptaron **fotos reales** del cliente, sin inventar montajes:

| Archivo | Qué se hizo |
|---|---|
| Hero de escritorio (v2) | La imagen aprobada (`hero35_preview`) con arena extra a la izquierda. Los píxeles originales se pegaron encima, así que el montaje no cambia |
| Hero móvil | La foto #35 extendida a 9:16 |
| Charcutería | Se quitó el sticker de texto y se mejoró la nitidez |
| Logo | Redibujado en alta (provisional, hasta tener el original) |

Créditos usados: 108 de 494 (quedan 386).

---

## 15. Cómo ver y publicar el sitio

```bash
npm install
npm run dev            # http://localhost:4321, con recarga en vivo
npm run build          # genera dist/ para subir a Netlify, Vercel o Cloudflare Pages
npm run build:preview  # versión con enlaces relativos para la vista previa privada
```

Para activar WhatsApp, la llamada y el email, se llena `CONFIG` al inicio de `public/assets/js/main.js`:
```js
const CONFIG = {
  whatsapp: '2975551234', // código de país + número, solo dígitos
  phone: '2975551234',
  email: 'hello@…',
  instagram: 'onehappypicnic.aruba',
};
```

**Fuentes consultadas sobre pagos y calendario:**
- [Google Calendar: cobrar citas (requiere Workspace y Stripe)](https://support.google.com/calendar/answer/13762729)
- [Google Calendar: agendas de citas](https://support.google.com/calendar/answer/11608416)
- [Stripe: territorios no soportados (incluye Aruba)](https://support.stripe.com/questions/stripe-availability-for-outlying-territories-of-supported-countries)
- [Aruba Bank: solución eCommerce con CX Pay](https://www.arubabank.com/Corporate/Banking/Business-Services/Ecommerce-Solution)
- [Aruba Bank: Sentoo para negocios](https://www.arubabank.com/sentoo-for-business)
- [PayPal: códigos de país (Aruba listado)](https://developer.paypal.com/api/rest/reference/country-codes/)
