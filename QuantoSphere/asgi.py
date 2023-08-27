
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from QuantoSphere import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'QuantoSphere.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(routing.websocket_urlpatterns),
})
