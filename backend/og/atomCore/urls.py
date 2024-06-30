

from django.urls import path

from .views.contact import *
from.utils import HealthCheckHandler

app_name = 'atomCore'

urlpatterns = [
    path('contact/', ContactHandler.as_view(), name='contact'),
    path('health/', HealthCheckHandler.as_view(), name='health_check'),
]