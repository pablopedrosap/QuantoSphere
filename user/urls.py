
from django.urls import path
from .views import RegisterView, LoginView

name = ['user']

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
]

