# Documentos

Coloca aquí los archivos PDF que quieras enlazar desde el portafolio: diplomas, certificados, tu CV, etc.

Por ejemplo:
- `cv.pdf` — tu currículum (enlazado desde el botón "Descargar CV" en el inicio)
- `diploma-01.pdf`, `diploma-02.pdf` — certificados de tus experiencias laborales o estudiantiles

## Cómo enlazarlos

**En la sección de Experiencia** (`index.html`): cada título de experiencia (`<h4>`) puede convertirse en un enlace. Busca el comentario `<!-- Para enlazar un diploma -->` junto a cada entrada y sigue el patrón: envuelve el texto del título en una etiqueta `<a>` apuntando a tu PDF, por ejemplo:

```html
<h4><a href="assets/documents/diploma-01.pdf" target="_blank" rel="noopener" class="timeline-link">Nombre del curso</a></h4>
```

También puedes usar un enlace externo (por ejemplo, a un certificado en LinkedIn) en vez de un PDF — simplemente cambia la ruta del `href` por la URL completa.

**En un proyecto** (`js/projects-data.js`): agrega el campo `pdf: 'assets/documents/tu-archivo.pdf'` a cualquier proyecto para que aparezca un enlace "Ver PDF" en su página de detalle.

Los PDFs se abren en una pestaña nueva del navegador — no necesitas ningún visor especial, todos los navegadores modernos los muestran directamente.
