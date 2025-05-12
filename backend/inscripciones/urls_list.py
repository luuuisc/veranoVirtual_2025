from django.urls import path
from .views import inscribirse, list_inscripciones

urlpatterns = [
    path('', inscribirse, name='api_inscripcion'),
    path('', list_inscripciones, name='list_inscripciones'),
]