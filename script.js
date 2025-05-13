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
// Formulario de inscripción
inscripcion: {
  title: 'Inscripción',
  content: `
    <form id="form-inscripcion" class="inscription-form">
      <h4>Formulario de Inscripción</h4>

      <!-- Campos básicos -->
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" required>
      </div>
      <div class="form-group">
        <label for="cuenta_unam">No. de Cuenta/Empleado UNAM</label>
        <input id="cuenta_unam" name="cuenta_unam" type="text" placeholder="Ej: 12345678">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" placeholder="usuario@correo.com" required>
      </div>
      <div class="form-group">
        <label for="whatsapp">WhatsApp</label>
        <input id="whatsapp" name="whatsapp" type="tel" placeholder="55 1234 5678" required>
      </div>

      <!-- Select tipo → idioma → nivel → horario -->
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
        <label for="idioma">Idioma</label>
        <select id="idioma" name="idioma" required>
          <option value="" disabled selected>Selecciona primero tipo…</option>
        </select>
      </div>
      <div class="form-group">
        <label for="nivel_ingreso">Nivel de ingreso</label>
        <select id="nivel_ingreso" name="nivel_ingreso" required>
          <option value="" disabled selected>Selecciona primero idioma…</option>
        </select>
      </div>
      <div class="form-group">
        <label for="horario">Horario</label>
        <select id="horario" name="horario" required>
          <option value="" disabled selected>Selecciona primero nivel…</option>
        </select>
      </div>
      <div class="form-group" id="horario-otro-group" style="display:none;">
        <label for="horario_otro">Proponer horario</label>
        <input id="horario_otro" name="horario_otro" type="text" placeholder="Escribe tu horario…">
      </div>

      <!-- Selección de periodo -->
      <div class="form-group" id="periodo-group" style="display:none;">
        <label><strong>Periodo del curso</strong></label>
        <div id="periodo-options"></div>
        <input type="hidden" id="fecha_inicio" name="fecha_inicio" required>
        <input type="hidden" id="fecha_fin"    name="fecha_fin"    required>
      </div>

      <!-- Confirmación -->
      <div class="form-group">
        <input id="confirm_periodo" name="confirm_periodo" type="checkbox" required>
        <label for="confirm_periodo">Confirmo que el periodo seleccionado es correcto</label>
      </div>

      <!-- Mensaje y envío -->
      <div class="form-group full-width">
        <label for="mensaje">Mensaje (opcional)</label>
        <textarea id="mensaje" name="mensaje"
                  placeholder="Escribe tu solicitud de horario, dudas o comentarios aquí…"></textarea>
      </div>

      <button type="submit">Enviar Inscripción</button>
      <div id="insc-feedback" role="alert"></div>
    </form>
  `
}
};

// Referencias DOM
document.addEventListener('DOMContentLoaded', () => {
  const rects = document.querySelectorAll('.course-menu .rect');
  const infoBox = document.getElementById('course-info');

  rects.forEach(rect => {
    rect.addEventListener('click', () => {
      // 1) Desactivar todos
      rects.forEach(r => r.classList.remove('active'));
      // 2) Marcar el clicado
      rect.classList.add('active');

      // 3) Renderizar contenido
      const key = rect.id;
      const data = courseDetails[key];
      infoBox.innerHTML = `<h3>${data.title}</h3>${data.content}`;

      // 4) Si es Inscripción, inicializar form y lógica
      if (key === 'inscripcion') {
        bindFormLogic();
        populatePeriodos();
        attachInscriptionHandler();
        // Disparar primer change para placeholders
        document.getElementById('tipo_curso').dispatchEvent(new Event('change'));
      }

      // 5) Scroll suave a infoBox
      infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

// Configuración de disponibilidad por tipo de curso (idioma → nivel → horarios)
const availability = {
  intensivo: { idiomas: {
      ingles: { A1: ['07:00-10:00','10:00-13:00','13:00-16:00','16:00-19:00','19:00-22:00'],
                A2: ['07:00-10:00','10:00-13:00','13:00-16:00','16:00-19:00','19:00-22:00'],
                B1: ['07:00-10:00','10:00-13:00','16:00-19:00','19:00-22:00'],
                B2: ['07:00-10:00','13:00-16:00','19:00-22:00'] },
      frances:{ A1:['07:00-10:00','10:00-13:00','13:00-16:00','16:00-19:00','19:00-22:00'],
                A2:['10:00-13:00','16:00-19:00'],
                B1:['19:00-22:00'], B2:['19:00-22:00'] },
      aleman:{ A1:['08:00-11:00','19:00-22:00'] },
      italiano:{ A1:['07:00-10:00','16:00-19:00'] },
      portugues:{ A1:['10:00-13:00','19:00-22:00'] }
  } },

  regular: { idiomas: {
      ingles:{'A1.1':['09:00-10:00','10:00-11:00'],'A2.1':['10:00-11:00','11:00-12:00'],'B1.1':['09:00-10:00','11:00-12:00']},
      frances:{'A1.1':['09:00-10:00','10:00-11:00'],'A2.1':['10:00-11:00','11:00-12:00'],'B1.1':['09:00-10:00','11:00-12:00']}
  } },

  iniciacion:{ idiomas: {
      frances:{ A1:['16:00-17:00','17:00-18:00'], A2:['16:00-17:00','17:00-18:00'] },
      aleman:{ A1:['16:00-17:00','17:00-18:00'] },
      italiano:{ A1:['16:00-17:00','17:00-18:00'] },
      portugues:{ A1:['16:00-17:00','17:00-18:00'] },
      japones:{ A1:['16:00-17:00','17:00-18:00'] },
      chino:{   A1:['16:00-17:00','17:00-18:00'] },
      coreano:{A1:['16:00-17:00','17:00-18:00'] }
  } }
};

// Función para poblar los radios de periodo según tipo de curso
function populatePeriodos() {
  const tipo = document.getElementById('tipo_curso').value;
  const cont = document.getElementById('periodo-options');
  const grp  = document.getElementById('periodo-group');
  let opts   = [];

  if (tipo === 'intensivo') {
    opts = [{ label: '4 - 31 julio', start: '2025-07-04', end: '2025-07-31' }];
  } else if (tipo === 'regular') {
    opts = [{ label: '16 junio - 25 julio', start: '2025-06-16', end: '2025-07-25' }];
  } else if (tipo === 'iniciacion') {
    opts = [
      { label: '2 - 30 junio', start: '2025-06-02', end: '2025-06-30' },
      { label: '4 - 31 julio', start: '2025-07-04', end: '2025-07-31' }
    ];
  }

  if (!opts.length) {
    grp.style.display = 'none';
    return;
  }
  grp.style.display = 'block';

  cont.innerHTML = opts.map((o,i)=>`
    <div class="radio-option">
      <input type="radio" id="periodo_${i}" name="periodo" value="${o.start}|${o.end}" required>
      <label for="periodo_${i}">${o.label}</label>
    </div>
  `).join('');

  opts.forEach((o,i)=>{
    document.getElementById(`periodo_${i}`).addEventListener('change', e=>{
      const [s,f] = e.target.value.split('|');
      document.getElementById('fecha_inicio').value = s;
      document.getElementById('fecha_fin').value    = f;
    });
  });

  // preseleccionar si sólo hay uno
  const radios = cont.querySelectorAll('input[type="radio"]');
  if (radios.length === 1) {
    radios[0].checked = true;
    radios[0].dispatchEvent(new Event('change'));
  }
}

// ————————————————————————————————
// 4) bindFormLogic: maneja selects y checkbox “otro…”
// ————————————————————————————————
function bindFormLogic() {
  const form    = document.getElementById('form-inscripcion');
  const tipo    = form.tipo_curso;
  const idioma  = form.idioma;
  const nivel   = form.nivel_ingreso;
  const horario = form.horario;
  const otroGrp = document.getElementById('horario-otro-group');
  const otroInp = document.getElementById('horario_otro');

  const placeholder = txt => `<option value="" disabled selected>${txt}</option>`;

  tipo.addEventListener('change', ()=>{
    // poblar idiomas
    const langs = Object.keys(availability[tipo.value]?.idiomas||{});
    idioma.innerHTML = langs.length
      ? [placeholder('Selecciona un idioma…'), ...langs.map(l=>`<option value="${l}">${l.charAt(0).toUpperCase()+l.slice(1)}</option>`)].join('')
      : placeholder('Selecciona tipo primero…');
    nivel.innerHTML   = placeholder('Idioma primero…');
    horario.innerHTML = placeholder('Nivel primero…');

    // poblar periodos
    populatePeriodos();
  });

  idioma.addEventListener('change', ()=>{
    const lvls = Object.keys(availability[tipo.value]?.idiomas[idioma.value]||{});
    nivel.innerHTML = lvls.length
      ? [placeholder('Selecciona un nivel…'), ...lvls.map(v=>`<option value="${v}">${v}</option>`)].join('')
      : placeholder('Primero elige idioma…');
    horario.innerHTML = placeholder('Nivel primero…');
  });

  nivel.addEventListener('change', ()=>{
    const slots = availability[tipo.value]?.idiomas[idioma.value]?.[nivel.value]||[];
    horario.innerHTML = [
      placeholder('Selecciona un horario…'),
      ...slots.map(h=>`<option value="${h}">${h}</option>`),
      '<option value="otro">Otro…</option>'
    ].join('');
  });

  horario.addEventListener('change', ()=>{
    if (horario.value === 'otro') {
      otroGrp.style.display = 'block'; otroInp.required = true;
    } else {
      otroGrp.style.display = 'none';  otroInp.required = false; otroInp.value = '';
    }
  });

  // inicializar
  tipo.dispatchEvent(new Event('change'));
}

// ————————————————————————————————
// 5) attachInscriptionHandler: AJAX + feedback + temporizador
// ————————————————————————————————
function attachInscriptionHandler() {
  const form     = document.getElementById('form-inscripcion');
  const feedback = document.getElementById('insc-feedback');
  const btn      = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    feedback.className = ''; feedback.textContent = 'Enviando…';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res  = await fetch('http://127.0.0.1:8000/api/inscripcion/', {
        method:'POST', mode:'cors',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      });
      const json = await res.json();
      feedback.classList.add(json.status==='ok'?'success':'error');
      feedback.textContent = json.message;
      if (json.status==='ok') form.reset();
    } catch {
      feedback.classList.add('error');
      feedback.textContent = 'Error de red. Intenta más tarde.';
    } finally {
      setTimeout(()=>{
        feedback.textContent='';
        feedback.className='';
        btn.disabled=false;
      },5000);
    }
  });
}

// ————————————————————————————————
// 6) Inicializar en DOMContentLoaded
// ————————————————————————————————
document.addEventListener('DOMContentLoaded', ()=>{
  // activar menú lateral
  document.querySelectorAll('.course-menu .rect').forEach(r=>{
    r.addEventListener('click', ()=>{/* ya enlazado arriba */});
  });
});