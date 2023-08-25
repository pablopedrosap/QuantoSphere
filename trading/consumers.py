# Example for trade/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer


class TradeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        pass  # For now, you won't be receiving data from the frontend

    async def send_update(self, event):
        await self.send(text_data=json.dumps(event["text"]))
