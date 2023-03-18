from xml.dom import ValidationErr
from rest_framework import serializers
from .models import Child
        
class ChildSerializer(serializers.ModelSerializer):
    adder = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Child
        fields = '__all__'        