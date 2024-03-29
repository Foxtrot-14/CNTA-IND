from rest_framework import serializers
from .models import Child
from account.models import User
import pickle

class ChildSerializer(serializers.ModelSerializer):
    adder = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Child
        fields = '__all__'
        
    def validate(self, attrs):               
        model = pickle.load(open('./child/model.pkl','rb'))
        adder = self.context.get('user')
        age = float(attrs.get('age'))
        bmi = float(attrs.get('bmi'))
        muac = float(attrs.get('muac'))
        chestc = float(attrs.get('chestc'))
        headc = float(attrs.get('headc'))
        msclwstng = int(attrs.get('msclwstng'))
        fngr_dete = int(attrs.get('fngr_dete'))
        city = attrs.get('city')
        prediction = model.predict([[age,bmi,muac,chestc,headc,msclwstng,fngr_dete]])
        status=1
        if(prediction[0]==0 or prediction[0]==2):
            status=2
        if(prediction[0]==0):
            prediction='Moderate Malnutrition'
            attrs['referred_to']=User.objects.get(type=2)
        elif(prediction[0]==1):
            prediction='Normal'
        else:
            prediction='Severe Malnutrition'  
            attrs['referred_to']=User.objects.get(type=2)  
        attrs['diagnosis']=prediction
        attrs['adder']=adder
        attrs['status']=status
        return attrs
                    
