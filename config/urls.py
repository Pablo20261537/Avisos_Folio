from django.contrib import admin
from django.urls import path, include
from cuentas.views import avisosfolios
urlpatterns = [
    path('admin/', admin.site.urls),
        path('tablas/',avisosfolios, name='tabla_avisos'),
    path('', include('cuentas.urls')), # Incluye las URLs de la app cuentas
]
