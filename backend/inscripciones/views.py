# inscripciones/views.py

import json
from pathlib import Path

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils import timezone
from datetime import datetime

from .models import Inscripcion, ExamenColocacion, ListaEspera

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

    # Si ya hay 12 o más, bloqueamos
    if existentes >= 12:
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
        'jorgedaniel2915@gmail.com'
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
        'status': 'ok',
        'message': (
            "TU ALTA EN EL CURSO QUE ELEGISTE AÚN NO ESTÁ TERMINADA HASTA QUE REALICES EL PAGO DE $250 DE INSCRIPCIÓN"
            "Y LA COLEGIATURA CORRESPONDIENTE Y ENVÍES DICHO(S) COMPROBANTE(S), CON TU NOMBRE COMPLETO AL WHATSAPP 55 1340 4064."
        )
    })
    
@csrf_exempt
def registro_examen_colocacion(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    # 1) Parsear JSON
    try:
        data = json.loads(request.body.decode())
    except json.JSONDecodeError:
        return JsonResponse({'status':'error','message':'JSON inválido'}, status=400)

    # 2) Validar campos
    nombre      = data.get('nombre')
    cuenta      = data.get('cuenta_unam')
    whatsapp    = data.get('whatsapp')
    email       = data.get('email')
    idioma      = data.get('idioma')

    if not all([nombre, cuenta, whatsapp, email, idioma]):
        return JsonResponse({
            'status':'error',
            'message':'Faltan campos obligatorios'
        }, status=400)

    # 3) Guardar en BD
    examen = ExamenColocacion.objects.create(
        nombre      = nombre,
        cuenta_unam = cuenta,
        whatsapp    = whatsapp,
        email       = email,
        idioma      = idioma
    )

    # 4) Enviar correo al alumno
    subject_alumno = 'CLX – Registro Examen de Colocación'
    body_alumno = (
        f"Hola {examen.nombre},\n\n"
        "Hemos recibido tu solicitud para presentar el Examen de Colocación.\n"
        f"- Idioma: {examen.idioma}\n\n"
        "En breve un ejecutivo se pondrá en contacto contigo para darle seguimiento a tu solicitud.\n\n"
        "¡Gracias por tu interés!"
    )
    mail_al = EmailMessage(
        subject_alumno,
        body_alumno,
        settings.DEFAULT_FROM_EMAIL,
        [examen.email]
    )
    mail_al.send(fail_silently=False)

    # 5) Notificación al equipo
    equipo = [
        'agente3jlcosta@gmail.com',
        'luisangelperezcastro1305@gmail.com',
        'jorgedaniel2915@gmail.com'
    ]
    subject_eq = f'Nueva solicitud Examen Colocación: {examen.nombre}'
    body_eq = (
        "Se ha registrado una nueva solicitud de Examen de Colocación:\n"
        f"- Nombre: {examen.nombre}\n"
        f"- Cuenta UNAM: {examen.cuenta_unam}\n"
        f"- WhatsApp: {examen.whatsapp}\n"
        f"- E-mail: {examen.email}\n"
        f"- Idioma: {examen.idioma}\n"
        f"- Fecha registro: {timezone.localtime(examen.creado).strftime('%d/%m/%y %H:%M')}\n"
    )
    mail_eq = EmailMessage(
        subject_eq,
        body_eq,
        settings.DEFAULT_FROM_EMAIL,
        equipo
    )
    mail_eq.send(fail_silently=True)

    return JsonResponse({
        'status':'ok',
        'message':'Tu registro ha sido recibido. En breve nos contactaremos contigo.'
    })

@csrf_exempt
def registro_lista_espera(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    try:
        data = json.loads(request.body.decode())
    except json.JSONDecodeError:
        return JsonResponse({'status':'error','message':'JSON inválido'}, status=400)

    nombre         = data.get('nombre')
    cuenta         = data.get('cuenta_unam')
    whatsapp       = data.get('whatsapp')
    email          = data.get('email')
    idioma         = data.get('idioma')
    nivel          = data.get('nivel')            
    horario_deseado = data.get('horario_deseado') 

    if not all([nombre, cuenta, whatsapp, email, idioma, nivel, horario_deseado]):
        return JsonResponse({'status':'error','message':'Faltan campos obligatorios'}, status=400)

    registro = ListaEspera.objects.create(
        nombre          = nombre,
        cuenta_unam     = cuenta,
        whatsapp        = whatsapp,
        email           = email,
        idioma          = idioma,
        nivel           = nivel,            
        horario_deseado = horario_deseado,  
    )

    # Correo al alumno
    subject_al = 'CLX – Registro Lista de Espera'
    body_al = (
        f"Hola {registro.nombre},\n\n"
        f"Hemos recibido tu solicitud para la Lista de Espera.\n"
        f"- Idioma: {registro.idioma}\n"
        f"- Nivel: {registro.nivel}\n"
        f"- Horario deseado: {registro.horario_deseado}\n\n"
        "En breve un ejecutivo se pondrá en contacto contigo para darle seguimiento a tu solicitud.\n\n"
        "¡Gracias por tu interés!"
    )
    mail_al = EmailMessage(subject_al, body_al, settings.DEFAULT_FROM_EMAIL, [registro.email])
    mail_al.send(fail_silently=False)

    # Notificación al equipo
    equipo = [
        'agente3jlcosta@gmail.com',
        'luisangelperezcastro1305@gmail.com',
        'jorgedaniel2915@gmail.com'
    ]
    subject_eq = f'Nueva Lista de Espera: {registro.nombre}'
    body_eq = (
        "Nuevo registro en Lista de Espera:\n"
        f"- Nombre: {registro.nombre}\n"
        f"- Cuenta UNAM: {registro.cuenta_unam}\n"
        f"- WhatsApp: {registro.whatsapp}\n"
        f"- E-mail: {registro.email}\n"
        f"- Idioma: {registro.idioma}\n"
        f"- Nivel: {registro.nivel}\n"
        f"- Horario deseado: {registro.horario_deseado}\n"
        f"- Fecha: {timezone.localtime(registro.creado).strftime('%d/%m/%y %H:%M')}"
    )
    mail_eq = EmailMessage(subject_eq, body_eq, settings.DEFAULT_FROM_EMAIL, equipo)
    mail_eq.send(fail_silently=True)

    return JsonResponse({'status':'ok','message':'Registro recibido correctamente.'})

def list_inscripciones(request):
    inscripciones = Inscripcion.objects.all().order_by('-creado')
    return render(request, 'inscripciones/list.html', {
        'inscripciones': inscripciones
    })
    
def index(request):
    return render(request, 'index.html', {
      'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY
    })

@csrf_exempt
def count_inscripciones(request):
    if request.method != 'GET':
        return JsonResponse({'detail':'Method not allowed'}, status=405)
    tipo     = request.GET.get('tipo_curso')
    idioma   = request.GET.get('idioma')
    nivel    = request.GET.get('nivel_ingreso')
    horario  = request.GET.get('horario')
    count = Inscripcion.objects.filter(
        tipo_curso=tipo,
        idioma=idioma,
        nivel_ingreso=nivel,
        horario=horario
    ).count()
    return JsonResponse({'count': count})



"""
stripe.api_key = settings.STRIPE_SECRET_KEY

@require_POST
@csrf_exempt
def create_checkout_session(request):
    data = json.loads(request.body)

    nivel = data.get('nivel_ingreso', '')
    # cobramos 25000 centavos ($250) a todos los A1*, resto 15000 centavos ($150)
    if nivel.upper().startswith('A1'):
        unit_amount = 25000
        producto    = 'Inscripción Verano CLX'
    else:
        unit_amount = 15000
        producto    = 'Examen de colocación CLX'

    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            customer_email = data.get('email'),
            line_items=[{
                'price_data': {
                    'currency': 'mxn',
                    'product_data': {
                        'name': producto,
                    },
                    'unit_amount': unit_amount,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url = request.build_absolute_uri('/inscripcion/success/?session_id={CHECKOUT_SESSION_ID}'),
            cancel_url  = request.build_absolute_uri('/inscripcion/cancel/'),
            metadata={
                'tipo_curso':    data.get('tipo_curso'),
                'idioma':        data.get('idioma'),
                'nivel_ingreso': nivel,
                'horario':       data.get('horario'),
            }
        )
        return JsonResponse({'url': session.url})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
"""