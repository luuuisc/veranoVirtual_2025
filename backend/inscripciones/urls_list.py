# inscripciones/urls_list.py

from django.urls import path
from .views import inscribirse, registro_examen_colocacion, registro_lista_espera, count_inscripciones
from . import views

urlpatterns = [
    path('', inscribirse, name='api_inscripcion'),
    path('count/', count_inscripciones, name='count_inscripciones'),
    # path('create-session/', views.create_checkout_session, name='create_checkout'),
    path('api/examen-colocacion/', registro_examen_colocacion, name='examen_colocacion'),
    path('api/lista-espera/', registro_lista_espera, name='lista_espera'),
]