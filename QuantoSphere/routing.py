from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from trading import consumers as trade_consumers

websocket_urlpatterns = [
    path('ws/trading/', trade_consumers.TradeConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    'websocket': URLRouter(websocket_urlpatterns)
})
