from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework import viewsets
from .serializers import BuyerSerializer
from .models import buyer
import json

rejections = {'CreditScore': 4028, 'ltv': 4748, 'dti': 7457, 'fedti': 5586}

# Create your views here.
class BuyerView(viewsets.ModelViewSet):
    serializer_class = BuyerSerializer
    queryset = buyer.objects.all()

def get_rejections(request):
    return HttpResponse(json.dumps(rejections))