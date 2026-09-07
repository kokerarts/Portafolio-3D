/* projects-data.js
   Aquí se definen todos los proyectos del portafolio.
   Para añadir uno nuevo, copia un objeto del arreglo y edítalo.

   - id:               identificador único, sin espacios (se usa en la URL, ej. project.html?id=juego-05)
   - category:         "videojuego" o "trabajo"
   - title, role, year: datos básicos que se muestran en la tarjeta y en la página de detalle
   - engine:            motor o software principal (opcional, deja "" si no aplica)
   - shortDescription:  texto que aparece al pasar el cursor sobre la tarjeta
   - longDescription:   arreglo de párrafos para la página de detalle
   - tools:             lista de programas/herramientas usadas
   - galleryCount:      cuántos espacios decorativos mostrar en la galería si no hay imágenes (por defecto 3)
   - media:             (opcional) ruta a una imagen o .gif para la tarjeta y la imagen principal del detalle,
                         ej. "assets/images/juego-01.gif". Si no se define, se muestra un ícono decorativo.
   - gallery:            (opcional) arreglo de rutas a imágenes o .gif para la galería del detalle,
                         ej. ["assets/images/juego-01-01.jpg", "assets/images/juego-01-02.gif"]
   - pdf:                (opcional) ruta a un PDF relacionado (ej. un breakdown técnico), se
                         muestra como enlace "Ver PDF" en la página de detalle, ej. "assets/documents/juego-01-breakdown.pdf" */

const PROJECTS = [
  {
    id: 'juego-01',
    category: 'videojuego',
    title: '[Nombre del Videojuego 1]',
    role: '[Tu rol, ej. Artista 3D de Personajes]',
    year: '2024',
    engine: '[Motor usado, ej. Unreal Engine 5]',
    shortDescription: 'Escribe aquí una mini descripción de 1-2 líneas para la vista previa de la tarjeta.',
    longDescription: [
      'Cuenta el contexto del proyecto: qué tipo de juego es, con quién trabajaste y cuál fue tu rol específico dentro del equipo.',
      'Describe tu proceso: desde la referencia o el concepto inicial, pasando por el sculpt y la retopología, hasta el resultado final integrado en el motor de juego.'
    ],
    tools: ['ZBrush', 'Blender', 'Substance Painter'],
    galleryCount: 3
    // Ejemplo de cómo agregar tus propias imágenes/gifs (descomenta y ajusta las rutas):
    // media: 'assets/images/juego-01.gif',
    // gallery: ['assets/images/juego-01-01.jpg', 'assets/images/juego-01-02.gif', 'assets/images/juego-01-03.jpg']
  },
  {
    id: 'juego-02',
    category: 'videojuego',
    title: '[Nombre del Videojuego 2]',
    role: '[Tu rol, ej. Artista de Entornos]',
    year: '2023',
    engine: '[Motor usado, ej. Unity]',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Describe el proyecto: género del juego, plataforma y el alcance de tu participación.',
      'Menciona algún reto técnico o creativo que resolviste durante el desarrollo, y cómo lo abordaste.'
    ],
    tools: ['Maya', 'Substance Designer', 'Unity'],
    galleryCount: 3
  },
  {
    id: 'juego-03',
    category: 'videojuego',
    title: '[Nombre del Videojuego 3]',
    role: '[Tu rol, ej. Modelador de Props]',
    year: '2022',
    engine: '[Motor usado]',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Explica brevemente el proyecto y el equipo con el que colaboraste.',
      'Agrega detalles sobre las herramientas o técnicas específicas que utilizaste, como bakes, sets de texturas o presupuestos de polígonos.'
    ],
    tools: ['Blender', 'Substance Painter', 'Marmoset Toolbag'],
    galleryCount: 3
  },
  {
    id: 'juego-04',
    category: 'videojuego',
    title: '[Nombre del Videojuego 4]',
    role: '[Tu rol]',
    year: '2021',
    engine: '[Motor usado]',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Un párrafo sobre este proyecto y tu contribución principal.',
      'Otro párrafo sobre el resultado final o algo que aprendiste durante el proceso.'
    ],
    tools: ['ZBrush', 'Maya'],
    galleryCount: 3
  },
  {
    id: 'trabajo-01',
    category: 'trabajo',
    title: '[Nombre del Trabajo 1]',
    role: '[Tipo de proyecto, ej. Proyecto personal]',
    year: '2024',
    engine: '',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Describe qué es esta pieza: personaje original, prop, ambiente, etc., y qué te motivó a crearla.',
      'Explica tu flujo de trabajo, del boceto o referencia al render final.'
    ],
    tools: ['Blender', 'Substance Painter'],
    galleryCount: 3
  },
  {
    id: 'trabajo-02',
    category: 'trabajo',
    title: '[Nombre del Trabajo 2]',
    role: '[Tipo de proyecto, ej. Encargo freelance]',
    year: '2023',
    engine: '',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Describe el encargo: para quién fue, qué pedían y cómo lo resolviste.',
      'Comenta cualquier restricción creativa o técnica que hiciera especial este proyecto.'
    ],
    tools: ['ZBrush', 'Maya', 'Substance Painter'],
    galleryCount: 3
  },
  {
    id: 'trabajo-03',
    category: 'trabajo',
    title: '[Nombre del Trabajo 3]',
    role: '[Tipo de proyecto]',
    year: '2022',
    engine: '',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Un párrafo sobre este proyecto personal o encargo.',
      'Otro párrafo sobre las herramientas o el enfoque que usaste para resolverlo.'
    ],
    tools: ['Cinema 4D', 'Photoshop'],
    galleryCount: 3
  },
  {
    id: 'trabajo-04',
    category: 'trabajo',
    title: '[Nombre del Trabajo 4]',
    role: '[Tipo de proyecto]',
    year: '2021',
    engine: '',
    shortDescription: 'Mini descripción para la vista previa de esta tarjeta.',
    longDescription: [
      'Describe este proyecto y qué lo hace representativo de tu trabajo.',
      'Agrega cualquier detalle adicional que quieras destacar.'
    ],
    tools: ['Blender', 'Marvelous Designer'],
    galleryCount: 3
  }
];
