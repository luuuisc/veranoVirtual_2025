# inscripciones/urls_list.py

from django.urls import path
from .views import inscribirse, registro_examen_colocacion
from . import views

urlpatterns = [
    path('', inscribirse, name='api_inscripcion'),
    path('count/', views.count_inscripciones, name='count_inscripciones'),
    # path('create-session/', views.create_checkout_session, name='create_checkout'),
    path('api/examen-colocacion/', registro_examen_colocacion, name='examen_colocacion'),
]