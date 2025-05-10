// Detalles de cada curso
const courseDetails = {
  clx: {
    title: 'CLX (Nosotros)',
    content: `
      <p>Somos CLX: la escuela de idiomas líder en innovación pedagógica y tecnología educativa. 
      Ofrecemos metodologías activas, aprendizaje basado en proyectos y un acompañamiento continuo.</p>
    `
  },
  intensivos: {
    title: 'Intensivos',
    content: `
      <p>Programa intensivo de 4 semanas con clases diarias de lunes a viernes. 
      Enfocado en inmersión total para acelerar tu fluidez.</p>
    `
  },
  'semi-intensivos': {
    title: 'Semi intensivos',
    content: `
      <p>Clases 3 veces por semana durante 8 semanas. 
      Equilibrio perfecto entre ritmo acelerado y tiempo para asimilar contenidos.</p>
    `
  },
  regulares: {
    title: 'Regulares',
    content: `
      <p>Modalidad regular: 2 sesiones semanales con refuerzo en línea. 
      Ideal para quienes combinan estudio y trabajo.</p>
    `
  },
  'ini-prepa': {
    title: 'Iniciación (Prepa / CCH)',
    content: `
      <p>Curso de nivel inicial diseñado para estudiantes de Preparatoria y CCH. 
      Cobertura de gramática, vocabulario y habilidades comunicativas.</p>
    `
  },
  'ini-ninos': {
    title: 'Iniciación (Niños 6-10 años)',
    content: `
      <p>Clases lúdicas y didácticas para niños de 6 a 10 años. 
      Juegos, canciones y proyectos divertidos para un aprendizaje natural.</p>
    `
  },
  lectura: {
    title: 'Comprensión de lectura',
    content: `
      <p>Enfocado en desarrollar habilidades de lectura, análisis de textos y ampliación de vocabulario. 
      Lecturas auténticas adaptadas a tu nivel.</p>
    `
  },
  contacto: {
    title: 'Contacto',
    content: `
      <p>Escríbenos a 
      <a href="mailto:info@clxidiomas.com">info@clxidiomas.com</a> 
      o envía un WhatsApp al +52 1 55 1234 5678. 
      ¡Te responderemos en menos de 24 h!</p>
    `
  }
};

// Referencias DOM
const rects = document.querySelectorAll('.course-menu .rect');
const infoBox = document.getElementById('course-info');

// Añadir evento click a cada rectángulo
rects.forEach(rect => {
  rect.addEventListener('click', () => {
    // Desactivar todos
    rects.forEach(r => r.classList.remove('active'));
    // Activar el clicado
    rect.classList.add('active');

    // Renderizar su contenido
    const key = rect.id;
    const data = courseDetails[key];
    infoBox.innerHTML = `<h3>${data.title}</h3>${data.content}`;
  });
});