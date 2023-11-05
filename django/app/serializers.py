from rest_framework import serializers
from .models import buyer

class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = buyer
        fields = '__all__'