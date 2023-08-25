import json
import logging
import subprocess

from celery import shared_task
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from backtest.models import Backtest
from strategy.models import Strategy


@shared_task
def run_backtest_for_strategy(strategy_id, email=None):
    channel_layer = get_channel_layer()

    async_to_sync(channel_layer.group_send)(
        "backtest_group",
        {
            'type': 'send_backtest_update',
            'message': {'status': 'started', 'data': 'Backtesting started'}
        }
    )

    strategy = Strategy.objects.get(id=strategy_id)
    command = ['python', '/Users/pablopedrosa/PycharmProjects/QS_algorithm/main.py', json.dumps(strategy.parameters)]

    # Use loop to read output in real-time
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)

    for line in process.stdout:
        # Send updates as they come in
        async_to_sync(channel_layer.group_send)(
            "backtest_group",
            {
                'type': 'send_backtest_update',
                'message': {'status': 'in_progress', 'data': line.strip()}
            }
        )

    stdout, stderr = process.communicate()

    if process.returncode != 0:
        logging.error(f"Error: {stderr}")
        async_to_sync(channel_layer.group_send)(
            "backtest_group",
            {
                'type': 'send_backtest_update',
                'message': {'status': 'error', 'data': stderr}
            }
        )
        raise Exception(f'Error running backtest: {stderr}')

    results = json.loads(stdout)
    backtest = Backtest.objects.create(user=strategy.user, strategy=strategy, results=results)

    async_to_sync(channel_layer.group_send)(
        "backtest_group",
        {
            'type': 'send_backtest_update',
            'message': {'status': 'completed', 'data': results}
        }
    )
