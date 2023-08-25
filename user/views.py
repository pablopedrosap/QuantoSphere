from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.authtoken.models import Token


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'message': 'Logged In Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterView(APIView):
    def post(self, request):
        user = request.data
        serializer = CustomUserSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_instance = serializer.instance
        token, _ = Token.objects.get_or_create(user=user_instance)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)

