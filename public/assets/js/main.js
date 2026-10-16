/* One Happy Picnic Aruba */
(() => {
  'use strict';

  // Contact settings. Fill these in to switch the booking flow to WhatsApp and show the email.
  const CONFIG = {
    whatsapp: '',            // digits only with country code, for example '2975551234'
    phone: '',               // digits only with country code, for the call button
    email: '',               // for example 'hello@onehappypicnicaruba.com'
    instagram: 'onehappypicnic.aruba',
  };

  const ARUBA = { lat: 12.52, lon: -70.03, utcOffset: -4 }; // Aruba keeps UTC-4 all year, no daylight saving
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__ohpReady = true;
  const ES = document.documentElement.lang === 'es';
  const tr = (en, es) => (ES ? es : en);

  /* ---------- Sunset time (NOAA almanac method, accurate to about two minutes) ---------- */
  function sunsetHour(y, m, d) {
    const R = Math.PI / 180;
    const N = Math.floor((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 0)) / 864e5);
    const lngHour = ARUBA.lon / 15;
    const t = N + (18 - lngHour) / 24;
    const M = 0.9856 * t - 3.289;
    const L = (M + 1.916 * Math.sin(M * R) + 0.02 * Math.sin(2 * M * R) + 282.634 + 360) % 360;
    let RA = (Math.atan(0.91764 * Math.tan(L * R)) / R + 360) % 360;
    RA = (RA + Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90) / 15;
    const sinDec = 0.39782 * Math.sin(L * R);
    const cosDec = Math.cos(Math.asin(sinDec));
    const cosH = (Math.cos(90.833 * R) - sinDec * Math.sin(ARUBA.lat * R)) / (cosDec * Math.cos(ARUBA.lat * R));
    const H = Math.acos(cosH) / R / 15;
    const T = H + RA - 0.06571 * t - 6.622;
    return (((T - lngHour + ARUBA.utcOffset) % 24) + 24) % 24;
  }
  function fmtHour(h) {
    let mins = Math.round(h * 60);
    const hh = Math.floor(mins / 60) % 24; mins %= 60;
    const suffix = hh >= 12 ? 'PM' : 'AM';
    return `${((hh + 11) % 12) + 1}:${String(mins).padStart(2, '0')} ${suffix}`;
  }
  const roundQuarter = (h) => Math.round(h * 4) / 4;
  function arubaNow() {
    const now = new Date(Date.now() + ARUBA.utcOffset * 3600e3);
    return { y: now.getUTCFullYear(), m: now.getUTCMonth() + 1, d: now.getUTCDate(), h: now.getUTCHours() + now.getUTCMinutes() / 60 };
  }
  function addDays({ y, m, d }, n) {
    const t = new Date(Date.UTC(y, m - 1, d + n));
    return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() };
  }
  const isoDate = ({ y, m, d }) => `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const fmtDate = ({ y, m, d }, opts) => new Intl.DateTimeFormat(ES ? 'es-ES' : 'en-US', { timeZone: 'UTC', ...opts }).format(new Date(Date.UTC(y, m - 1, d)));

  // After sunset in Aruba, every live time on the page switches to tomorrow's sunset.
  const sunsetDay = (() => {
    const now = arubaNow();
    const late = now.h > sunsetHour(now.y, now.m, now.d) + 0.5;
    return { ...(late ? addDays(now, 1) : now), tomorrow: late, year: now.y };
  })();

  (function paintSunset() {
    const day = sunsetDay;
    const todayLabel = day.tomorrow ? tr('Sunset tomorrow', 'Atardecer mañana') : tr('Sunset today', 'Atardecer hoy');
    const finalLabel = day.tomorrow ? tr('Tomorrow’s sunset in Aruba', 'Atardecer de mañana en Aruba') : tr('Tonight’s sunset in Aruba', 'Atardecer de hoy en Aruba');
    const time = fmtHour(sunsetHour(day.y, day.m, day.d));
    $$('[data-sunset-today]').forEach((el) => { el.textContent = time; });
    $$('[data-sunset-label]').forEach((el) => { el.textContent = todayLabel; });
    $$('[data-final-sunset]').forEach((el) => { el.textContent = `${finalLabel}: ${time}`; });
    $$('[data-year]').forEach((el) => { el.textContent = String(day.year); });
  })();

  /* ---------- Contact links ---------- */
  const igDm = `https://ig.me/m/${CONFIG.instagram}`;
  const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
  if (CONFIG.whatsapp) {
    $$('[data-wa]').forEach((a) => { a.href = waLink(tr('Hi One Happy Picnic, I have a question about a picnic.', 'Hola One Happy Picnic, tengo una pregunta sobre un picnic.')); a.target = '_blank'; a.rel = 'noopener'; a.hidden = false; });
    $$('[data-wa-item]').forEach((li) => { li.hidden = false; });
  }
  if (CONFIG.phone) {
    $$('[data-call]').forEach((a) => { a.href = `tel:+${CONFIG.phone}`; a.hidden = false; });
    $$('[data-phone-item]').forEach((li) => { li.hidden = false; });
  }
  const dock = $('[data-dock]');
  if (dock && (CONFIG.whatsapp || CONFIG.phone)) { dock.hidden = false; document.body.classList.add('has-dock'); }
  if (CONFIG.email) {
    $$('[data-email]').forEach((a) => { a.href = `mailto:${CONFIG.email}`; a.hidden = false; });
    $$('[data-email-text]').forEach((el) => { el.textContent = CONFIG.email; });
    $$('[data-email-item]').forEach((li) => { li.hidden = false; });
  }
  if (CONFIG.phone) $$('[data-phone-text]').forEach((el) => { el.textContent = `+${CONFIG.phone}`; });

  // Where a composed message goes: WhatsApp when configured, otherwise Instagram chat.
  function wireSendLink(link, message) {
    const icon = $('[data-send-icon]', link);
    const label = $('[data-send-label]', link);
    if (CONFIG.whatsapp) {
      link.href = waLink(message);
      if (icon) icon.setAttribute('href', '#i-whatsapp-logo');
      if (label) label.textContent = tr('Open WhatsApp', 'Abrir WhatsApp');
      window.open(link.href, '_blank', 'noopener');
    } else {
      link.href = igDm;
      if (icon) icon.setAttribute('href', '#i-instagram-logo');
      if (label) label.textContent = tr('Send on Instagram', 'Enviar por Instagram');
    }
  }
  function copyText(text, labelEl, reset) {
    const done = (msg) => { labelEl.textContent = msg; setTimeout(() => { labelEl.textContent = reset; }, 2400); };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
      ta.remove(); done(ok ? tr('Copied', 'Copiado') : tr('Copy failed. Select the text instead.', 'No se pudo copiar. Selecciona el texto.'));
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => done(tr('Copied', 'Copiado')), fallback);
    else fallback();
  }

  /* ---------- Mobile menu with morphing burger ---------- */
  const burger = $('.burger');
  const menu = $('#menu');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? tr('Close menu', 'Cerrar menú') : tr('Open menu', 'Abrir menú'));
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => $('a', menu)?.focus({ preventScroll: true }), 300);
  }
  burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); burger.focus(); } });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Tagline: words light up one at a time ---------- */
  const tagline = $('[data-reveal-words]');
  if (tagline) {
    const words = [];
    const wrap = (node, accent) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const span = document.createElement('span');
            span.className = `w${accent ? ' w--accent' : ''}`;
            span.textContent = part;
            words.push(span); frag.appendChild(span);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          wrap(child, accent || child.hasAttribute('data-accent'));
        }
      });
    };
    wrap(tagline, false);
    if (reduceMotion) {
      words.forEach((w) => w.classList.add('is-lit'));
    } else {
      let ticking = false;
      const update = () => {
        ticking = false;
        const line = window.innerHeight * 0.66;
        words.forEach((w) => w.classList.toggle('is-lit', w.getBoundingClientRect().top < line));
      };
      const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
      const watch = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { window.addEventListener('scroll', onScroll, { passive: true }); update(); }
        else { window.removeEventListener('scroll', onScroll); update(); }
      });
      watch.observe(tagline);
    }
  }

  /* ---------- How it works: timelines synced to the day's sunset ---------- */
  const S = sunsetHour(sunsetDay.y, sunsetDay.m, sunsetDay.d);
  const start = roundQuarter(S - 1.75);
  const nightStart = roundQuarter(S + 0.5);
  const times = { today: tr('Today', 'Hoy'), sameday: tr('Same day', 'El mismo día'), start: fmtHour(start), sunset: fmtHour(S), end: fmtHour(start + 2), nstart: fmtHour(nightStart), nend: fmtHour(nightStart + 2) };
  $$('.how').forEach((how) => {
    $$('[data-time]', how).forEach((el) => { if (times[el.dataset.time]) el.textContent = times[el.dataset.time]; });
    const dayLabel = $('[data-how-day]', how);
    if (dayLabel && sunsetDay.tomorrow) dayLabel.textContent = tr('tomorrow’s', 'de mañana');

    const steps = $$('.how__step', how);
    const frames = $$('.how__frame img', how);
    const clock = $('[data-how-clock]', how);
    const rail = $('.how__rail', how);
    const list = $('.how__steps', how);
    const setActive = (i) => {
      steps.forEach((st, j) => { st.classList.toggle('is-active', j === i); st.classList.toggle('is-passed', j < i); });
      frames.forEach((img, j) => img.classList.toggle('is-active', j === i));
      if (clock) clock.textContent = $('.how__time', steps[i]).textContent;
    };
    setActive(0);
    if (!('IntersectionObserver' in window)) return;
    const stepWatch = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number(entry.target.dataset.step)); });
    }, { rootMargin: '-48% 0px -48% 0px' });
    steps.forEach((st) => stepWatch.observe(st));

    let ticking = false;
    const paintRail = () => {
      ticking = false;
      const r = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - r.top) / r.height));
      rail.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(paintRail); } };
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { window.addEventListener('scroll', onScroll, { passive: true }); paintRail(); }
      else { window.removeEventListener('scroll', onScroll); paintRail(); }
    }).observe(list);
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = $('#lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const img = $('img', lightbox);
    $$('.gallery button').forEach((btn) => btn.addEventListener('click', () => {
      const thumb = $('img', btn);
      img.src = btn.dataset.full; img.alt = thumb.alt;
      lightbox.showModal();
    }));
    $('.lightbox__close', lightbox).addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });
  }

  /* ---------- Contact and review forms: compose a message to send ---------- */
  const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  $$('form[data-compose]').forEach((cform) => {
    const done = cform.nextElementSibling;
    const status = $('.form-status', cform);
    let message = '';
    const check = (input) => {
      const v = input.value.trim();
      let msg = '';
      if (input.required && !v) msg = input.type === 'email' ? tr('Enter your email address.', 'Escribe tu correo.') : tr(`Fill in ${(input.dataset.label || 'this field').toLowerCase()}.`, `Completa ${(input.dataset.label || 'este campo').toLowerCase()}.`);
      else if (input.type === 'email' && v && !MAIL_RE.test(v)) msg = tr('Check your email address, it looks incomplete.', 'Revisa tu correo, parece incompleto.');
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      const err = $(`#${input.id}-error`);
      if (err) err.textContent = msg;
      return !msg;
    };
    const required = $$('[required]', cform);
    required.forEach((input) => {
      input.addEventListener('blur', () => { if (input.value || input.getAttribute('aria-invalid') === 'true') check(input); });
      input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') check(input); });
    });
    cform.addEventListener('submit', (e) => {
      e.preventDefault();
      if (required.map(check).includes(false)) {
        status.textContent = tr('Some details are missing. Check the highlighted fields.', 'Faltan datos. Revisa los campos marcados.');
        status.hidden = false;
        $('[aria-invalid="true"]', cform)?.focus();
        return;
      }
      status.hidden = true;
      const lines = [];
      $$('[data-label]', cform).forEach((el) => {
        if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
        const v = el.value.trim();
        if (v) lines.push(`${el.dataset.label}: ${v}`);
      });
      message = [cform.dataset.intro, '', ...lines].join('\n');
      const copy = $('[data-success-copy]', done);
      if (copy && !CONFIG.whatsapp) copy.textContent = tr(`Copy your ${cform.dataset.subject || 'message'}, then paste it in our Instagram chat.`, 'Copia tu mensaje y pégalo en nuestro chat de Instagram.');
      wireSendLink($('[data-send-link]', done), message);
      cform.hidden = true; done.hidden = false;
      done.focus({ preventScroll: true });
      done.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    });
    $('[data-copy]', done)?.addEventListener('click', (e) => { const label = $('span', e.currentTarget); copyText(message, label, label.textContent); });
    $('[data-edit]', done)?.addEventListener('click', () => { done.hidden = true; cform.hidden = false; $('input, select, textarea', cform)?.focus(); });
  });

  /* ---------- Booking form ---------- */
  const form = $('#booking-form');
  if (!form) return;
  const success = $('#booking-success');
  const fields = { experience: $('#f-experience'), date: $('#f-date'), guests: $('#f-guests'), name: $('#f-name'), email: $('#f-email'), phone: $('#f-phone'), notes: $('#f-notes'), allergies: $('#f-allergies') };
  const dateHint = $('[data-date-hint]');
  const minDay = addDays(arubaNow(), 1);
  fields.date.min = isoDate(minDay);
  const preselect = () => {
    const slug = decodeURIComponent(location.hash.slice(1));
    const option = $$('option', fields.experience).find((o) => o.dataset.slug === slug);
    if (option) fields.experience.value = option.value;
  };
  preselect();
  window.addEventListener('hashchange', preselect);

  $$('[data-experience]').forEach((a) => a.addEventListener('click', () => { fields.experience.value = a.dataset.experience; }));

  const parseISO = (v) => { const [y, m, d] = v.split('-').map(Number); return y && m && d ? { y, m, d } : null; };
  const timeInput = () => form.querySelector('input[name="time"]:checked');
  const timeChoice = () => (timeInput() || {}).dataset?.kind || 'golden';
  function plannedTime(day) {
    const sunset = sunsetHour(day.y, day.m, day.d);
    const choice = timeChoice();
    if (choice === 'golden') return { sunset, text: tr(`Golden hour picnics start around ${fmtHour(roundQuarter(sunset - 1.75))}.`, `Los picnics en la hora dorada empiezan hacia las ${fmtHour(roundQuarter(sunset - 1.75))}.`) };
    if (choice === 'stars') return { sunset, text: tr(`Picnics under the stars start around ${fmtHour(roundQuarter(sunset + 0.5))}.`, `Los picnics bajo las estrellas empiezan hacia las ${fmtHour(roundQuarter(sunset + 0.5))}.`) };
    return { sunset, text: tr('Morning picnics are planned around your schedule.', 'Los picnics de mañana se planean según tu horario.') };
  }
  function paintHint() {
    const day = parseISO(fields.date.value);
    if (!day) { dateHint.textContent = tr('Pick a date to see that day’s sunset time in Aruba.', 'Elige una fecha para ver a qué hora es el atardecer ese día en Aruba.'); return; }
    const { sunset, text } = plannedTime(day);
    dateHint.textContent = tr(`Sunset on ${fmtDate(day, { weekday: 'short', month: 'short', day: 'numeric' })} is at ${fmtHour(sunset)}. ${text}`, `El ${fmtDate(day, { weekday: 'short', day: 'numeric', month: 'short' })} el sol se pone a las ${fmtHour(sunset)}. ${text}`);
  }
  fields.date.addEventListener('change', paintHint);
  $$('input[name="time"]', form).forEach((r) => r.addEventListener('change', paintHint));

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function setError(input, message) {
    const err = $(`#${input.id}-error`);
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (err) err.textContent = message || '';
    return !message;
  }
  function validate(input) {
    const v = input.value.trim();
    if (input === fields.name) return setError(input, v ? '' : tr('Enter your name so we know who to reply to.', 'Escribe tu nombre para saber a quién responder.'));
    if (input === fields.email) {
      if (!v) return setError(input, tr('Enter your email address.', 'Escribe tu correo.'));
      return setError(input, EMAIL_RE.test(v) ? '' : tr('Check your email address, it looks incomplete.', 'Revisa tu correo, parece incompleto.'));
    }
    if (input === fields.date) {
      if (!v) return setError(input, tr('Choose the date for your picnic.', 'Elige la fecha de tu picnic.'));
      return setError(input, v < input.min ? tr(`Choose a date from ${fmtDate(minDay, { month: 'short', day: 'numeric' })} onward.`, `Elige una fecha desde el ${fmtDate(minDay, { day: 'numeric', month: 'short' })}.`) : '');
    }
    if (input === fields.allergies) return setError(input, v ? '' : tr('Tell us about allergies, or write none.', 'Cuéntanos de alergias, o escribe ninguna.'));
    return true;
  }
  [fields.name, fields.email, fields.date, fields.allergies].forEach((input) => {
    input.addEventListener('blur', () => { if (input.value || input.getAttribute('aria-invalid') === 'true') validate(input); });
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validate(input); });
  });

  let lastMessage = '';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = $('#form-status');
    const checks = [fields.date, fields.allergies, fields.name, fields.email].filter(Boolean).map(validate);
    if (checks.includes(false)) {
      status.textContent = tr('Some details are missing. Check the highlighted fields.', 'Faltan datos. Revisa los campos marcados.');
      status.hidden = false;
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    status.hidden = true;

    const day = parseISO(fields.date.value);
    const { sunset } = plannedTime(day);
    const longDate = fmtDate(day, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const time = (timeInput() || {}).value || "";
    const extras = $$('input[name="extras"]:checked', form).map((x) => x.value);
    const rows = [
      [tr('Experience', 'Experiencia'), fields.experience.value],
      [tr('Date', 'Fecha'), longDate],
      [tr('Time', 'Momento'), timeChoice() === 'morning' ? time : `${time} (${tr('sunset', 'atardecer')} ${fmtHour(sunset)})`],
      [tr('Guests', 'Invitados'), fields.guests.value],
      ...(extras.length ? [[tr('Extras', 'Extras'), extras.join(', ')]] : []),
      ...(fields.allergies ? [[tr('Allergies', 'Alergias'), fields.allergies.value.trim()]] : []),
      [tr('Name', 'Nombre'), fields.name.value.trim()],
      [tr('Email', 'Correo'), fields.email.value.trim()],
    ];
    if (fields.phone.value.trim()) rows.push(['WhatsApp', fields.phone.value.trim()]);
    if (fields.notes.value.trim()) rows.push([tr('Notes', 'Notas'), fields.notes.value.trim()]);

    lastMessage = [tr('Hi One Happy Picnic, I would like to request a picnic.', 'Hola One Happy Picnic, quiero pedir un picnic.'), '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');

    const summary = $('#booking-summary');
    summary.replaceChildren(...rows.slice(0, 4).map(([k, v]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      row.append(dt, dd); return row;
    }));

    const sendLink = $('#send-link');
    if (CONFIG.whatsapp) {
      sendLink.href = waLink(lastMessage);
      $('[data-send-label]').textContent = tr('Open WhatsApp', 'Abrir WhatsApp');
      $('[data-send-icon]').setAttribute('href', '#i-whatsapp-logo');
      $('[data-success-copy]').textContent = tr(`Send it on WhatsApp and we will reply with availability for ${fmtDate(day, { month: 'long', day: 'numeric' })}.`, `Envíalo por WhatsApp y te respondemos con la disponibilidad para el ${fmtDate(day, { day: 'numeric', month: 'long' })}.`);
      window.open(sendLink.href, '_blank', 'noopener');
    } else {
      sendLink.href = igDm;
      $('[data-send-label]').textContent = tr('Send on Instagram', 'Enviar por Instagram');
      $('[data-send-icon]').setAttribute('href', '#i-instagram-logo');
      $('[data-success-copy]').textContent = tr(`Copy your message, then paste it in our Instagram chat. We will reply with availability for ${fmtDate(day, { month: 'long', day: 'numeric' })}.`, `Copia tu mensaje y pégalo en nuestro chat de Instagram. Te respondemos con la disponibilidad para el ${fmtDate(day, { day: 'numeric', month: 'long' })}.`);
    }

    form.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  });

  $('#copy-message').addEventListener('click', (e) => {
    const label = $('span', e.currentTarget);
    const done = (text) => { label.textContent = text; setTimeout(() => { label.textContent = tr('Copy message', 'Copiar mensaje'); }, 2400); };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = lastMessage; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
      ta.remove(); done(ok ? tr('Copied', 'Copiado') : tr('Copy failed. Select the summary instead.', 'No se pudo copiar. Selecciona el resumen.'));
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(lastMessage).then(() => done(tr('Copied', 'Copiado')), fallback);
    else fallback();
  });

  $('#edit-request').addEventListener('click', () => {
    success.hidden = true; form.hidden = false; fields.experience.focus();
  });
})();
