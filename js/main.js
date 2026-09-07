/* main.js — lógica específica de index.html */

function createProjectCard(project, index) {
  const tagLabel = project.category === 'trabajo' ? 'Trabajo' : 'Videojuego';

  const card = document.createElement('a');
  card.href = `project.html?id=${encodeURIComponent(project.id)}`;
  card.className = 'project-card';

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

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  setupNav();
  setupScrollReveal();
});
