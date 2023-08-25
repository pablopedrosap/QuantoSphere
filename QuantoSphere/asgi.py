

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
import QuantoSphere.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'QuantoSphere.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(QuantoSphere.routing.websocket_urlpatterns),
})
