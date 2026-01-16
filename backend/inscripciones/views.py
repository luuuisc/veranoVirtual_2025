# inscripciones/views.py

import json
import logging
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
from .email_service import EmailService, COURSE_INFO

logger = logging.getLogger(__name__)
PDF_BANCOS = Path(settings.BASE_DIR) / 'static' / 'docs' / 'datos_bancarios.pdf'


@csrf_exempt
def inscribirse(request):
    """Procesa inscripciones a cursos."""
    if request.method != 'POST':
        return JsonResponse({'status': 'error', 'message': 'Método no permitido'}, status=405)

    # 1) Decodificar JSON
    try:
        data = json.loads(request.body.decode())
    except json.JSONDecodeError:
        logger.error("JSON inválido recibido en inscripción")
        return JsonResponse({'status': 'error', 'message': 'JSON inválido'}, status=400)

    # 2) Validar campos obligatorios
    obligatorios = [
        'nombre', 'email', 'whatsapp',
        'tipo_curso', 'idioma', 'nivel_ingreso',
        'horario', 'fecha_inicio', 'fecha_fin'
    ]
    faltantes = [k for k in obligatorios if not data.get(k)]
    if faltantes:
        logger.warning(f"Campos faltantes en inscripción: {faltantes}")
        return JsonResponse(
            {
                'status': 'error',
                'message': f'Faltan campos obligatorios: {", ".join(faltantes)}'
            },
            status=400
        )

    tipo = data.get('tipo_curso')
    idioma = data.get('idioma')
    nivel = data.get('nivel_ingreso')
    horario = data.get('horario')

    # 3) Verificar capacidad usando COURSE_INFO
    try:
        existentes = Inscripcion.objects.filter(
            tipo_curso=tipo,
            idioma=idioma,
            nivel_ingreso=nivel,
            horario=horario
        ).count()
    except Exception as e:
        logger.error(f"Error al contar inscripciones: {str(e)}")
        return JsonResponse({'status': 'error', 'message': f'Error al contar inscripciones: {str(e)}'}, status=500)

    # Obtener capacidad desde COURSE_INFO
    course_info = COURSE_INFO.get(tipo, {})
    capacidad = course_info.get('cupo_max', 15)

    if existentes >= capacidad:
        logger.info(f"Cupo lleno para {tipo} - {idioma} - {nivel} - {horario}")
        return JsonResponse(
            {
                'status': 'error',
                'message': (
                    f'Lo siento, este horario ya está lleno (cupo máximo {capacidad} participantes). '
                    'Por favor elige otro horario o regístrate en la Lista de Espera.'
                ),
            },
            status=400
        )

    # 4) Parse de fechas
    try:
        fecha_inicio = datetime.strptime(data.get('fecha_inicio'), '%Y-%m-%d').date()
        fecha_fin = datetime.strptime(data.get('fecha_fin'), '%Y-%m-%d').date()
    except Exception as e:
        logger.error(f"Error parseando fechas: {str(e)}")
        return JsonResponse(
            {
                'status': 'error',
                'message': 'Formato de fechas inválido (usa YYYY-MM-DD).'
            },
            status=400
        )

    # 5) Crear inscripción
    try:
        ins = Inscripcion.objects.create(
            nombre=data.get('nombre'),
            cuenta_unam=data.get('cuenta_unam', ''),
            email=data.get('email'),
            whatsapp=data.get('whatsapp'),
            tipo_curso=tipo,
            nivel_ingreso=nivel,
            idioma=idioma,
            horario=horario,
            fecha_inicio=fecha_inicio,
            fecha_fin=fecha_fin,
            grupo=1,
            mensaje=data.get('mensaje', ''),
        )
        logger.info(f"Inscripción creada: {ins.nombre} - {ins.tipo_curso}")
    except Exception as e:
        logger.error(f"Error creando inscripción: {str(e)}")
        return JsonResponse({'status': 'error', 'message': 'Error al crear inscripción'}, status=500)

    # 6) Enviar correos usando EmailService
    email_service = EmailService()
    fmt_inicio = fecha_inicio.strftime('%d/%m/%y')
    fmt_fin = fecha_fin.strftime('%d/%m/%y')
    fmt_reg = timezone.localtime(ins.creado).strftime('%d/%m/%y %H:%M')

    # Correo al alumno
    email_service.send_enrollment_confirmation(ins, fmt_inicio, fmt_fin)
    
    # Notificación al equipo
    email_service.send_team_notification(ins, fmt_inicio, fmt_fin, fmt_reg)

    # 7) Respuesta al frontend
    return JsonResponse({
        'status': 'ok',
        'message': (
            "TU ALTA EN EL CURSO QUE ELEGISTE AÚN NO ESTÁ TERMINADA HASTA QUE REALICES EL PAGO DE INSCRIPCIÓN "
            "Y LA COLEGIATURA CORRESPONDIENTE Y ENVÍES DICHO(S) COMPROBANTE(S), CON TU NOMBRE COMPLETO AL WHATSAPP 55 1340 4064."
        )
    })


@csrf_exempt
def registro_examen_colocacion(request):
    """Procesa solicitudes de examen de colocación."""
    if request.method != 'POST':
        return JsonResponse({'status': 'error', 'message': 'Método no permitido'}, status=405)

    # 1) Parsear JSON
    try:
        data = json.loads(request.body.decode())
    except json.JSONDecodeError:
        logger.error("JSON inválido recibido en examen de colocación")
        return JsonResponse({'status': 'error', 'message': 'JSON inválido'}, status=400)

    # 2) Validar campos
    nombre = data.get('nombre')
    cuenta = data.get('cuenta_unam')
    whatsapp = data.get('whatsapp')
    email = data.get('email')
    idioma = data.get('idioma')

    if not all([nombre, cuenta, whatsapp, email, idioma]):
        logger.warning("Campos faltantes en examen de colocación")
        return JsonResponse({
            'status': 'error',
            'message': 'Faltan campos obligatorios'
        }, status=400)

    # 3) Guardar en BD
    try:
        examen = ExamenColocacion.objects.create(
            nombre=nombre,
            cuenta_unam=cuenta,
            whatsapp=whatsapp,
            email=email,
            idioma=idioma
        )
        logger.info(f"Examen de colocación registrado: {examen.nombre} - {examen.idioma}")
    except Exception as e:
        logger.error(f"Error creando examen de colocación: {str(e)}")
        return JsonResponse({'status': 'error', 'message': 'Error al crear registro'}, status=500)

    # 4) Enviar correos usando EmailService
    email_service = EmailService()
    fmt_reg = timezone.localtime(examen.creado).strftime('%d/%m/%y %H:%M')
    
    email_service.send_exam_confirmation(examen)
    email_service.send_exam_team_notification(examen, fmt_reg)

    return JsonResponse({
        'status': 'ok',
        'message': 'Tu registro ha sido recibido. En breve nos contactaremos contigo.'
    })


@csrf_exempt
def registro_lista_espera(request):
    """Procesa registros en lista de espera."""
    if request.method != 'POST':
        return JsonResponse({'status': 'error', 'message': 'Método no permitido'}, status=405)

    try:
        data = json.loads(request.body.decode())
    except json.JSONDecodeError:
        logger.error("JSON inválido recibido en lista de espera")
        return JsonResponse({'status': 'error', 'message': 'JSON inválido'}, status=400)

    nombre = data.get('nombre')
    cuenta = data.get('cuenta_unam')
    whatsapp = data.get('whatsapp')
    email = data.get('email')
    idioma = data.get('idioma')
    nivel = data.get('nivel')                    
    horario_deseado = data.get('horario_deseado')

    if not all([nombre, cuenta, whatsapp, email, idioma, nivel, horario_deseado]):
        logger.warning("Campos faltantes en lista de espera")
        return JsonResponse({'status': 'error', 'message': 'Faltan campos obligatorios'}, status=400)

    try:
        registro = ListaEspera.objects.create(
            nombre=nombre,
            cuenta_unam=cuenta,
            whatsapp=whatsapp,
            email=email,
            idioma=idioma,
            nivel=nivel,
            horario_deseado=horario_deseado,
        )
        logger.info(f"Lista de espera registrada: {registro.nombre} - {registro.idioma}")
    except Exception as e:
        logger.error(f"Error creando lista de espera: {str(e)}")
        return JsonResponse({'status': 'error', 'message': 'Error al crear registro'}, status=500)

    # Enviar correos usando EmailService
    email_service = EmailService()
    fmt_reg = timezone.localtime(registro.creado).strftime('%d/%m/%y %H:%M')
    
    email_service.send_waitlist_confirmation(registro)
    email_service.send_waitlist_team_notification(registro, fmt_reg)

    return JsonResponse({'status': 'ok', 'message': 'Registro recibido correctamente.'})


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
        return JsonResponse({'detail': 'Method not allowed'}, status=405)

    tipo = request.GET.get('tipo_curso')
    idioma = request.GET.get('idioma')
    nivel = request.GET.get('nivel_ingreso')
    horario = request.GET.get('horario')

    count = Inscripcion.objects.filter(
        tipo_curso=tipo,
        idioma=idioma,
        nivel_ingreso=nivel,
        horario=horario
    ).count()

    return JsonResponse({'count': count})

"""
# Stripe (si decides reactivarlo)
# import stripe
# stripe.api_key = settings.STRIPE_SECRET_KEY

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
