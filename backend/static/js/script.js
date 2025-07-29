// Detalles de cada curso
const courseDetails = {
  clx: {
    title: "Nosotros",
    content: `
      <p>Somos un gran equipo sinérgico, multilingüe y multicultural, conformado por colaboradores responsables y comprometidos. 
      Nos apasiona compartir nuestra experiencia en cada curso, proyecto, alianza o servicio. 
      Trabajamos día a día para satisfacer a plenitud a quienes depositan su confianza en nosotros.</p><br>

      <p>Nuestra actividad se basa en los aportes de la de la Didáctica, de la Lingüística aplicada, de las Neurociencias, 
      asi como en los beneficios de la Virtualidad, de la Inteligencia Artificial y de la Mensajería instantánea, 
      sin olvidar nunca que somos y atendemos a Seres Humanos.<p>
    `,
  },
  intensivos: {
    title: "Intensivos - Verano 2025",
    content: `
       <h4>
    <span class="small">Cursos</span>
    <span class="medium">VIRTUALES</span>
    <span class="large">INTENSIVOS</span>
  </h4>
  <p><strong>Para la comunidad UNAM</strong></p>
  <p><strong>Periodo:</strong> Agosto - Octubre 2025</p>

  <p><strong>INSCRIPCIONES:</strong><br>
     Del 1 al 13 de agosto. Cupo limitado.</p>

  <p><strong>DURACIÓN:</strong><br>
     Del 18 de agosto al 27 de octubre<br>
     (5 horas por semana durante 10 semanas)</p>

  <p><strong>ALCANCE:</strong><br>
     Se avanza un nivel oficial al cabo de 60 horas de clase en tiempo real y aproximadamente 120 horas de tareas extra clase.</p>

  <p><strong>HORARIOS:</strong></p>
  <ul>
    <li><strong>I. Lunes a viernes</strong>
      <ul>
        <li><strong>INGLÉS A1 (desde 00)</strong><br>
            7-8 hrs<br>
            8-9 hrs<br>
            14-15 hrs<br>
            17-18 hrs<br>
            20-21 hrs
        </li>
        <li><strong>INGLÉS A2</strong><br>
            7-8 hrs<br>
            13-14 hrs<br>
            20-21 hrs
        </li>
        <li><strong>INGLÉS B1</strong><br>
            13-14 hrs<br>
            21-22 hrs
        </li>
        <li><strong>INGLÉS B2</strong><br>
            21-22 hrs
        </li>
        <li><strong>FRANCÉS A1 (desde 00)</strong><br>
            7-8 hrs<br>
            8-9 hrs<br>
            17-18 hrs<br>
            20-21 hrs
        </li>
        <li><strong>FRANCÉS A2</strong><br>
            7-8 hrs<br>
            13-14 hrs<br>
            21-22 hrs
        </li>
      </ul>
    </li>
    <li><strong>II. Sábados y domingos</strong>
      <ul>
        <li><strong>INGLÉS A1 (desde 00)</strong><br>
            8-11 hrs<br>
            11-14 hrs<br>
            19:30-22 hrs
        </li>
        <li><strong>INGLÉS A2</strong><br>
            8-11 hrs<br>
            11-14 hrs<br>
            19:30-22 hrs
        </li>
        <li><strong>INGLÉS B1</strong><br>
            8-11 hrs<br>
            11-14 hrs<br>
            19:30-22 hrs
        </li>
        <li><strong>FRANCÉS A1 (desde 00)</strong><br>
            8-11 hrs<br>
            11-14 hrs<br>
            19:30-22 hrs
        </li>
        <li><strong>FRANCÉS A2</strong><br>
            8-11 hrs<br>
            11-14 hrs<br>
            19:30-22 hrs
        </li>
      </ul>
    </li>
  </ul>

  <p><strong>IMPORTANTE:</strong></p>
  <ul>
    <li>Si deseas inscribirte a un nivel u horario diferente de inglés o francés, así como a otro idioma (alemán, italiano, portugués, japonés, chino, coreano, español para extranjeros u otro), ingresa a la sección <strong>“LISTA DE ESPERA”</strong>.</li>
    <li>El periodo de inscripción a estos cursos es del 10 al 25 de junio; el cupo por grupo es de 6 a 15 alumnos máximo.</li>
    <li>La inscripción es de <strong>$250</strong> y la colegiatura para el curso <strong>INTENSIVO</strong> de 10 semanas es de <strong>$3,000</strong>.</li>
    <li>El cupo por grupo es de mínimo 6, máximo 12 participantes.</li>
    <li>Incluye material multimedia.</li>
    <li>Al final del curso se otorga una constancia de equivalencia de nivel oficial internacional, si se obtiene un promedio mínimo de 8.</li>
  </ul>

  <section id="examen-colocacion-intensivo" class="info-block">
    <h3>EXAMEN DE COLOCACIÓN</h3>
    <p>Para ingresar a los niveles A2, B1 o B2 es necesario presentar un examen de colocación cuyo costo es de <strong>$150</strong>, o bien, una constancia que acredite el nivel inmediato anterior.<br>
    Para tramitar dicho examen ingresa a la sección <strong>“EXAMEN DE COLOCACIÓN”</strong>.</p>
  </section>
    `
  },
  "semi-intensivos": {
    title: "Semi intensivos",
    content: `
      <p>Clases 3 veces por semana durante 8 semanas. 
      Equilibrio perfecto entre ritmo acelerado y tiempo para asimilar contenidos.</p>
    `,
  },
  regulares: {
    title: "Regulares - VIRTUALES 2025",
    content: `
      <h4>
          <span style="font-size: 1em;">Cursos</span>
          <span style="font-size: 1em;">VIRTUALES</span>
          <span style="font-size: 1em;">regulares</span>
      </h4>
<p><strong>Para la comunidad UNAM</strong></p>
<p><strong>Periodo:</strong> Agosto - Octubre 2025</p>

<p><strong>INSCRIPCIONES:</strong><br>
Del 1 al 13 de agosto. Cupo limitado.</p>

<p><strong>DURACIÓN:</strong><br>
Del 18 de agosto al 27 de octubre<br>
(3 horas por semana durante 10 semanas)</p>

<p><strong>ALCANCE:</strong><br>
Se avanza medio nivel oficial al cabo de 30 horas de clase en tiempo real y aproximadamente 60 horas de tareas extra clase.</p>

<p><strong>HORARIOS:</strong></p>
<ul>
  <li><strong>I. Lunes, miércoles y viernes</strong>
    <ul>
      <li><strong>INGLÉS A1 (Primera parte: desde 00)</strong><br>
        7-8 hrs<br>
        8-9 hrs<br>
        14-15 hrs<br>
        17-18 hrs<br>
        20-21 hrs
      </li>
      <li><strong>INGLÉS A2 (Primera parte)</strong><br>
        7-8 hrs<br>
        13-14 hrs<br>
        20-21 hrs
      </li>
      <li><strong>INGLÉS B1 (Primera parte)</strong><br>
        13-14 hrs<br>
        21-22 hrs
      </li>
      <li><strong>INGLÉS B2 (Primera parte)</strong><br>
        21-22 hrs
      </li>
      <li><strong>FRANCÉS A1 (Primera parte: desde 00)</strong><br>
        7-8 hrs<br>
        8-9 hrs<br>
        17-18 hrs<br>
        20-21 hrs
      </li>
      <li><strong>FRANCÉS A2 (Primera parte)</strong><br>
        7-8 hrs<br>
        13-14 hrs<br>
        21-22 hrs
      </li>
    </ul>
  </li>
  <li><strong>II. Martes y jueves</strong>
    <ul>
      <li><strong>INGLÉS A1 (Primera parte: desde 00)</strong><br>
        7-8:30 hrs<br>
        13:30-15 hrs<br>
        17-18:30 hrs<br>
        18:30-20 hrs
      </li>
      <li><strong>INGLÉS A2 (Primera parte)</strong><br>
        7-8:30 hrs<br>
        13:30-15 hrs<br>
        20:30-22 hrs
      </li>
      <li><strong>INGLÉS B1 (Primera parte)</strong><br>
        7-8:30 hrs<br>
        20:30-22 hrs
      </li>
      <li><strong>FRANCÉS A1 (Primera parte: desde 00)</strong><br>
        7-8:30 hrs<br>
        13:30-15 hrs<br>
        17:30-19 hrs<br>
        19-20:30 hrs<br>
        20:30-22 hrs
      </li>
      <li><strong>FRANCÉS A2 (Primera parte)</strong><br>
        17-18:30 hrs<br>
        20:30-22 hrs
      </li>
    </ul>
  </li>
  <li><strong>III. Sábados</strong>
    <ul>
      <li><strong>INGLÉS A1 (Primera parte: desde 00)</strong><br>
        8-11 hrs<br>
        11-14 hrs<br>
        14-17 hrs<br>
        17-20 hrs
      </li>
      <li><strong>INGLÉS A2 (Primera parte)</strong><br>
        8-11 hrs<br>
        11-14 hrs<br>
        14-17 hrs<br>
        17-20 hrs
      </li>
      <li><strong>INGLÉS B1 (Primera parte)</strong><br>
        8-11 hrs<br>
        11-14 hrs<br>
        14-17 hrs<br>
        17-20 hrs
      </li>
      <li><strong>FRANCÉS A1 (Primera parte: desde 00)</strong><br>
        8-11 hrs<br>
        11-14 hrs<br>
        14-17 hrs<br>
        17-20 hrs
      </li>
      <li><strong>FRANCÉS A2 (Primera parte)</strong><br>
        8-11 hrs<br>
        11-14 hrs<br>
        14-17 hrs<br>
        17-20 hrs
      </li>
    </ul>
  </li>
  <li><strong>IV. Domingo</strong>
    <ul>
      <li><strong>INGLÉS A1 (Primera parte: desde 00)</strong><br>
        8-11 hrs<br>
        17-20 hrs
      </li>
      <li><strong>INGLÉS A2 (Primera parte)</strong><br>
        8-11 hrs<br>
        17-20 hrs
      </li>
      <li><strong>INGLÉS B1 (Primera parte)</strong><br>
        8-11 hrs<br>
        17-20 hrs
      </li>
      <li><strong>FRANCÉS A1 (Primera parte: desde 00)</strong><br>
        8-11 hrs<br>
        17-20 hrs
      </li>
      <li><strong>FRANCÉS A2 (Primera parte)</strong><br>
        17-20 hrs
      </li>
    </ul>
  </li>
</ul>

<p><strong>IMPORTANTE:</strong></p>
<ul>
  <li>Si deseas inscribirte a un nivel u horario diferente de inglés o francés, así como a otro idioma (alemán, italiano, portugués, japonés, chino, coreano, español para extranjeros u otro), ingresa a la sección <strong>“LISTA DE ESPERA”</strong>.</li>
  <li>El periodo de inscripción a estos cursos es del 10 al 25 de junio; el cupo por grupo es de 6 a 15 alumnos máximo.</li>
  <li>La inscripción es de <strong>$250</strong> y la colegiatura para el curso <strong>REGULAR</strong> de 10 semanas es de <strong>$1500</strong>.</li>
  <li>El cupo por grupo es de mínimo 6, máximo 12 participantes.</li>
  <li>Incluye material multimedia.</li>
  <li>Al final del curso se otorga una constancia de equivalencia de nivel oficial internacional, si se obtiene un promedio mínimo de 8.</li>
</ul>

<section id="examen-colocacion" class="info-block">
  <h3>EXAMEN DE COLOCACIÓN</h3>
  <p>Para ingresar a los niveles A2, B1 o B2 es necesario presentar un examen de colocación cuyo costo es de <strong>$150</strong>, o bien, una constancia que acredite el nivel inmediato anterior.<br>
  Para tramitar dicho examen ingresa a la sección <strong>“EXAMEN DE COLOCACIÓN”</strong>.</p>
</section>`,
  },
  "ini-prepa": {
    title: "Iniciación - Verano 2025",
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
  `,
  },
  "ini-ninos": {
    title: "Iniciación (Niños 6-10 años)",
    content: `
      <p>Clases lúdicas y didácticas para niños de 6 a 10 años. 
      Juegos, canciones y proyectos divertidos para un aprendizaje natural.</p>
    `,
  },
  lectura: {
    title: "Comprensión de lectura",
    content: `
      <p>Enfocado en desarrollar habilidades de lectura, análisis de textos y ampliación de vocabulario. 
      Lecturas auténticas adaptadas a tu nivel.</p>
    `,
  },
  contacto: {
    title: "Contacto",
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
    `,
  },
  // Formulario de inscripción
  inscripcion: {
    title: "Inscripción Nivel A1",
    content: `
      <form id="form-inscripcion" class="inscription-form">
        <h4>Formulario de Inscripción</h4>
        <div id="insc-announcement" class="announcement">
          ⚠️ ¡IMPORTANTE! Abrimos un grupo con al menos 5 alumnos inscritos.<br><br>
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
            <option value="regular">Regular</option>
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
    `,
  },
  examen: {
    title: "Examen de Colocación",
    content: `
      <p>Detalles sobre el examen de colocación...</p>
    `,
  },
  lista: {
    title: "Lista de Espera",
    content: `
      <p>Detalles sobre la lista de espera...</p>
    `,
  },
};

// 2) DOMContentLoaded: menú lateral + renderizado dinámico
// ————————————————————————————————
document.addEventListener("DOMContentLoaded", () => {
  const rects = document.querySelectorAll(".course-menu .rect");
  const infoBox = document.getElementById("course-info");

  rects.forEach((rect) => {
    rect.addEventListener("click", () => {
      // 1) Desactivar todos
      rects.forEach((r) => r.classList.remove("active"));
      // 2) Activar el clicado
      rect.classList.add("active");

      // 3) Renderizar contenido
      const key = rect.id;
      const data = courseDetails[key];
      infoBox.innerHTML = `<h3>${data.title}</h3>${data.content}`;

      // 4) Si es Inscripción, inicializar TODO
      if (key === "inscripcion") {
        bindFormLogic();
        populatePeriodos();
        attachInscriptionHandler();
        document
          .getElementById("tipo_curso")
          .dispatchEvent(new Event("change"));
      }

      // 5) Scroll suave
      infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

// Diccionario de idiomas
const languageLabels = {
  ingles: "Inglés",
  frances: "Francés",
  aleman: "Alemán",
  italiano: "Italiano",
  portugues: "Portugués",
  japones: "Japonés",
  chino: "Chino",
  coreano: "Coreano",
};

// ————————————————————————————————
// 3) availability: idiomas → niveles → horarios (strings) o bloques { dias, horas }
// ————————————————————————————————
const availability = {
  intensivo: {
    idiomas: {
    ingles: {
      A1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["07:00-08:00", "08:00-09:00", "14:00-15:00", "17:00-18:00", "20:00-21:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],
      /*
      A2: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["07:00-08:00", "13:00-14:00", "20:00-21:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],
      B1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["13:00-14:00", "21:00-22:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],
      B2: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["21:00-22:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],*/
    },
    frances: {
      A1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["07:00-08:00", "08:00-09:00", "17:00-18:00", "20:00-21:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],
      /*
      A2: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: ["07:00-08:00", "13:00-14:00", "21:00-22:00"],
        },
        {
          dias: ["Sáb", "Dom"],
          horas: ["08:00-11:00", "11:00-14:00", "19:30-22:00"],
        },
      ],*/
    },
    aleman: {
      A1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: [],
        },
      ],
    },
    italiano: {
      A1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: [],
        },
      ],
    },
    portugues: {
      A1: [
        {
          dias: ["Lun", "Mar", "Mié", "Jue", "Vie"],
          horas: [],
        },
      ],
    },
  },
  },
  regular: {
    idiomas: {
    ingles: {
      'A1': [
        // I. Lunes, miércoles y viernes
        {
          dias: ['Lun', 'Mié', 'Vie'],
          horas: [
            '07:00-08:00',
            '08:00-09:00',
            '14:00-15:00',
            '17:00-18:00',
            '20:00-21:00'
          ],
        },
        // II. Martes y jueves
        {
          dias: ['Mar', 'Jue'],
          horas: [
            '07:00-08:30',
            '13:30-15:00',
            '17:00-18:30',
            '18:30-20:00'
          ],
        },
        // III. Sábados
        {
          dias: ['Sáb'],
          horas: [
            '08:00-11:00',
            '11:00-14:00',
            '14:00-17:00',
            '17:00-20:00'
          ],
        },
        // IV. Domingo
        {
          dias: ['Dom'],
          horas: [
            '08:00-11:00',
            '17:00-20:00'
          ],
        },
      ]
    },

    frances: {
      'A1': [
        // I. Lunes, miércoles y viernes
        {
          dias: ['Lun', 'Mié', 'Vie'],
          horas: [
            '07:00-08:00',
            '08:00-09:00',
            '17:00-18:00',
            '20:00-21:00'
          ],
        },
        // II. Martes y jueves
        {
          dias: ['Mar', 'Jue'],
          horas: [
            '07:00-08:30',
            '13:30-15:00',
            '17:30-19:00',
            '19:00-20:30',
            '20:30-22:00'
          ],
        },
        // III. Sábados
        {
          dias: ['Sáb'],
          horas: [
            '08:00-11:00',
            '11:00-14:00',
            '14:00-17:00',
            '17:00-20:00'
          ],
        },
        // IV. Domingo
        {
          dias: ['Dom'],
          horas: [
            '08:00-11:00',
            '17:00-20:00'
          ],
        },
      ]
    },

    portugues: {
      'A1': [
        // sin horarios definidos aún
      ]
    },

    italiano: {
      'A1': [
        // sin horarios definidos aún
      ]
    },

    aleman: {
      'A1': [
        // sin horarios definidos aún
      ]
    }
  }
  },
  /*
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
  const tipo = document.getElementById("tipo_curso").value;
  const cont = document.getElementById("periodo-options");
  const grp = document.getElementById("periodo-group");
  let opts = [];

  if (tipo === "intensivo") {
    opts = [{ label: "18 agosto - 27 octubre", start: "2025-08-18", end: "2025-09-27" }];
  } else if (tipo === "regular") {
    opts = [
      { label: "18 agosto - 27 octubre", start: "2025-08-18", end: "2025-09-27" },
    ];
  } else if (tipo === "iniciacion") {
    opts = [{ label: "4 - 31 julio", start: "2025-07-04", end: "2025-07-31" }];
  }

  if (!opts.length) {
    grp.style.display = "none";
    return;
  }
  grp.style.display = "block";

  cont.innerHTML = opts
    .map(
      (o, i) => `
    <div class="radio-option">
      <input type="radio" id="periodo_${i}" name="periodo" 
             value="${o.start}|${o.end}" required>
      <label for="periodo_${i}">${o.label}</label>
    </div>
  `
    )
    .join("");

  opts.forEach((o, i) => {
    document.getElementById(`periodo_${i}`).addEventListener("change", (e) => {
      const [s, f] = e.target.value.split("|");
      document.getElementById("fecha_inicio").value = s;
      document.getElementById("fecha_fin").value = f;
    });
  });

  // auto-select si sólo hay uno
  const r = cont.querySelectorAll('input[type="radio"]');
  if (r.length === 1) {
    r[0].checked = true;
    r[0].dispatchEvent(new Event("change"));
  }
}

// ————————————————————————————————
// 5) bindFormLogic: manejamos selects y “otro…” + fetch de count
// ————————————————————————————————
function bindFormLogic() {
  const form = document.getElementById("form-inscripcion");
  const tipo = form.tipo_curso;
  const idioma = form.idioma;
  const nivel = form.nivel_ingreso;
  const horario = form.horario;
  const otroGrp = document.getElementById("horario-otro-group");
  const otroInp = document.getElementById("horario_otro");
  const inlineCount = document.getElementById("inscritos-count-inline");

  const placeholder = (txt) =>
    `<option value="" disabled selected>${txt}</option>`;

  // 5.1) al cambiar tipo → poblamos idiomas + periodos
  tipo.addEventListener("change", () => {
    const langs = Object.keys(availability[tipo.value]?.idiomas || {});
    idioma.innerHTML = langs.length
      ? [
          placeholder("Selecciona un idioma…"),
          ...langs.map((l) => {
            const label =
              languageLabels[l] || l.charAt(0).toUpperCase() + l.slice(1);
            return `<option value="${l}">${label}</option>`;
          }),
        ].join("")
      : placeholder("Selecciona tipo primero…");

    nivel.innerHTML = placeholder("Idioma primero…");
    horario.innerHTML = placeholder("Nivel primero…");

    populatePeriodos();
    // No inlineCount update needed here
  });

  // 5.2) al cambiar idioma → poblamos niveles
  idioma.addEventListener("change", () => {
    const lvls = Object.keys(
      availability[tipo.value]?.idiomas[idioma.value] || {}
    );
    nivel.innerHTML = lvls.length
      ? [
          placeholder("Selecciona un nivel…"),
          ...lvls.map((v) => `<option value="${v}">${v}</option>`),
        ].join("")
      : placeholder("Primero elige idioma…");
    horario.innerHTML = placeholder("Nivel primero…");
    // No inlineCount update needed here
  });

  // 5.3) al cambiar nivel → poblamos horarios con bloques o strings
  nivel.addEventListener("change", () => {
    const conf =
      availability[tipo.value]?.idiomas[idioma.value]?.[nivel.value] || [];
    populateHorarios(conf, horario, placeholder);
    // No inlineCount update needed here
  });

  // 5.4) al cambiar horario → mostramos count y “otro” si aplica
  horario.addEventListener("change", () => {
    if (horario.value === "otro") {
      otroGrp.style.display = "block";
      otroInp.required = true;
      // No inlineCount update for "otro"
      return;
    }
    otroGrp.style.display = "none";
    otroInp.required = false;
    otroInp.value = "";
    // —— fetch count inscripciones ——
    const params = new URLSearchParams({
      tipo_curso: tipo.value,
      idioma: idioma.value,
      nivel_ingreso: nivel.value,
      horario: horario.value,
    });
    fetch(`/api/inscripcion/count/?${params}`, { method: "GET" })
      .then((r) => r.json())
      .then((json) => {
        const n = json.count;
        inlineCount.textContent = n;
      })
      .catch(() => {
        inlineCount.textContent = "0";
      });
  });

  // disparamos el primero
  tipo.dispatchEvent(new Event("change"));
}

// ————————————————————————————————
// 6) populateHorarios: strings vs bloques {dias, horas}
// ————————————————————————————————
function populateHorarios(conf, selectEl, placeholder) {
  let opts = [placeholder("Selecciona un horario…")];
  if (conf.length && typeof conf[0] === "string") {
    conf.forEach((h) => opts.push(`<option value="${h}">${h}</option>`));
  } else {
    conf.forEach((block) => {
      block.horas.forEach((h) => {
        opts.push(
          `<option value="${h}">${block.dias.join(", ")} — ${h}</option>`
        );
      });
    });
  }
  opts.push('<option value="otro">Otro…</option>');
  selectEl.innerHTML = opts.join("");
}

// ————————————————————————————————
// 7) attachInscriptionHandler: tu AJAX + Stripe Checkout
// ————————————————————————————————
function attachInscriptionHandler() {
  const form = document.getElementById("form-inscripcion");
  const feedback = document.getElementById("insc-feedback");
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    feedback.className = "";
    feedback.textContent = "Procesando…";
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // 1) Guardar la inscripción en tu BD
      let res = await fetch("/api/inscripcion/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let json = await res.json();

      if (json.status !== "ok") {
        feedback.classList.add("error");
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
      feedback.classList.add("success");
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
      feedback.classList.add("error");
      feedback.textContent = err.message || "Error, inténtalo más tarde.";
      btn.disabled = false;
    }
  });
}
