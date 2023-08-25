from rest_framework import serializers
from .models import Backtest


class BacktestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backtest
        fields = ['strategy_name', 'results', 'user']
