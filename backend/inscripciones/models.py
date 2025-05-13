from django.db import models

# Create your models here.
class Inscripcion(models.Model):
    nombre = models.CharField(max_length=100)
    cuenta_unam = models.CharField("No. Cuenta/Empleado", max_length=20, blank=True)
    email = models.EmailField()
    whatsapp = models.CharField(max_length=20)
    tipo_curso = models.CharField(max_length=12)
    nivel_ingreso = models.CharField(max_length=10)
    idioma = models.CharField(max_length=20)
    horario = models.CharField(max_length=20)
    fecha_inicio = models.DateField(null=True, blank=True)
    fecha_fin    = models.DateField(null=True, blank=True)
    mensaje = models.TextField(blank=True)
    creado = models.DateTimeField(auto_now_add=True)
