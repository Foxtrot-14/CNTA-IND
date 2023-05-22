from xml.dom import ValidationErr
from rest_framework import serializers
from .models import Child
import pickle
import os

class ChildSerializer(serializers.ModelSerializer):
    adder = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Child
        fields = '__all__'
        
    def validate(self, attrs):
        print(os.getcwd(),'cwd')                
        model = pickle.load(open('./child/model.pkl','rb'))
        adder = self.context.get('user')
        age = float(attrs.get('age'))
        bmi = float(attrs.get('bmi'))
        muac = float(attrs.get('muac'))
        chestc = float(attrs.get('chestc'))
        headc = float(attrs.get('headc'))
        msclwstng = int(attrs.get('msclwstng'))
        fngr_dete = int(attrs.get('fngr_dete'))
        prediction = model.predict([[age,bmi,muac,chestc,headc,msclwstng,fngr_dete]])
        status=1
        if(prediction[0]==0 or prediction[0]==2):
            status=2
        if(prediction[0]==0):
            prediction='Moderate Malnutrition'
        elif(prediction[0]==1):
            prediction='Normal'
        else:
            prediction='Severe Malnutrition'    
        attrs['diagnosis']=prediction
        attrs['adder']=adder
        attrs['status']=status
        return attrs
                    