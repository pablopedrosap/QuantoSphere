import redis
from asgiref.sync import async_to_sync
from celery import shared_task
from channels.layers import get_channel_layer
from strategy.models import Strategy

redis_conn = redis.StrictRedis(host='localhost', port=6379, db=0)
pubsub = redis_conn.pubsub()
pubsub.subscribe('trade_updates')


@shared_task
def deploy_strategy(strategy_id, mode):
    channel_layer = get_channel_layer()

    # Start the trading process (e.g., connect to IB, initiate trades)
    strategy = Strategy.objects.get(id=strategy_id)
    strategy.parameters['action'] = mode

    def receive_update_from_message_queue():
        message = pubsub.get_message()
        if message and message['type'] == 'message':
            return message['data']
        return None

    while True:
        update = receive_update_from_message_queue()  # Function to receive updates from the message queue
        if update is None:
            break

        # Send the update to the frontend via websockets
        async_to_sync(channel_layer.group_send)(
            "trade_group",
            {
                'type': 'send_trade_update',
                'message': {'status': 'in_progress', 'data': update}
            }
        )

    # Signal completion to the frontend
    async_to_sync(channel_layer.group_send)(
        "trade_group",
        {
            'type': 'send_trade_update',
            'message': {'status': 'completed', 'data': 'Trading completed'}
        }
    )
