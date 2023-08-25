from django.db import models
from QuantoSphere import settings


class Backtest(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    strategy_name = models.CharField(max_length=100)
    results = models.JSONField()

    def __str__(self):
        return self.strategy_name



