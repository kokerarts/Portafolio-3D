/* common.js
   Funciones compartidas entre index.html y project.html:
   navegación (barra + menú móvil) y animación de encabezados al hacer scroll,
   más los íconos e ilustraciones decorativas reutilizables. */

function setupNav() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* Anima únicamente los encabezados de sección al entrar en pantalla.
   El resto del sitio obtiene su movimiento de la interacción (hover),
   no de una cascada de apariciones al hacer scroll. */
function setupScrollReveal() {
  const items = document.querySelectorAll('.section-head');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((el) => observer.observe(el));
}

/* Íconos de silueta plana (relleno sólido, no trazo) para las tarjetas
   e imagen principal de proyecto — estilo vector duro, sin marcas registradas. */
const ICONS = {
  gamepad: '<svg viewBox="0 0 100 60" fill="currentColor"><path d="M22 10h56a18 18 0 0 1 18 18v14a18 18 0 0 1-30 13l-8-8H42l-8 8a18 18 0 0 1-30-13V28A18 18 0 0 1 22 10z"/><g fill="#060807"><rect x="27" y="25" width="6" height="17" rx="1"/><rect x="20" y="32" width="20" height="6" rx="1"/><circle cx="70" cy="25" r="5.5"/><circle cx="83" cy="34" r="5.5"/></g></svg>',
  cube: '<svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 4 92 27v46L50 96 8 73V27z"/><path d="M50 4 92 27 50 50 8 27z" fill="#060807" opacity=".32"/><path d="M50 50v46L8 73V27z" fill="#060807" opacity=".55"/></svg>'
};

/* Anillos concéntricos usados como fondo decorativo detrás del ícono de cada tarjeta */
const RINGS_SVG = '<svg class="deco-rings-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor"><circle cx="50" cy="50" r="46" stroke-width="2"/><circle cx="50" cy="50" r="32" stroke-width="2"/><circle cx="50" cy="50" r="18" stroke-width="2"/></svg>';

/* Remolino vectorial decorativo (fondo del sitio) */
const SWIRL_SVG = '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor"><path d="M15 120 C10 60 55 20 105 25 C160 30 185 75 165 110 C150 135 115 138 100 115 C90 100 100 82 118 88" stroke-width="4" stroke-linecap="round"/></svg>';

function placeholderIcon(category) {
  const icon = category === 'trabajo' ? ICONS.cube : ICONS.gamepad;
  return `${RINGS_SVG}<span class="icon-fg">${icon}</span>`;
}
