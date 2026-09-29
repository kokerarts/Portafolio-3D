/* project-detail.js — lógica específica de project.html */

const PLAY_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';

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
  if (project.media && isVideoFile(project.media)) {
    return `<video src="${project.media}" autoplay muted loop playsinline></video>`;
  }
  if (project.media) {
    return `<img src="${project.media}" alt="${project.title}" loading="lazy">`;
  }
  return placeholderIcon(project.category);
}

/* Convierte un link normal de YouTube (watch?v=, youtu.be/, shorts/) a su
   id de video. Devuelve null si no es un link de YouTube reconocible. */
function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{6,})/);
  return match ? match[1] : null;
}

/* Devuelve una URL de inserción (embed) reproducible dentro de un iframe.
   Con YouTube convierte automáticamente el link normal; con otras
   plataformas (Vimeo, etc.) se espera que "url" ya sea la URL de embed. */
function toEmbedUrl(url) {
  const ytId = getYouTubeId(url);
  return ytId ? `https://www.youtube.com/embed/${ytId}` : url;
}

function renderGalleryItem(item) {
  if (typeof item === 'string') {
    if (isVideoFile(item)) {
      /* Video local (.mp4, .webm, .mov): miniatura muda con ícono de play,
         se reproduce con controles y sonido al abrir el lightbox. */
      return `
        <button type="button" class="gallery-item gallery-video" data-lightbox-type="mp4" data-lightbox-src="${item}">
          <video src="${item}" muted playsinline preload="metadata"></video>
          <span class="gallery-play-icon">${PLAY_SVG}</span>
        </button>
      `;
    }
    /* Imagen, .gif o .webp animado — todas funcionan igual, es solo un <img> */
    return `
      <button type="button" class="gallery-item" data-lightbox-type="image" data-lightbox-src="${item}">
        <img src="${item}" alt="" loading="lazy">
      </button>
    `;
  }
  if (item && item.type === 'video') {
    const embedUrl = toEmbedUrl(item.url);
    const ytId = getYouTubeId(item.url);
    const thumbAttr = ytId ? ` style="background-image:url('https://img.youtube.com/vi/${ytId}/hqdefault.jpg')"` : '';
    return `
      <button type="button" class="gallery-item gallery-video"${thumbAttr} data-lightbox-type="video" data-lightbox-src="${embedUrl}">
        <span class="gallery-play-icon">${PLAY_SVG}</span>
        ${item.label ? `<span class="gallery-video-label">${item.label}</span>` : ''}
      </button>
    `;
  }
  return '';
}

function renderGallery(project) {
  if (project.gallery && project.gallery.length) {
    return project.gallery.map(renderGalleryItem).join('');
  }
  /* Sin galería definida: paneles decorativos de relleno */
  const count = project.galleryCount || 3;
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="gallery-item">${placeholderIcon(project.category)}</div>`;
  }
  return html;
}

function renderExternalLinks(project) {
  if (!project.links || !project.links.length) return '';
  const buttons = project.links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="external-link-btn">${l.label}</a>`)
    .join('');
  return `
    <div class="external-links">
      <h3>Enlaces</h3>
      <div class="external-links-list">${buttons}</div>
    </div>
  `;
}

/* "Este trabajo pertenece a [videojuego]" — texto a la izquierda, tarjeta del juego a la derecha */
function renderBelongsTo(project) {
  if (!project.belongsToGame) return '';
  const game = PROJECTS.find((p) => p.id === project.belongsToGame);
  if (!game) return '';
  return `
    <div class="belongs-to">
      <div class="belongs-to-text">
        <p class="belongs-to-label">Este trabajo pertenece a</p>
        <h3 class="belongs-to-name">${game.title}</h3>
      </div>
      <div class="belongs-to-card">${renderProjectCardHTML(game)}</div>
    </div>
  `;
}

/* "Trabajos relacionados a este." — fila de tarjetas al final de la página */
function renderRelatedWorks(project) {
  const ids = project.relatedWorks || [];
  const related = ids.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  if (!related.length) return '';
  return `
    <div class="related-works">
      <h3 class="related-works-label">Trabajos relacionados a este.</h3>
      <div class="cards-grid">${related.map(renderProjectCardHTML).join('')}</div>
    </div>
  `;
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
        ${renderExternalLinks(project)}
      </aside>
    </div>

    <div class="project-gallery">${renderGallery(project)}</div>

    ${renderBelongsTo(project)}
    ${renderRelatedWorks(project)}

    ${renderProjectNav(project)}
  `;
}

/* ---------- Lightbox: agranda imagen/gif/video al hacer clic en la galería ---------- */

function openLightbox(html) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  if (!lightbox || !content) return;
  content.innerHTML = html;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  if (!lightbox || !content) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  content.innerHTML = ''; /* corta la reproducción si era un video */
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightboxClose');
  const gallery = document.getElementById('projectDetail');
  if (!lightbox || !gallery) return;

  gallery.addEventListener('click', (e) => {
    const item = e.target.closest('[data-lightbox-src]');
    if (!item) return;
    const type = item.dataset.lightboxType;
    const src = item.dataset.lightboxSrc;
    if (type === 'image') {
      openLightbox(`<img src="${src}" alt="">`);
    } else if (type === 'mp4') {
      openLightbox(`<video src="${src}" controls autoplay playsinline></video>`);
    } else if (type === 'video') {
      const sep = src.includes('?') ? '&' : '?';
      openLightbox(`<iframe src="${src}${sep}autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
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

  setupLightbox();
});
