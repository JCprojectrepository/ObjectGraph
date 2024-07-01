

from django.urls import path
from .handler.test import *

app_name = 'atomAPIv1'

urlpatterns = [
    path('test/', TestHandler.as_view(), name='test'),
]