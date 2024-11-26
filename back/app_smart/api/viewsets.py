from django.shortcuts import render  
from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from app_smart.api import serializers
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from ..models import Sensor, TemperaturaData, ContadorData, UmidadeData, LuminosidadeData
from app_smart.api.filters import SensorFilter	
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import TemperaturaDataSerializer, ContadorDataSerializer, UmidadeDataSerializer, LuminosidadeDataSerializer
 
class CreateUserAPIViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class SensorViewSet(viewsets.ModelViewSet):	
    queryset = Sensor.objects.all()	
    serializer_class = serializers.SensorSerializer	
    permission_classes = [IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter	

class TemperaturaDataViewSet(viewsets.ModelViewSet):     
    queryset = TemperaturaData.objects.all()
    serializer_class = serializers.TemperaturaDataSerializer     
    # permission_classes = [IsAuthenticated]

class TemperatureDataList(generics.ListAPIView):
    queryset = TemperaturaData.objects.all()
    serializer_class = TemperaturaDataSerializer

class ContadorDataViewSet(viewsets.ModelViewSet):
    queryset = ContadorData.objects.all()
    serializer_class = serializers.ContadorDataSerializer

class ContadorDataList(generics.ListAPIView):
    queryset = ContadorData.objects.all()
    serializer_class = ContadorDataSerializer

class UmidadeDataViewSet(viewsets.ModelViewSet):
    queryset = UmidadeData.objects.all()
    serializer_class = serializers.UmidadeDataSerializer

class UmidadeDataList(generics.ListAPIView):
    queryset = UmidadeData.objects.all()
    serializer_class = UmidadeDataSerializer

class LuminosidadeDataViewSet(viewsets.ModelViewSet):
    queryset = LuminosidadeData.objects.all()
    serializer_class = serializers.LuminosidadeDataSerializer

class LuminosidadeDataList(generics.ListAPIView):
    queryset = LuminosidadeData.objects.all()
    serializer_class = LuminosidadeDataSerializer

    