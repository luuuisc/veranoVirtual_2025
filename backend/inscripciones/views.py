from django.shortcuts import render

# Create your views here.
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from .models import Inscripcion

@csrf_exempt
def inscribirse(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    data = json.loads(request.body.decode())
    
    ins = Inscripcion.objects.create(
        nombre        = data.get('nombre'),
        cuenta_unam   = data.get('cuenta_unam',''),
        email         = data.get('email'),
        whatsapp      = data.get('whatsapp'),
        tipo_curso    = data.get('tipo_curso'),
        nivel_ingreso = data.get('nivel_ingreso'),
        idioma        = data.get('idioma'),
        horario       = data.get('horario'),
        fecha_inicio  = data.get('fecha_inicio'),
        fecha_fin     = data.get('fecha_fin'),
        mensaje       = data.get('mensaje',''),
    )
    
    # Enviar correo de confirmación ALUMNO
    subject = 'CLX - ¡Tu pre-inscripción ha sido recibida!'
    message = (
        f"Hola {ins.nombre},\n\n"
        f"Hemos registrado tu solicitud al curso {ins.tipo_curso} ({ins.nivel_ingreso} de {ins.idioma}).\n"
        f"El horario que elegiste: {ins.horario}\n\n"
        f"El periodo del curso es de {ins.fecha_inicio} a {ins.fecha_fin}.\n"
        "En breve te enviaremos por WhatsApp los detalles de pago.\n\n"
        "¡Gracias por confiar en nosotros!" 
    )
    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [ins.email],
        fail_silently=False,
    )
    
    local_dt = timezone.localtime(ins.creado)
    
    # Enviar correo de notificación PROFESOR
    prof_email = ['agente3jlcosta@gmail.com', 'luisangelperezcastro1305@gmail.com']
    prof_subject = f'Nueva inscripción: {ins.nombre}'
    prof_message = (
        f"Se ha inscrito:\n"
        f"- Nombre: {ins.nombre}\n"
        f"- E-mail: {ins.email}\n"
        f"- WhatsApp: {ins.whatsapp}\n"
        f"- Curso: {ins.tipo_curso} ({ins.nivel_ingreso} de {ins.idioma})\n"
        f"- Horario: {ins.horario}\n"
        f"- Fecha: {local_dt.strftime('%Y-%m-%d %H:%M')}\n"
    )
    send_mail(
        prof_subject,
        prof_message,
        settings.DEFAULT_FROM_EMAIL,
        prof_email,
        fail_silently=True,
    )
    
    return JsonResponse({
        'status':'ok',
        'message':'Inscripción exitosa, en breve nos comunicaremos contigo.'
    })
    

def list_inscripciones(request):
    # Trae todas las inscripciones, ordenadas por fecha de creación
    inscripciones = Inscripcion.objects.all().order_by('-creado')
    return render(request, 'inscripciones/list.html', {
        'inscripciones': inscripciones
    })