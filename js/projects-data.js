/* projects-data.js
   Aquí se definen todos los proyectos del portafolio.
   Para añadir uno nuevo, copia un objeto del arreglo y edítalo.

   - id:               identificador único, sin espacios (se usa en la URL, ej. project.html?id=juego-05)
   - category:         "videojuego" o "trabajo"
   - title, role, year: datos básicos que se muestran en la tarjeta y en la página de detalle
   - engine:            motor o software principal (opcional, deja "" si no aplica)
   - shortDescription:  texto que aparece al pasar el cursor sobre la tarjeta
   - longDescription:   arreglo de párrafos para la página de detalle
   - tools:             lista de programas/herramientas usadas — también funciona como filtro "Herramientas"
   - tags:               lista de tipos de trabajo (ej. 'Modelado', 'Animación', 'Rigging', 'Texturizado') — funciona como filtro "Tipos"
   - galleryCount:      cuántos espacios decorativos mostrar en la galería si no hay imágenes (por defecto 3)
   - media:             (opcional) ruta a una imagen o .gif para la tarjeta y la imagen principal del detalle,
                         ej. "assets/images/juego-01.gif". Si no se define, se muestra un ícono decorativo.
   - gallery:            (opcional) arreglo de rutas a imágenes o .gif para la galería del detalle,
                         ej. ["assets/images/juego-01-01.jpg", "assets/images/juego-01-02.gif"]
   - pdf:                (opcional) ruta a un PDF relacionado (ej. un breakdown técnico), se
                         muestra como enlace "Ver PDF" en la página de detalle, ej. "assets/documents/juego-01-breakdown.pdf" */

const PROJECTS = [
  {
    id: 'V-HellBreezer',
    category: 'videojuego',
    title: '[Hell Breezer]',
    role: '[Artista y animador]',
    year: '2022 - Actualidad',
    engine: '[Unity]',
    shortDescription: 'Hell Breezer es un videojuego Hack n Slash plataformero dinamico en 2D con un estilo visual que se asemeja a las animaciones de internet de los 00s',
    longDescription: [
      'Breezer es un oso nacido en Antrozoo que se entrenó toda su vida en las artes marciales para convertirse en el protector de su nación. Lastimosamente, el titulo de su vida seria entregado a su compañero y mejor amigo Straker. Enfurecido por la traición de su pueblo, Breezer decide convertirse en el mas fuerte del mundo para demostrar su valor; es ahí donde conoce a Radna, un demonio milenario que le promete poder a cambio de absorber las almas de los protectores de las diferentes naciones. Es entonces que Breezer, toma rumbo a las 5 naciones de las 5 razas para cumplir su venganza, pasando por un viaje de lucha, autodescubrimiento, ira, sociedad, y entidades cosmicas que quieren evitar una segunda catastrofe demoniaca...',
      'Hell Breezer fue el primer videojuego que realicé en mi carrera, por lo que está lleno de experimentos de aprendizaje. Tome el rol de "director" para fijar un rumbo en nuestro equipo de trabajo; seguidamente, trabajé como artista y animador 2D en un par de sprites, me encargé de el coloreado y exportado de algunos otros, y realicé un par de escenarios con props 3D como prueba de diseño. Adicionalmente, tuve la oportunidad de realizar un cortometraje usando de base el mundo de Hell Breezer, dicho metraje cuenta la historia de los enemigos basicos encontrandose contra el oso iracundo por primera vez; me encargue de hacer modelos, huesos, y animaciones en Blender, como tambien cinematografia, luces, camaras y VFX en "Sequencer" de Unreal Engine; incluso ¡fuí quien guionizó todo el cortometraje! Algunos de estos trabajos estan visibles en este portafolio por si gustan mirar.'
    ],
    tools: ['Unity', 'Blender', 'Unreal Engine'],
    tags: ['Modelado', 'Animacion', 'Rigging', 'Cinematografia'],
    galleryCount: 3,
    // Ejemplo de cómo agregar tus propias imágenes/gifs (descomenta y ajusta las rutas):
    media: 'assets/images/HellBreezer.PNG',
    // gallery: ['assets/images/juego-01-01.jpg', 'assets/images/juego-01-02.gif', 'assets/images/juego-01-03.jpg']
  },
  {
    id: 'P-GolemDePiedra',
    category: 'trabajo',
    title: '[Golem de piedra]',
    role: '[Modelador; animador; rigging]',
    year: '2025',
    engine: '',
    shortDescription: 'Golem de piedra de Hell Breezer utilizado en el corto cinematografico.',
    longDescription: [
      'Este golem fue el primer "humanoide" que creé en mi carrera, para ser la primera vez, estoy muy satisfecho con su resultado, lo he llegado a utilizar en varias ocaciones como place holder, y en el corto cinematografico de Hell Breezer.',
      'Su hueso esta compuesto por el rig default de mixamo (a petición del profesor), y sus primeras animaciones son meh. Mas adelante, experimenté con animaciones mas caricaturescas, que escalaban ciertas partes del cuerpo para dar una sensación de "squash and stretch", solamente limitado por los huesos de mixamo.'
    ],
    tools: ['Blender'],
    tags: ['Modelado', 'Animación'],
    galleryCount: 3
  },
  {
    id: 'P-CinematicaHellBreezer',
    category: 'trabajo',
    title: '[Cortometraje de Hell Breezer]',
    role: '[Cinematografía; Guionista; Director; Animador; ]',
    year: '2025',
    engine: 'Unreal Engine',
    shortDescription: 'Corto animado desde el punto de vista de los enemigos basicos de Hell Breezer.',
    longDescription: [
      'Describe el encargo: para quién fue, qué pedían y cómo lo resolviste.',
      'Comenta cualquier restricción creativa o técnica que hiciera especial este proyecto.'
    ],
    tools: ['ZBrush', 'Maya', 'Substance Painter'],
    tags: ['Modelado', 'Animación'],
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
    tags: ['Texturizado', 'Iluminación'],
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
    tags: ['Modelado', 'Escultura'],
    galleryCount: 3
  }
];
