# inscripciones/urls.py
from django.urls import path
from .views import (
    inscribirse,
    count_inscripciones,
    registro_examen_colocacion,
    registro_lista_espera,
)

urlpatterns = [
    path('inscripcion/',        inscribirse,                  name='api_inscripcion'),
    path('inscripciones/count/',count_inscripciones,          name='count_inscripciones'),
    path('examen-colocacion/',  registro_examen_colocacion,   name='api_examen_colocacion'),
    path('lista-espera/',       registro_lista_espera,        name='api_lista_espera'),
]