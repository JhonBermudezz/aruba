// Site content in one place. Pages and components read from here, so the Spanish
// version only needs a translated copy of this file.

export const SITE = {
  name: 'One Happy Picnic Aruba',
  // Full public address without a trailing slash. GitHub Pages builds pass their own.
  url: (process.env.SITE_URL || 'https://onehappypicnicaruba.com').replace(/\/$/, ''),
  staging: Boolean(process.env.STAGING),
  instagram: 'https://www.instagram.com/onehappypicnic.aruba/',
  instagramDm: 'https://ig.me/m/onehappypicnic.aruba',
  handle: '@onehappypicnic.aruba',
  ogImage: '/assets/img/og-image.jpg',
};

export const NAV = [
  { href: '/picnics/', label: 'Picnics' },
  { href: '/about/', label: 'About' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export const img = (file) => `/assets/img/${file}`;

/* ---------- Reviews (real Facebook recommendations, lightly trimmed) ---------- */
export const REVIEWS = {
  susan: {
    name: 'Susan R.', context: 'Honeymoon surprise, sent from home',
    text: 'I was looking for a gift for my daughter who is on her honeymoon in Aruba and I found One Happy Picnic Aruba. They set up a sunset picnic with champagne and a beautiful charcuterie board and much more. They even did a photo shoot. It was perfect. My daughter and her husband rated it 10 out of 10.',
  },
  tatyana: {
    name: 'Tatyana C.', context: 'Beach picnic',
    text: 'Besides having a wonderful view, this was a beautiful setup and everything was delivered on time. Amazing service, very attentive. Also very affordable.',
  },
  krizia: {
    name: 'Krizia M.', context: 'Celebration picnic',
    text: 'Very good service, good food. They go the extra mile for the client and you get everything you want.',
  },
  taylor: {
    name: 'Taylor T.', context: '10 year anniversary',
    text: 'I had no idea what to do for my 10 year anniversary, and I saw how amazing her charcuterie boards were. My partner was so surprised, and she put so much love into every detail. So many options to choose from. She made our sunset anniversary picnic one to remember.',
    long: 'I had no idea what to do for my 10 year anniversary, and I saw how amazing her charcuterie boards were. She is new to the picnic side and she did pure perfection. My partner was so surprised, and she put so much love into every detail. So many options to choose from. She made our sunset anniversary picnic one to remember. She printed off photos of my partner and I, had me write a little note and copied it into a cute card, and gave us a glass juice bottle as a keepsake. The lights, the location of the beach. Just amazing, all of it.',
  },
};

/* ---------- Photos used as polaroids ---------- */
export const PHOTOS = {
  'g-golden-table': { w: 600, h: 800, full: true, alt: 'Close view of a sunset picnic table with gold chargers under a blue flower teepee', caption: 'Golden hour table' },
  'g-kiss': { w: 600, h: 750, full: true, alt: 'A couple kissing on patterned cushions beside a flower teepee at sunset', caption: 'Sunset toast' },
  'g-torches': { w: 600, h: 450, full: true, alt: 'A teepee picnic with tiki torches and a heart of candles on the sand at dusk', caption: 'Tiki torches at dusk' },
  'g-long-table': { w: 600, h: 750, full: true, alt: 'A long low table with turquoise plates and a hot pink runner set for a group on the beach', caption: 'Long table for the girls' },
  'g-teepee-sun': { w: 600, h: 600, full: true, alt: 'A teepee with pastel cushions on a woven rug facing the sea in the afternoon', caption: 'Afternoon setup' },
  'g-family': { w: 600, h: 600, full: true, alt: 'A family of three smiling at a breakfast picnic with juice, flowers and pastries', caption: 'Family breakfast' },
  'g-silhouettes': { w: 600, h: 600, full: true, alt: 'Two guests watching the sun drop into the sea from their picnic teepee', caption: 'Watching the sun go down' },
  'g-birthday-23': { w: 600, h: 600, full: true, alt: 'A guest admiring her birthday picnic with a giant number 23 and red cushions', caption: 'Her 23rd birthday' },
  'g-table-spread': { w: 600, h: 450, full: true, alt: 'A picnic table with blue plates, pink runner, fruit basket, flowers and a bottle on ice', caption: 'Table for two' },
  'pol-night-teepee': { w: 600, h: 600, alt: 'A teepee wrapped in warm string lights on the beach at night', caption: 'Teepee under the stars' },
  'pol-night-dinner': { w: 600, h: 799, alt: 'A group at a long dinner table under string lights on the beach at night', caption: 'Dinner under string lights' },
  'pol-proposal-kneel': { w: 600, h: 600, full: true, alt: 'A man on one knee proposing beside a flower teepee and red cushions', caption: 'On one knee' },
  'pol-proposal-ring': { w: 600, h: 268, full: true, alt: 'Close view of an engagement ring on a hand with turquoise nails', caption: 'She said yes' },
  'pol-proposal-hug': { w: 600, h: 468, alt: 'A newly engaged couple hugging beside their picnic teepee at sunset', caption: 'Right after the question' },
  'pol-proposal-night': { w: 600, h: 450, alt: 'Lit MARRY ME letters on the beach at night under a drawn heart', caption: 'MARRY ME after dark' },
  'pol-group-arms': { w: 600, h: 750, alt: 'Seven friends raising their arms under a bamboo arch on the beach', caption: 'Girls trip on the sand' },
  'pol-group-table': { w: 600, h: 750, alt: 'Three friends in sunglasses smiling at a picnic table with flowers and drinks', caption: 'Toast with friends' },
  'pol-board': { w: 394, h: 394, alt: 'A round charcuterie board with fruit, cheese, cured meats and a blue ribbon', caption: 'Board to go' },
  'touch-photos': { w: 480, h: 600, src: 'touch-photos-480.webp', alt: 'Printed couple photos hanging from a line between two bamboo poles above a red heart rug', caption: 'Your photos over the table' },
  'p-charcuterie': { w: 640, h: 800, src: 'p-charcuterie-640.webp', alt: 'A round wooden charcuterie board with strawberries, chocolates, salami and cheese', caption: 'Strawberries, salami and dip' },
};

/* ---------- Questions ---------- */
export const FAQS = {
  length: { q: 'How long does a picnic last?', a: ['Every picnic is two hours on the sand. You can add extra time when you book.'] },
  beaches: { q: 'Which beaches do you set up on?', a: ['Eagle Beach and Surfside Beach are our favorites, and we can set up at other beaches on request. Before your picnic we send you a map pin of your exact spot.'] },
  price: { q: 'How much does a picnic cost?', a: ['Golden hour picnics start at $99 per person and include the setup, food, drinks, beach permit and cleanup. Proposals, large groups and custom themes are quoted on WhatsApp.'] },
  food: { q: 'What food and drinks are included?', a: ['A shared spread with our charcuterie, fresh fruit, snacks and sweets, plus soft drinks, a water station and a welcome bottle of Prosecco or wine.', 'Vegetarian, gluten free or allergies? Tell us when you book and we adapt the menu.'] },
  deposit: { q: 'Do I need to pay a deposit?', a: ['Yes. A deposit through a secure payment link holds your date and time on our calendar. We confirm the amount and when the balance is due on WhatsApp.'] },
  cancellation: { q: 'What is your cancellation policy?', a: ['Cancel up to 24 hours before your picnic for a full refund. Cancellations within 24 hours and no shows are not refunded.'] },
  weather: { q: 'What happens if the weather turns?', a: ['Aruba sits outside the hurricane belt and most showers pass in a few minutes. If the weather makes your picnic impossible, we move it to another date or refund you.'] },
  advance: { q: 'How far in advance should I book?', a: ['A few days ahead works for most dates. For proposals, groups and holiday weeks, book two weeks ahead. For a last minute date, message us to check.'] },
  kids: { q: 'Are kids welcome?', a: ['Yes. We can adjust the menu for kids.'] },
  delivery: { q: 'Do you deliver charcuterie boards?', a: ['Yes. Boards can be picked up or delivered to your hotel, villa or boat. Order at least a day ahead.'] },
  'sunset-start': { q: 'What time does a sunset picnic start?', a: ['About 1 hour and 45 minutes before sunset. Sunset in Aruba moves between about 6:11 PM in November and 7:10 PM in July, and we confirm your exact start time when you book.'] },
  'sunset-beach': { q: 'Which beach is best for a sunset picnic?', a: ['Eagle Beach faces west, so the sun sets over the water in front of your table. Surfside is a calmer beach close to Oranjestad.'] },
  'moon-start': { q: 'What time does a picnic under the stars start?', a: ['About 30 minutes after sunset, so between about 6:45 PM and 7:40 PM depending on the month.'] },
  'moon-lights': { q: 'Do I need to bring lights?', a: ['No. We bring string lights for the teepee, plus lanterns and candles for the table.'] },
  'proposal-secret': { q: 'How do you keep the proposal a secret?', a: ['You plan everything with us on WhatsApp and we do not contact your partner. On the day, our team finishes the setup and steps away before you arrive.'] },
  'proposal-photographer': { q: 'Can you book a photographer?', a: ['Yes. A professional photographer costs $250 to $300 on top of your setup. Proposals in Aruba book photographers early, so add one when you book and we coordinate the time so they catch the moment.'] },
  'wedding-size': { q: 'How many guests can come to a beach wedding?', a: ['Up to 30 guests. Tell us your number when you request a quote and we plan the seating and the table for it.'] },
  'wedding-quote': { q: 'How much does a beach wedding or vow renewal cost?', a: ['Each one is quoted. Send us the date, the beach and the number of guests through the booking form and we reply with a quote on WhatsApp.'] },
  chef: { q: 'Can I add a private chef?', a: ['Yes. A private chef can cook for you at the picnic instead of the grazing board. Select it as an extra when you book and we send the menu and price on WhatsApp.'] },
  'proposal-letters': { q: 'Are the MARRY ME letters included?', a: ['The simple proposal includes the flower arch and an LED sign. The lit MARRY ME letters are an extra on either option. Ask for the price on WhatsApp when you book.'] },
  'proposal-options': { q: 'What is the difference between the two proposal options?', a: ['The simple proposal lasts one hour: a flower arch and an LED sign on the sand, set for the moment you ask. The proposal picnic lasts two hours and adds the full picnic, with a charcuterie board and drinks for the two of you after the yes.'] },
  'birthday-cake': { q: 'Can you bring a cake?', a: ['Yes, as an extra. Tell us the flavor and the name to write on it.'] },
  'birthday-photos': { q: 'Can you add our own photos?', a: ['Yes. Send us your photos on WhatsApp and we print them and hang them over the table.'] },
  'birthday-kids': { q: 'Do you set up kids birthdays?', a: ['Yes. Tell us the age and we adapt the menu and the decor.'] },
  'group-size': { q: 'How many guests can you seat?', a: ['Tell us your group size on WhatsApp and we confirm the table and the price for it.'] },
  'group-bachelorette': { q: 'Can you decorate for a bachelorette?', a: ['Yes. Tell us the colors and the words for the letter board, and we style the table around the bride.'] },
  'board-ahead': { q: 'How far ahead should I order a board?', a: ['Order at least a day ahead on WhatsApp.'] },
  'board-allergies': { q: 'Can you make a board for allergies?', a: ['Yes. Tell us what to leave out when you order.'] },
};

export const FAQ_GROUPS = [
  { id: 'booking', title: 'Booking and payment', keys: ['price', 'deposit', 'advance', 'cancellation'] },
  { id: 'on-the-day', title: 'On the day', keys: ['length', 'beaches', 'weather', 'kids'] },
  { id: 'golden-hour-stars', title: 'Golden hour and under the stars', keys: ['sunset-start', 'sunset-beach', 'moon-start', 'moon-lights'] },
  { id: 'proposals', title: 'Proposals', keys: ['proposal-options', 'proposal-secret', 'proposal-photographer', 'proposal-letters'] },
  { id: 'celebrations', title: 'Birthdays, anniversaries and groups', keys: ['birthday-cake', 'birthday-photos', 'birthday-kids', 'group-size', 'group-bachelorette'] },
  { id: 'weddings', title: 'Weddings and vow renewals', keys: ['wedding-size', 'wedding-quote'] },
  { id: 'food', title: 'Food and charcuterie boards', keys: ['food', 'chef', 'delivery', 'board-ahead', 'board-allergies'] },
];

/* ---------- Timelines ("How it works") ---------- */
// kind: today | sameday | start | sunset | end | nstart | nend computes a live time; static shows the label
export const TIMELINES = {
  picnic: {
    title: 'From first message to golden hour', pill: 'pill-sunset.webp', live: true,
    steps: [
      { kind: 'today', label: 'Today', title: 'Pick your date', text: 'Choose an experience and a time slot on our calendar. We move the golden hour slots with the sunset through the year.', img: 'g-golden-table-900.webp', thumb: 'g-golden-table-600.webp', alt: 'A sunset picnic table with gold chargers under a flower teepee' },
      { kind: 'sameday', label: 'Same day', title: 'Pay the deposit', text: 'Pay the deposit with the link we send. Then we plan colors and food with you on WhatsApp.', img: 'touch-note-720.webp', thumb: 'touch-note-480.webp', alt: 'A framed you and me always card beside roses on a turquoise runner' },
      { kind: 'start', label: '4:30 PM', title: 'Walk to your table', text: 'Our team builds the teepee and sets the table before you get there. Follow the map pin to your spot.', img: 'included-1000.webp', thumb: 'included-640.webp', alt: 'A picnic table styled with pink napkins and flowers under a glowing lantern' },
      { kind: 'sunset', label: '6:22 PM', title: 'Sunset', text: 'The sun goes down over the sea in front of your table.', img: 'g-kiss-900.webp', thumb: 'g-kiss-600.webp', alt: 'A couple kissing on patterned cushions at sunset' },
      { kind: 'end', label: '6:30 PM', title: 'We pack up', text: 'After two hours, our team packs everything away. You keep the photos and the card.', img: 'g-torches-900.webp', thumb: 'g-torches-600.webp', alt: 'A teepee picnic with tiki torches and candles at dusk' },
    ],
  },
  moonlight: {
    title: 'From sunset to the stars', pill: 'pill-teepee.webp', live: true,
    steps: [
      { kind: 'today', label: 'Today', title: 'Pick your date', text: 'Choose a night slot on our calendar and tell us who is coming.', img: 'g-golden-table-900.webp', thumb: 'g-golden-table-600.webp', alt: 'A picnic table with gold chargers under a flower teepee' },
      { kind: 'sameday', label: 'Same day', title: 'Pay the deposit', text: 'Pay the deposit with the link we send. Then we plan the menu with you on WhatsApp.', img: 'touch-note-720.webp', thumb: 'touch-note-480.webp', alt: 'A framed card beside roses on a turquoise runner' },
      { kind: 'sunset', label: '6:22 PM', title: 'We light the setup', text: 'Our team switches on the string lights and candles as the sun goes down.', img: 'g-torches-900.webp', thumb: 'g-torches-600.webp', alt: 'A teepee picnic with tiki torches and candles at dusk' },
      { kind: 'nstart', label: '6:45 PM', title: 'Walk to your table', text: 'Follow the map pin to your spot. The teepee is lit and the drinks are on ice.', img: 'p-moonlight-1000.webp', thumb: 'p-moonlight-640.webp', alt: 'Two guests smiling inside a teepee lit with warm string lights at night' },
      { kind: 'nend', label: '8:45 PM', title: 'We pack up', text: 'After two hours, our team packs everything away and you walk back under the stars.', img: 'pol-night-teepee-600.webp', thumb: 'pol-night-teepee-600.webp', alt: 'A teepee wrapped in string lights on the beach at night' },
    ],
  },
  proposal: {
    title: 'How we plan the question', pill: 'pill-kiss.webp', live: true,
    steps: [
      { kind: 'static', label: 'Two weeks before', title: 'Plan it with us', text: 'Tell us the date and how you want to ask. We plan the letters, flowers and photographer with you on WhatsApp.', img: 'pol-proposal-hug-600.webp', thumb: 'pol-proposal-hug-600.webp', alt: 'A couple hugging beside their picnic teepee at sunset' },
      { kind: 'static', label: 'When you book', title: 'Pay the deposit', text: 'Pay the deposit with the link we send. Every message stays between you and us.', img: 'touch-note-720.webp', thumb: 'touch-note-480.webp', alt: 'A framed card beside roses on a turquoise runner' },
      { kind: 'start', label: '4:30 PM', title: 'Bring them to the table', text: 'Our team finishes the setup and steps away before you arrive. Follow the map pin.', img: 'exp-proposal-960.webp', thumb: 'exp-proposal-640.webp', alt: 'Lit MARRY ME letters behind a flower teepee on the beach' },
      { kind: 'sunset', label: '6:22 PM', title: 'Ask the question', text: 'The letters are lit and the sun is going down behind you.', img: 'pol-proposal-kneel-900.webp', thumb: 'pol-proposal-kneel-600.webp', alt: 'A man on one knee proposing beside a flower teepee' },
      { kind: 'end', label: '6:30 PM', title: 'We pack up', text: 'After two hours, our team packs everything away. If you booked a photographer, the photos come to you after.', img: 'pol-proposal-ring-900.webp', thumb: 'pol-proposal-ring-600.webp', alt: 'Close view of an engagement ring' },
    ],
  },
  wedding: {
    title: 'How we plan a wedding on the sand', pill: 'pill-golden.webp', live: true,
    steps: [
      { kind: 'static', label: 'Months ahead', title: 'Request a quote', text: 'Tell us the date, the beach and the number of guests, up to 30. We reply with a quote on WhatsApp.', img: 'p-wedding-1000.webp', thumb: 'p-wedding-640.webp', alt: 'Guests at a long dinner table under string lights on the beach at night' },
      { kind: 'static', label: 'After you book', title: 'Plan the details', text: 'Pay the deposit, then choose the arch, the flowers, the menu and the photographer with us on WhatsApp.', img: 'touch-note-720.webp', thumb: 'touch-note-480.webp', alt: 'A framed card beside roses on a turquoise runner' },
      { kind: 'start', label: '4:30 PM', title: 'Guests arrive', text: 'Our team has the arch, the seating and the table ready before your guests walk over.', img: 'g-long-table-900.webp', thumb: 'g-long-table-600.webp', alt: 'A long low table with turquoise plates and a pink runner on the beach' },
      { kind: 'sunset', label: '6:22 PM', title: 'The vows', text: 'Say your vows as the sun goes down over the sea.', img: 'pol-proposal-kneel-900.webp', thumb: 'pol-proposal-kneel-600.webp', alt: 'A couple on the sand at sunset beside a flower teepee' },
      { kind: 'static', label: 'After dark', title: 'Dinner under the lights', text: 'Sit down at a long table under string lights. A private chef can cook for your guests.', img: 'p-wedding-1000.webp', thumb: 'p-wedding-640.webp', alt: 'A long dinner table under a pergola with string lights and greenery' },
    ],
  },
  charcuterie: {
    title: 'How to order a board', pill: 'pill-golden.webp', live: false,
    steps: [
      { kind: 'static', label: 'A day before', title: 'Order on WhatsApp', text: 'Tell us the size, the date and anything to leave out.', img: 'p-charcuterie-1000.webp', thumb: 'p-charcuterie-640.webp', alt: 'A charcuterie board with strawberries, salami and cheese' },
      { kind: 'static', label: 'Same day', title: 'We build your board', text: 'We put your board together with fresh fruit, cheese, cured meats and chocolate.', img: 'pol-board-600.webp', thumb: 'pol-board-600.webp', alt: 'A round charcuterie board with fruit and cheese' },
      { kind: 'static', label: 'Your time', title: 'Pick up or delivery', text: 'Pick it up or we bring it to your hotel, villa or boat.', img: 'g-table-spread-900.webp', thumb: 'g-table-spread-600.webp', alt: 'A picnic table with a fruit basket and a bottle on ice' },
    ],
  },
};

/* ---------- Standard "what's included" items ---------- */
export const INCLUDED = [
  { icon: 'tent', title: 'The setup', text: 'Bamboo teepee, low wooden table, cushions, blankets, table runner and fresh flowers.' },
  { icon: 'fork-knife', title: 'Food to share', text: 'Charcuterie, fruit and sweets. Tell us about allergies when you book.' },
  { icon: 'champagne', title: 'Drinks on ice', text: 'Soft drinks, a water station and a welcome bottle of Prosecco or wine.' },
  { icon: 'music-notes', title: 'Music', text: 'A Bluetooth speaker for your playlist.' },
  { icon: 'note-pencil', title: 'A message on the table', text: 'A letter board with your names or your message.' },
  { icon: 'map-pin', title: 'Permit and a map pin', text: 'We get the beach permit and send you a map pin of your spot.' },
];

/* ---------- Picnic categories ---------- */
export const EXPERIENCES = [
  {
    slug: 'golden-hour-picnic', name: 'Golden hour picnic', booking: 'Golden hour picnic',
    card: { img: 'exp-sunset', alt: 'A couple sitting on a blue blanket next to a flower teepee as the sun sets over the sea', text: 'A flower teepee and a grazing board on the sand. We time it so the sun sets while you are at the table.', meta: '2 hours · Golden hour · 2 to 8 guests', cta: 'See the golden hour picnic' },
    seo: { title: 'Golden hour sunset picnic in Aruba on Eagle Beach | One Happy Picnic', description: 'A private golden hour picnic in Aruba, timed to the sunset, with a flower teepee, a grazing board and drinks on the sand. Two hours at golden hour, from $99 per person.' },
    h1: 'Golden hour picnic in Aruba', faqTitle: 'Golden hour picnic questions',
    intro: 'A flower teepee, a low table and a grazing board on the sand at Eagle Beach or Surfside. We time your two hours so the sun sets while you are at the table.',
    hero: { img: 'p-sunset', w: 1000, h: 1250, alt: 'A bamboo teepee with pink flowers over a picnic table and cushions on the sand at sunset' },
    facts: [['Length', '2 hours'], ['Start', 'About 1 h 45 min before sunset'], ['Guests', '2 to 8'], ['Price', 'From $99 per person']],
    includedLead: 'Your golden hour picnic includes everything below. Extras cost more.',
    extras: ['Photographer for the sunset', 'Private chef', 'Cake with a name on it', 'Lit MARRY ME letters', 'Extra time after dark'],
    timeline: 'picnic', photos: ['g-golden-table', 'g-silhouettes', 'g-teepee-sun'],
    reviews: ['susan', 'taylor'], faqs: ['sunset-start', 'sunset-beach', 'price', 'weather'],
  },
  {
    slug: 'picnic-under-the-stars', name: 'Picnic under the stars', booking: 'Picnic under the stars',
    card: { img: 'exp-moonlight', alt: 'Two guests smiling inside a teepee lit with warm string lights and flowers on the beach at night', text: 'The same setup after dark, lit with string lights and candles.', meta: '2 hours · After sunset', cta: 'See the picnic under the stars' },
    seo: { title: 'Picnic under the stars on the beach in Aruba | One Happy Picnic', description: 'A private picnic on the beach in Aruba after sunset, lit with string lights, lanterns and candles. Two hours under the stars with food and drinks.' },
    h1: 'Picnic under the stars in Aruba', faqTitle: 'Questions about the picnic under the stars',
    intro: 'The same private setup after dark, lit with string lights, lanterns and candles. A good fit for a quiet dinner for two or a night out with friends.',
    hero: { img: 'p-moonlight', w: 1000, h: 1250, alt: 'Two guests smiling inside a teepee lit with warm string lights and flowers at night' },
    facts: [['Length', '2 hours'], ['Start', 'About 30 min after sunset'], ['Guests', '2 to 8'], ['Price', 'Quote on WhatsApp']],
    includedLead: 'Your picnic under the stars includes everything below, plus the lights.',
    extras: ['Tiki torches', 'Candle heart on the sand', 'Private chef', 'Cake with a name on it', 'Extra time'],
    timeline: 'moonlight', photos: ['pol-night-teepee', 'g-torches', 'pol-night-dinner'],
    reviews: ['tatyana', 'krizia'], faqs: ['moon-start', 'moon-lights', 'chef', 'weather'],
  },
  {
    slug: 'proposal-setup', name: 'Proposal setup', booking: 'Proposal setup',
    bookingOptions: ['Simple proposal (1 hour)', 'Proposal picnic (2 hours)'],
    options: {
      heading: 'Two ways to ask',
      lead: 'Pick the one that fits your plan. Both can add a professional photographer for $250 to $300.',
      items: [
        { title: 'Simple proposal', meta: '1 hour', text: 'A flower arch and an LED sign on the sand, set up for the moment you ask.', list: ['Flower arch', 'LED sign', 'Setup and cleanup', 'Beach permit'], booking: 'Simple proposal (1 hour)' },
        { title: 'Proposal picnic', meta: '2 hours', text: 'The full picnic around the question, so you can sit down and celebrate after the yes.', list: ['Flower arch or teepee and LED sign', 'Charcuterie board', 'Drinks on ice', 'Setup and cleanup'], booking: 'Proposal picnic (2 hours)' },
      ],
      cta: 'Request this option',
    },
    card: { img: 'exp-proposal', alt: 'Lit marquee letters spelling Marry Me behind a flower teepee and picnic table on the beach', text: 'A one hour proposal with a flower arch and an LED sign, or a two hour proposal picnic with charcuterie and drinks.', meta: '1 or 2 hours · Photographer from $250', cta: 'See proposal setups' },
    seo: { title: 'Proposal setup in Aruba with MARRY ME letters | One Happy Picnic', description: 'Plan a beach proposal in Aruba with lit MARRY ME letters, flowers and a private picnic at sunset. We plan the timing with you and can book a photographer.' },
    h1: 'Proposal setup in Aruba', faqTitle: 'Proposal questions',
    ctaLabel: 'Plan your proposal',
    intro: 'A flower arch and an LED sign for the moment you ask, with or without a picnic after. We plan the timing with you on WhatsApp so your partner has no idea until you kneel.',
    hero: { img: 'exp-proposal', w: 960, h: 720, alt: 'Lit MARRY ME letters behind a flower teepee and picnic table on the beach', aspect: '4 / 3', sizes: [640, 960] },
    facts: [['Length', '1 or 2 hours'], ['Best time', 'Golden hour'], ['Photographer', '$250 to $300'], ['Price', 'Quote on WhatsApp']],
    includedLead: 'The proposal picnic includes the full picnic below. The letters and the photographer are extras on both options.',
    extras: ['Professional photographer ($250 to $300)', 'Lit MARRY ME letters', 'Candle heart on the sand', 'Printed photos of the two of you', 'Private chef'],
    timeline: 'proposal', photos: ['pol-proposal-kneel', 'pol-proposal-ring', 'pol-proposal-night'],
    reviews: ['susan', 'taylor'], faqs: ['proposal-options', 'proposal-secret', 'proposal-photographer', 'proposal-letters'],
  },
  {
    slug: 'birthday-anniversary-picnic', name: 'Birthdays and anniversaries', booking: 'Birthday or anniversary',
    card: { img: 'exp-celebration', alt: 'A couple relaxing on the sand at a picnic with giant number 23 birthday decorations', text: 'Giant numbers and a cake on the table, in the colors you choose.', meta: 'Cake on request · Your colors', cta: 'See birthday picnics' },
    seo: { title: 'Birthday and anniversary picnics in Aruba | One Happy Picnic', description: 'Celebrate a birthday or anniversary in Aruba with a private beach picnic: giant numbers, a cake, your printed photos and the colors you choose.' },
    h1: 'Birthday and anniversary picnics in Aruba', faqTitle: 'Celebration questions',
    intro: 'Giant numbers, a cake and the colors you choose, set up on the beach for the person you are celebrating. We can print your photos and copy your note onto a card.',
    hero: { img: 'p-celebration', w: 1000, h: 1250, alt: 'A guest admiring her birthday picnic with a giant number 23 and red cushions' },
    facts: [['Length', '2 hours'], ['Extras', 'Cake, numbers, photos'], ['Guests', '2 to 8'], ['Price', 'Quote on WhatsApp']],
    includedLead: 'Every celebration includes the full picnic below. Cake and giant numbers are extras.',
    extras: ['Giant numbers', 'Cake with a name on it', 'Private chef', 'Your photos printed and hung', 'Handwritten note card'],
    timeline: 'picnic', photos: ['g-birthday-23', 'touch-photos', 'g-kiss'],
    reviews: ['taylor', 'krizia'], faqs: ['birthday-cake', 'birthday-photos', 'birthday-kids', 'advance'],
  },
  {
    slug: 'group-bachelorette-picnic', name: 'Friends and bachelorettes', booking: 'Friends or bachelorette',
    card: { img: 'exp-friends', alt: 'A group of seven friends posing under a bamboo arch with string lights on the beach', text: "A long low table for a girls' trip or a bachelorette, with a cushion and a plate for each guest.", meta: 'Groups welcome · Long table', cta: 'See group picnics' },
    seo: { title: 'Bachelorette and group picnics in Aruba | One Happy Picnic', description: "Private beach picnics in Aruba for bachelorettes, girls' trips and family groups, with a long low table, flowers, food and drinks on the sand." },
    h1: 'Group and bachelorette picnics in Aruba', faqTitle: 'Group picnic questions',
    intro: "A long low table on the sand with a cushion, a plate and a glass for each guest. We set it up for girls' trips, bachelorettes and family reunions.",
    hero: { img: 'g-long-table', w: 900, h: 1124, alt: 'A long low table with turquoise plates and a hot pink runner set for a group on the beach', sizes: [600, 900] },
    facts: [['Length', '2 hours'], ['Table', 'One long table'], ['Guests', 'Groups welcome'], ['Price', 'Quote on WhatsApp']],
    includedLead: 'Group picnics include everything below, set for the whole table.',
    extras: ['Letter board with the bride name', 'Photographer', 'Private chef', 'Giant numbers', 'Extra time'],
    timeline: 'picnic', photos: ['pol-group-arms', 'g-long-table', 'pol-group-table'],
    reviews: ['krizia', 'tatyana'], faqs: ['group-size', 'group-bachelorette', 'price', 'advance'],
  },
  {
    slug: 'weddings-vow-renewals', name: 'Weddings and vow renewals', booking: 'Wedding or vow renewal',
    ctaLabel: 'Request a quote', includedTitle: 'What we can set up for your day', extrasTitle: 'Add to your wedding',
    final: { title: 'Tell us your date and your guest list', text: 'Weddings and vow renewals for up to 30 guests, quoted on WhatsApp.' },
    card: { img: 'exp-wedding', alt: 'Guests at a long dinner table under a pergola with string lights on the beach at night', text: 'A small wedding or a vow renewal on the sand for up to 30 guests, with the ceremony and dinner in one place.', meta: 'Up to 30 guests · Quote', cta: 'See weddings and vow renewals' },
    seo: { title: 'Small beach weddings and vow renewals in Aruba | One Happy Picnic', description: 'Plan a small beach wedding or vow renewal in Aruba for up to 30 guests: a ceremony on the sand at sunset, a long dinner table, flowers and an optional private chef.' },
    h1: 'Small weddings and vow renewals in Aruba', faqTitle: 'Wedding and vow renewal questions',
    intro: 'A ceremony on the sand at sunset and a long dinner table for up to 30 guests. Each wedding is quoted, so send us the date and the guest list and we plan it with you on WhatsApp.',
    hero: { img: 'p-wedding', w: 1000, h: 1250, alt: 'Guests smiling at a long dinner table under a pergola with string lights and greenery on the beach at night, with two chefs behind them' },
    facts: [['Guests', 'Up to 30'], ['Best time', 'Golden hour'], ['Food', 'Board or private chef'], ['Price', 'Quote on WhatsApp']],
    includedLead: 'We plan each wedding with you. These are the parts most couples ask for.',
    included: [
      { icon: 'heart', title: 'A ceremony on the sand', text: 'A flower arch and seating for your guests, facing the sea.' },
      { icon: 'users-three', title: 'One long table', text: 'Dinner for up to 30 guests under string lights.' },
      { icon: 'fork-knife', title: 'Food your way', text: 'Charcuterie and sweets, or a private chef cooking on site.' },
      { icon: 'camera', title: 'A photographer', text: 'A professional photographer for $250 to $300.' },
    ],
    extras: ['Professional photographer ($250 to $300)', 'Private chef', 'Cake', 'LED sign', 'Extra time'],
    timeline: 'wedding', photos: ['pol-night-dinner', 'g-long-table', 'pol-proposal-hug'],
    reviews: ['susan', 'krizia'], faqs: ['wedding-size', 'wedding-quote', 'chef', 'weather'],
  },
  {
    slug: 'charcuterie-boards', name: 'Charcuterie boards to go', booking: 'Charcuterie board to go',
    card: { img: 'exp-charcuterie', alt: 'A round wooden charcuterie board with strawberries, chocolates, salami, cheese, grapes and a creamy dip', text: 'Zoe started the business with these boards. Each one comes with fruit, cheese, cured meats and chocolate, ready for your hotel room or boat.', meta: 'Pickup or delivery · Order a day ahead', cta: 'See charcuterie boards' },
    seo: { title: 'Charcuterie boards in Aruba, pickup or delivery | One Happy Picnic', description: 'Charcuterie boards in Aruba with fruit, cheese, cured meats and chocolate, delivered to your hotel, villa or boat. Order a day ahead on WhatsApp.' },
    h1: 'Charcuterie boards in Aruba',
    intro: 'Zoe started One Happy Picnic with these boards: fruit, cheese, cured meats and chocolate on a round wooden board. Order one for your hotel room, villa or boat.',
    hero: { img: 'exp-charcuterie', w: 960, h: 720, alt: 'A round wooden charcuterie board with strawberries, chocolates, salami, cheese and grapes', aspect: '4 / 3', sizes: [640, 960] },
    faqTitle: 'Board questions',
    facts: [['Order', 'A day ahead'], ['Delivery', 'Hotel, villa or boat'], ['Pickup', 'Available'], ['Price', 'Quote on WhatsApp']],
    included: [
      { icon: 'fork-knife', title: 'Fruit and cheese', text: 'Strawberries, grapes and a mix of cheeses.' },
      { icon: 'basket', title: 'Cured meats', text: 'Salami and other cured meats, sliced and ready.' },
      { icon: 'gift', title: 'Something sweet', text: 'Chocolate and a creamy dip on the side.' },
      { icon: 'map-pin', title: 'Pickup or delivery', text: 'Pick it up or we bring it to your hotel, villa or boat.' },
    ],
    includedLead: 'Each board comes ready to eat. Tell us what to leave out.',
    extras: ['Handwritten note card'],
    timeline: 'charcuterie', photos: ['p-charcuterie', 'pol-board', 'g-table-spread'],
    reviews: ['taylor', 'susan'], faqs: ['board-ahead', 'delivery', 'board-allergies'],
  },
];

export const experienceBySlug = (slug) => EXPERIENCES.find((e) => e.slug === slug);
