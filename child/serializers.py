from xml.dom import ValidationErr
from rest_framework import serializers
from .models import Child
        
class AddChildSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Child
        fields = '__all__'
        
    def validate(self, attrs):
        fngr_dete = attrs.get('fngr_dete')
        if fngr_dete == True:
            raise serializers.ValidationError('validation is running')
        return attrs
    
    def create(self, validated_data):
        return Child.objects.create(**validated_data)         