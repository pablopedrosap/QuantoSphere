from django.urls import path
from . import views

name = ['backtest']

urlpatterns = [
    path('backtests/', views.BacktestList.as_view(), name='backtest-list'),
    path('backtests/<int:pk>/', views.BacktestDetail.as_view(), name='backtest-detail'),
    # path('backtests/create/', views.BacktestCreate.as_view(), name='backtest-create'),
    # path('backtests/<int:pk>/update/', views.BacktestUpdate.as_view(), name='backtest-update'),
    # path('backtests/<int:pk>/delete/', views.BacktestDelete.as_view(), name='backtest-delete'),
]
