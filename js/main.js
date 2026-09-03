/* main.js — lógica específica de index.html */

function createProjectCard(project, index) {
  const tones = ['tone-a', 'tone-b', 'tone-c', 'tone-d'];
  const tone = tones[index % tones.length];
  const tagLabel = project.category === 'trabajo' ? 'Trabajo' : 'Videojuego';

  const card = document.createElement('a');
  card.href = `project.html?id=${encodeURIComponent(project.id)}`;
  card.className = 'project-card';

  card.innerHTML = `
    <div class="card-media ${tone}">
      <span class="tag-pill card-tag">${tagLabel}</span>
      ${placeholderIcon(project.category)}
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
