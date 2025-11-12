from django.conf import settings

def static_version(request):
    """Hace accesible STATIC_VERSION en todas las plantillas."""
    return {"STATIC_VERSION": getattr(settings, "STATIC_VERSION", "")}
