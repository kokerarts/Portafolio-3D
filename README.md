# Portafolio 3D — [Tu Nombre]

Portafolio web enfocado en proyectos 3D (videojuegos y trabajos específicos), con estética **Frutiger Metro** (vidrio, brillos y colores fríos) sobre fondo negro. Sin frameworks ni build: HTML, CSS y JavaScript puros.

## Estructura del proyecto

```
portfolio-3d/
├── index.html              → Página principal
├── project.html             → Plantilla de detalle de proyecto
├── css/
│   └── style.css             → Todos los estilos (colores editables al inicio del archivo)
├── js/
│   ├── common.js              → Navegación, menú móvil y animación de encabezados
│   ├── projects-data.js       → Aquí editas tus proyectos
│   ├── main.js                 → Lógica de index.html
│   └── project-detail.js       → Lógica de project.html
├── assets/images/             → Coloca aquí tus fotos e imágenes
└── README.md
```

## Cómo verlo en tu computadora

No necesita instalación. Abre `index.html` directamente en tu navegador, o usa la extensión **Live Server** de VS Code (clic derecho sobre `index.html` → "Open with Live Server") para recarga automática mientras editas.

## Cómo personalizarlo

1. **Datos personales**: edita `index.html` — busca los textos entre corchetes como `[Tu Nombre Completo]` o `[Tu rol profesional]` y reemplázalos.
2. **Logo**: coloca tu archivo como `assets/images/logo.png`. Aparece automáticamente en el botón fijo de la esquina superior izquierda (que funciona como "volver al inicio" en todas las páginas); mientras no exista el archivo, se ve un marcador de posición.
3. **Foto**: coloca tu imagen en `assets/images/` y sigue el comentario dentro de `.hero-photo` en `index.html` para reemplazar el marcador por tu `<img>`.
4. **Proyectos**: todo se controla desde `js/projects-data.js`. Cada objeto del arreglo `PROJECTS` es una tarjeta. Copia uno, cámbiale el `id` (único, sin espacios) y edita sus datos. `category` debe ser `"videojuego"` o `"trabajo"`. Los campos `tools` y `tags` alimentan automáticamente los filtros de "Herramientas" y "Tipos" de la página principal.
5. **Filtros**: no necesitas configurarlos aparte — se generan solos a partir de los valores usados en `tools` y `tags` de tus proyectos. Los botones de herramientas en "Sobre mí" también filtran: su texto debe coincidir exactamente con el nombre usado en `tools` para que funcionen.
6. **Imágenes de proyectos**: por defecto, las tarjetas y galerías usan paneles decorativos en vez de fotos, para que el sitio funcione sin necesidad de subir nada primero. Cuando tengas tus imágenes, reemplaza esos paneles por `<img>` dentro de `js/main.js` (tarjetas) y `js/project-detail.js` (galería e imagen principal).
7. **Experiencia y contacto**: edita directamente esas secciones en `index.html`. Para enlazar un diploma o certificado a un puesto/curso, envuelve su título en una etiqueta `<a>` apuntando a un PDF en `assets/documents/` (hay un ejemplo ya armado en la experiencia estudiantil, y más detalles en `assets/documents/README.md`).
8. **PDFs**: coloca tu currículum u otros documentos en `assets/documents/`. También puedes agregar un PDF a cualquier proyecto con el campo `pdf` en `js/projects-data.js`.
9. **Colores**: todos los colores están centralizados como variables al inicio de `css/style.css` (bloque `:root`), así puedes ajustar el tono exacto de verdes y negros desde un solo lugar.

**Nota**: este portafolio no tiene un menú de navegación superior — la única navegación fija es el logo, que siempre lleva de vuelta al inicio.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo, `portfolio-3d`). No marques la opción de crear un README, ya tienes uno.
2. Abre una terminal **dentro de esta carpeta** (en VS Code: `Terminal → New Terminal`) y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Primer commit: portafolio 3D"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portfolio-3d.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda.
4. En un par de minutos tu portafolio estará disponible en `https://TU-USUARIO.github.io/portfolio-3d/`.

Cada vez que quieras actualizar el sitio: `git add .`, `git commit -m "mensaje"`, `git push`.

## Créditos

Tipografías: [Outfit](https://fonts.google.com/specimen/Outfit) e [Inter](https://fonts.google.com/specimen/Inter), vía Google Fonts.
