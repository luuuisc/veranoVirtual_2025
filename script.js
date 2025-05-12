// Detalles de cada curso
const courseDetails = {
  clx: {
    title: 'Nosotros',
    content: `
      <p>Somos un gran equipo sinérgico, multilingüe y multicultural, conformado por colaboradores responsables y comprometidos. 
      Nos apasiona compartir nuestra experiencia en cada curso, proyecto, alianza o servicio. 
      Trabajamos día a día para satisfacer a plenitud a quienes depositan su confianza en nosotros.</p><br>

      <p>Nuestra actividad se basa en los aportes de la de la Didáctica, de la Lingüística aplicada, de las Neurociencias, 
      asi como en los beneficios de la Virtualidad, de la Inteligencia Artificial y de la Mensajería instantánea, 
      sin olvidar nunca que somos y atendemos a Seres Humanos.<p>
    `
  },
  intensivos: {
    title: 'Intensivos - Verano 2025',
    content: `
      <h4>Cursos Virtuales Intensivos de Verano - UNAM</h4>
      <p><strong>Idiomas y niveles:</strong></p>
      <ul>
        <li>Inglés: (A1, A2, B1, B2)</li>
        <li>Francés: (A1, A2, B1)</li>
        <li>Alemán: (A1)</li>
        <li>Italiano: (A1)</li>
        <li>Portugués: (A1)</li>
      </ul>
  
      <p><strong>Duración:</strong> 4 semanas (120 horas en total)</p>
  
      <p><strong>Distribución semanal (30 h/semana):</strong></p>
      <ul>
        <li>15 h sincrónicas (3 h diarias, L - V)</li>
        <li>15 h asíncronas (3 h diarias de tareas)</li>
      </ul>
  
      <p><strong>Alcance:</strong>  
      Alcanzas un nivel oficial internacional si asistes puntualmente, participas activamente y te comprometes con tu aprendizaje.</p>
  
      <p><strong>Cupo por grupo:</strong> Mínimo 6, máximo 12 participantes</p>
  
      <p><strong>Incluye:</strong></p>
      <ul>
        <li>Material multimedia</li>
        <li>Constancia de equivalencia de nivel oficial (promedio ≥ 8)</li>
      </ul>
  
      <p><strong>Inscripciones y cuotas:</strong></p>
      <ul>
        <li>
          <em>Primer periodo</em> (2 - 23 mayo):
          <ul>
            <li>Inscripción: $250</li>
            <li>Colegiatura: $3,000</li>
            <li>Puedes apartar lugar con $1,000 y cubrir la totalidad a más tardar el 23 de mayo.</li><br>
          </ul>
        </li>
        <li>
          <em>Segundo periodo</em> (24 mayo - 10 junio):
          <ul>
            <li>Inscripción: $500</li>
            <li>Colegiatura: $3,000</li>
            <li>Puedes apartar tu lugar con $1,000 y cubrir la totalidad  a más tardar el 20 de junio.</li>
          </ul>
        </li>
      </ul>
  
      <p><strong>Periodo del curso:</strong> 4 - 31 de julio</p>
  
      <p><strong>Examen de colocación:</strong>  
        Obligatorio para A2, B1 y B2 ($150), o constancia de nivel anterior.
      </p>
  
      <p><strong>Importante:</strong></p>
      <ul>
        <li>Aprovechar tu tiempo con intención</li>
        <li>Formación dinámica y recargadora</li>
        <li>Prepararte para intercambios, becas y empleos</li>
        <li>Ganar seguridad y fluidez con práctica constante</li>
      </ul>
  
      <p><strong>Más información:</strong>  
        WhatsApp: <a href="tel:+525513404064">55 1340 4064</a>
      </p>
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
    title: 'Regulares - Verano 2025',
    content: `
      <h4>Cursos Virtuales Regulares de Verano - UNAM</h4>
  
      <p><strong>Idiomas y niveles:</strong></p>
      <ul>
        <li>Inglés: (A1.1, A2.1, B1.1)</li>
        <li>Francés: (A1.1, A2.1, B1.1)</li>
      </ul>
  
      <p><strong>Duración:</strong> 6 semanas (60 horas en total)</p>
  
      <p><strong>Distribución semanal (10 h/semana):</strong></p>
      <ul>
        <li>5 h sincrónicas (1 h diaria, L - V)</li>
        <li>5 h asíncronas (1 h diaria para tareas)</li>
      </ul>
  
      <p><strong>Alcance:</strong><br>
      Alcanzas medio nivel oficial internacional si asistes puntualmente, participas activamente y te comprometes con tu aprendizaje.</p>
  
      <p><strong>Cupo por grupo:</strong> Mínimo 6, máximo 12 participantes</p>
  
      <p><strong>Incluye:</strong></p>
      <ul>
        <li>Material multimedia</li>
        <li>Constancia de equivalencia de nivel oficial (promedio ≥ 8)</li>
      </ul>
  
      <p><strong>Inscripciones y cuotas:</strong></p>
      <ul>
        <li>
          <em>Primer periodo</em> (2 - 23 mayo):
          <ul>
            <li>Inscripción: $250</li>
            <li>Colegiatura: $1,500</li>
            <li>Puedes apartar lugar con $500 y cubrir la totalidad a más tardar el 23 de mayo.</li><br>
          </ul>
        </li>
        <li>
          <em>Segundo periodo</em> (24 mayo - 10 junio):
          <ul>
            <li>Inscripción: $500</li>
            <li>Colegiatura: $1,500</li>
            <li>Puedes apartar tu lugar con $500 y cubrir la totalidad a más tardar el 10 de junio.</li>
          </ul>
        </li>
      </ul>
  
      <p><strong>Periodo del curso:</strong> 16 de junio - 25 de julio</p>
  
      <p><strong>Examen de colocación:</strong><br>
      Obligatorio para A2.1 o B1.1 ($150) o presentar constancia de nivel anterior.</p>
  
      <p><strong>Importante:</strong></p>
      <ul>
        <li>Avanzar con constancia y equilibrio, sin dejar de disfrutar tu verano.</li>
        <li>Incorporar el idioma a tu rutina diaria sin agobiarte.</li>
        <li>Mantener tu mente activa y tu motivación constante a lo largo de 6 semanas.</li>
        <li>Ganar seguridad y fluidez mediante una práctica continua, sin presiones.</li>
      </ul>
  
      <p><strong>Más información:</strong><br>
        WhatsApp: <a href="tel:+525513404064">55 1340 4064</a>
      </p>
    `
  },
  'ini-prepa': {
  title: 'Iniciación - Verano 2025',
  content: `
    <h4>Cursos Virtuales de Iniciación - Comunidad UNAM (15 - 18 años)</h4>
    <p><strong>Idiomas:</strong></p>
      <ul>
        <li>Francés</li>
        <li>Alemán</li>
        <li>Italiano</li>
        <li>Portugués</li>
        <li>Japonés</li>
        <li>Chino</li>
        <li>Coreano</li>
      </ul>

    <p><strong>Duración:</strong> 4 semanas (24 horas en total)</p>

    <p><strong>Distribución semanal (6 h/semana):</strong></p>
    <ul>
      <li>3 h sincrónicas (sesiones en tiempo real)</li>
      <li>3 h asíncronas (tareas y actividades)</li>
    </ul>

    <p><strong>Alcance:</strong>  
    Lograrás una percepción general del idioma para decidir si iniciar un estudio formal.</p>

    <p><strong>Cupo por grupo:</strong> Mínimo 6, máximo 12 participantes</p>

    <p><strong>Incluye:</strong></p>
    <ul>
      <li>Material multimedia</li>
      <li>Constancia de participación</li>
    </ul>

    <p><strong>Inscripciones y cuotas:</strong></p>
    <ul>
      <li>
        <em>Para junio</em> (2 - 23 mayo):
        <ul>
          <li>Inscripción: $250</li>
          <li>Colegiatura: $600</li>
          <li>Aparta con $250 (resto antes del 23 de mayo)</li><br>
        </ul>
      </li>
      <li>
        <em>Para julio</em> (24 mayo - 10 junio):
        <ul>
          <li>Inscripción: $250</li>
          <li>Colegiatura: $600</li>
          <li>Aparta con $250 (resto antes del 20 de junio)</li>
        </ul>
      </li>
    </ul>

    <p><strong>Periodos de curso:</strong></p>
    <ul>
      <li>Junio: 2 - 30 de junio</li>
      <li>Julio: 4 - 31 de julio</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <ul>
      <li>Descubrir si ese idioma puede ser parte de tu camino</li>
      <li>Aprender frases útiles y expresiones básicas</li>
      <li>Explorar cultura: costumbres, música, gastronomía, escritura</li>
      <li>Dar el primer paso hacia una formación global</li>
      <li>Vivir una experiencia enriquecedora</li>
    </ul>

    <p><strong>Más información:</strong>  
      WhatsApp: <a href="tel:+525513404064">55 1340 4064</a>
    </p>
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
      <p>
         <p>Comunícate con nosotros, te atenderemos lo más pronto posible</p>
        <a href="mailto:contacto@clx.com">
          <i class="fas fa-envelope"></i>contacto@clx.com
        </a><br>  
        <a href="tel:+525513404064">
          <i class="fab fa-whatsapp"></i>55 1340 4064
        </a>
      </p>
  
      <p><strong>Síguenos en redes sociales:</strong></p>
      <ul class="social-links">
        <li>
          <a href="https://www.facebook.com/clxidiomas" target="_blank">
            <i class="fab fa-facebook-f"></i>Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/clx_idiomas/" target="_blank">
            <i class="fab fa-instagram"></i>Instagram
          </a>
        </li>
      </ul>
  
      <p>
        <strong>Página oficial:</strong><br>
        <a href="https://www.clx.com.mx" target="_blank">
          <i class="fas fa-globe"></i>https://www.clx.com.mx
        </a>
      </p>
    `
  }, 
'inscripcion': {
  title: 'Inscripción',
  content: `
    <form id="form-inscripcion" class="inscription-form">
      <h4>Formulario de Inscripción</h4>

      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre completo"
          required
        >
      </div>

      <div class="form-group">
        <label for="cuenta_unam">No. de Cuenta/Empleado UNAM</label>
        <input
          id="cuenta_unam"
          name="cuenta_unam"
          type="text"
          placeholder="Ej: 12345678"
        >
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="usuario@correo.com"
          required
        >
      </div>

      <div class="form-group">
        <label for="whatsapp">WhatsApp</label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="55 1234 5678"
          required
        >
      </div>

      <div class="form-group">
        <label for="tipo_curso">Tipo de curso</label>
        <select id="tipo_curso" name="tipo_curso" required>
          <option value="" disabled selected>Elige un tipo…</option>
          <option value="intensivo">Intensivo</option>
          <option value="regular">Regular</option>
          <option value="iniciacion">Iniciación</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nivel_ingreso">Nivel de ingreso</label>
        <select id="nivel_ingreso" name="nivel_ingreso" required>
          <option value="" disabled selected>Primero elige tipo…</option>
          <!-- se rellenará dinámicamente -->
        </select>
      </div>

      <div class="form-group">
        <label for="idioma">Idioma</label>
        <select id="idioma" name="idioma" required>
          <option value="" disabled selected>Primero elige tipo…</option>
          <!-- se rellenará dinámicamente -->
        </select>
      </div>

      <div class="form-group">
        <label for="horario">Horario</label>
        <select id="horario" name="horario" required>
          <option value="" disabled selected>Primero elige tipo…</option>
          <!-- se rellenará dinámicamente -->
        </select>
      </div>

      <div class="form-group full-width">
        <label for="mensaje">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu solicitud de horario, dudas o comentarios aquí…"
        ></textarea>
      </div>

      <button type="submit">Enviar Inscripción</button>
      <div id="insc-feedback" role="alert"></div>
    </form>
  `
},
};

// Referencias DOM
const rects = document.querySelectorAll('.course-menu .rect');
const infoBox = document.getElementById('course-info');

rects.forEach(rect => {
  rect.addEventListener('click', () => {
    // 1) Desactivar todos
    rects.forEach(r => r.classList.remove('active'));
    // 2) Marcar el clicado
    rect.classList.add('active');

    // 3) Renderizar su contenido
    const key = rect.id;
    const data = courseDetails[key];
    infoBox.innerHTML = `<h3>${data.title}</h3>${data.content}`;

    // 4) Si es el apartado de Inscripción, engancha la lógica de formulario
    if (key === 'inscripcion') {
      bindFormLogic();
      attachInscriptionHandler();
    }

    // 5) Scrollea hasta la sección
    const rc = document.querySelector('.right-container');
    rc.scrollTo({
      top: infoBox.offsetTop - rc.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Configuración de qué opciones van para cada tipo de curso
const availability = {
  intensivo: {
    niveles: ['A1','A2','B1','B2'],
    idiomas: ['ingles','frances','aleman','italiano','portugues'],
    horarios: ['08:00-11:00','11:30-14:30','15:00-18:00']
  },
  regular: {
    niveles: ['A1.1','A2.1','B1.1'],
    idiomas: ['ingles','frances'],
    horarios: ['09:00-10:00','10:00-11:00','11:00-12:00']
  },
  iniciacion: {
    niveles: ['A1','A2'],
    idiomas: ['frances','aleman','italiano','portugues','japones','chino','coreano'],
    horarios: ['16:00-17:00','17:00-18:00']
  }
};

function bindFormLogic() {
  const form    = document.getElementById('form-inscripcion');
  const tipo    = form.tipo_curso;
  const nivel   = form.nivel_ingreso;
  const idioma  = form.idioma;
  const horario = form.horario;

  function refreshOptions() {
    const conf = availability[tipo.value];

    /*
    // Tipo de curso
    tipo.innerHTML = [
      `<option value="" disabled selected>Selecciona un curso…</option>`,
      ...Object.keys(availability).map(t => `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`)
    ].join('');
    */

    // Nivel
    nivel.innerHTML = [
      `<option value="" disabled selected>Selecciona un nivel…</option>`,
      ...conf.niveles.map(n => `<option value="${n}">${n}</option>`)
    ].join('');

    // Idioma
    idioma.innerHTML = [
      `<option value="" disabled selected>Selecciona un idioma…</option>`,
      ...conf.idiomas.map(i => {
        const cap = i.charAt(0).toUpperCase() + i.slice(1);
        return `<option value="${i}">${cap}</option>`;
      })
    ].join('');

    // Horario
    horario.innerHTML = [
      `<option value="" disabled selected>Selecciona un horario…</option>`,
      ...conf.horarios.map(h => `<option value="${h}">${h}</option>`)
    ].join('');
  }

  // Al cambiar el tipo de curso, refresca
  tipo.addEventListener('change', refreshOptions);
  // Y la primera vez que aparezca el form
  refreshOptions();
}

function attachInscriptionHandler() {
  const form     = document.getElementById('form-inscripcion');
  const feedback = document.getElementById('insc-feedback');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    feedback.classList.remove('success','error');
    feedback.textContent = 'Enviando…';

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res  = await fetch('http://127.0.0.1:8000/api/inscripcion/', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();

      feedback.className    = json.status === 'ok' ? 'success' : 'error';
      feedback.textContent  = json.message;
      if (json.status === 'ok') form.reset();
    } catch (err) {
      feedback.className   = 'error';
      feedback.textContent = 'Error de red. Intenta más tarde.';
    }
  });

  console.log('🛠️ attachInscriptionHandler() enlazado'); // ayuda a depurar
}