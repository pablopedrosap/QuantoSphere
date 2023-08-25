from django.db import models
from django.db.models import JSONField
from QuantoSphere import settings


class Strategy(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    asset_name = JSONField(default=dict)
    trading_frequency = models.CharField(max_length=30, default='')
    risk_tolerance = models.CharField(max_length=30, default='')
    fundamental_feature = JSONField(default=dict)
    sentiment_feature = JSONField(default=dict)
    technical_feature = JSONField(default=dict)
    long_entry_signal = JSONField(default=dict)
    short_entry_signal = JSONField(default=dict)
    ml_model = models.CharField(max_length=20, default='')
    name = models.CharField(max_length=200)

    def save(self, *args, **kwargs):
        self.name = f"{self.trading_frequency} when {self.fundamental_feature}"
        super().save(*args, **kwargs)

    def parameters(self):
        return {
            'name': self.name,
            'asset_name': self.asset_name,
            'trading_frequency': self.trading_frequency,
            'risk_tolerance': self.risk_tolerance,
            'fundamental_feature': self.fundamental_feature,
            'sentiment_feature': self.sentiment_feature,
            'technical_feature': self.technical_feature,
            'long_entry_signal': self.long_entry_signal,
            'short_entry_signal': self.short_entry_signal,
            'ml_model': self.ml_model,
            'action': 'create',
        }




















