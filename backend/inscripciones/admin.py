from django.contrib import admin
from .models import ExamenColocacion, ListaEspera

@admin.register(ExamenColocacion)
class ExamenColocacionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'cuenta_unam', 'email', 'whatsapp', 'idioma', 'creado')
    list_filter  = ('idioma',)
    search_fields = ('nombre', 'cuenta_unam', 'email', 'whatsapp')

@admin.register(ListaEspera)
class ListaEsperaAdmin(admin.ModelAdmin):
    list_display  = ('nombre','cuenta_unam','email','whatsapp','idioma','creado')
    list_filter   = ('idioma',)
    search_fields = ('nombre','cuenta_unam','email','whatsapp')
    