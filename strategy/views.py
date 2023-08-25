from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from strategy.models import Strategy
from rest_framework import status


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_strategy(request):
    strategy_data = request.data
    user = request.user

    # Extract data
    asset_name = strategy_data['selectedAssetNames']
    trading_frequency = strategy_data['selectedTradingFrequency']
    risk_tolerance = strategy_data['selectedRiskTolerance']
    fundamental_feature = strategy_data['selectedFundamentalFeatures']
    sentiment_feature = strategy_data['selectedSentimentFeatures']
    technical_feature = strategy_data['selectedTechnicalFeatures']
    long_entry_signal = strategy_data['selectedLongEntrySignals']
    short_entry_signal = strategy_data['selectedShortEntrySignals']
    ml_model = 'random_forest'

    strategy = Strategy.objects.create(
        user=user,
        asset_name=asset_name,
        trading_frequency=trading_frequency,
        risk_tolerance=risk_tolerance,
        fundamental_feature=fundamental_feature,
        sentiment_feature=sentiment_feature,
        technical_feature=technical_feature,
        long_entry_signal=long_entry_signal,
        short_entry_signal=short_entry_signal,
        ml_model=ml_model
    )

    return Response({'message': 'Strategy saved successfully'}, status=status.HTTP_201_CREATED)
