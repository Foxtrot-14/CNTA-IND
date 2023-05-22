from rest_framework import serializers
from .models import *

class BMIGSerializer(serializers.ModelSerializer):
    class Meta:
        model = BMIG
        fields = '__all__'   
        
class MUACGSerializer(serializers.ModelSerializer):
    class Meta:
        model = MUACG
        fields = '__all__'
        
class HCFGSerializer(serializers.ModelSerializer):
    class Meta:
        model = HCFG
        fields = '__all__'
        
class HFAGSerializer(serializers.ModelSerializer):
    class Meta:
        model = HFAG
        fields = '__all__'
        
class WFAGSerializer(serializers.ModelSerializer):
    class Meta:
        model = WFAG
        fields = '__all__'
        
class WFHGSerializer(serializers.ModelSerializer):
    class Meta:
        model = WFHG
        fields = '__all__'
 
class BMIBSerializer(serializers.ModelSerializer):
    class Meta:
        model = BMIB
        fields = '__all__'
        
class MUACBSerializer(serializers.ModelSerializer):
    class Meta:
        model = MUACB
        fields = '__all__'
        
class HCFBSerializer(serializers.ModelSerializer):
    class Meta:
        model = HCFB
        fields = '__all__'
        
class HFABSerializer(serializers.ModelSerializer):
    class Meta:
        model = HFAB
        fields = '__all__'
        
class WFABSerializer(serializers.ModelSerializer):
    class Meta:
        model = WFAB
        fields = '__all__'
        
class WFHBSerializer(serializers.ModelSerializer):
    class Meta:
        model = WFHB
        fields = '__all__'
 
        
        