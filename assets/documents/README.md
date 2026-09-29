# Documentos

Coloca aquí los archivos PDF que quieras enlazar desde el portafolio: diplomas, certificados, tu CV, etc.

Por ejemplo:
- `OpenEnglish.pdf`, `diploma-02.pdf` — certificados de tus experiencias laborales o estudiantiles
- `cv.pdf` — tu currículum, si decides enlazarlo desde algún botón

## Cómo enlazarlos

**En la sección de Experiencia** (`index.html`): cada título de experiencia (`<h4>`) puede convertirse en un enlace. Ya hay un ejemplo funcionando en "Experiencia estudiantil". El patrón es:

```html
<h4><a href="assets/documents/tu-archivo.pdf" target="_blank" rel="noopener" class="timeline-link">Texto</a></h4>
```

También puedes usar un enlace externo (por ejemplo, un certificado publicado en LinkedIn) en vez de un PDF — simplemente cambia la ruta del `href` por la URL completa.

**En un proyecto** (`js/projects-data.js`): agrega el campo `pdf: 'assets/documents/tu-archivo.pdf'` a cualquier proyecto para que aparezca un enlace "Ver PDF" en su página de detalle.

Los PDFs se abren en una pestaña nueva del navegador — no necesitas ningún visor especial.
