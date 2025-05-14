# inscripciones/views.py

import json
from pathlib import Path

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.utils import timezone
from datetime import datetime

from .models import Inscripcion

PDF_BANCOS = Path(settings.BASE_DIR) / 'static' / 'docs' / 'datos_bancarios.pdf'

@csrf_exempt
def inscribirse(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    # Decodificar JSON
    data = json.loads(request.body.decode())

    # Campos básicos
    tipo    = data.get('tipo_curso')
    idioma  = data.get('idioma')
    nivel   = data.get('nivel_ingreso')
    horario = data.get('horario')

    # Conteo de inscripciones en ese mismo bloque
    existentes = Inscripcion.objects.filter(
        tipo_curso=tipo,
        idioma=idioma,
        nivel_ingreso=nivel,
        horario=horario
    ).count()

    # Si ya hay 15 o más, bloqueamos
    if existentes >= 15:
        return JsonResponse({
            'status': 'error',
            'message': 'Lo siento, este horario ya está lleno. Por favor elige otro horario o propón uno nuevo.'
        }, status=400)

    # Siempre asignamos grupo = 1
    numero_grupo = 1
    
    fecha_inicio_str = data.get('fecha_inicio')   
    fecha_fin_str    = data.get('fecha_fin')      

    fecha_inicio = datetime.strptime(fecha_inicio_str, '%Y-%m-%d').date()
    fecha_fin    = datetime.strptime(fecha_fin_str,    '%Y-%m-%d').date()

    # Formato para el correo (dd/mm/aa)
    fmt_inicio = fecha_inicio.strftime('%d/%m/%y')
    fmt_fin    = fecha_fin.   strftime('%d/%m/%y')
    
    # Crear la inscripción en la BD
    ins = Inscripcion.objects.create(
        nombre        = data.get('nombre'),
        cuenta_unam   = data.get('cuenta_unam', ''),
        email         = data.get('email'),
        whatsapp      = data.get('whatsapp'),
        tipo_curso    = tipo,
        nivel_ingreso = nivel,
        idioma        = idioma,
        horario       = horario,
        fecha_inicio  = fecha_inicio,
        fecha_fin     = fecha_fin,
        grupo         = numero_grupo,
        mensaje       = data.get('mensaje', ''),
    )

    # Fecha de registro
    fmt_reg    = timezone.localtime(ins.creado).strftime('%d/%m/%y %H:%M')
    
    # Correo al alumno con PDF adjunto
    subject_alumno = 'CLX - ¡Tu pre-inscripción ha sido recibida!'
    body_alumno = (
        f"Hola {ins.nombre},\n\n"
        f"Hemos registrado tu solicitud al curso {ins.tipo_curso} "
        f"({ins.nivel_ingreso} de {ins.idioma}).\n"
        f"Horario: {ins.horario}\n"
        f"Periodo: {fmt_inicio} a {fmt_fin}\n"
        f"Tu grupo es el número {ins.grupo}.\n\n"
        "Adjunto encontrarás un PDF con nuestros datos bancarios para tu pago.\n\n"
        "Enviar por WhatsApp una foto del comprobante de depósito al 55 1340 4064.\n"
        "¡Gracias por confiar en nosotros!"
    )
    email_alumno = EmailMessage(
        subject_alumno,
        body_alumno,
        settings.DEFAULT_FROM_EMAIL,
        [ins.email],           # ← aquí únicamente el email del alumno
    )
    if PDF_BANCOS.exists():
        email_alumno.attach_file(str(PDF_BANCOS))
    email_alumno.send(fail_silently=False)

    # Enviar correo de notificación al EQUIPO 
    prof_emails = [
        'agente3jlcosta@gmail.com',
        'luisangelperezcastro1305@gmail.com',
    ]
    subject_equipo = f'Nueva inscripción: {ins.nombre}'
    body_equipo = (
        f"Se ha inscrito:\n"
        f"- Nombre: {ins.nombre}\n"
        f"- E-mail: {ins.email}\n"
        f"- WhatsApp: {ins.whatsapp}\n"
        f"- Curso: {ins.tipo_curso} ({ins.nivel_ingreso} de {ins.idioma})\n"
        f"- Horario: {ins.horario}\n"
        f"- Periodo: {fmt_inicio} a {fmt_fin}\n"
        f"- Grupo: {ins.grupo}\n"
        f"- Mensaje: {ins.mensaje}\n"
        f"- Fecha registro: {fmt_reg}\n"
    )
    email_equipo = EmailMessage(
        subject_equipo,
        body_equipo,
        settings.DEFAULT_FROM_EMAIL,
        prof_emails,          
    )
    email_equipo.send(fail_silently=True)

    return JsonResponse({
        'status':'ok',
        'message':'Inscripción exitosa, revisa tu correo para detalles de pago.'
    })

def list_inscripciones(request):
    inscripciones = Inscripcion.objects.all().order_by('-creado')
    return render(request, 'inscripciones/list.html', {
        'inscripciones': inscripciones
    })
    
def index(request):
    return render(request, 'index.html')