from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.mail import EmailMessage
from inscripciones.models import Inscripcion

class Command(BaseCommand):
    help = "Envía un email masivo a todos los inscritos en Intensivos"

    def handle(self, *args, **options):
        intensivos = Inscripcion.objects.filter(tipo_curso="intensivo")
        emails = list(intensivos.values_list("email", flat=True))
        if not emails:
            self.stdout.write(self.style.WARNING("No hay inscritos en Intensivos"))
            return

        subject = "Actualización de fechas - Curso Virtual de Verano CLX"
        body = """
¡Hola!

Debido al inicio de las vacaciones administrativas de la UNAM y a que todavía algunos compañeros se están integrando a los cursos, tuvimos que recorrer por un día el inicio y término del curso virtual de verano.

Nuevas fechas:
	•	Inicio: Lunes 7 de julio
	•	Término: Viernes 1 de agosto

Si aún no te has inscrito y sigues interesad@, envía un mensaje de WhatsApp al 55 1340 4064 hoy o, a más tardar, mañana.

Si ya hiciste algún pago y enviaste tu comprobante vía WhatsApp al 55 1340 4064, haz caso omiso a este correo.

Si ya estás inscrit@, te integraremos a un grupo de WhatsApp este fin de semana para arrancar el próximo lunes.

¡Agradecemos tu comprensión y tu confianza!

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