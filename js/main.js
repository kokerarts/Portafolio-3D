/* main.js — lógica específica de index.html
   Los filtros de Herramientas/Tipos solo afectan a la grilla de
   "Trabajos específicos" (#worksGrid); Videojuegos no se filtra. */

const activeToolFilters = new Set();
const activeTagFilters = new Set();

function createProjectCard(project, index) {
  const tagLabel = project.category === 'trabajo' ? 'Trabajo' : 'Videojuego';

  const card = document.createElement('a');
  card.href = `project.html?id=${encodeURIComponent(project.id)}`;
  card.className = 'project-card';
  card.dataset.tools = (project.tools || []).join('|');
  card.dataset.tags = (project.tags || []).join('|');

  /* Si el proyecto define "media" (ruta a una imagen o .gif), se usa esa
     imagen en la tarjeta. Si no, se muestra el ícono decorativo. */
  const mediaContent = project.media
    ? `<img src="${project.media}" alt="${project.title}" loading="lazy">`
    : placeholderIcon(project.category);

  card.innerHTML = `
    <div class="card-media">
      <span class="tag-pill card-tag">${tagLabel}</span>
      ${mediaContent}
    </div>
    <div class="card-reveal">
      <div class="card-reveal-inner">
        <div class="inner-pad">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.shortDescription}</p>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderProjectCards() {
  const gamesGrid = document.getElementById('gamesGrid');
  const worksGrid = document.getElementById('worksGrid');
  if (!gamesGrid || !worksGrid || typeof PROJECTS === 'undefined') return;

  const games = PROJECTS.filter((p) => p.category === 'videojuego');
  const works = PROJECTS.filter((p) => p.category === 'trabajo');

  games.forEach((project, index) => gamesGrid.appendChild(createProjectCard(project, index)));
  works.forEach((project, index) => worksGrid.appendChild(createProjectCard(project, index)));
}

/* ---------- Filtros (solo afectan a #worksGrid) ---------- */

function createFilterButton(value, kind) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'filter-btn';
  btn.textContent = value;
  btn.dataset.value = value;
  btn.dataset.kind = kind;
  btn.addEventListener('click', () => toggleFilter(value, kind, btn));
  return btn;
}

function toggleFilter(value, kind, btn) {
  const set = kind === 'tool' ? activeToolFilters : activeTagFilters;
  if (set.has(value)) {
    set.delete(value);
    if (btn) btn.classList.remove('active');
  } else {
    set.add(value);
    if (btn) btn.classList.add('active');
  }
  applyFilters();
}

function renderFilterBar() {
  const toolContainer = document.getElementById('toolFilters');
  const tagContainer = document.getElementById('tagFilters');
  const clearBtn = document.getElementById('filterClear');
  if (!toolContainer || !tagContainer || typeof PROJECTS === 'undefined') return;

  /* Las opciones de filtro salen únicamente de los proyectos de tipo
     "trabajo", ya que Videojuegos no se ve afectado por estos filtros. */
  const works = PROJECTS.filter((p) => p.category === 'trabajo');
  const allTools = [...new Set(works.flatMap((p) => p.tools || []))].sort();
  const allTags = [...new Set(works.flatMap((p) => p.tags || []))].sort();

  allTools.forEach((tool) => toolContainer.appendChild(createFilterButton(tool, 'tool')));
  allTags.forEach((tag) => tagContainer.appendChild(createFilterButton(tag, 'tag')));

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      activeToolFilters.clear();
      activeTagFilters.clear();
      document.querySelectorAll('.filter-btn.active').forEach((b) => b.classList.remove('active'));
      applyFilters();
    });
  }
}

function applyFilters() {
  const worksGrid = document.getElementById('worksGrid');
  if (!worksGrid) return;
  const cards = worksGrid.querySelectorAll('.project-card');
  cards.forEach((card) => {
    const cardTools = (card.dataset.tools || '').split('|').filter(Boolean);
    const cardTags = (card.dataset.tags || '').split('|').filter(Boolean);
    const toolMatch = activeToolFilters.size === 0 || cardTools.some((t) => activeToolFilters.has(t));
    const tagMatch = activeTagFilters.size === 0 || cardTags.some((t) => activeTagFilters.has(t));
    card.style.display = toolMatch && tagMatch ? '' : 'none';
  });
  updateEmptyState();
}

function updateEmptyState() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;
  const anyVisible = Array.from(grid.querySelectorAll('.project-card')).some(
    (c) => c.style.display !== 'none'
  );
  let empty = grid.querySelector('.filter-empty');
  if (!anyVisible) {
    if (!empty) {
      empty = document.createElement('p');
      empty.className = 'filter-empty';
      empty.textContent = 'No hay proyectos con estos filtros.';
      grid.appendChild(empty);
    }
  } else if (empty) {
    empty.remove();
  }
}

/* ---------- Panel de filtros colapsable ---------- */

function openFilters() {
  const toggle = document.getElementById('filtersToggle');
  const collapse = document.getElementById('filtersCollapse');
  if (collapse && !collapse.classList.contains('open')) {
    collapse.classList.add('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
}

function setupFiltersToggle() {
  const toggle = document.getElementById('filtersToggle');
  const collapse = document.getElementById('filtersCollapse');
  if (!toggle || !collapse) return;
  toggle.addEventListener('click', () => {
    const isOpen = collapse.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/* Los botones de herramientas en "Sobre mí" filtran directamente por esa
   herramienta (dentro de "Trabajos específicos") y abren el panel de
   filtros. El texto de cada botón debe coincidir exactamente con los
   nombres usados en el campo "tools" de js/projects-data.js. */
function setupAboutToolLinks() {
  document.querySelectorAll('[data-filter-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.filterTool;

      activeToolFilters.clear();
      activeTagFilters.clear();
      activeToolFilters.add(tool);

      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.kind === 'tool' && b.dataset.value === tool);
      });

      applyFilters();
      openFilters();

      const filtersSection = document.getElementById('filtros');
      if (filtersSection) filtersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  renderFilterBar();
  setupFiltersToggle();
  setupAboutToolLinks();
  setupScrollReveal();
});
