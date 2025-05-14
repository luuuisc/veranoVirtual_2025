# Verano Virtual 2025

¡Bienvenido al repositorio de **Verano Virtual 2025**! Este proyecto ofrece una plataforma web para la inscripción y gestión de cursos virtuales de idiomas asociados a CLX.

---

## 📋 Contenido

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación y configuración](#instalación-y-configuración)
- [Uso](#uso)
- [API](#api)
- [Panel de control](#panel-de-control)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## 📝 Descripción

El sistema permite:

1. Mostrar detalles de cursos intensivos, regulares e iniciación.
2. Completar un formulario de inscripción dinámico (tipo de curso, nivel, idioma, horario, periodo y validación).
3. Registrar datos en base de datos SQLite.
4. Enviar confirmaciones por correo (y notificaciones internas).
5. Proveer un panel web para visualizar inscripciones en tiempo real.

---

## 🚀 Características

- **Frontend**: HTML5, CSS3 y JavaScript puro (sin frameworks externos).
- **Backend**: Django 5.2 con vistas REST **custom** y renderizado de plantillas.
- **Base de datos**: SQLite (por defecto) con migraciones automáticas.
- **Correo**: Configuración vía variables de entorno (`.env`), envío SMTP (con App Password de Gmail).
- **Panel de control**: Interfaz simple para listar inscripciones, con fecha local de CDMX.
- **Validaciones dinámicas**: Campos dependientes y opción "Otro…" para horarios personalizados.

---

## 🛠️ Tecnologías

- **Python** 3.13
- **Django** 5.2.1
- **SQLite**
- **JavaScript** (ES6+)

---

## ⚙️ Instalación y configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-org/verano_virtual_2025.git
   cd verano_virtual_2025/backend
   ```

2. Crear y activar entorno virtual:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Crear archivo `.env` en `backend/` con variables:
   ```ini
   DEBUG=True
   SECRET_KEY=tu_secret_key
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_HOST_USER=tu_correo@gmail.com
   EMAIL_HOST_PASSWORD=tu_app_password
   DEFAULT_FROM_EMAIL=tu_correo@gmail.com
   ```

5. Ejecutar migraciones:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. Iniciar servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

---

## 📦 Uso

- Accede a `http://127.0.0.1:8000/` para ver la página principal.
- Haz clic en **INICIA TU INSCRIPCIÓN AQUÍ** para mostrar el formulario.
- Completa y envía; recibirás un mensaje de éxito y un correo de confirmación.
- Consulta el panel de control en `/inscripciones/` para listar registros.

---

## 🔌 API

### `POST /api/inscripcion/`

- **Descripción**: Recibe JSON con datos de inscripción.
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "nombre": "Juan Pérez",
    "cuenta_unam": "12345678",
    "email": "juan@ejemplo.com",
    "whatsapp": "5512345678",
    "tipo_curso": "intensivo",
    "nivel_ingreso": "A2",
    "idioma": "ingles",
    "horario": "07:00-10:00",
    "fecha_inicio": "2025-07-04",
    "fecha_fin": "2025-07-31",
    "mensaje": "Opcional..."
  }
  ```
- **Respuesta**:
  ```json
  {"status":"ok","message":"Inscripción exitosa, en breve nos comunicaremos contigo."}
  ```

---

## 📊 Panel de control

Visita `http://127.0.0.1:8000/inscripciones/` para ver las inscripciones recientes en una tabla ordenada. Incluye:

- Nombre, email, WhatsApp.
- Curso, nivel, idioma, horario.
- Fecha y hora local de CDMX.

---

## 🤝 Contribuir

1. Haz _fork_ del proyecto.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz _commit_ de tus cambios (`git commit -m "feat: descripción clara"`).
4. _Push_ a tu rama y abre un _pull request_.

---

## 📄 Licencia

Este proyecto está bajo la [MIT License](LICENSE).

---

© 2025 Consejo Mexicano de Enseñanza e Investigación en Lenguas Extranjeras (CLX)