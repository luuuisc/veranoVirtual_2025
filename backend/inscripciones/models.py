from django.db import models
from django.utils import timezone

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
    grupo = models.PositiveSmallIntegerField(null=True, blank=True)
    mensaje = models.TextField(blank=True)
    creado = models.DateTimeField(auto_now_add=True)

IDIOMA_CHOICES = [
    ('ingles', 'Inglés'),
    ('frances', 'Francés'),
    ('aleman', 'Alemán'),
    ('italiano', 'Italiano'),
    ('portugues', 'Portugués'),
    ('japones', 'Japonés'),
    ('chino', 'Chino'),
    ('coreano', 'Coreano'),
    ('esp_extranjeros', 'Español para extranjeros'),
    ('otro', 'Otro'),
]

NIVEL_CHOICES = [
    ('A2', 'A2'),
    ('B1', 'B1'),
    ('B2', 'B2'),
]

HORARIO_CHOICES = [
    ('por la mañana', 'Por la mañana'),
    ('a media tarde', 'A media tarde'),
    ('por la noche', 'Por la noche'),
    ('fin de semana', 'Fin de semana'),
]

class ExamenColocacion(models.Model):
    nombre      = models.CharField("Nombre completo", max_length=150)
    cuenta_unam = models.CharField("No. de Cuenta/UNAM", max_length=20)
    whatsapp    = models.CharField("WhatsApp", max_length=20)
    email       = models.EmailField("Correo electrónico")
    idioma      = models.CharField("Idioma", max_length=30, choices=IDIOMA_CHOICES)
    creado      = models.DateTimeField("Fecha registro", auto_now_add=True)

    class Meta:
        verbose_name = "Examen de Colocación"
        verbose_name_plural = "Exámenes de Colocación"
        ordering = ['-creado']

    def __str__(self):
        return f"{self.nombre} - {self.idioma}"
    
class ListaEspera(models.Model):
    nombre        = models.CharField(max_length=200)
    cuenta_unam   = models.CharField(max_length=20)
    whatsapp      = models.CharField(max_length=20)
    email         = models.EmailField()
    idioma        = models.CharField(max_length=20, choices=IDIOMA_CHOICES)
    nivel         = models.CharField(max_length=2, choices=NIVEL_CHOICES, blank=True, null=True)                 
    horario_deseado = models.CharField(max_length=20, choices=HORARIO_CHOICES, blank=True, null=True)            
    creado        = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Registro Lista de Espera"
        verbose_name_plural = "Registros Lista de Espera"
        ordering = ['-creado']

    def __str__(self):
        return f"{self.nombre} – {self.idioma}"
    