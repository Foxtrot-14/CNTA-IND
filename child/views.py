
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import *
from account.renderers import *
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from account.models import User

class AddChildView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        posts = Child.objects.all()
        serializer = ChildSerializer(posts, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data=request.data
        adder = User.objects.filter(id=request.user.id).filter()
        data['adder']=adder
        serializer = ChildSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Child added'}, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# class AddChildView(APIView):
#     renderer_classes = [UserRenderer]
#     permission_classes = [IsAuthenticated]
#     # def post(self,request, format=None):
#     #     serializer = AddChildSerializer(data=request.data)
#     #     serializer.is_valid(raise_exception=True)
#     #     serializer.save()
#     #     return Response({'msg':'Child Added Successfully'},status=status.HTTP_200_OK)
#     def get(self, request, *args, **kwargs):
#         user= request.user.id
#         posts = Child.objects.filter(addder_id=user).all()
#         serializer = AddChildSerializer(Child, many = True)
#         return Response(serializer.data, status = status.HTTP_200_OK)

#     def post(self, request, *args, **kwargs):
#         user=request.user.id
#         serializer = AddChildSerializer(data = request.data,user=user)
#         if serializer.is_valid():
#             serializer.adder=user
#             serializer.save()
#             return Response({'msg':'Child Added Successfully'}, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
