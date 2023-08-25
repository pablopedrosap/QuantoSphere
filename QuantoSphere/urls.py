
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('backtest/', include('backtest.urls')),
    path('strategies/', include('strategies.urls')),
    path('user/', include('user.urls')),

]
