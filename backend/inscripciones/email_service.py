# inscripciones/email_service.py

import logging
from datetime import datetime, date
from pathlib import Path
from typing import Dict, List, Optional

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from django.utils import timezone

logger = logging.getLogger(__name__)

# Configuración de cursos
COURSE_INFO = {
    'intensivo': {
        'nombre': 'Curso Intensivo',
        'duracion': '6 semanas',
        'carga': '10h/semana',
        'total_horas': 60,
        'colegiatura_early': 2000,
        'colegiatura_regular': 2000,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'taller': {
        'nombre': 'Taller de Conversación',
        'duracion': '6 semanas',
        'carga': '5h/semana',
        'total_horas': 30,
        'colegiatura_early': 1500,
        'colegiatura_regular': 1500,
        'requiere_examen': False,
        'cupo_min': 6,
        'cupo_max': 12,
    },
    'lectura': {
        'nombre': 'Comprensión de Lectura',
        'duracion': '4 semanas',
        'carga': '10h/semana sincrónica + 20h asincrónica',
        'total_horas': 120,
        'colegiatura_early': 2500,
        'colegiatura_regular': 2500,
        'requiere_examen': False,
        'cupo_min': 6,
        'cupo_max': 12,
    },
    'curso-sabado': {
        'nombre': 'Curso de 5h en Sábados',
        'duracion': '12 semanas',
        'carga': '5h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'curso-domingo': {
        'nombre': 'Curso de 5h en Domingos',
        'duracion': '12 semanas',
        'carga': '5h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'curso-sabsabdomado': {
        'nombre': 'Curso de 3h en Sáb y Dom',
        'duracion': '10 semanas',
        'carga': '6h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'curso-lumievie': {
        'nombre': 'Curso de 2h en Lu, Mié, Vie',
        'duracion': '10 semanas',
        'carga': '6h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'curso-luavie75': {
        'nombre': 'Curso de 7.5h de Lu a Vie',
        'duracion': '8 semanas',
        'carga': '7.5h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
    'curso-luavie10': {
        'nombre': 'Curso de 10h de Lu a Vie',
        'duracion': '6 semanas',
        'carga': '10h/semana',
        'total_horas': 60,
        'colegiatura_early': 2300,
        'colegiatura_regular': 2500,
        'requiere_examen': True,
        'cupo_min': 6,
        'cupo_max': 15,
    },
}


class EmailService:
    """Servicio centralizado para envío de correos electrónicos."""
    
    # Fecha límite para precios early bird
    EARLY_BIRD_CUTOFF = date(2026, 1, 31)
    
    # Precios de inscripción y examen
    INSCRIPCION_EARLY = 200
    INSCRIPCION_REGULAR = 250
    EXAMEN_EARLY = 100
    EXAMEN_REGULAR = 150
    
    def __init__(self):
        self.team_emails = getattr(settings, 'TEAM_EMAILS', [
            'agente3jlcosta@gmail.com',
            'luuuis.pcastro@gmail.com',
            'jorgedaniel2915@gmail.com',
        ])
        self.pdf_bancos = Path(settings.BASE_DIR) / 'static' / 'docs' / 'datos_bancarios.pdf'
    
    def get_pricing_info(self, fecha: Optional[date] = None) -> Dict[str, int]:
        """Obtiene los precios según la fecha actual o proporcionada."""
        if fecha is None:
            fecha = timezone.now().date()
        
        is_early_bird = fecha <= self.EARLY_BIRD_CUTOFF
        
        return {
            'inscripcion': self.INSCRIPCION_EARLY if is_early_bird else self.INSCRIPCION_REGULAR,
            'examen': self.EXAMEN_EARLY if is_early_bird else self.EXAMEN_REGULAR,
            'is_early_bird': is_early_bird,
            'cutoff_date': self.EARLY_BIRD_CUTOFF.strftime('%d de enero'),
        }
    
    def get_course_info(self, tipo_curso: str) -> Dict:
        """Obtiene información del curso."""
        return COURSE_INFO.get(tipo_curso, {})
    
    def send_enrollment_confirmation(
        self,
        inscripcion,
        fecha_inicio_fmt: str,
        fecha_fin_fmt: str
    ) -> bool:
        """
        Envía correo de confirmación de inscripción al alumno.
        
        Args:
            inscripcion: Objeto Inscripcion
            fecha_inicio_fmt: Fecha de inicio formateada (dd/mm/yy)
            fecha_fin_fmt: Fecha de fin formateada (dd/mm/yy)
            
        Returns:
            bool: True si se envió exitosamente, False en caso contrario
        """
        try:
            course_info = self.get_course_info(inscripcion.tipo_curso)
            pricing = self.get_pricing_info()
            
            # Determinar si es taller
            is_taller = inscripcion.tipo_curso == 'taller'
            
            # Contexto para el template
            context = {
                'nombre': inscripcion.nombre,
                'curso_nombre': course_info.get('nombre', inscripcion.tipo_curso.title()),
                'nivel': inscripcion.nivel_ingreso,
                'idioma': inscripcion.idioma.title(),
                'horario': inscripcion.horario,
                'fecha_inicio': fecha_inicio_fmt,
                'fecha_fin': fecha_fin_fmt,
                'duracion': course_info.get('duracion', 'N/A'),
                'carga': course_info.get('carga', 'N/A'),
                'total_horas': course_info.get('total_horas', 'N/A'),
                'inscripcion_precio': pricing['inscripcion'],
                'colegiatura': course_info.get('colegiatura_early' if pricing['is_early_bird'] else 'colegiatura_regular', 0),
                'examen_precio': pricing['examen'],
                'requiere_examen': course_info.get('requiere_examen', True),
                'cupo_min': course_info.get('cupo_min', 6),
                'cupo_max': course_info.get('cupo_max', 15),
                'is_early_bird': pricing['is_early_bird'],
                'cutoff_date': pricing['cutoff_date'],
                'is_taller': is_taller,
                'whatsapp': '55 1340 4064',
                'whatsapp_link': 'https://wa.me/5213404064',
            }
            
            # Subject
            subject = (
                'CLX - Taller de Conversación: confirmación de preinscripción'
                if is_taller else
                f'CLX - ¡Tu preinscripción ha sido recibida! - {course_info.get("nombre", "")}'
            )
            
            # Renderizar texto plano (HTML templates opcionales)
            try:
                html_content = render_to_string('emails/enrollment_confirmation.html', context)
                text_content = render_to_string('emails/enrollment_confirmation.txt', context)
            except:
                # Fallback a texto plano si no existen templates HTML
                text_content = render_to_string('emails/enrollment_confirmation.txt', context)
                html_content = None
            
            # Crear email
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[inscripcion.email],
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            
            # Adjuntar PDF de datos bancarios si existe
            if self.pdf_bancos.exists():
                email.attach_file(str(self.pdf_bancos))
            
            # Enviar
            email.send(fail_silently=False)
            
            logger.info(f"Correo de confirmación enviado a {inscripcion.email} - Curso: {inscripcion.tipo_curso}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando correo de confirmación a {inscripcion.email}: {str(e)}")
            return False
    
    def send_team_notification(
        self,
        inscripcion,
        fecha_inicio_fmt: str,
        fecha_fin_fmt: str,
        fecha_registro_fmt: str
    ) -> bool:
        """Envía notificación al equipo sobre nueva inscripción."""
        try:
            course_info = self.get_course_info(inscripcion.tipo_curso)
            is_taller = inscripcion.tipo_curso == 'taller'
            
            subject = f'Nueva {"preinscripción Taller" if is_taller else "inscripción"}: {inscripcion.nombre}'
            
            context = {
                'nombre': inscripcion.nombre,
                'email': inscripcion.email,
                'whatsapp': inscripcion.whatsapp,
                'cuenta_unam': inscripcion.cuenta_unam,
                'curso_tipo': inscripcion.tipo_curso,
                'curso_nombre': course_info.get('nombre', inscripcion.tipo_curso),
                'nivel': inscripcion.nivel_ingreso,
                'idioma': inscripcion.idioma,
                'horario': inscripcion.horario,
                'fecha_inicio': fecha_inicio_fmt,
                'fecha_fin': fecha_fin_fmt,
                'grupo': inscripcion.grupo,
                'mensaje': inscripcion.mensaje,
                'fecha_registro': fecha_registro_fmt,
                'is_taller': is_taller,
            }
            
            try:
                html_content = render_to_string('emails/team_notification.html', context)
                text_content = render_to_string('emails/team_notification.txt', context)
            except:
                text_content = render_to_string('emails/team_notification.txt', context)
                html_content = None
            
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=self.team_emails,
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            email.send(fail_silently=True)
            
            logger.info(f"Notificación enviada al equipo - Inscripción: {inscripcion.nombre}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando notificación al equipo: {str(e)}")
            return False
    
    def send_exam_confirmation(self, examen) -> bool:
        """Envía confirmación de registro para examen de colocación."""
        try:
            pricing = self.get_pricing_info()
            
            context = {
                'nombre': examen.nombre,
                'idioma': examen.idioma.title(),
                'examen_precio': pricing['examen'],
                'is_early_bird': pricing['is_early_bird'],
                'cutoff_date': pricing['cutoff_date'],
            }
            
            subject = 'CLX – Registro Examen de Colocación'
            
            try:
                html_content = render_to_string('emails/exam_confirmation.html', context)
                text_content = render_to_string('emails/exam_confirmation.txt', context)
            except:
                text_content = render_to_string('emails/exam_confirmation.txt', context)
                html_content = None
            
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[examen.email],
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            email.send(fail_silently=False)
            
            logger.info(f"Confirmación de examen enviada a {examen.email}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando confirmación de examen a {examen.email}: {str(e)}")
            return False
    
    def send_exam_team_notification(self, examen, fecha_registro_fmt: str) -> bool:
        """Notifica al equipo sobre solicitud de examen."""
        try:
            subject = f'Nueva solicitud Examen Colocación: {examen.nombre}'
            
            context = {
                'nombre': examen.nombre,
                'cuenta_unam': examen.cuenta_unam,
                'whatsapp': examen.whatsapp,
                'email': examen.email,
                'idioma': examen.idioma,
                'fecha_registro': fecha_registro_fmt,
            }
            
            try:
                html_content = render_to_string('emails/exam_team_notification.html', context)
                text_content = render_to_string('emails/exam_team_notification.txt', context)
            except:
                text_content = render_to_string('emails/exam_team_notification.txt', context)
                html_content = None
            
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=self.team_emails,
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            email.send(fail_silently=True)
            
            logger.info(f"Notificación de examen enviada al equipo - {examen.nombre}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando notificación de examen al equipo: {str(e)}")
            return False
    
    def send_waitlist_confirmation(self, registro) -> bool:
        """Envía confirmación de registro en lista de espera."""
        try:
            context = {
                'nombre': registro.nombre,
                'idioma': registro.idioma.title(),
                'nivel': registro.nivel,
                'horario_deseado': registro.horario_deseado,
            }
            
            subject = 'CLX – Registro Lista de Espera'
            
            try:
                html_content = render_to_string('emails/waitlist_confirmation.html', context)
                text_content = render_to_string('emails/waitlist_confirmation.txt', context)
            except:
                text_content = render_to_string('emails/waitlist_confirmation.txt', context)
                html_content = None
            
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[registro.email],
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            email.send(fail_silently=False)
            
            logger.info(f"Confirmación de lista de espera enviada a {registro.email}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando confirmación de lista de espera a {registro.email}: {str(e)}")
            return False
    
    def send_waitlist_team_notification(self, registro, fecha_registro_fmt: str) -> bool:
        """Notifica al equipo sobre registro en lista de espera."""
        try:
            subject = f'Nueva Lista de Espera: {registro.nombre}'
            
            context = {
                'nombre': registro.nombre,
                'cuenta_unam': registro.cuenta_unam,
                'whatsapp': registro.whatsapp,
                'email': registro.email,
                'idioma': registro.idioma,
                'nivel': registro.nivel,
                'horario_deseado': registro.horario_deseado,
                'fecha_registro': fecha_registro_fmt,
            }
            
            try:
                html_content = render_to_string('emails/waitlist_team_notification.html', context)
                text_content = render_to_string('emails/waitlist_team_notification.txt', context)
            except:
                text_content = render_to_string('emails/waitlist_team_notification.txt', context)
                html_content = None
            
            email = EmailMultiAlternatives(
                subject=subject,
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=self.team_emails,
            )
            if html_content:
                email.attach_alternative(html_content, "text/html")
            email.send(fail_silently=True)
            
            logger.info(f"Notificación de lista de espera enviada al equipo - {registro.nombre}")
            return True
            
        except Exception as e:
            logger.error(f"Error enviando notificación de lista de espera al equipo: {str(e)}")
            return False
