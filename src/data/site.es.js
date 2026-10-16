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
  'moon-start': { q: '¿A qué hora empieza un picnic bajo las estrellas?', a: ['Unos 30 minutos después de la puesta de sol, entre las 6:45 PM y las 7:40 PM según el mes.'] },
  'moon-lights': { q: '¿Tengo que llevar luces?', a: ['No. Llevamos luces para el tipi, faroles y velas para la mesa.'] },
  'proposal-secret': { q: '¿Cómo guardan el secreto de la propuesta?', a: ['Planeas todo con nosotros por WhatsApp y nunca contactamos a tu pareja. Ese día el equipo termina el montaje y se retira antes de que lleguen.'] },
  'proposal-photographer': { q: '¿Pueden conseguir un fotógrafo?', a: ['Sí. Un fotógrafo profesional cuesta entre USD 250 y 300 aparte del montaje. En Aruba los fotógrafos de propuestas se reservan con tiempo, así que agrégalo al reservar y coordinamos la hora para que capture el momento.'] },
  'wedding-size': { q: '¿Cuántos invitados pueden ir a una boda en la playa?', a: ['Hasta 30 invitados. Dinos el número al pedir la cotización y planeamos las sillas y la mesa para ellos.'] },
  'wedding-quote': { q: '¿Cuánto cuesta una boda o renovación de votos en la playa?', a: ['Cada una se cotiza. Envíanos la fecha, la playa y el número de invitados desde el formulario de reserva y te respondemos con una cotización por WhatsApp.'] },
  chef: { q: '¿Puedo agregar un chef privado?', a: ['Sí. Un chef privado puede cocinar para ustedes en el picnic en lugar de la tabla para picar. Márcalo como extra al reservar y te enviamos el menú y el precio por WhatsApp.'] },
  'proposal-letters': { q: '¿Las letras MARRY ME están incluidas?', a: ['La propuesta sencilla incluye el arco de flores y un letrero LED. Las letras MARRY ME iluminadas son un extra en las dos opciones. Pregunta el precio por WhatsApp al reservar.'] },
  'proposal-options': { q: '¿Qué diferencia hay entre las dos opciones de propuesta?', a: ['La propuesta sencilla dura una hora: un arco de flores y un letrero LED en la arena, listos para el momento de la pregunta. La propuesta con picnic dura dos horas y suma el picnic completo, con tabla de charcutería y bebidas para los dos después del sí.'] },
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
  { id: 'atardecer-noche', title: 'Hora dorada y bajo las estrellas', keys: ['sunset-start', 'sunset-beach', 'moon-start', 'moon-lights'] },
  { id: 'propuestas', title: 'Propuestas', keys: ['proposal-options', 'proposal-secret', 'proposal-photographer', 'proposal-letters'] },
  { id: 'celebraciones', title: 'Cumpleaños, aniversarios y grupos', keys: ['birthday-cake', 'birthday-photos', 'birthday-kids', 'group-size', 'group-bachelorette'] },
  { id: 'bodas', title: 'Bodas y renovación de votos', keys: ['wedding-size', 'wedding-quote'] },
  { id: 'comida', title: 'Comida y tablas de charcutería', keys: ['food', 'chef', 'delivery', 'board-ahead', 'board-allergies'] },
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
  wedding: steps('wedding', { head: { title: 'Cómo planeamos una boda en la arena' }, steps: [
    { label: 'Meses antes', title: 'Pide una cotización', text: 'Dinos la fecha, la playa y cuántos invitados, hasta 30. Te respondemos con una cotización por WhatsApp.', alt: 'Invitados en una mesa larga bajo luces en la playa de noche' },
    { label: 'Al reservar', title: 'Planeamos los detalles', text: 'Pagas el abono y luego eliges con nosotros por WhatsApp el arco, las flores, el menú y el fotógrafo.', alt: 'Tarjeta enmarcada junto a rosas en un camino turquesa' },
    { title: 'Llegan los invitados', text: 'El equipo tiene listos el arco, las sillas y la mesa antes de que lleguen tus invitados.', alt: 'Mesa larga y baja con platos turquesa y camino rosado en la playa' },
    { title: 'Los votos', text: 'Dicen sus votos mientras el sol se pone sobre el mar.', alt: 'Pareja en la arena al atardecer junto a un tipi de flores' },
    { label: 'De noche', title: 'Cena bajo las luces', text: 'Se sientan en una mesa larga bajo luces. Un chef privado puede cocinar para tus invitados.', alt: 'Mesa larga bajo una pérgola con luces y hojas' },
  ] }),
  charcuterie: steps('charcuterie', { head: { title: 'Cómo pedir una tabla' }, steps: [
    { label: 'Un día antes', title: 'Pide por WhatsApp', text: 'Dinos el tamaño, la fecha y qué dejar por fuera.', alt: 'Tabla de charcutería con fresas, salami y queso' },
    { label: 'El mismo día', title: 'Armamos tu tabla', text: 'Preparamos tu tabla con fruta fresca, quesos, embutidos y chocolate.', alt: 'Tabla redonda de charcutería con fruta y queso' },
    { label: 'A tu hora', title: 'Recogida o entrega', text: 'La recoges o te la llevamos a tu hotel, villa o barco.', alt: 'Mesa con canasta de frutas y botella en hielo' },
  ] }),
};

const ES_EXP = {
  'golden-hour-picnic': {
    slugEs: 'picnic-en-la-hora-dorada', name: 'Picnic en la hora dorada', booking: 'Picnic en la hora dorada',
    card: { text: 'Un tipi de flores y una tabla para picar sobre la arena. Lo cuadramos para que el sol se ponga mientras estás en la mesa.', meta: '2 horas · Hora dorada · 2 a 8 personas', cta: 'Ver el picnic en la hora dorada', alt: 'Pareja sentada en una manta azul junto a un tipi de flores al atardecer' },
    seo: { title: 'Picnic al atardecer en la hora dorada en Eagle Beach, Aruba | One Happy Picnic', description: 'Picnic privado en la hora dorada en Aruba, al ritmo del atardecer, con tipi de flores, tabla para picar y bebidas en la arena. Dos horas en la hora dorada, desde USD 99 por persona.' },
    h1: 'Picnic en la hora dorada en Aruba', faqTitle: 'Preguntas del picnic en la hora dorada',
    intro: 'Un tipi de flores, una mesa baja y una tabla para picar en Eagle Beach o Surfside. Cuadramos tus dos horas para que el sol se ponga mientras estás en la mesa.',
    facts: [['Duración', '2 horas'], ['Inicio', 'Cerca de 1 h 45 min antes del atardecer'], ['Personas', '2 a 8'], ['Precio', 'Desde USD 99 por persona']],
    includedLead: 'Tu picnic en la hora dorada incluye todo lo de abajo. Los extras se cobran aparte.',
    extras: ['Fotógrafo para el atardecer', 'Chef privado', 'Pastel con nombre', 'Letras MARRY ME iluminadas', 'Tiempo extra de noche'],
    hero: { alt: 'Tipi de bambú con flores rosadas sobre una mesa y cojines en la arena al atardecer' },
  },
  'picnic-under-the-stars': {
    slugEs: 'picnic-bajo-las-estrellas', name: 'Picnic bajo las estrellas', booking: 'Picnic bajo las estrellas',
    card: { text: 'El mismo montaje de noche, con luces y velas.', meta: '2 horas · Después del atardecer', cta: 'Ver el picnic bajo las estrellas', alt: 'Dos invitados sonriendo dentro de un tipi con luces y flores de noche' },
    seo: { title: 'Picnic bajo las estrellas en la playa en Aruba | One Happy Picnic', description: 'Picnic privado en la playa en Aruba después del atardecer, con luces, faroles y velas. Dos horas bajo las estrellas con comida y bebidas.' },
    h1: 'Picnic bajo las estrellas en Aruba', faqTitle: 'Preguntas del picnic bajo las estrellas',
    intro: 'El mismo montaje privado de noche, con luces, faroles y velas. Funciona para una cena tranquila de dos o una salida con amigos.',
    facts: [['Duración', '2 horas'], ['Inicio', 'Unos 30 min después del atardecer'], ['Personas', '2 a 8'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Tu picnic bajo las estrellas incluye todo lo de abajo, más las luces.',
    extras: ['Antorchas', 'Corazón de velas en la arena', 'Chef privado', 'Pastel con nombre', 'Tiempo extra'],
    hero: { alt: 'Dos invitados sonriendo dentro de un tipi con luces cálidas y flores de noche' },
  },
  'proposal-setup': {
    slugEs: 'propuesta-de-matrimonio', name: 'Propuesta de matrimonio', booking: 'Propuesta de matrimonio',
    bookingOptions: ['Propuesta sencilla (1 hora)', 'Propuesta con picnic (2 horas)'],
    options: {
      heading: 'Dos formas de preguntar',
      lead: 'Elige la que va con tu plan. Las dos pueden sumar un fotógrafo profesional por USD 250 a 300.',
      items: [
        { title: 'Propuesta sencilla', meta: '1 hora', text: 'Un arco de flores y un letrero LED en la arena, listos para el momento de la pregunta.', list: ['Arco de flores', 'Letrero LED', 'Montaje y recogida', 'Permiso de playa'], booking: 'Propuesta sencilla (1 hora)' },
        { title: 'Propuesta con picnic', meta: '2 horas', text: 'El picnic completo alrededor de la pregunta, para sentarse a celebrar después del sí.', list: ['Arco de flores o tipi y letrero LED', 'Tabla de charcutería', 'Bebidas frías', 'Montaje y recogida'], booking: 'Propuesta con picnic (2 horas)' },
      ],
      cta: 'Pedir esta opción',
    },
    card: { text: 'Una propuesta de una hora con arco de flores y letrero LED, o una propuesta con picnic de dos horas con charcutería y bebidas.', meta: '1 o 2 horas · Fotógrafo desde USD 250', cta: 'Ver propuestas', alt: 'Letras MARRY ME iluminadas detrás de un tipi de flores y una mesa en la playa' },
    seo: { title: 'Propuesta de matrimonio en Aruba con letras MARRY ME | One Happy Picnic', description: 'Planea una propuesta en la playa en Aruba con letras MARRY ME iluminadas, flores y un picnic privado al atardecer. Coordinamos la hora y podemos conseguir fotógrafo.' },
    h1: 'Propuesta de matrimonio en Aruba', faqTitle: 'Preguntas de propuestas',
    ctaLabel: 'Planear tu propuesta',
    intro: 'Un arco de flores y un letrero LED para el momento de la pregunta, con o sin picnic después. Planeamos la hora contigo por WhatsApp para que tu pareja no sepa nada hasta que te arrodilles.',
    facts: [['Duración', '1 o 2 horas'], ['Mejor hora', 'Hora dorada'], ['Fotógrafo', 'USD 250 a 300'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'La propuesta con picnic incluye el picnic completo de abajo. Las letras y el fotógrafo son extras en las dos opciones.',
    extras: ['Fotógrafo profesional (USD 250 a 300)', 'Letras MARRY ME iluminadas', 'Corazón de velas en la arena', 'Fotos impresas de los dos', 'Chef privado'],
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
    extras: ['Números gigantes', 'Pastel con nombre', 'Chef privado', 'Tus fotos impresas y colgadas', 'Tarjeta escrita a mano'],
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
    extras: ['Letrero con el nombre de la novia', 'Fotógrafo', 'Chef privado', 'Números gigantes', 'Tiempo extra'],
    hero: { alt: 'Mesa larga con platos turquesa y camino fucsia para un grupo en la playa' },
  },
  'weddings-vow-renewals': {
    slugEs: 'bodas-y-renovacion-de-votos', name: 'Bodas y renovación de votos', booking: 'Boda o renovación de votos',
    ctaLabel: 'Pedir cotización', includedTitle: 'Lo que podemos montar para tu día', extrasTitle: 'Agrega a tu boda',
    final: { title: 'Cuéntanos tu fecha y tu lista de invitados', text: 'Bodas y renovaciones de votos hasta 30 invitados, con cotización por WhatsApp.' },
    card: { text: 'Una boda pequeña o una renovación de votos en la arena hasta 30 invitados, con la ceremonia y la cena en el mismo lugar.', meta: 'Hasta 30 invitados · Cotización', cta: 'Ver bodas y renovación de votos', alt: 'Invitados en una mesa larga bajo una pérgola con luces en la playa de noche' },
    seo: { title: 'Bodas pequeñas y renovación de votos en la playa en Aruba | One Happy Picnic', description: 'Planea una boda pequeña o una renovación de votos en la playa en Aruba hasta 30 invitados: ceremonia en la arena al atardecer, mesa larga, flores y chef privado opcional.' },
    h1: 'Bodas pequeñas y renovación de votos en Aruba', faqTitle: 'Preguntas de bodas y renovación de votos',
    intro: 'Una ceremonia en la arena al atardecer y una mesa larga para hasta 30 invitados. Cada boda se cotiza, así que envíanos la fecha y la lista de invitados y la planeamos contigo por WhatsApp.',
    facts: [['Invitados', 'Hasta 30'], ['Mejor hora', 'Hora dorada'], ['Comida', 'Tabla o chef privado'], ['Precio', 'Cotización por WhatsApp']],
    includedLead: 'Planeamos cada boda contigo. Estas son las partes que más piden las parejas.',
    included: [
      { icon: 'heart', title: 'Ceremonia en la arena', text: 'Un arco de flores y sillas para tus invitados, frente al mar.' },
      { icon: 'users-three', title: 'Una mesa larga', text: 'Cena para hasta 30 invitados bajo luces.' },
      { icon: 'fork-knife', title: 'La comida que prefieras', text: 'Charcutería y dulces, o un chef privado cocinando ahí mismo.' },
      { icon: 'camera', title: 'Un fotógrafo', text: 'Un fotógrafo profesional por USD 250 a 300.' },
    ],
    extras: ['Fotógrafo profesional (USD 250 a 300)', 'Chef privado', 'Pastel', 'Letrero LED', 'Tiempo extra'],
    hero: { alt: 'Invitados sonriendo en una mesa larga bajo una pérgola con luces y hojas en la playa de noche, con dos chefs detrás' },
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
