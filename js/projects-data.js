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
   - gallery:            (opcional) arreglo para la galería del detalle. Cada elemento puede ser:
                         • un texto con la ruta a una imagen, .gif o .webp animado, ej. "assets/images/juego-01-02.gif"
                         • un objeto de video: { type: 'video', url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', label: 'Turnaround' }
                           (el "label" es opcional, se muestra como texto sobre la miniatura del video)
   - pdf:                (opcional) ruta a un PDF relacionado (ej. un breakdown técnico), se
                         muestra como enlace "Ver PDF" en la página de detalle, ej. "assets/documents/juego-01-breakdown.pdf"
   - links:              (opcional) arreglo de enlaces externos (Sketchfab, ArtStation, itch.io, redes, etc.),
                         se muestran como botones debajo de "Herramientas usadas", ej.
                         [{ label: 'Ver en Sketchfab', url: 'https://sketchfab.com/...' }, { label: 'Ver en itch.io', url: 'https://...' }]
   - belongsToGame:      (opcional, para trabajos) el "id" de un videojuego de este mismo arreglo al que pertenece
                         esta pieza. Muestra "Este trabajo pertenece a [juego]" con la tarjeta del juego.
   - relatedWorks:       (opcional) arreglo de "id" de otros proyectos relacionados con este (no tienen que ser
                         mutuos: puedes relacionar A→B sin que B tenga que relacionar de vuelta a A). Se muestran
                         al final de la página como "Trabajos relacionados a este." */

const PROJECTS = [
  {
    id: 'V-HellBreezer',
    category: 'videojuego',
    title: '[Hell Breezer]',
    role: '[Artista; Animador; Director; Game Designer; Modelador]',
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
    media: 'assets/images/HellBreezer.PNG',
     gallery: [
       'assets/images/BreezerStraker.PNG',
       { type: 'video', url: 'https://www.youtube.com/watch?v=Zj4mntDHrgU', label: 'Teaser' },
       { type: 'video', url: 'https://youtu.be/dW48MGf6F8c', label: 'Gameplay prototipo' }
     ],
    relatedWorks: ['P-GolemDePiedra', 'P-CinematicaHellBreezer'],
    links: [
      { label: 'Prototipo en Itchio', url: 'https://hell-team.itch.io/hell-breezer' },
      { label: 'Linktree de TODAS las RRSS', url: 'https://linktr.ee/hell_breezer' }
    ]
  },
 {
    id: 'V-RustedSteamGear',
    category: 'videojuego',
    title: '[Rusted Steam Gear]',
    role: '[Artista; Animador; Modelador; Rigging; Game Designer]',
    year: '2025 - Actualidad',
    engine: '[Unity]',
    shortDescription: 'Rusted Steam Gear es un videojuego 3D online con vista de aguila, donde el ultimo jugador en pie gana la partida en un escenario laberintico.',
    longDescription: [
      'Rusted Steam Gear es un proyecto de videojuego multijugador online en 3D, donde 4 jugadores deben enfrentarse en un escenario laberintico mirado desde arriba, los 4 jugadores deben eliminarse con sus armas, pero su vision esta increiblemente limitada en un circulo de luz que se bufurca al contacto con una pared.'
      ,'Este proyecto se hizo en un trabajo universitario'
    ],
    tools: ['Unity', 'Blender', 'Unreal Engine'],
    tags: ['Modelado', 'Animacion', 'Rigging', 'Cinematografia'],
    galleryCount: 3,
    // Ejemplo de cómo agregar tus propias imágenes/gifs (descomenta y ajusta las rutas):
    media: 'assets/images/HellBreezer.PNG',
    // gallery: ['assets/images/juego-01-01.jpg', 'assets/images/juego-01-02.gif', 'assets/images/juego-01-03.jpg']
    links: [
      { label: 'Ver en itch.io', url: 'https://TU-USUARIO.itch.io/rusted-steam-gear' }
    ]
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
    galleryCount: 3,
    belongsToGame: 'V-HellBreezer',
    relatedWorks: ['P-CinematicaHellBreezer'],
    links: [
      { label: 'Ver en Sketchfab', url: 'https://sketchfab.com/kokerarts' }
    ]
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
    tags: ['Modelado', 'Animación', 'Cinematografía'],
    galleryCount: 3,
    belongsToGame: 'V-HellBreezer',
    relatedWorks: ['P-GolemDePiedra']
  },
  {
    id: 'P-Jabalí',
    category: 'trabajo',
    title: '[Jabalí]',
    role: '[Animador]',
    year: '2024',
    engine: '',
    shortDescription: 'Jabalí realista con animacion.',
    longDescription: [
      'Animacion de un jabalí realista, el modelo NO es mio, fue entregado a mi por un profesor a modo de practica de animacion, desconozco el origen del modelo, pero el esqueleto y las animaciones fueron hechas por mi.',
    ],
    tools: ['Blender',],
    tags: ['Animación', 'Rigging'],
    galleryCount: 3
  },
  {
    id: 'P-JacobJester',
    category: 'trabajo',
    title: '[Jacob Jester]',
    role: '[Animador; Modelador]',
    year: '2025',
    engine: 'Unity',
    shortDescription: 'Modelo del personaje principal de Rusted Steam Gear.',
    longDescription: [
      'Modelo realizado para el juego Rusted Steam Gear, no posee texturas y tiene animaciones increiblemente basicas, meramente para el prototipo del proyecto.',
    ],
    tools: ['Blender', 'Unity'],
    tags: ['Modelado', 'Animación', 'Rigging'],
    galleryCount: 3,
    belongsToGame: 'V-RustedSteamGear',
    links: [
      { label: 'Ver en ArtStation', url: 'https://www.artstation.com/kokernull7' }
    ]
  }
];
