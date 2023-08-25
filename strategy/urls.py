from django.urls import path
from .views import save_strategy

name = ['strategies']

urlpatterns = [
    path('api/save_strategy/', save_strategy.as_view(), name='strategy'),
]
