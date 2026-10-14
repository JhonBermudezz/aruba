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
  const fmtDate = ({ y, m, d }, opts) => new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts }).format(new Date(Date.UTC(y, m - 1, d)));

  // After sunset in Aruba, every live time on the page switches to tomorrow's sunset.
  const sunsetDay = (() => {
    const now = arubaNow();
    const late = now.h > sunsetHour(now.y, now.m, now.d) + 0.5;
    return { ...(late ? addDays(now, 1) : now), tomorrow: late, year: now.y };
  })();

  (function paintSunset() {
    const day = sunsetDay;
    const todayLabel = day.tomorrow ? 'Sunset tomorrow' : 'Sunset today';
    const finalLabel = day.tomorrow ? 'Tomorrow’s sunset in Aruba' : 'Tonight’s sunset in Aruba';
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
    $$('[data-wa]').forEach((a) => { a.href = waLink('Hi One Happy Picnic, I have a question about a picnic.'); a.target = '_blank'; a.rel = 'noopener'; a.hidden = false; });
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
    $$('[data-email-text]').forEach((s) => { s.textContent = CONFIG.email; });
  }

  /* ---------- Mobile menu with morphing burger ---------- */
  const burger = $('.burger');
  const menu = $('#menu');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => $('a', menu)?.focus({ preventScroll: true }), 300);
  }
  burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); burger.focus(); } });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- Current section in the nav ---------- */
  const navLinks = $$('.nav__links a');
  const sections = navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => current.observe(s));
  }

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

  /* ---------- How it works: timeline synced to the day's sunset ---------- */
  const how = $('.how');
  if (how) {
    const S = sunsetHour(sunsetDay.y, sunsetDay.m, sunsetDay.d);
    const start = roundQuarter(S - 1.75);
    const times = { today: 'Today', sameday: 'Same day', start: fmtHour(start), sunset: fmtHour(S), end: fmtHour(start + 2) };
    $$('[data-time]', how).forEach((el) => { el.textContent = times[el.dataset.time] || el.textContent; });
    const dayLabel = $('[data-how-day]', how);
    if (dayLabel && sunsetDay.tomorrow) dayLabel.textContent = 'tomorrow’s';

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
    if ('IntersectionObserver' in window) {
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
    }
  }

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

  /* ---------- Booking form ---------- */
  const form = $('#booking-form');
  if (!form) return;
  const success = $('#booking-success');
  const fields = { experience: $('#f-experience'), date: $('#f-date'), guests: $('#f-guests'), name: $('#f-name'), email: $('#f-email'), phone: $('#f-phone'), notes: $('#f-notes') };
  const dateHint = $('[data-date-hint]');
  const minDay = addDays(arubaNow(), 1);
  fields.date.min = isoDate(minDay);

  $$('[data-experience]').forEach((a) => a.addEventListener('click', () => { fields.experience.value = a.dataset.experience; }));

  const parseISO = (v) => { const [y, m, d] = v.split('-').map(Number); return y && m && d ? { y, m, d } : null; };
  const timeChoice = () => (form.querySelector('input[name="time"]:checked') || {}).value || 'Golden hour';
  function plannedTime(day) {
    const sunset = sunsetHour(day.y, day.m, day.d);
    const choice = timeChoice();
    if (choice === 'Golden hour') return { sunset, text: `Golden hour picnics start around ${fmtHour(roundQuarter(sunset - 1.75))}.` };
    if (choice === 'Under the stars') return { sunset, text: `Moonlight picnics start around ${fmtHour(roundQuarter(sunset + 0.5))}.` };
    return { sunset, text: 'Morning picnics are planned around your schedule.' };
  }
  function paintHint() {
    const day = parseISO(fields.date.value);
    if (!day) { dateHint.textContent = 'Pick a date to see that day’s sunset time in Aruba.'; return; }
    const { sunset, text } = plannedTime(day);
    dateHint.textContent = `Sunset on ${fmtDate(day, { weekday: 'short', month: 'short', day: 'numeric' })} is at ${fmtHour(sunset)}. ${text}`;
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
    if (input === fields.name) return setError(input, v ? '' : 'Enter your name so we know who to reply to.');
    if (input === fields.email) {
      if (!v) return setError(input, 'Enter your email address.');
      return setError(input, EMAIL_RE.test(v) ? '' : 'Check your email address, it looks incomplete.');
    }
    if (input === fields.date) {
      if (!v) return setError(input, 'Choose the date for your picnic.');
      return setError(input, v < input.min ? `Choose a date from ${fmtDate(minDay, { month: 'short', day: 'numeric' })} onward.` : '');
    }
    return true;
  }
  [fields.name, fields.email, fields.date].forEach((input) => {
    input.addEventListener('blur', () => { if (input.value || input.getAttribute('aria-invalid') === 'true') validate(input); });
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validate(input); });
  });

  let lastMessage = '';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = $('#form-status');
    const checks = [fields.date, fields.name, fields.email].map(validate);
    if (checks.includes(false)) {
      status.textContent = 'Some details are missing. Check the highlighted fields.';
      status.hidden = false;
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    status.hidden = true;

    const day = parseISO(fields.date.value);
    const { sunset } = plannedTime(day);
    const longDate = fmtDate(day, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const time = timeChoice();
    const rows = [
      ['Experience', fields.experience.value],
      ['Date', longDate],
      ['Time', time === 'Morning' ? time : `${time} (sunset ${fmtHour(sunset)})`],
      ['Guests', fields.guests.value],
      ['Name', fields.name.value.trim()],
      ['Email', fields.email.value.trim()],
    ];
    if (fields.phone.value.trim()) rows.push(['WhatsApp', fields.phone.value.trim()]);
    if (fields.notes.value.trim()) rows.push(['Notes', fields.notes.value.trim()]);

    lastMessage = ['Hi One Happy Picnic, I would like to request a picnic.', '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');

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
      $('[data-send-label]').textContent = 'Open WhatsApp';
      $('[data-send-icon]').setAttribute('href', '#i-whatsapp-logo');
      $('[data-success-copy]').textContent = `Send it on WhatsApp and we will reply with availability for ${fmtDate(day, { month: 'long', day: 'numeric' })}.`;
      window.open(sendLink.href, '_blank', 'noopener');
    } else {
      sendLink.href = igDm;
      $('[data-send-label]').textContent = 'Send on Instagram';
      $('[data-send-icon]').setAttribute('href', '#i-instagram-logo');
      $('[data-success-copy]').textContent = `Copy your message, then paste it in our Instagram chat. We will reply with availability for ${fmtDate(day, { month: 'long', day: 'numeric' })}.`;
    }

    form.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  });

  $('#copy-message').addEventListener('click', (e) => {
    const label = $('span', e.currentTarget);
    const done = (text) => { label.textContent = text; setTimeout(() => { label.textContent = 'Copy message'; }, 2400); };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = lastMessage; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
      ta.remove(); done(ok ? 'Copied' : 'Copy failed. Select the summary instead.');
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(lastMessage).then(() => done('Copied'), fallback);
    else fallback();
  });

  $('#edit-request').addEventListener('click', () => {
    success.hidden = true; form.hidden = false; fields.experience.focus();
  });
})();
