from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import BuyerSerializer
from .models import buyer

# Create your views here.
class BuyerView(viewsets.ModelViewSet):
    serializer_class = BuyerSerializer
    queryset = buyer.objects.all()