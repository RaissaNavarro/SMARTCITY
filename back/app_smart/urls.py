from django.urls import path, include
from . import views
from app_smart.api.viewsets import CreateUserAPIViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from app_smart.api.viewsets import CreateUserAPIViewSet, TemperaturaDataViewSet, TemperatureDataList, ContadorDataViewSet, ContadorDataList, UmidadeDataViewSet, UmidadeDataList, LuminosidadeDataViewSet, LuminosidadeDataList
from rest_framework.routers import DefaultRouter
from .views import upload_csv_view, load_temperature_data, upload_csv_view_test, load_contador_data, load_umidade_data, load_luminosidade_data
from app_smart.api.filters import SensorFilterView

from app_smart.api.viewsets import (
    CreateUserAPIViewSet,
    SensorViewSet,
    # TemperaturaDataViewSet
)


router = DefaultRouter()	
router.register(r'sensores', SensorViewSet)
# router.register(r'temperatura', load_temperature_data)

urlpatterns = [
 path('', views.abre_index, name='abre_index'),
 path('api/create_user/', CreateUserAPIViewSet.as_view(), name='create_user'),
 path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),     
 path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
 path('api/', include(router.urls)),
 path('api/upload_csv/', upload_csv_view, name='upload_csv'),
 path('api/test/', upload_csv_view_test, name='upload_csv'),
 path('api/sensor_filter/', SensorFilterView.as_view(), name='sensor_filter'),
 path('api/temp/', load_temperature_data, name='temperatura_data'),
 path('api/temperatura/', TemperatureDataList.as_view(), name='temperatura'),
 path('api/cont/', load_contador_data, name = 'contador_data'),
 path('api/contador/', ContadorDataList.as_view(), name ='contador'),
 path('api/umi/', load_umidade_data, name = 'umidade_data'),
 path('api/umidade/', UmidadeDataList.as_view(), name ='umidade'),
 path('api/lumi/', load_luminosidade_data, name = 'luminosidade_data'),
 path('api/luminosidade/', LuminosidadeDataList.as_view(), name ='luminosidade'), #url para todas os sensores


]



