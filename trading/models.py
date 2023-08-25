from django.db import models
from django.contrib.auth.models import User

from strategy.models import Strategy


class Trading(models.Model):
    strategy = models.ForeignKey(Strategy, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.FloatField()
    timestamp = models.DateTimeField()
    type = models.CharField(max_length=10) # e.g., "buy", "sell"

    def __str__(self):
        return f"{self.type} {self.quantity} {self.symbol} at {self.price}"
