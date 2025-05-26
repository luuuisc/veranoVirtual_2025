# inscripciones/urls_list.py

from django.urls import path
from .views import inscribirse
from . import views

urlpatterns = [
    path('', inscribirse, name='api_inscripcion'),
    path('count/', views.count_inscripciones, name='count_inscripciones'),
]