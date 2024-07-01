

from django.urls import path
from .handler.json import *

app_name = 'atomAPIv1'

urlpatterns = [
    path('json/<str:userid>/<str:objectid>/', JsonHandler.as_view(), name='json'),
]