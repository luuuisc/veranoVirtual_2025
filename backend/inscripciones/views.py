# inscripciones/views.py

import json
from pathlib import Path

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.utils import timezone

from .models import Inscripcion

PDF_BANCOS = Path(settings.BASE_DIR) / 'static' / 'docs' / 'datos_bancarios.pdf'

@csrf_exempt
def inscribirse(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    # 1) Decodificar JSON
    data = json.loads(request.body.decode())

    # 2) Campos básicos
    tipo    = data.get('tipo_curso')
    idioma  = data.get('idioma')
    nivel   = data.get('nivel_ingreso')
    horario = data.get('horario')

    # 3) Conteo de inscripciones en ese mismo bloque
    existentes = Inscripcion.objects.filter(
        tipo_curso=tipo,
        idioma=idioma,
        nivel_ingreso=nivel,
        horario=horario
    ).count()

    # 4) Calcular número de grupo: bloques de 15
    POR_GRUPO = 15
    numero_grupo = (existentes // POR_GRUPO) + 1

    # 5) Crear la inscripción en la BD
    ins = Inscripcion.objects.create(
        nombre        = data.get('nombre'),
        cuenta_unam   = data.get('cuenta_unam', ''),
        email         = data.get('email'),
        whatsapp      = data.get('whatsapp'),
        tipo_curso    = tipo,
        nivel_ingreso = nivel,
        idioma        = idioma,
        horario       = horario,
        fecha_inicio  = data.get('fecha_inicio'),
        fecha_fin     = data.get('fecha_fin'),
        grupo         = numero_grupo,
        mensaje       = data.get('mensaje', ''),
    )

    # 6) Enviar correo de confirmación ALUMNO con PDF adjunto
    subject = 'CLX - ¡Tu pre-inscripción ha sido recibida!'
    body = (
        f"Hola {ins.nombre},\n\n"
        f"Hemos registrado tu solicitud al curso {ins.tipo_curso} "
        f"({ins.nivel_ingreso} de {ins.idioma}).\n"
        f"- Horario elegido: {ins.horario}\n"
        f"- Periodo: {ins.fecha_inicio} a {ins.fecha_fin}\n"
        f"- Tu grupo es el número {ins.grupo}.\n\n"
        "Adjunto encontrarás un PDF con nuestros datos bancarios para que puedas realizar tu pago.\n\n"
        "¡Gracias por confiar en nosotros!"
    )
    email_alumno = EmailMessage(
        subject,
        body,
        settings.DEFAULT_FROM_EMAIL,
        [ins.email],
    )
    if PDF_BANCOS.exists():
        email_alumno.attach_file(str(PDF_BANCOS))
    email_alumno.send(fail_silently=False)

    # 7) Fecha local para registro
    local_dt = timezone.localtime(ins.creado)

    # 8) Notificación al equipo/profesor
    prof_emails = [
        'agente3jlcosta@gmail.com',
        'luisangelperezcastro1305@gmail.com',
    ]
    prof_subject = f'Nueva inscripción: {ins.nombre}'
    prof_body = (
        f"Se ha inscrito:\n"
        f"- Nombre: {ins.nombre}\n"
        f"- E-mail: {ins.email}\n"
        f"- WhatsApp: {ins.whatsapp}\n"
        f"- Curso: {ins.tipo_curso} ({ins.nivel_ingreso} de {ins.idioma})\n"
        f"- Horario: {ins.horario}\n"
        f"- Periodo: {ins.fecha_inicio} a {ins.fecha_fin}\n"
        f"- Grupo: {ins.grupo}\n"
        f"- Mensaje: {ins.mensaje}\n"
        f"- Fecha registro: {local_dt.strftime('%Y-%m-%d %H:%M')}\n"
    )
    send_mail(
        prof_subject,
        prof_body,
        settings.DEFAULT_FROM_EMAIL,
        prof_emails,
        fail_silently=True,
    )

    # 9) Responder al front
    return JsonResponse({
        'status': 'ok',
        'message': 'Inscripción exitosa, revisa tu correo para detalles de pago.'
    })


def list_inscripciones(request):
    # Lista todas las inscripciones, orden descendente
    inscripciones = Inscripcion.objects.all().order_by('-creado')
    return render(request, 'inscripciones/list.html', {
        'inscripciones': inscripciones
    })