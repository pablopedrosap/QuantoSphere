from .models import Trading
from rest_framework import serializers


class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trading
        fields = '__all__'
