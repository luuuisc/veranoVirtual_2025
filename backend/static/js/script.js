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
      <h4><strong>CURSOS virtuales INTENSIVOS</strong> de verano 2025 para la Comunidad UNAM.</h4>

      <h4 style="color: red; text-align: center;">
      Últimas inscripciones hasta el 6 de julio.
      </h4>

      <p><strong>DURACIÓN :</strong><br>
      Del 7 al 31 de julio ó del 7 de julio al 4 de agosto, 3 horas diarias, de lunes a viernes, en tiempo real y en grupos pequeños</p>

      <p><strong>HORARIOS :</strong></p>
      <ul>
        <li><strong>INGLÉS A1</strong>
          <ul>
            <li>7-10 hrs</li>
            <li>10-13 hrs</li>
          </ul>
        </li>
        <li><strong>INGLÉS A2</strong>
          <ul>
            <li>7-10 hrs</li>
            <li>19-22 hrs</li>
          </ul>
        </li>
        <li><strong>FRANCÉS A1</strong>
          <ul>
            <li>7-10 hrs</li>
          </ul>
        </li>
        <li><strong>ALEMÁN A1</strong>
          <ul>
            <li>11-14 hrs</li>
          </ul>
        </li>
      </ul>

      <p><strong>IMPORTANTE</strong><br>
      <ol>
        <li>El periodo de inscripción a estos cursos es del 10 al 25 de junio, el cupo por grupo es de 4 a 12 alumnos máximo.</li>
        <li>Si no encontraste el idioma, horario o nivel que te interesa, envía un WhatsApp al 55 1340 40604 con tu nombre completo y tu propuesta.</li>
        <li>Si hubiera lugar podrá haber inscripciones hasta el 7 de julio sin reposiciones de clase ni descuentos adicionales.</li>
      </ol>

      <p>La inscripción es de <strong>$250</strong> y la colegiatura por el curso de 60 horas es de <strong>$3 000</strong>.</p>

      <p>Aparte del llenado del formulario, te recomendamos enviar los siguientes datos <strong>vía WhatsApp al 55 1340 4064</strong>:</p>
      <ol>
        <li>Nombre completo de quien tomará el curso :</li>
        <li>Nombre completo y teléfono del padre o tutor, si quien va a tomar el curso es menor a 18 años :</li>
        <li>Idioma :</li>
        <li>Nivel :</li>
        <li>Horario :</li>
        <li>Foto o captura del depósito o transferencia de la inscripción y colegiatura. (Total <strong>$3 250</strong>)</li>
      </ol>

      <p><strong>DISTRIBUCIÓN :</strong><br>
      Cada semana se preveen 30 horas de actividad :</p>
      <ul>
        <li><strong>A.</strong> 15 horas en sesiones sincrónicas en tiempo real (clases), o sea 3 horas diarias, de lunes a viernes.</li>
        <li><strong>B.</strong> 15 horas de tareas (actividades en autonomía), o sea 3 horas diarias de lunes a viernes.</li>
      </ul>

      <p><strong>ALCANCE :</strong><br>
      En 4 semanas alcanzas un nivel oficial internacional, si asistes puntualmente, participas activamente y te comprometes totalmente con tu proceso de aprendizaje.</p>

      <p><strong>CUPO POR GRUPO :</strong><br>
      Mínimo 4, máximo 12 participantes</p>

      <p><strong>INCLUYE :</strong></p>
      <ul>
        <li>Material multimedia</li>
        <li>Constancia de equivalencia de nivel oficial internacional si obtienes al final del curso un promedio igual o superior a 8.</li>
      </ul>

      <p><strong>EXAMEN DE COLOCACIÓN</strong><br>
      Para ingresar a los niveles A2, B1 o B2 es necesario presentar un examen de colocación cuyo costo es de $150, o bien una constancia que acredite tu nivel inmediato anterior. Se puede tramitar entre el 10 y el 25 de junio.</p>
      <!-- Sección: Inscripción al examen de colocación -->
      <section id="examen-colocacion" class="info-block">
        <h3>¿Cómo me inscribo al examen de colocación?</h3>
        <ol>
          <li>Cubres el costo del examen de colocación y envías la foto o captura del depósito o transferencia al 55 1340 4064 con tu Nombre Completo</li>
          <li>Nos das tres fechas y horarios en los que lo puedas presentar. Es virtual.</li>
          <li>Te confirmamos una de las tres fechas y horarios que elegiste.</li>
          <li>Te enviamos el link para ese día y hora.</li>
          <li>Con base en tu nivel, escoges el horario que te convenga.</li>
        </ol>
      </section>

      <p><strong>CONSIDERA QUE …</strong><br>
      Este curso te permitirá:</p>
      <ul>
        <li>Aprovechar tu tiempo sin prisa, pero con intención.</li>
        <li>Enriquecer tu formación académica de forma dinámica.</li>
        <li>Prepararte mejor para intercambios, becas, empleos.</li>
        <li>No desconectarte del todo, sino recargarte con algo que te aporta y te hace crecer.</li>
        <li>Ganar seguridad y fluidez gracias a la práctica constante.</li>
      </ul>
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
      <h4>CURSOS virtuales REGULARES de verano 2025 para la Comunidad UNAM.</h4>

      <h4 style="color: red; text-align: center;">
      ¡ÚLTIMOS LUGARES!
      </h4>

      <p><strong>DURACIÓN</strong><br>
      Del 16 de junio al 25 de julio, una hora diaria, de lunes a viernes, durante 6 semanas, en tiempo real y en grupos pequeños</p>

      <p><strong>HORARIOS</strong></p>
      <ul>
        <li><strong>INGLÉS A1.1</strong><br>
            8-9 hrs<br>
            16-17 hrs<br>
            20-21 hrs
        </li>
        <li><strong>INGLÉS A2.1</strong><br>
            10-11 hrs<br>
        </li>
        <li><strong>INGLÉS B1.1</strong><br>
            11-12 hrs<br>
        </li>
        <li><strong>FRANCÉS A1.1</strong><br>
            10-11 hrs
        </li>
        <li><strong>ITALIANO A1.1</strong><br>
            7-8 hrs<br>
        </li>
      </ul>

      <p><strong>IMPORTANTE</strong><br>
      <ol>
        <li>Si no encontraste el idioma, horario o nivel que te interesa, envía un WhatsApp al 55 1340 40604 con tu nombre completo y tu propuesta.</li>
        <li>El cupo por grupo es de 4 a 12 alumnos máximo.</li>
        <li>Si hubiera lugar podrá haber inscripciones hasta el 25 de junio sin reposiciones de clase ni descuentos adicionales.</li>
      </ol>

      <p>La inscripción es de <strong>$250</strong> y la colegiatura por el curso de 30 horas, es de <strong>$1500</strong>.</p>

      <p>Aparte del llenado del formulario, te recomendamos también enviar los siguientes datos <em>vía WhatsApp</em> al <a href="https://wa.me/525513404064" target="_blank">55 1340 4064</a>:</p>
      <ol>
        <li>Nombre completo de quien tomará el curso :</li>
        <li>Nombre completo y número de teléfono del padre o tutor, si quien va a tomar el curso es menor a 18 años :</li>
        <li>Idioma :</li>
        <li>Nivel :</li>
        <li>Horario :</li>
        <li>Foto o captura de pantalla de la inscripción y de la colegiatura. ( Total : <strong>$1750</strong> )</li>
      </ol>

      <p><strong>DISTRIBUCIÓN</strong><br>
      Cada semana se preeven 10 horas :</p>
      <ul>
        <li><strong>A.</strong> 5 horas en sesiones sincrónicas en tiempo real (clases), o sea 1 hora diaria, de lunes a viernes.</li>
        <li><strong>B.</strong> 5 horas de tareas (actividades en autonomía), o sea 1 hora diaria de lunes a viernes.</li>
      </ul>

      <p><strong>ALCANCE :</strong><br>
      En 6 semanas alcanzas medio nivel oficial internacional, si asistes puntualmente, participas activamente y te comprometes totalmente con tu proceso de aprendizaje.</p>

      <p><strong>CUPO POR GRUPO :</strong><br>
      Mínimo 4, máximo 12 participantes</p>

      <p><strong>INCLUYE :</strong></p>
      <ul>
        <li>Material multimedia</li>
        <li>Constancia de equivalencia de nivel oficial internacional si obtienes al final del curso un promedio igual o superior a 8.</li>
      </ul>

      <p><strong>EXAMEN DE COLOCACIÓN :</strong><br>
      Para ingresar a los niveles A2.1, B1.1 o B2.1 es necesario que presentes un examen de colocación cuyo costo es de $150, o bien, una constancia que acredite tu nivel inmediato anterior.</p>
      <!-- Sección: Inscripción al examen de colocación -->
      <section id="examen-colocacion" class="info-block">
        <h3>¿Cómo me inscribo al examen de colocación?</h3>
        <ol>
          <li>Cubres el costo del examen de colocación y envías la foto o captura del depósito o transferencia al 55 1340 4064 con tu Nombre Completo</li>
          <li>Nos das tres fechas y horarios en los que lo puedas presentar. Es virtual.</li>
          <li>Te confirmamos una de las tres fechas y horarios que elegiste.</li>
          <li>Te enviamos el link para ese día y hora.</li>
          <li>Con base en tu nivel, escoges el horario que te convenga.</li>
        </ol>
      </section>

      <p><strong>IMPORTANTE :</strong><br>
      Este curso te permitirá:</p>
      <ul>
        <li>Avanzar con constancia y equilibrio, sin dejar de disfrutar tu verano.</li>
        <li>Incorporar el idioma a tu rutina diaria sin agobiarte.</li>
        <li>Mantener tu mente activa y tu motivación constante a lo largo de 6 semanas.</li>
        <li>Ganar seguridad y fluidez mediante una práctica continua, sin presiones.</li>
      </ul>
    `
  },
  'ini-prepa': {
  title: 'Iniciación - Verano 2025',
  content: `
    <h4>CURSOS virtuales <strong>DE INICIACIÓN</strong> a una lengua  extranjera, para la <strong>Comunidad  UNAM</strong>, idealmente de 15 años en adelante.</h4>

    <p><strong>DURACIÓN :</strong><br>
    ( Del 4 al 31 de <strong>JULIO</strong> : 12 horas en total )</p>

    <p><strong>HORARIOS :</strong></p>
    <ul>
      <li><strong>ALEMÁN</strong><br>
          Lunes, miércoles y viernes de 18 a 19 hrs
      </li>
      <li><strong>ARABE</strong><br>
          Lunes, miércoles y viernes de 19-20 hrs
      </li>
      <li><strong>COREANO</strong><br>
          Martes y jueves de 9-10:30 hrs
      </li>
      <li><strong>FRANCÉS</strong><br>
          Lunes, miércoles y viernes de 18 a 19 hrs
      </li>
      <li><strong>ITALIANO</strong><br>
          Lunes, miércoles y viernes de 15 a 16 hrs
      </li>
      <li><strong>JAPONÉS</strong><br>
          Lunes, miércoles y viernes de 17 a 18 hrs
      </li>
      <li><strong>PORTUGUÉS</strong><br>
          Lunes, miércoles y viernes de 11-12 hrs
      </li>
    </ul>

    <p><strong>ALCANCE</strong><br>
    En cuatro semanas lograrás adquirir una percepción general de la lengua extranjera que hayas elegido para decidir posteriormente y con mayor certeza, si deseas iniciar el estudio formal de la misma...</p>

    <p><strong>PERIODO DE INSCRIPCIONES</strong><br>
    El periodo de inscripción a estos cursos es del 10 al 20 de junio, el cupo por grupo es de 6 a 12 alumnos máximo.</p>

    <p>La inscripción es de <strong>$250</strong> y la colegiatura por el curso de 12 horas es de <strong>$600</strong> ( ya está aplicado el 50% de descuento para la comunidad UNAM ).</p>

    <p>En el llenado de la ficha de inscripción, favor de anotar los datos de quien tomará el curso, no de quien l@ inscribe.</p>

    <p><strong>IMPORTANTE :</strong><br>
    Enviar los siguientes datos vía WhatsApp al <a href="https://wa.me/525513404064" target="_blank">55 1340 4064</a> :</p>
    <ol>
      <li>Nombre completo de quien tomará el curso :</li>
      <li>Nombre completo y número de teléfono del padre o tutor, si quien va a tomar el curso es menor a 18 años :</li>
      <li>Idioma :</li>
      <li>Nivel :</li>
      <li>Horario :</li>
      <li>Foto o captura del depósito o transferencia de la inscripción y colegiatura. ( Total <strong>$850</strong> )</li>
    </ol>

    <p><strong>CUPO POR GRUPO :</strong><br>
    Mínimo 6, máximo 12 participantes</p>

    <p><strong>INCLUYE :</strong></p>
    <ul>
      <li>Material multimedia</li>
      <li>Constancia de participación</li>
    </ul>

    <p><strong>A CONSIDERAR...</strong><br>
    Este curso te permitirá:</p>
    <ul>
      <li>Descubrir si ese idioma que te llama la atención puede ser parte de tu camino.</li>
      <li>Aprender frases útiles y expresiones básicas desde el primer día.</li>
      <li>Explorar costumbres, música, gastronomía y escritura de otras culturas.</li>
      <li>Dar el primer paso hacia una formación global y un perfil internacional.</li>
      <li>Tener una experiencia enriquecedora que puedes continuar más adelante.</li>
    </ul>
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
          <i class="fab fa-whatsapp"></i>55 1340 4064<br>
        </a>
        <a href="tel:+525573980411">
          <i class="fab fa-whatsapp"></i>55 7398 0411
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
        <div id="insc-announcement" class="announcement">
          ⚠️ ¡IMPORTANTE! Abrimos un grupo con al menos 4 alumnos inscritos.<br><br>
          Te recomendamos considerar un horario que ya tenga alumnos inscritos o bien reflexionar sobre otras posibilidades de horario o cambio de idioma (si eres principiante)<br>
        </div>
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
          <div class="inscritos-info">
            Inscritos en este horario: <span id="inscritos-count-inline">0</span>
          </div>
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
          <input type="hidden" id="fecha_fin" name="fecha_fin" required>
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

// 2) DOMContentLoaded: menú lateral + renderizado dinámico
// ————————————————————————————————
document.addEventListener('DOMContentLoaded', () => {
  const rects = document.querySelectorAll('.course-menu .rect');
  const infoBox = document.getElementById('course-info');

  rects.forEach(rect => {
    rect.addEventListener('click', () => {
      // 1) Desactivar todos
      rects.forEach(r => r.classList.remove('active'));
      // 2) Activar el clicado
      rect.classList.add('active');

      // 3) Renderizar contenido
      const key = rect.id;
      const data = courseDetails[key];
      infoBox.innerHTML = `<h3>${data.title}</h3>${data.content}`;

      // 4) Si es Inscripción, inicializar TODO
      if (key === 'inscripcion') {
        bindFormLogic();
        populatePeriodos();
        attachInscriptionHandler();
        document.getElementById('tipo_curso').dispatchEvent(new Event('change'));
      }

      // 5) Scroll suave
      infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});


// Diccionario de idiomas
const languageLabels = {
  ingles:   'Inglés',
  frances:  'Francés',
  aleman:   'Alemán',
  italiano: 'Italiano',
  portugues: 'Portugués',
  japones:  'Japonés',
  chino:    'Chino',
  coreano:  'Coreano'
};


// ————————————————————————————————
// 3) availability: idiomas → niveles → horarios (strings) o bloques { dias, horas }
// ————————————————————————————————
const availability = {
  intensivo: {
    idiomas: {
      ingles: {
        A1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '07:00-10:00','10:00-13:00',
          ] }
        ],
        A2: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '07:00-10:00','19:00-22:00'
          ] }
        ],
        /*
        B1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '07:00-10:00','10:00-13:00','19:00-22:00'
          ] }
        ],
        B2: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '10:00-13:00',
          ] }
        ]*/
      },
      frances: {
        A1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '07:00-10:00',
          ] }
        ],
        /*
        A2: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '10:00-13:00','16:00-19:00'
          ] }
        ],
        B1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '10:00-13:00'
          ] }
        ],
        B2: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '19:00-22:00'
          ] }
        ]*/
      },
      aleman: {
        A1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '11:00-14:00',
          ] }
        ]
      },
      /*
      italiano: {
        A1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '11:00-14:00',
          ] }
        ]
      },
      portugues: {
        A1: [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
            '10:00-13:00','19:00-22:00'
          ] }
        ]
      }*/
    }
  },

  /*
  regular: {
    idiomas: {
      ingles: {
        'A1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '08:00-09:00','16:00-17:00','20:00-21:00'
          ] }
        ],
        'A2.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '10:00-11:00'
          ] }
        ],
        'B1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '11:00-12:00'
          ] }
        ],
        
        'B2.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '13:00-14:00','21:00-22:00'
          ] }
        ]
      },

      frances: {
        'A1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '10:00-11:00',
          ] }
        ],
        
        'A2.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '07:00-08:00','10:00-11:00','16:00-17:00','19:00-20:00'
          ] }
        ],
        'B1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '08:00-09:00','20:00-21:00'
          ] }
        ],
        'B2.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '08:00-09:00','21:00-22:00'
          ] }
        ]
      },
      
      portugues: {
        'A1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '08:00-09:00','19:00-20:00'
          ] }
        ]
      },

      italiano: {
        'A1.1': [
          { dias: ['Lun','Mar','Mié','Jue','Vie'], horas: [
              '07:00-08:00'
          ] }
        ]
      },

      /*
      aleman: {
        'A1.1': [
          { dias: ['Sáb'], horas: [
              '16:00-19:00','19:00-22:00'
          ] }
        ]
      }
    }
  },

  
  iniciacion: {
  idiomas: {
    aleman: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['18:00-19:00'] }
      ]
    },
    arabe: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['19:00-20:00'] }
      ]
    },
    coreano: {
      A1: [
        { dias: ['Mar','Jue'], horas: ['9:00-10:30'] }
      ]
    },
    chino: {
      A1: [
        { dias: ['Lun','Mié','Jue'], horas: ['19:00-20:00'] }
      ]
    },
    
    frances: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['18:00-19:00',] }, 
      ]
    },
    italiano: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['15:00-16:00'] }
      ]
    },
    japones: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['17:00-18:00'] }
      ]
    },
    portugues: {
      A1: [
        { dias: ['Lun','Mié','Vie'], horas: ['11:00-12:00'] }
      ]
    }
  }
},*/
};

// ————————————————————————————————
// 4) populatePeriodos: radios de periodo según tipo_curso
// ————————————————————————————————
function populatePeriodos() {
  const tipo = document.getElementById('tipo_curso').value;
  const cont = document.getElementById('periodo-options');
  const grp  = document.getElementById('periodo-group');
  let opts   = [];

  if (tipo === 'intensivo') {
    opts = [{ label:'4 - 31 julio',   start:'2025-07-04', end:'2025-07-31' }];
  } else if (tipo === 'regular') {
    opts = [{ label:'16 jun - 25 jul', start:'2025-06-16', end:'2025-07-25' }];
  } else if (tipo === 'iniciacion') {
    opts = [
      { label:'4 - 31 julio', start:'2025-07-04', end:'2025-07-31' }
    ];
  }

  if (!opts.length) {
    grp.style.display = 'none';
    return;
  }
  grp.style.display = 'block';

  cont.innerHTML = opts.map((o,i)=>`
    <div class="radio-option">
      <input type="radio" id="periodo_${i}" name="periodo" 
             value="${o.start}|${o.end}" required>
      <label for="periodo_${i}">${o.label}</label>
    </div>
  `).join('');

  opts.forEach((o,i)=>{
    document.getElementById(`periodo_${i}`)
      .addEventListener('change', e => {
        const [s,f] = e.target.value.split('|');
        document.getElementById('fecha_inicio').value = s;
        document.getElementById('fecha_fin').value    = f;
      });
  });

  // auto-select si sólo hay uno
  const r = cont.querySelectorAll('input[type="radio"]');
  if (r.length === 1) {
    r[0].checked = true;
    r[0].dispatchEvent(new Event('change'));
  }
}

// ————————————————————————————————
// 5) bindFormLogic: manejamos selects y “otro…” + fetch de count
// ————————————————————————————————
function bindFormLogic() {
  const form    = document.getElementById('form-inscripcion');
  const tipo    = form.tipo_curso;
  const idioma  = form.idioma;
  const nivel   = form.nivel_ingreso;
  const horario = form.horario;
  const otroGrp = document.getElementById('horario-otro-group');
  const otroInp = document.getElementById('horario_otro');
  const inlineCount = document.getElementById('inscritos-count-inline');

  const placeholder = txt => `<option value="" disabled selected>${txt}</option>`;

  // 5.1) al cambiar tipo → poblamos idiomas + periodos
  tipo.addEventListener('change', () => {
    const langs = Object.keys(availability[tipo.value]?.idiomas||{});
    idioma.innerHTML = langs.length
    ? [ placeholder('Selecciona un idioma…'),
        ...langs.map(l => {
          const label = languageLabels[l] || (l.charAt(0).toUpperCase() + l.slice(1));
          return `<option value="${l}">${label}</option>`;
        })
      ].join('')
    : placeholder('Selecciona tipo primero…');

    nivel.innerHTML   = placeholder('Idioma primero…');
    horario.innerHTML = placeholder('Nivel primero…');

    populatePeriodos();
    // No inlineCount update needed here
  });

  // 5.2) al cambiar idioma → poblamos niveles
  idioma.addEventListener('change', () => {
    const lvls = Object.keys(availability[tipo.value]?.idiomas[idioma.value]||{});
    nivel.innerHTML = lvls.length
      ? [ placeholder('Selecciona un nivel…'),
          ...lvls.map(v=>`<option value="${v}">${v}</option>`)
        ].join('')
      : placeholder('Primero elige idioma…');
    horario.innerHTML = placeholder('Nivel primero…');
    // No inlineCount update needed here
  });

  // 5.3) al cambiar nivel → poblamos horarios con bloques o strings
  nivel.addEventListener('change', () => {
    const conf = availability[tipo.value]?.idiomas[idioma.value]?.[nivel.value] || [];
    populateHorarios(conf, horario, placeholder);
    // No inlineCount update needed here
  });

  // 5.4) al cambiar horario → mostramos count y “otro” si aplica
  horario.addEventListener('change', () => {
    if (horario.value === 'otro') {
      otroGrp.style.display = 'block';
      otroInp.required      = true;
      // No inlineCount update for "otro"
      return;
    }
    otroGrp.style.display = 'none';
    otroInp.required      = false;
    otroInp.value         = '';
    // —— fetch count inscripciones ——
    const params = new URLSearchParams({
      tipo_curso: tipo.value,
      idioma:     idioma.value,
      nivel_ingreso: nivel.value,
      horario:    horario.value
    });
    fetch(`/api/inscripcion/count/?${params}`, { method: 'GET' })
      .then(r => r.json())
      .then(json => {
        const n = json.count;
        inlineCount.textContent = n;
      })
      .catch(()=>{
        inlineCount.textContent = '0';
      });
  });

  // disparamos el primero
  tipo.dispatchEvent(new Event('change'));
}

// ————————————————————————————————
// 6) populateHorarios: strings vs bloques {dias, horas}
// ————————————————————————————————
function populateHorarios(conf, selectEl, placeholder) {
  let opts = [ placeholder('Selecciona un horario…') ];
  if (conf.length && typeof conf[0] === 'string') {
    conf.forEach(h => opts.push(`<option value="${h}">${h}</option>`));
  } else {
    conf.forEach(block => {
      block.horas.forEach(h => {
        opts.push(`<option value="${h}">${block.dias.join(', ')} — ${h}</option>`);
      });
    });
  }
  opts.push('<option value="otro">Otro…</option>');
  selectEl.innerHTML = opts.join('');
}

// ————————————————————————————————
// 7) attachInscriptionHandler: tu AJAX + Stripe Checkout
// ————————————————————————————————
function attachInscriptionHandler() {
  const form     = document.getElementById('form-inscripcion');
  const feedback = document.getElementById('insc-feedback');
  const btn      = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    feedback.className   = '';
    feedback.textContent = 'Procesando…';
    btn.disabled         = true;

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // 1) Guardar la inscripción en tu BD
      let res = await fetch('/api/inscripcion/', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      let json = await res.json();

      if (json.status !== 'ok') {
        feedback.classList.add('error');
        feedback.textContent = json.message;
        btn.disabled = false;
        return;
      }

      /*
      // 2) Crear Checkout según nivel
      res = await fetch('/api/inscripcion/create-session/', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);

      // 3) Redirigir al Checkout de Stripe
      window.location = url;
      */

      // 2) Aviso de pago manual
      feedback.classList.add('success');
      feedback.innerHTML = `
          <p>
          <strong>
            TU ALTA EN EL CURSO QUE ELEGISTE AÚN NO ESTÁ TERMINADA HASTA QUE REALICES EL PAGO DE $250 DE INSCRIPCIÓN
          </strong>
          <br>
          Y LA COLEGIATURA CORRESPONDIENTE Y ENVÍES DICHO(S) COMPROBANTE(S), CON TU NOMBRE COMPLETO AL WHATSAPP
          <a href="https://wa.me/5215513404064" target="_blank" rel="noopener">55&nbsp;1340&nbsp;4064</a>.
          <br>
          EN CASO DE QUERER PRESENTAR EL EXAMEN DE COLOCACIÓN DEBES ENVIAR LA PALABRA “<strong>EC</strong>” Y EL IDIOMA ELEGIDO AL MISMO NÚMERO DE WHATSAPP.
        </p>
      `;

      form.reset();

    } catch (err) {
      console.error(err);
      feedback.classList.add('error');
      feedback.textContent = err.message || 'Error, inténtalo más tarde.';
      btn.disabled = false;
    }
  });
}