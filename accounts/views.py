from rest_framework import generics
from .serializers import UserSerializer

class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer