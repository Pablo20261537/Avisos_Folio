from rest_framework.decorators import api_view, permission_classes,action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
import requests

#from inertia import render

@api_view(['POST'])
@permission_classes([AllowAny])
def api_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'message': 'Login exitoso'
        })
    return Response({'error': 'Credenciales inválidas'}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def api_dashboard(request):
    user = request.user
    return Response({
        'message': f'Bienvenido al Dashboard, {request.user.username}!',
        'status': 'success',
        "username": user.username,
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
    })

from rest_framework import viewsets
from .models import Alerta
from .serializers import AlertaSerializer

class AlertaViewSet(viewsets.ModelViewSet):
    queryset = Alerta.objects.all().order_by('-fecha_creacion')
    serializer_class = AlertaSerializer

    # Método auxiliar para no repetir código de conexión a FastAPI
    def _llamar_fastapi(self, endpoint):
        try:
            fastapi_response = requests.get(f"http://127.0.0.1:8001/catalogos/{endpoint}")
            return Response(fastapi_response.json())
        except requests.exceptions.RequestException:
            return Response({"error": "No se pudo comunicar con FastAPI"}, status=503)

    def list(self, request):
        # Llama al auxiliar apuntando a Nvo_aviso
        return self._llamar_fastapi("Nvo_aviso")

    @action(detail=False, methods=['get'], url_path='usuarios_area/(?P<id_area>[0-9]+)')
    def usuarios_x_area(self, request, id_area= None):
        # Llama al auxiliar apuntando a usuarios_x_area
        endpoint = f"usuarios_area/{id_area}"
        return self._llamar_fastapi(endpoint)

    
    @action(detail=False, methods=['get'], url_path='aduanas_x_tipo/(?P<id_tipo_aduana>[0-9]+)')
    def aduanas_x_tipo(self, request, id_tipo_aduana= None):
        endpoint = f"aduanas_x_tipo/{id_tipo_aduana}"
        return self._llamar_fastapi(endpoint)

    @action(detail=False, methods=['get'], url_path='alertas_aduana/(?P<clave_aduana_3>[0-9]+)')
    def alertas_x_aduana(self, request, clave_aduana_3= None):
        endpoint = f"alertas_aduana/{clave_aduana_3}"
        return self._llamar_fastapi(endpoint)

# class AlertaViewSet(viewsets.ModelViewSet):
#     queryset = Alerta.objects.all().order_by('-fecha_creacion')
#     serializer_class = AlertaSerializer
#     # permission_classes = [IsAuthenticated]


#     def list(self, request):
#         # Paso 6 del usuario: Django le pide los datos a FastAPI
#         try:
#             # Asumiendo que FastAPI corre en el puerto 8000 y Django en el 8001 (o viceversa)
#             fastapi_response = requests.get("http://127.0.0.1:8001/catalogos/Nvo_aviso")
#             datos_de_fastapi = fastapi_response.jsson()
#         except requests.exceptions.RequestException:
#             return Response({"error": "No se pudo comunicar con FastAPI"}, status=503)

#         # Paso 3: Django le regresa los datos a React
#         return Response(datos_de_fastapi)

