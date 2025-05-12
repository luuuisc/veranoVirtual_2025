from django.shortcuts import render

# Create your views here.
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Inscripcion

@csrf_exempt
def inscribirse(request):
    if request.method != 'POST':
        return JsonResponse({'status':'error','message':'Método no permitido'}, status=405)

    data = json.loads(request.body.decode())
    Inscripcion.objects.create(
        nombre        = data.get('nombre'),
        cuenta_unam   = data.get('cuenta_unam',''),
        email         = data.get('email'),
        whatsapp      = data.get('whatsapp'),
        tipo_curso    = data.get('tipo_curso'),
        nivel_ingreso = data.get('nivel_ingreso'),
        idioma        = data.get('idioma'),
        horario       = data.get('horario'),
        mensaje       = data.get('mensaje',''),
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