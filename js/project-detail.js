/* project-detail.js — lógica específica de project.html */

function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found">
      <h1>Proyecto no encontrado</h1>
      <p>El enlace que seguiste no corresponde a ningún proyecto. Puede que el identificador haya cambiado o el proyecto ya no exista.</p>
      <a href="index.html" class="btn btn-primary">Volver al inicio</a>
    </div>
  `;
}

function renderHeroMedia(project) {
  if (project.media) {
    return `<img src="${project.media}" alt="${project.title}" loading="lazy">`;
  }
  return placeholderIcon(project.category);
}

function renderGallery(project) {
  /* Si el proyecto define "gallery" (arreglo de rutas a imágenes o .gif),
     se muestran esas imágenes. Si no, se generan paneles decorativos. */
  if (project.gallery && project.gallery.length) {
    return project.gallery
      .map((src) => `<div class="gallery-item"><img src="${src}" alt="${project.title}" loading="lazy"></div>`)
      .join('');
  }
  const count = project.galleryCount || 3;
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="gallery-item">${placeholderIcon(project.category)}</div>`;
  }
  return html;
}

function renderProjectNav(project) {
  const sameCategory = PROJECTS.filter((p) => p.category === project.category);
  if (sameCategory.length < 2) return '';

  const idx = sameCategory.findIndex((p) => p.id === project.id);
  const prev = sameCategory[(idx - 1 + sameCategory.length) % sameCategory.length];
  const next = sameCategory[(idx + 1) % sameCategory.length];

  return `
    <nav class="project-nav">
      <a href="project.html?id=${encodeURIComponent(prev.id)}" class="project-nav-link">&larr; ${prev.title}</a>
      <a href="project.html?id=${encodeURIComponent(next.id)}" class="project-nav-link">${next.title} &rarr;</a>
    </nav>
  `;
}

function renderProject(container, project) {
  document.title = `${project.title} — Portafolio 3D`;

  const sectionAnchor = project.category === 'trabajo' ? 'trabajos' : 'videojuegos';
  const tagLabel = project.category === 'trabajo' ? 'Trabajo' : 'Videojuego';
  const metaParts = [project.role, project.year, project.engine].filter(Boolean);
  const metaHtml = metaParts.map((part) => `<span>${part}</span>`).join('');
  const paragraphs = project.longDescription.map((p) => `<p>${p}</p>`).join('');
  const toolTags = project.tools.map((t) => `<span class="tool-badge">${t}</span>`).join('');
  const pdfLink = project.pdf
    ? `<a href="${project.pdf}" target="_blank" rel="noopener" class="timeline-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/></svg>Ver PDF</a>`
    : '';

  container.innerHTML = `
    <a href="index.html#${sectionAnchor}" class="back-link">&larr; Volver al portafolio</a>

    <header class="project-hero">
      <span class="tag-pill">${tagLabel}</span>
      <h1>${project.title}</h1>
      <div class="project-meta">${metaHtml}</div>
    </header>

    <div class="project-media-hero">${renderHeroMedia(project)}</div>

    <div class="project-body">
      <div class="project-description">${paragraphs}</div>
      <aside class="project-tools">
        <h3>Herramientas usadas</h3>
        <div class="tools-list">${toolTags}</div>
        ${pdfLink ? `<div class="project-pdf-link">${pdfLink}</div>` : ''}
      </aside>
    </div>

    <div class="project-gallery">${renderGallery(project)}</div>

    ${renderProjectNav(project)}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projectDetail');
  if (!container || typeof PROJECTS === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    renderNotFound(container);
  } else {
    renderProject(container, project);
  }
});
