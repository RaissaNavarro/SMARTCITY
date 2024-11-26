from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from app_smart.models import Sensor, TemperaturaData, ContadorData, UmidadeData, LuminosidadeData

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) 

    def create(self, validated_data):    
        validated_data['password'] = make_password(validated_data['password'])
        # Criar e retornar o usuário
        return User.objects.create(**validated_data)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password'] 
        extra_kwargs = {'password': {'write_only': True}}
        

class SensorSerializer(serializers.ModelSerializer):	
    class Meta:		
        model = Sensor		
        fields = '__all__'  


class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()


class TemperaturaDataSerializer(serializers.ModelSerializer):
    sensor = SensorSerializer(read_only=True)  # Inclui todos os dados do Sensor
    
    class Meta:	
        model = TemperaturaData
        fields = '__all__'

class ContadorDataSerializer(serializers.ModelSerializer):
    sensor = SensorSerializer(read_only=True)

    class Meta:
        model = ContadorData
        fields = '__all__'

class UmidadeDataSerializer(serializers.ModelSerializer):
    sensor = SensorSerializer(read_only=True)

    class Meta:
        model = UmidadeData
        fields = '__all__'

class LuminosidadeDataSerializer(serializers.ModelSerializer):
    sensor = SensorSerializer(read_only=True)

    class Meta:
        model = LuminosidadeData
        fields = '__all__'



        