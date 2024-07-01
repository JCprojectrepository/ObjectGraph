

from django.urls import path
from .handler.json import *

app_name = 'atomAPIv1'

urlpatterns = [
    path('json/<str:id>/', JsonHandler.as_view(), name='json'),
]