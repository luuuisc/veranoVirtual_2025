# archivo: inscripciones/management/commands/envio_cursos_virtuales.py

from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.mail import EmailMessage
from inscripciones.models import Inscripcion

class Command(BaseCommand):
    help = "Envía un email masivo anunciando los nuevos cursos virtuales de idiomas en agosto"

    def handle(self, *args, **options):
        # Obtenemos todos los correos de las inscripciones
        inscripciones = Inscripcion.objects.all()
        emails = list(inscripciones.values_list("email", flat=True))
        if not emails:
            self.stdout.write(self.style.WARNING("No hay usuarios registrados para enviar el correo"))
            return

        subject = "Nuevos cursos VIRTUALES de idiomas – Agosto 2025"
        body = """
Buen día!

Debido a la solicitud de abrir nuevos *cursos VIRTUALES de idiomas* en *agosto*, para alumnos de *licenciatura* pero también para alumnos de *preparatoria, CCH* o de *2º o 3º de secundaria* que están de vacaciones, nos permitimos compartirte la siguiente información:

*Duración:*  
• *4 semanas:* del 4 al 29 de agosto

*Número de horas:*  
• *30 horas* los semi-intensivos = 1h30 diarias, de lunes a viernes  
• *60 horas* los intensivos    = 3 horas diarias, de lunes a viernes

---

**Inglés A1-** (desde 0)  
• Modalidad: *semi intensiva* (1h30 diarias, L-V)  
• Horarios: 8:30–10:00 ó 19:00–20:30  
• Avance: Primera parte del nivel A1 (medio nivel oficial internacional)

**Inglés A1+** (con conocimientos básicos)  
• Modalidad: *semi intensiva* (1h30 diarias, L-V)  
• Horarios: 7:00–8:30 ó 14:30–16:00  
• Avance: Segunda parte del nivel A1 (medio nivel oficial internacional)

**Francés A1-** (desde 0)  
• Modalidad: *semi intensiva* (1h30 diarias, L-V)  
• Horarios: 7:00–8:30 ó 19:30–21:00  
• Avance: Primera parte del nivel A1 (medio nivel oficial internacional)

**Inglés A1** (desde 0)  
• Modalidad: *intensiva* (3h diarias, L-V)  
• Horario: 10:00–13:00  
• Avance: Un nivel oficial internacional

**Inglés A2** (previo examen de colocación o constancia de A1)  
• Modalidad: *intensiva* (3h diarias, L-V)  
• Horario: 13:00–16:00  
• Avance: Un nivel oficial internacional

**Inglés B1** (previo examen de colocación o constancia de A2)  
• Modalidad: *intensiva* (3h diarias, L-V)  
• Horario: 13:00–16:00  
• Avance: Un nivel oficial internacional  
> *Este curso B1 inicia el lunes 21 de julio y termina el viernes 15 de agosto.*

---

**¿Cómo me inscribo a un curso de nivel A1?**  
1. Envía WhatsApp al 55 1340 4064 con:  
   - Nombre completo y WhatsApp  
   - Número de cuenta UNAM  
   - Nombre y WhatsApp de padre/tutor  
   - Idioma, nivel y horario de interés  
2. Te confirmamos cupo y datos bancarios ($250 inscripción + $1,500 semi-intensivos o $3,000 intensivos).  
3. Envía comprobante de pago.  
4. Te agregamos al grupo WhatsApp correspondiente.

**¿Cómo inscribirme al examen de colocación (A2 o B1)?**  
1. WhatsApp al 55 1340 4064 entre 17 y 19 de julio.  
2. Paga $150 examen (te pasamos datos bancarios).  
3. Sugiere 3 fechas/harios (17–20 de julio).  
4. Confirmamos una fecha y te enviamos el enlace.  
5. El examen es virtual (15–60 min).  
6. Según tu resultado, eliges el horario de curso.  
> *El curso B1 empieza el 21 de julio. El de A2, el 4 de agosto.*

**Importante:**  
Las cuotas ya incluyen *50% de descuento* para la comunidad UNAM (convenio DGOAE).

**Convocatoria trimestre septiembre-noviembre 2025**  
Se publicará el lunes 4 de agosto.

Sin otro particular, agradecemos tu atención.

Saludos cordiales,  
Equipo CLX
        """.strip()

        msg = EmailMessage(
            subject=subject,
            body=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            bcc=emails,
        )
        msg.send(fail_silently=False)
        self.stdout.write(self.style.SUCCESS(f"Correo enviado a {len(emails)} direcciones.")) 