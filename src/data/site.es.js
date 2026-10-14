// Spanish content. Reuses the English structure (photos, times, keys) and replaces the words.
import { EXPERIENCES as EN_EXP, FAQS as EN_FAQS, TIMELINES as EN_TL, PHOTOS as EN_PHOTOS, REVIEWS as EN_REVIEWS, INCLUDED as EN_INC } from './site.js';

const merge = (base, over) => Object.fromEntries(Object.entries(base).map(([k, v]) => [k, { ...v, ...(over[k] || {}) }]));

// Reviews stay in the guests' own words (English); only the context line is translated.
export const REVIEWS = merge(EN_REVIEWS, {
  susan: { context: 'Sorpresa de luna de miel, enviada desde casa' },
  tatyana: { context: 'Picnic en la playa' },
  krizia: { context: 'Picnic de celebración' },
  taylor: { context: 'Aniversario de 10 años' },
});

export const PHOTOS = merge(EN_PHOTOS, {
  'g-golden-table': { alt: 'Mesa de picnic al atardecer con platos dorados bajo un tipi de flores azules', caption: 'Mesa en la hora dorada' },
  'g-kiss': { alt: 'Pareja besándose sobre cojines junto a un tipi de flores al atardecer', caption: 'Brindis al atardecer' },
  'g-torches': { alt: 'Picnic con tipi, antorchas y un corazón de velas en la arena al anochecer', caption: 'Antorchas al anochecer' },
  'g-long-table': { alt: 'Mesa larga y baja con platos turquesa y camino fucsia para un grupo en la playa', caption: 'Mesa larga para las amigas' },
  'g-teepee-sun': { alt: 'Tipi con cojines pastel sobre una alfombra frente al mar en la tarde', caption: 'Montaje de tarde' },
  'g-family': { alt: 'Familia sonriendo en un picnic de desayuno con jugo, flores y pan dulce', caption: 'Desayuno en familia' },
  'g-silhouettes': { alt: 'Dos invitados mirando cómo el sol cae en el mar desde su tipi', caption: 'Mirando la puesta de sol' },
  'g-birthday-23': { alt: 'Invitada mirando su picnic de cumpleaños con un número 23 gigante y cojines rojos', caption: 'Sus 23 años' },
  'g-table-spread': { alt: 'Mesa con platos azules, camino rosado, canasta de frutas, flores y una botella en hielo', caption: 'Mesa para dos' },
  'pol-night-teepee': { alt: 'Tipi con luces cálidas en la playa de noche', caption: 'Tipi bajo las estrellas' },
  'pol-night-dinner': { alt: 'Grupo en una cena larga bajo luces en la playa de noche', caption: 'Cena bajo las luces' },
  'pol-proposal-kneel': { alt: 'Hombre arrodillado pidiendo matrimonio junto a un tipi de flores y cojines rojos', caption: 'De rodillas' },
  'pol-proposal-ring': { alt: 'Primer plano de un anillo de compromiso en una mano con uñas turquesa', caption: 'Dijo que sí' },
  'pol-proposal-hug': { alt: 'Pareja recién comprometida abrazándose junto a su tipi al atardecer', caption: 'Justo después de la pregunta' },
  'pol-proposal-night': { alt: 'Letras MARRY ME iluminadas en la playa de noche bajo un corazón', caption: 'MARRY ME de noche' },
  'pol-group-arms': { alt: 'Siete amigas con los brazos arriba bajo un arco de bambú en la playa', caption: 'Viaje de amigas' },
  'pol-group-table': { alt: 'Tres amigas con gafas de sol sonriendo en una mesa de picnic con flores', caption: 'Brindis entre amigas' },
  'pol-board': { alt: 'Tabla redonda de charcutería con fruta, quesos, embutidos y un lazo azul', caption: 'Tabla para llevar' },
  'touch-photos': { alt: 'Fotos impresas de una pareja colgadas entre dos palos de bambú sobre una alfombra de corazón', caption: 'Tus fotos sobre la mesa' },
  'p-charcuterie': { alt: 'Tabla de charcutería con fresas, chocolates, salami y queso', caption: 'Fresas, salami y dip' },
});

export const INCLUDED = [
  { icon: 'tent', title: 'El montaje', text: 'Tipi de bambú, mesa baja de madera, cojines, mantas, camino de mesa y flores frescas.' },
  { icon: 'fork-knife', title: 'Comida para compartir', text: 'Charcutería, fruta y dulces. Cuéntanos de alergias al reservar.' },
  { icon: 'champagne', title: 'Bebidas frías', text: 'Refrescos, estación de agua y una botella de bienvenida de Prosecco o vino.' },
  { icon: 'music-notes', title: 'Música', text: 'Un parlante Bluetooth para tu lista de canciones.' },
  { icon: 'note-pencil', title: 'Un mensaje en la mesa', text: 'Un letrero con sus nombres o tu mensaje.' },
  { icon: 'map-pin', title: 'Permiso y ubicación', text: 'Sacamos el permiso de playa y te mandamos el pin de tu lugar.' },
];
void EN_INC;

export const FAQS = merge(EN_FAQS, {
  length: { q: '¿Cuánto dura un picnic?', a: ['Cada picnic dura dos horas en la arena. Puedes sumar tiempo al reservar.'] },
  beaches: { q: '¿En qué playas montan?', a: ['Eagle Beach y Surfside Beach son nuestras favoritas, y montamos en otras playas si lo pides. Antes del picnic te mandamos el pin exacto del lugar.'] },
  price: { q: '¿Cuánto cuesta un picnic?', a: ['Los picnics al atardecer empiezan en USD 99 por persona e incluyen montaje, comida, bebidas, permiso de playa y limpieza. Propuestas, grupos grandes y temas especiales se cotizan por WhatsApp.'] },
  food: { q: '¿Qué comida y bebida incluye?', a: ['Una mesa para compartir con nuestra charcutería, fruta fresca, snacks y dulces, más refrescos, estación de agua y una botella de bienvenida de Prosecco o vino.', '¿Vegetariano, sin gluten o alergias? Dínoslo al reservar y adaptamos el menú.'] },
  deposit: { q: '¿Tengo que pagar un abono?', a: ['Sí. Un abono por link de pago seguro aparta tu fecha y hora en el calendario. Por WhatsApp te confirmamos el monto y cuándo se paga el resto.'] },
  cancellation: { q: '¿Cuál es la política de cancelación?', a: ['Cancela hasta 24 horas antes y te devolvemos todo. Cancelaciones con menos de 24 horas y ausencias no tienen reembolso.'] },
  weather: { q: '¿Qué pasa si cambia el clima?', a: ['Aruba está fuera de la zona de huracanes y la mayoría de lloviznas pasan en minutos. Si el clima no deja hacer el picnic, lo pasamos a otra fecha o te devolvemos el dinero.'] },
  advance: { q: '¿Con cuánta anticipación reservo?', a: ['Para la mayoría de fechas basta con unos días. Para propuestas, grupos y semanas festivas, reserva con dos semanas. Para algo de último minuto, escríbenos y revisamos.'] },
  kids: { q: '¿Pueden ir niños?', a: ['Sí. Adaptamos el menú para niños.'] },
  delivery: { q: '¿Entregan tablas de charcutería?', a: ['Sí. Puedes recogerla o te la llevamos a tu hotel, villa o barco. Pídela con un día de anticipación.'] },
  'sunset-start': { q: '¿A qué hora empieza un picnic al atardecer?', a: ['Más o menos 1 hora y 45 minutos antes de la puesta de sol. En Aruba el sol se pone entre las 6:11 PM de noviembre y las 7:10 PM de julio, y te confirmamos la hora exacta al reservar.'] },
  'sunset-beach': { q: '¿Qué playa es mejor para ver el atardecer?', a: ['Eagle Beach mira al oeste, así que el sol se pone sobre el mar frente a tu mesa. Surfside es una playa más tranquila cerca de Oranjestad.'] },
  'moon-start': { q: '¿A qué hora empieza un picnic nocturno?', a: ['Unos 30 minutos después de la puesta de sol, entre las 6:45 PM y las 7:40 PM según el mes.'] },
  'moon-lights': { q: '¿Tengo que llevar luces?', a: ['No. Llevamos luces para el tipi, faroles y velas para la mesa.'] },
  'proposal-secret': { q: '¿Cómo guardan el secreto de la propuesta?', a: ['Planeas todo con nosotros por WhatsApp y nunca contactamos a tu pareja. Ese día el equipo termina el montaje y se retira antes de que lleguen.'] },
  'proposal-photographer': { q: '¿Pueden conseguir un fotógrafo?', a: ['Sí. Pídelo al reservar y coordinamos la hora para que capture el momento.'] },
  'proposal-letters': { q: '¿Las letras MARRY ME están incluidas?', a: ['Las letras iluminadas son un extra. Pregunta el precio por WhatsApp al reservar.'] },
  'birthday-cake': { q: '¿Pueden llevar un pastel?', a: ['Sí, como extra. Dinos el sabor y el nombre que va escrito.'] },
  'birthday-photos': { q: '¿Pueden poner nuestras fotos?', a: ['Sí. Mándanos las fotos por WhatsApp, las imprimimos y las colgamos sobre la mesa.'] },
  'birthday-kids': { q: '¿Hacen cumpleaños de niños?', a: ['Sí. Dinos la edad y adaptamos el menú y la decoración.'] },
  'group-size': { q: '¿Para cuántas personas montan?', a: ['Dinos el tamaño del grupo por WhatsApp y te confirmamos la mesa y el precio.'] },
  'group-bachelorette': { q: '¿Decoran para despedidas de soltera?', a: ['Sí. Dinos los colores y las palabras del letrero, y montamos la mesa alrededor de la novia.'] },
  'board-ahead': { q: '¿Con cuánta anticipación pido una tabla?', a: ['Pídela por WhatsApp con al menos un día de anticipación.'] },
  'board-allergies': { q: '¿Pueden hacer una tabla para alergias?', a: ['Sí. Dinos qué dejar por fuera al pedirla.'] },
});

export const FAQ_GROUPS = [
  { id: 'reservas', title: 'Reservas y pagos', keys: ['price', 'deposit', 'advance', 'cancellation'] },
  { id: 'el-dia', title: 'El día del picnic', keys: ['length', 'beaches', 'weather', 'kids'] },
  { id: 'atardecer-noche', title: 'Picnics al atardecer y de noche', keys: ['sunset-start', 'sunset-beach', 'moon-start', 'moon-lights'] },
  { id: 'propuestas', title: 'Propuestas', keys: ['proposal-secret', 'proposal-photographer', 'proposal-letters'] },
  { id: 'celebraciones', title: 'Cumpleaños, aniversarios y grupos', keys: ['birthday-cake', 'birthday-photos', 'birthday-kids', 'group-size', 'group-bachelorette'] },
  { id: 'comida', title: 'Comida y tablas de charcutería', keys: ['food', 'delivery', 'board-ahead', 'board-allergies'] },
];

const steps = (key, list) => ({ ...EN_TL[key], ...list.head, steps: EN_TL[key].steps.map((s, i) => ({ ...s, ...list.steps[i] })) });
export const TIMELINES = {
  picnic: steps('picnic', { head: { title: 'Del primer mensaje a la hora dorada' }, steps: [
    { label: 'Hoy', title: 'Elige tu fecha', text: 'Escoge una experiencia y un horario en el calendario. Movemos los horarios de hora dorada con el atardecer durante el año.', alt: 'Mesa de picnic con platos dorados bajo un tipi de flores' },
    { label: 'El mismo día', title: 'Paga el abono', text: 'Paga el abono con el link que te mandamos. Luego planeamos colores y comida contigo por WhatsApp.', alt: 'Tarjeta enmarcada junto a rosas en un camino turquesa' },
    { title: 'Camina a tu mesa', text: 'El equipo arma el tipi y pone la mesa antes de que llegues. Sigue el pin hasta tu lugar.', alt: 'Mesa con servilletas rosadas y flores bajo un farol' },
    { title: 'Atardecer', text: 'El sol se pone sobre el mar frente a tu mesa.', alt: 'Pareja besándose sobre cojines al atardecer' },
    { title: 'Recogemos', text: 'Después de dos horas el equipo recoge todo. Tú te quedas con las fotos y la tarjeta.', alt: 'Picnic con antorchas y velas al anochecer' },
  ] }),
  moonlight: steps('moonlight', { head: { title: 'Del atardecer a las estrellas' }, steps: [
    { label: 'Hoy', title: 'Elige tu fecha', text: 'Escoge un horario de noche en el calendario y dinos quiénes van.', alt: 'Mesa con platos dorados bajo un tipi de flores' },
    { label: 'El mismo día', title: 'Paga el abono', text: 'Paga el abono con el link que te mandamos. Luego planeamos el menú contigo por WhatsApp.', alt: 'Tarjeta enmarcada junto a rosas' },
    { title: 'Encendemos el montaje', text: 'El equipo prende las luces y las velas mientras se pone el sol.', alt: 'Picnic con antorchas y velas al anochecer' },
    { title: 'Camina a tu mesa', text: 'Sigue el pin hasta tu lugar. El tipi está encendido y las bebidas en hielo.', alt: 'Dos invitados sonriendo dentro de un tipi con luces de noche' },
    { title: 'Recogemos', text: 'Después de dos horas el equipo recoge todo y vuelves bajo las estrellas.', alt: 'Tipi con luces en la playa de noche' },
  ] }),
  proposal: steps('proposal', { head: { title: 'Cómo planeamos la pregunta' }, steps: [
    { label: 'Dos semanas antes', title: 'Planéalo con nosotros', text: 'Dinos la fecha y cómo quieres preguntar. Planeamos letras, flores y fotógrafo contigo por WhatsApp.', alt: 'Pareja abrazada junto a su tipi al atardecer' },
    { label: 'Al reservar', title: 'Paga el abono', text: 'Paga el abono con el link que te mandamos. Cada mensaje queda entre tú y nosotros.', alt: 'Tarjeta enmarcada junto a rosas' },
    { title: 'Llévala a la mesa', text: 'El equipo termina el montaje y se retira antes de que lleguen. Sigue el pin.', alt: 'Letras MARRY ME iluminadas detrás de un tipi de flores' },
    { title: 'Haz la pregunta', text: 'Las letras están encendidas y el sol se está poniendo detrás de ustedes.', alt: 'Hombre arrodillado pidiendo matrimonio junto a un tipi' },
    { title: 'Recogemos', text: 'Después de dos horas el equipo recoge todo. Si reservaste fotógrafo, las fotos te llegan después.', alt: 'Primer plano de un anillo de compromiso' },
  ] }),
  charcuterie: steps('charcuterie', { head: { title: 'Cómo pedir una tabla' }, steps: [
    { label: 'Un día antes', title: 'Pide por WhatsApp', text: 'Dinos el tamaño, la fecha y qué dejar por fuera.', alt: 'Tabla de charcutería con fresas, salami y queso' },
    { label: 'El mismo día', title: 'Armamos tu tabla', text: 'Preparamos tu tabla con fruta fresca, quesos, embutidos y chocolate.', alt: 'Tabla redonda de charcutería con fruta y queso' },
    { label: 'A tu hora', title: 'Recogida o entrega', text: 'La recoges o te la llevamos a tu hotel, villa o barco.', alt: 'Mesa con canasta de frutas y botella en hielo' },
  ] }),
};

const ES_EXP = {
  'sunset-picnic': {
    slugEs: 'picnic-al-atardecer', name: 'Picnic al atardecer', booking: 'Picnic al atardecer',
    card: { text: 'Un tipi de flores y una tabla para picar sobre la arena. Lo cuadramos para que el sol se ponga mientras estás en la mesa.', meta: '2 horas · Hora dorada · 2 a 8 personas', cta: 'Ver el picnic al atardecer', alt: 'Pareja sentada en una manta azul junto a un tipi de flores al atardecer' },
    seo: { title: 'Picnic al atardecer en Aruba en Eagle Beach | One Happy Picnic', description: 'Picnic privado al atardecer en Aruba con tipi de flores, tabla para picar y bebidas en la arena. Dos horas en la hora dorada, desde USD 99 por persona.' },
    h1: 'Picnic al atardecer en Aruba', faqTitle: 'Preguntas del picnic al atardecer',
    intro: 'Un tipi de flores, una mesa baja y una tabla para picar en Eagle Beach o Surfside. Cuadramos tus dos horas para que el sol se ponga mientras estás en la mesa.',
    facts: [['Duración', '2 horas'], ['Inicio', 'Cerca de 1 h 45 min antes del atardecer'], ['Personas', '2 a 8'], ['Precio', 'Desde USD 99 por persona']],
    includedLead: 'Tu picnic al atardecer incluye todo lo de abajo. Los extras se cobran aparte.',
    extras: ['Fotógrafo para el atardecer', 'Pastel con nombre', 'Letras MARRY ME iluminadas', 'Tiempo extra de noche'],
    hero: { alt: 'Tipi de bambú con flores rosadas sobre una mesa y cojines en la arena al atardecer' },
  },
  'moonlight-picnic': {
    slugEs: 'picnic-nocturno', name: 'Picnic nocturno', booking: 'Picnic nocturno',
    card: { text: 'El mismo montaje de noche, con luces y velas.', meta: '2 horas · Después del atardecer', cta: 'Ver el picnic nocturno', alt: 'Dos invitados sonriendo dentro de un tipi con luces y flores de noche' },
    seo: { title: 'Picnic nocturno en la playa en Aruba | One Happy Picnic', description: 'Picnic privado en la playa en Aruba después del atardecer, con luces, faroles y velas. Dos horas bajo las estrellas con comida y bebidas.' },
    h1: 'Picnic nocturno en Aruba', faqTitle: 'Preguntas del picnic nocturno',
    intro: 'El mismo montaje privado de noche, con luces, faroles y velas. Funciona para una cena tranquila de dos o una salida con amigos.',
    facts: [['Duración', '2 horas'], ['Inicio', 'Unos 30 min después del atardecer'], ['Personas', '2 a 8'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Tu picnic nocturno incluye todo lo de abajo, más las luces.',
    extras: ['Antorchas', 'Corazón de velas en la arena', 'Pastel con nombre', 'Tiempo extra'],
    hero: { alt: 'Dos invitados sonriendo dentro de un tipi con luces cálidas y flores de noche' },
  },
  'proposal-setup': {
    slugEs: 'propuesta-de-matrimonio', name: 'Propuesta de matrimonio', booking: 'Propuesta de matrimonio',
    card: { text: 'Letras MARRY ME iluminadas junto a tu mesa. Planeamos la hora contigo por WhatsApp para que tu pareja no sospeche.', meta: 'Montaje a medida · Fotógrafo opcional', cta: 'Ver propuestas', alt: 'Letras MARRY ME iluminadas detrás de un tipi de flores y una mesa en la playa' },
    seo: { title: 'Propuesta de matrimonio en Aruba con letras MARRY ME | One Happy Picnic', description: 'Planea una propuesta en la playa en Aruba con letras MARRY ME iluminadas, flores y un picnic privado al atardecer. Coordinamos la hora y podemos conseguir fotógrafo.' },
    h1: 'Propuesta de matrimonio en Aruba', faqTitle: 'Preguntas de propuestas',
    intro: 'Letras MARRY ME iluminadas, flores y una mesa privada en la arena. Planeamos la hora contigo por WhatsApp para que tu pareja no sepa nada hasta que te arrodilles.',
    facts: [['Duración', '2 horas'], ['Mejor hora', 'Hora dorada'], ['Extras', 'Fotógrafo, letras'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Cada propuesta incluye el picnic completo de abajo. Las letras y el fotógrafo son extras.',
    extras: ['Letras MARRY ME iluminadas', 'Fotógrafo', 'Corazón de velas en la arena', 'Fotos impresas de los dos'],
    hero: { alt: 'Letras MARRY ME iluminadas detrás de un tipi de flores y una mesa en la playa' },
  },
  'birthday-anniversary-picnic': {
    slugEs: 'cumpleanos-y-aniversarios', name: 'Cumpleaños y aniversarios', booking: 'Cumpleaños o aniversario',
    card: { text: 'Números gigantes y un pastel en la mesa, con los colores que elijas.', meta: 'Pastel opcional · Tus colores', cta: 'Ver picnics de cumpleaños', alt: 'Pareja descansando en un picnic con números gigantes de cumpleaños' },
    seo: { title: 'Picnics de cumpleaños y aniversario en Aruba | One Happy Picnic', description: 'Celebra un cumpleaños o aniversario en Aruba con un picnic privado en la playa: números gigantes, pastel, tus fotos impresas y los colores que elijas.' },
    h1: 'Picnics de cumpleaños y aniversario en Aruba', faqTitle: 'Preguntas de celebraciones',
    intro: 'Números gigantes, un pastel y los colores que elijas, montados en la playa para la persona que celebras. Podemos imprimir tus fotos y pasar tu nota a una tarjeta.',
    facts: [['Duración', '2 horas'], ['Extras', 'Pastel, números, fotos'], ['Personas', '2 a 8'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Cada celebración incluye el picnic completo de abajo. Pastel y números gigantes son extras.',
    extras: ['Números gigantes', 'Pastel con nombre', 'Tus fotos impresas y colgadas', 'Tarjeta escrita a mano'],
    hero: { alt: 'Invitada mirando su picnic de cumpleaños con un número 23 gigante y cojines rojos' },
  },
  'group-bachelorette-picnic': {
    slugEs: 'grupos-y-despedidas', name: 'Grupos y despedidas', booking: 'Grupo o despedida',
    card: { text: 'Una mesa larga y baja para un viaje de amigas o una despedida, con cojín y plato para cada una.', meta: 'Grupos · Mesa larga', cta: 'Ver picnics de grupo', alt: 'Grupo de siete amigas bajo un arco de bambú con luces en la playa' },
    seo: { title: 'Picnics de despedida de soltera y grupos en Aruba | One Happy Picnic', description: 'Picnics privados en la playa en Aruba para despedidas de soltera, viajes de amigas y grupos familiares, con mesa larga, flores, comida y bebidas en la arena.' },
    h1: 'Picnics de grupo y despedidas en Aruba', faqTitle: 'Preguntas de picnics de grupo',
    intro: 'Una mesa larga y baja en la arena con cojín, plato y copa para cada persona. La montamos para viajes de amigas, despedidas de soltera y reuniones familiares.',
    facts: [['Duración', '2 horas'], ['Mesa', 'Una mesa larga'], ['Personas', 'Grupos'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Los picnics de grupo incluyen todo lo de abajo, para toda la mesa.',
    extras: ['Letrero con el nombre de la novia', 'Fotógrafo', 'Números gigantes', 'Tiempo extra'],
    hero: { alt: 'Mesa larga con platos turquesa y camino fucsia para un grupo en la playa' },
  },
  'charcuterie-boards': {
    slugEs: 'tablas-de-charcuteria', name: 'Tablas de charcutería', booking: 'Tabla de charcutería',
    card: { text: 'Zoe empezó el negocio con estas tablas. Cada una trae fruta, quesos, embutidos y chocolate, lista para tu hotel o barco.', meta: 'Recogida o entrega · Pídela un día antes', cta: 'Ver tablas de charcutería', alt: 'Tabla redonda de madera con fresas, chocolates, salami, queso y uvas' },
    seo: { title: 'Tablas de charcutería en Aruba, recogida o entrega | One Happy Picnic', description: 'Tablas de charcutería en Aruba con fruta, quesos, embutidos y chocolate, entregadas en tu hotel, villa o barco. Pídela por WhatsApp con un día de anticipación.' },
    h1: 'Tablas de charcutería en Aruba', faqTitle: 'Preguntas de las tablas',
    intro: 'Zoe empezó One Happy Picnic con estas tablas: fruta, quesos, embutidos y chocolate sobre una tabla redonda de madera. Pide una para tu hotel, villa o barco.',
    facts: [['Pedido', 'Un día antes'], ['Entrega', 'Hotel, villa o barco'], ['Recogida', 'Disponible'], ['Precio', 'Cotización por WhatsApp']],
    included: [
      { icon: 'fork-knife', title: 'Fruta y quesos', text: 'Fresas, uvas y una mezcla de quesos.' },
      { icon: 'basket', title: 'Embutidos', text: 'Salami y otros embutidos, cortados y listos.' },
      { icon: 'gift', title: 'Algo dulce', text: 'Chocolate y un dip cremoso al lado.' },
      { icon: 'map-pin', title: 'Recogida o entrega', text: 'La recoges o te la llevamos a tu hotel, villa o barco.' },
    ],
    includedLead: 'Cada tabla llega lista para comer. Dinos qué dejar por fuera.',
    extras: ['Tarjeta escrita a mano'],
    hero: { alt: 'Tabla redonda de madera con fresas, chocolates, salami, queso y uvas' },
  },
};

export const EXPERIENCES = EN_EXP.map((e) => {
  const o = ES_EXP[e.slug];
  return { ...e, ...o, card: { ...e.card, ...o.card }, hero: { ...e.hero, ...o.hero } };
});
