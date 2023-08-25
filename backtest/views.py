
from django.shortcuts import render
from rest_framework import generics
from .models import Backtest
from .serializers import BacktestSerializer


class BacktestList(generics.ListCreateAPIView):
    queryset = Backtest.objects.all()
    serializer_class = BacktestSerializer


class BacktestDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Backtest.objects.all()
    serializer_class = BacktestSerializer


