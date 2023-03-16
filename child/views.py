
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import *
from account.renderers import *
from rest_framework.permissions import IsAuthenticated
from .serializers import *
 
class AddChildView(APIView):
    renderer_classes = [UserRenderer]
    #permission_classes = [IsAuthenticated]
    def post(self,request, format=None):
        serializer = AddChildSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'msg':'Child Added Successfully'},status=status.HTTP_200_OK)
    
class ViewChild(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self,request):
        pass    
