# Portafolio 3D — Benjamín Sotelo Villalobos

Portafolio web enfocado en proyectos 3D (videojuegos y trabajos específicos), con estética **Frutiger Metro** (siluetas y sombras negras duras, halftones y remolinos vectoriales) en paleta monocromática de verdes. Sin frameworks ni build: HTML, CSS y JavaScript puros.

## Estructura del proyecto

```
portfolio-3d/
├── index.html              → Página principal
├── project.html             → Plantilla de detalle de proyecto
├── css/
│   └── style.css             → Todos los estilos (colores editables al inicio del archivo)
├── js/
│   ├── common.js              → Funciones compartidas (tarjetas, íconos, scroll)
│   ├── projects-data.js       → Aquí editas tus proyectos
│   ├── main.js                 → Lógica de index.html (filtros, tarjetas)
│   └── project-detail.js       → Lógica de project.html (galería, lightbox, relacionados)
├── assets/
│   ├── images/                 → Fotos, logo, imágenes y gifs/webp de proyectos
│   └── documents/               → PDFs (diplomas, CV, breakdowns)
└── README.md
```

## Cómo verlo en tu computadora

Abre `index.html` directamente en tu navegador, o usa la extensión **Live Server** de VS Code (clic derecho sobre `index.html` → "Open with Live Server").

## Funciones del portafolio

- **Logo fijo**: esquina superior izquierda, siempre visible, lleva de vuelta al inicio. Coloca tu archivo en `assets/images/logo.png`.
- **Videojuegos y Trabajos específicos**: tarjetas con vista previa al pasar el cursor. Se editan en `js/projects-data.js`.
- **Filtros** (solo afectan a "Trabajos específicos"): por Herramientas y Tipos, ocultos hasta pulsar "Filtrar por:". Se generan automáticamente desde `tools` y `tags` de cada trabajo. Los botones grandes de "Sobre mí" también filtran (su texto debe coincidir exactamente con `tools`).
- **Enlaces externos**: cada proyecto puede tener botones a Sketchfab, ArtStation, itch.io, redes, etc. (campo `links`).
- **Galería con imágenes, gifs/webp y video**: cada elemento de `gallery` puede ser una ruta de imagen/gif/webp, o un video de YouTube (`{ type: 'video', url: '...' }`). Al hacer clic en cualquier elemento de la galería se agranda en una ventana (lightbox).
- **"Este trabajo pertenece a [videojuego]"**: si un trabajo tiene `belongsToGame`, se muestra con la tarjeta del juego enlazado.
- **"Trabajos relacionados a este."**: si un proyecto tiene `relatedWorks` (arreglo de ids), se muestran esas tarjetas al final de su página.
- **PDFs**: diplomas enlazados desde Experiencia, o un enlace "Ver PDF" por proyecto (campo `pdf`).

## Cómo personalizarlo

1. **Datos personales**: edita `index.html` — nombre, rol, biografía, experiencia y contacto.
2. **Logo y foto**: colócalos en `assets/images/` (`logo.png` y tu foto de perfil).
3. **Proyectos**: todo en `js/projects-data.js`. Revisa los comentarios al inicio del archivo — ahí está la lista completa de campos disponibles (`tools`, `tags`, `media`, `gallery`, `pdf`, `links`, `belongsToGame`, `relatedWorks`).
4. **Relacionar proyectos**: usa el `id` exacto de otro proyecto del mismo arreglo en `belongsToGame` (un solo id) o `relatedWorks` (un arreglo de ids).
5. **Imágenes y videos de la galería**: reemplaza los paneles decorativos agregando el arreglo `gallery` a un proyecto. Los videos de YouTube se agregan pegando la URL normal (`watch?v=...` o `youtu.be/...`), no hace falta convertirla a link de "embed".
6. **Colores**: variables al inicio de `css/style.css` (bloque `:root`).

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (o usa el que ya tienes). No marques la opción de crear un README si ya tienes este.
2. Abre una terminal **dentro de esta carpeta** y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Actualizar portafolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
   (Si el repositorio remoto ya existe con commits previos, usa `git pull origin main --allow-unrelated-histories` antes del push si aparece un error de historiales no relacionados.)
3. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
4. Tu portafolio estará en `https://TU-USUARIO.github.io/TU-REPO/`.

## Créditos

Tipografías: [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand) e [Inter](https://fonts.google.com/specimen/Inter), vía Google Fonts.
